$(document).ready(function() {
    const pageLang = $('html').prop('lang')
    const pathName = '/AdvancedSearch/'

    // AdvancedSearchApp is in the caom2-search-server library,
    // name is historical, and is best left alone because of dependencies
    // It represents everything 'within the box', minus the nav bars and such.
    var searchApp = new ca.nrc.cadc.search.AdvancedSearchApp({
      autocompleteEndpoint: `${pathName}unitconversion/`,
      targetResolverEndpoint: `${pathName}unitconversion/`,
      tapServiceId: 'ivo://cadc.nrc.ca/argus',
      packageEndpoint: `${pathName}package`,
      validatorEndpoint: `${pathName}validate`,
      previewsEndpoint: `${pathName}preview`,
      searchEndpoint: `${pathName}find`,
      applicationEndpoint: '/AdvancedSearch',
      serviceLocatorEndpoint: `${pathName}service-locator`,
      pageLanguage: pageLang,
      autoInitFlag: false,
      showObscoreTab: false,
      baseURL: `https://${window.location.hostname}/`
    })

    searchApp.subscribe(ca.nrc.cadc.search.events.onAdvancedSearchInit,
      function (_event, args) {
        args.application.start();
      })

    searchApp.subscribe(ca.nrc.cadc.search.events.onAdvancedSearchInitFail,
      function(event, args) {
        // quote usage inverted here because french version of string has apostrophe.
        if (pageLang === 'fr') {
          alert('Erreur lors de l\'initialisation de la recherche. Actualisez pour réessayer.  Si le problème persiste, contactez le CCDA.')
        } else {
          alert('Error initializing search. Refresh to try again. If problem persists, please contact CADC support.')
        }
      })

    searchApp.init()
})