$(function() {

  var headers = { 
     'cache-control': 'no-cache',
     'x-api-key': '5iR9qzkC5JEvaHT5ILvR6xeymFBQpCV2' 
  };

  $.ajax({
    url: "https://api.wayblazer.com/v1/typeahead?search=aus",
    headers: headers
  }).done(function(data){
    $.typeahead({
      input: ".js-typeahead-country_v1",
      order: "desc",
      source: {
        data: data
      }
    });
  })



 
    
});
