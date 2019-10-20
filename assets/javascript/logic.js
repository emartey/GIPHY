$(document).ready(function () {
    populateButtons(searchArray, 'searchButton', '#buttonsArea')

});





var searchArray = ["dog", "cat", "bird", "cow", "horse"];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
};

$(document).on('click', '.searchButton', function () {
    $('#searches').empty();
    var type = $(this).attr('data-type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=4FjTj3ftqhkLlx64m54UyQtsPQUbdiXN&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {

        for (var i = 0; i < response.data.length; i++) {
            $('#search-input').empty();
            var searchDiv = $('<div class= "search-item">');
            var rating = response.data[i].rating;
            var p = $('<p>').text('Rating: ' + rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $('#searches').append(searchDiv);
        }


    })


})

$(document).on('click', '.searchImage', function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$('.btn').on('click', function (event) {
    // var addSearch = $('<button>')
    event.preventDefault();
    var newSearch = $('input').eq(0).val().toLowerCase();

    searchArray.push(newSearch);


    populateButtons(searchArray, 'searchButton', '#buttonsArea');

});




