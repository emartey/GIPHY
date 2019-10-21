$(document).ready(function () {
    populateButtons(searchArray, 'searchButton', '#buttonsArea')

});

var searchArray = ["dog", "cat", "bird", "cow", "horse"];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $('<button class="btn btn-danger" style="margin:1%; background-color:rgb(221, 94, 116); border:none">');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
};

$(document).on('click', '.searchButton', function () {
    $('#searches').empty();
    //assign data attribute to search
    var type = $(this).attr('data-type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=4FjTj3ftqhkLlx64m54UyQtsPQUbdiXN&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {

        //getting images from API and assigning how they work
        for (var i = 0; i < response.data.length; i++) {

            //display gif images and ratings
            $('#search-input').empty();
            var searchDiv = $('<div class= "card" id= "search-item">');
            var rating = response.data[i].rating;
            var p = $('<p>').text('Rating: ' + rating).css({
                "visibility": "visible",
                "display": "block"
            });

            //variable for gif while moving
            var animated = response.data[i].images.fixed_height.url;

            // variable for gif while still
            var still = response.data[i].images.fixed_height_still.url;

            //assiging attributes to image to make into gif
            var image = $('<img>');
            image.attr('src', still);
            image.attr('data-still', still);
            image.attr('data-animated', animated);
            image.attr('data-state', 'still');
            image.addClass('searchImage');

            //attaching rating to bottom of div
            searchDiv.append(p);
            //attaching image to top of div
            searchDiv.prepend(image);
            $('#searches').append(searchDiv);
        }


    })


})

//function for animating gif when user clicks
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

//function for adding new button to search array
$('.btn').on('click', function (event) {

    event.preventDefault();
    var newSearch = $('input').eq(0).val().toLowerCase();
    searchArray.push(newSearch);
    populateButtons(searchArray, 'searchButton', '#buttonsArea');

});











