$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    activity: [
      {description: 'Say hi to your neighbor', "level": "easy"},
      {description: 'Wave hello at someone', "level": "easy"},
      {description: 'Compliment a stranger', "level": "medium"}
    ]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.easy-sublist').append(theCompiledHtml);

  Handlebars.registerHelper("each_easy", function(list, opts) {
      var i, result = '';
      for(i = 0; i < list.length; ++i)
          if(list[i].level == "easy")
              result = result + opts.fn(list[i]);
      return result;
  });

});
