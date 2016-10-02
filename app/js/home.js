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

    // truncate string
    var length = 200;

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
    })

    $('button').on('click', function(e) {
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
    
    // $('span.activator:eq(0)').text(obj.hotels[0].split('_').join(' '))
    // $('span.activator:eq(1)').text(obj.hotels[1].split('_').join(' '))
    // $('span.activator:eq(2)').text(obj.hotels[2].split('_').join(' '))
    // $('span.activator:eq(3)').text(obj.hotels[3].split('_').join(' '))
    // $('span.activator:eq(4)').text(obj.hotels[4].split('_').join(' '))
    // $('span.activator:eq(5)').text(obj.hotels[5].split('_').join(' '))
    // $('span.activator:eq(6)').text(obj.hotels[6].split('_').join(' '))

    $.ajax({
        url: "https://api.wayblazer.com/v1/hotels/" + obj.hotels[0],
        headers: headers,
        data: jQuery.param({
            adults: 2,
            children: 0,
            rooms: 1,
            startDate: "2016-10-06",
            endDate: "2016-10-10",
            hotelProvider: "hotelscombined",
            concepts: [],
            getPricing: false
        })
    }).done(function(data){
        $('.card-image:eq(0) img').attr('src', 'https://' + data['accommodation']['images'][0]['urls']['original'])
        $('span.activator:eq(0)').text(data['accommodation']['hotelId'].split('_').join(' '))
        $('.card-content:eq(0) p').text(data['accommodation']['summary'].substring(0, length) + ' ...')
        console.log(data['accommodation']);
    })

    $.ajax({
        url: "https://api.wayblazer.com/v1/hotels/" + obj.hotels[1],
        headers: headers,
        data: jQuery.param({
            adults: 2,
            children: 0,
            rooms: 1,
            startDate: "2016-10-06",
            endDate: "2016-10-10",
            hotelProvider: "hotelscombined",
            concepts: [],
            getPricing: false
        })
    }).done(function(data){
        $('.card-image:eq(1) img').attr('src', 'https://' + data['accommodation']['images'][0]['urls']['original'])
        $('span.activator:eq(1)').text(data['accommodation']['hotelId'].split('_').join(' '))
        $('.card-content:eq(1) p').text(data['accommodation']['summary'].substring(0, length) + ' ...')
    })      
   
    $.ajax({
        url: "https://api.wayblazer.com/v1/hotels/" + obj.hotels[6],
        headers: headers,
        data: jQuery.param({
            adults: 2,
            children: 0,
            rooms: 1,
            startDate: "2016-10-06",
            endDate: "2016-10-10",
            hotelProvider: "hotelscombined",
            concepts: [],
            getPricing: false
        })
    }).done(function(data){
        $('.card-image:eq(2) img').attr('src', 'https://' + data['accommodation']['images'][2]['urls']['original'])
        $('span.activator:eq(2)').text(data['accommodation']['hotelId'].split('_').join(' '))
        $('.card-content:eq(2) p').text(data['accommodation']['summary'].substring(0, length) + ' ...')
    })

});








