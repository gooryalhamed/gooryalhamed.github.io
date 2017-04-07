$.get('../skills.json', function(data){
      const template = Handlebars.compile($('#skills-template').html())
      console.dir(template)
      $('#skills-container').html(template(data))
});