$(document).ready(function () {
    populateButtons(searchArray, 'searchButton', '#buttonsArea')

})


var searchArray = ["Dog", "Cat", "Bird"];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on('click', '.searchButton', function () {
    $('#searches').empty();
    var type = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=4FjTj3ftqhkLlx64m54UyQtsPQUbdiXN";
    ;
    $.ajax({
        method: 'GET',
        URL: queryURL
    }
        .done(function (response) {
            var results = response.data;

            for (var i = 0; i < response.length; i++) {
                var searchDiv = $('<div class= "search-item">');
            }

        })
    )

})


