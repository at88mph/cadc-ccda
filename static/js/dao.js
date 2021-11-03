(function($, document) {
    $(document).ready(function() {
        const statusEndpoint = '/files/vault/DAO/Monitoring/status_tables.html'
        const $div = $('div#dao_stats')

        $.ajax(statusEndpoint).done(function(data) {
            const $data = $(data)
            const $table = $('<table class="table table-striped"></table>')

            $data.find('tr').each(function() {
                $table.append(this)
            })

            $div.append($table)
        })
    })
})(jQuery, document)