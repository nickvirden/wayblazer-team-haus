$(function() {

    function hotels(data) {
        return JSON.parse(data);
    }
    
    // Materialize nav bar on mobile
    $(".button-collapse").sideNav();
    
    // Materialize select dropdown
    $('select').material_select();
    
    // Materialize date picker
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: "mmmm dd, yyyy"
    });
    
    
    // API Stuff
    var headers = {
        'cache-control': 'no-cache',
        'x-api-key': '5iR9qzkC5JEvaHT5ILvR6xeymFBQpCV2'
    };

    $('.js-typeahead-country_v1').on('keyup', function() {
        var input = $(this).val();
        $.ajax({
            url: "https://api.wayblazer.com/v1/typeahead?search=" + input,
            headers: headers
        }).done(function(data) {
            $.typeahead({
                input: ".js-typeahead-country_v1",
                order: "asc",
                source: {
                    data: data
                }
            });
        });
    });

    $('.btn').on('click', function(e) {
        localStorage.clear();
        e.preventDefault();
        var input = $('.js-typeahead-country_v1').val();
        input = input.split(',')[0].toLowerCase();
        $.ajax({
            url: "https://api.wayblazer.com/v1/destinations/detail?destination=place:" + input,
            headers: headers
        }).done(function(data) {
            localStorage.setItem('data', JSON.stringify(data));
            window.location.href = 'results.html';
        });
    });

    var obj = hotels(localStorage.getItem('data'));

});