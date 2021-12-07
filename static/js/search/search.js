/**
 * Handles results page grid loading.
 * jenkinsd 2021.11.26
 */
 (function($, document) {
    $(document).ready(function() {
        const dateFormatter = function (_row, _cell, value, _columnDef, _dataContext) {
            return (value.getMonth() + 1) + '/' + value.getDate() + '/' + value.getFullYear();
        }
        
        const columns = [
            {id: 'num', name: '#', field: 'index', width: 40},
            {id: 'story', name: 'Story', width: 520, formatter: storyTitleFormatter, cssClass: 'cell-story'},
            {id: 'pubDate', name: 'Date', field: 'pubDate', width: 60, formatter: dateFormatter, sortable: true}
        ]
    
        const options = {
            rowHeight: 64,
            editable: false,
            enableAddRow: false,
            enableCellNavigation: false
        }

        const loader = new Slick.Data.RemoteModel()
        const grid = new Slick.Grid('#results_grid', loader.data, columns, options)
    })
 })(jQuery, document)