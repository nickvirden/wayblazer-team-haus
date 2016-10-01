$(function() {
    
  function hotels(data){
    return JSON.parse(data);
  }
    
  $(".button-collapse").sideNav();

  var headers = { 
     'cache-control': 'no-cache',
     'x-api-key': '5iR9qzkC5JEvaHT5ILvR6xeymFBQpCV2' 
  };

  $('.js-typeahead-country_v1').on('keyup', function(){
    var input = $(this).val();
    $.ajax({
      url: "https://api.wayblazer.com/v1/typeahead?search=" + input,
      headers: headers
    }).done(function(data){
      $.typeahead({
        input: ".js-typeahead-country_v1",
        order: "asc",
        source: {
          data: data
        }
      });
    })
  })

  $('.btn').on('click', function(e){
    localStorage.clear();
    e.preventDefault();
    var input = $('.js-typeahead-country_v1').val();
    input = input.split(',')[0].toLowerCase()
    $.ajax({
        url: "https://api.wayblazer.com/v1/destinations/detail?destination=place:" + input,
        headers: headers
    }).done(function(data){
        localStorage.setItem('data', JSON.stringify(data));
        window.location.href = 'results.html';
    })
  })

  var obj = hotels(localStorage.getItem('data'));

    
});
