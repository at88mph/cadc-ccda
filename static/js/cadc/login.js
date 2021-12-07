$(document).ready(function() {
    //------------- OIDC login-related functions --------------
    function replacePlusSigns(thestring) {
        return thestring.replace(/\+/g, ' ')
    }

    function initVars() {
        if (window.location.hash !== '') {
            // Pull the query fragment with OIDC login values in for processing
            var hashParams = window.location.hash.substr(1).split('&')

            if (hashParams.length > 0) {
                // Add params to language link so when en/fr is selected
                // OIDC query fragment is still supported
                var altLangPageURL = $('.lang-link').attr('href')
                var newHref = altLangPageURL + window.location.hash
                $('.lang-link').attr('href', newHref)

                for (var i = 0; i < hashParams.length; i++) {
                    // The parameter set to be gathered is encoded in the login form
                    // above. If a key=value pair not included in the form is included
                    // in the URL, it will be ignored.
                    var p = hashParams[i].split('=')
                    $('#' + p[0]).val(decodeURIComponent(p[1]))
                }

                // Grab values for displaying as part of the data sharing info message
                var claimVal = $('#claims').val()
                var clientVal = $('#client').val()
                if (claimVal !== '' && clientVal !== '') {
                    // Only show the data message if both parameters are there
                    // If one of them is missing, any attempt at an OIDC login request
                    // should fail and return an appropriate message.
                    claimVal = replacePlusSigns(claimVal)
                    clientVal = replacePlusSigns(clientVal)
                    $('#claims_share').html(claimVal)
                    $('#client_share').html(clientVal)
                    var $dataShareMessage = $('#data_share_msg')
                    $dataShareMessage.removeClass('wb-invisible')
                }
            }
        }
    }

    window.onload = initVars

    //------------- Standard Login functions ---------------

    function authorizationComplete(redirectURL) {
        window.location.replace(redirectURL)
    }

    var $loginForm = $('#login_form')
    var requestURI = new cadc.web.util.currentURI()
    var hashValue = requestURI.getHash()

    if (hashValue.indexOf('PASSWORD_RESET_SUCCESS') >= 0) {
        var $successMessageContainer = $('#success_message_container')
        $successMessageContainer.parent().removeClass('wb-invisible')
    }

    function setErrorMsg(msg) {
        $loginForm.find('#errorMessage').text(msg)
        $loginForm.find('#password').val('')
    }

    $('#cancel_login_button').click(function() {
        parent.history.back()
        return false
    })

    // turn the form submission into an ajax request
    $loginForm.submit(function() {
        var clientIDVal = $('#clientid').val()
        if (clientIDVal !== '') {
            // OIDC login

            var formData = $(this).serializeArray()
            var postData = {}
            for (var i = 0; i < formData.length; i++) {
                postData[formData[i]['name']] = formData[i]['value']
            }

            // _registryClient is used for looking up the URL for the /ac/oidc-login service
            var _registryClient = new Registry()

            Promise.resolve(_registryClient.getCapabilityURL('ivo://cadc.nrc.ca/gms'))
                .then(function(serviceCapabilityURL) {
                    // URL will come back as <host>/ac/capabilities. Want to trim off the last part
                    // then add the oidc-login endpoint which is not advertised in the capabilities
                    // document for gms.
                    var oidcLoginURL = serviceCapabilityURL.substr(0, serviceCapabilityURL.lastIndexOf('\/')) + '/oidc-login'
                    $.ajax({
                            url: oidcLoginURL,
                            method: 'POST',
                            data: postData,
                            datatype: 'json'
                        })
                        .success(function(redirectURI) {
                            // data returned contains the URL to redirect to
                            window.location.href = redirectURI
                        })
                        .fail(function(jqXHR, textStatus, errorMsg) {
                            if (jqXHR.status === 403) {
                                if (jqXHR.responseText === 'login failed\n') {
                                    // Not a strong comparison, but for now a best attempt
                                    // at providing en/fr support
                                    setErrorMsg($('#invalidUserPwd').text())
                                } else {
                                    // Note: these will be english-only messages
                                    setErrorMsg(jqXHR.responseText)
                                }
                            }
                        })
                })
                .catch(function(message) {
                    setErrorMsg(message)
                })

        } else {
            // Standard CADC access/login
            // user only relevant fields from the form
            var postData = $loginForm.serialize()

            $.ajax({
                url: '/access/login',
                method: 'POST',
                data: postData
            }).done(function(message) {
                var scope = $loginForm.find('input[name="scope"]')
                var isVOSpaceScope =
                    (scope && (scope.length > 0)) ?
                    (scope.val().indexOf('vos://') >= 0) :
                    false
                var targetURL = requestURI.getTargetURL()

                // For VOSpace scopes, proceed onward.
                if (isVOSpaceScope === true) {
                    authorizationComplete(targetURL)
                } else {
                    $.ajax({
                            url: message,
                            method: 'POST',
                            data: {
                                'targetURL': targetURL
                            }
                        }).fail(function(jqXHR, textStatus, errorMsg) {
                            setErrorMsg(textStatus + ': ' + errorMsg)
                        })
                        .done(function(redirectURL) {
                            authorizationComplete(redirectURL)
                        }); // end $.ajax()
                }
            }).fail(function(_jqXHR, _textStatus, _errorMsg) {
                setErrorMsg($('#invalidUserPwd').text())
            }); // end $.ajax() for /access/login POST
        }
        return false
    })
})