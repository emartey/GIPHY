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
    queryURL
})


