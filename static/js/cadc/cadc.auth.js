; (function ($) {
  'use strict'
  // Register namespace
  $.extend(true, window, {
    cadc: {
      auth: {
        user_service: {
          resourceID: 'ivo://cadc.nrc.ca/gms',
          update: {
            standardID: 'ivo://ivoa.net/std/UMS#users-0.1',
            authType: 'cookie'
          },
          create: {
            standardID: 'ivo://ivoa.net/std/UMS#reqs-0.1',
            authType: 'anon'
          },
          interfaceURI: 'http://www.ivoa.net/xml/VODataService/v1.1#ParamHTTP'
        },
        UserDetailsForm: UserDetailsForm,
      }
    }
  })

  /**
   * Construct a new User Details Form.  This depends on cadc.user.js for the
   * UserManager object.
   *
   * @param _$form          The jQuery form object.
   * @param _updateFlag     Flag to indicate this is an update form.
   * @param _autoInitFlag   Flag to initialize on creation.
   * @constructor
   */
  function UserDetailsForm (_$form, _updateFlag, _autoInitFlag) {
    this.$form = _$form
    this.updateFlag = _updateFlag
    this.autoInitFlag = _autoInitFlag

    if (this.isAutoInit()) {
      this.init()
    }
  }

  UserDetailsForm.prototype.isUpdate = function () {
    return this.updateFlag
  }

  UserDetailsForm.prototype.isAutoInit = function () {
    return this.autoInitFlag === true

  }

  /**
   * Tune the form to the user.
   *
   * @param _$user  The User information.
   */
  UserDetailsForm.prototype.populateForm = function ($user) {
    $('#firstName').val($user.getFirstName())
    $('#lastName').val($user.getLastName())
    $('#email').val($user.getEmail())
    $('#institute').val($user.getInstitute())
  }

  UserDetailsForm.prototype.formBusy = function () {
    this.$form.addClass('form_busy')
  }

  UserDetailsForm.prototype.formReady = function () {
    this.$form.removeClass('form_busy')
  }

  UserDetailsForm.prototype._formIsValid = function ($form) {
    let returnVal = true
    if ($form.find('#blank').val() !== '') {
      $('.bot-error-message').removeClass('hide')
      returnVal = false
    }

    return returnVal
  }

  UserDetailsForm.prototype._initUpdate = function (_event, args) {
    const user = args.userManager.getUser()
    const userManager = args.userManager

    if (!user) {
      const $err = $('#error_message')
      if (args.errorStatus == 401) {
        $err.text('Login required.')
      } else {
        $err.text(args.errorMessage)
      }

      $err.removeClass('hide')
    } else {
      this.populateForm(user)
    }

    this.formReady()

    const _$form = this.$form
    const validFunc = this._formIsValid
    // turn the form submission into an ajax request
    _$form.off().submit(function (event) {
      event.preventDefault()

      if (validFunc(_$form)) {
        userManager.updateUser(
          _$form.find("[data-personal-detail='true']")
        )
      }
    })
  }

  /**
   * Serialize the form data in appropriate JSON format.  This is used for
   * a CREATE operation as it sends the username and password as a user
   * request.
   * @returns {String}
   */
  UserDetailsForm.prototype.serializeFormDataAsJSON = function ($form) {
    const userManager = new cadc.web.UserManager()
    const userJSON = userManager.serializeFormDataAsJSON(
      $form.find('#username').val(),
      $form.find("[data-personal-detail='true']")
    )

    const formDataJSON = {}

    formDataJSON.userRequest = {}
    formDataJSON.userRequest.user = JSON.parse(userJSON).user

    formDataJSON.userRequest.password = {
      $: $form.find('#password').val()
    }

    return JSON.stringify(formDataJSON)
  }

  UserDetailsForm.prototype._initCreate = function () {
    $('input#cancel').remove()

    const $currForm = this.$form
    const validFunc = this._formIsValid
    const serializeFunc = this.serializeFormDataAsJSON
    $currForm.off().submit(function () {
      if (validFunc($currForm)) {
        const formDataJSON = serializeFunc($currForm)
        const emailValue = $(this).find('#email').val()
        $.ajax({
          url: $currForm.attr('action'),
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'X-CADC-Proxy_STANDARD_ID': cadc.auth.user_service.create.standardID,
            'X-CADC-Proxy_INTERFACE_TYPE_ID': cadc.auth.user_service.interfaceURI,
            'X-CADC-Proxy_RESOURCE_ID': cadc.auth.user_service.resourceID,
            'X-CADC-Proxy_AUTH_TYPE': cadc.auth.user_service.create.authType,
          },
          data: formDataJSON,
          jsonp: false
        })
          .done(function () {
            // send the user to the URL in the
            // response message
            $currForm.addClass('hide')
            $('.success-message').removeClass('hide')
          })
          .fail(function (xhr) {
            // clear the password field
            // and show an error message
            let message = ''
            if (xhr.status === 409) {
              if (xhr.responseText.indexOf(emailValue) >= 0) {
                $('.email-exists-error-message').removeClass('hide')
              } else {
                $('.user-exists-error-message').removeClass('hide')
              }
            } else {
              $('.unknown-error-message').removeClass('hide')
            }
          })
      } else {
        return false
      }

      return false
    })
  }

  UserDetailsForm.prototype.init = function () {
    $('head').append(
      '<link rel="stylesheet" type="text/css" href="/auth/resources/css/auth_web.css" />'
    )
    const $currForm = this.$form

    if (this.isUpdate()) {
      this.formBusy()
      const $userManager = new cadc.web.UserManager()

      // When the user is done loading, show it.
      const initUpdateFunc = function (e, args) {
        this._initUpdate(e, args)
      }.bind(this)
      $userManager.subscribe(cadc.web.events.onUserLoad, initUpdateFunc)

      // When a user is successfully updated, redirect.
      $userManager.subscribe(cadc.web.events.onUserUpdate, function (
        _eventData,
        args
      ) {
        if (args.errorMessage) {
          const $err = $('#error_message')
          $err.text(args.errorMessage)
          $err.removeClass('hide')
        } else {
          // send the user to the URL in the response
          // message.
          $currForm.addClass('hide')
          $('.success-message').removeClass('hide')
        }
      })

      // Start the loading process.
      $userManager.loadCurrent()
    } else {
      this._initCreate()
    }
  }
})(jQuery)
