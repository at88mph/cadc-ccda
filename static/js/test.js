(function ($) {
    $(document).ready(function() {
        $(document).on('click', function() {
            const $style = $("<style type='text/css' rel='stylesheet' />").appendTo($('head'))
            console.log(`${$style} - ${$style[0]}`)
        })
    })
})(jQuery)