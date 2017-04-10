$.get('../skills.json', function(data){
      const template = Handlebars.compile($('#skills-template').html())
      $('#skills-container').html(template(data))
});
