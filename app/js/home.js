$(function(){
  var term = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.wayblazer.com/v1/typeahead?search",
    "method": "GET",
    "headers": {
      "x-api-key": "5iR9qzkC5JEvaHT5ILvR6xeymFBQpCV2",
      "cache-control": "no-cache"
    }
  }

  $.typeahead({
    input: ".js-typeahead-country_v1",
    order: "asc",
    source: {
      groupname: {
        ajax: {
          url: term
        }
      }
    },
    callback: {
        onInit: function (node) {
            console.log('Typeahead Initiated on ' + node.selector);
        }
    }
});
});
