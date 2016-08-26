(function() {
           Handlebars.registerHelper("animalsSpecies", function(animals, category) {
               var out = "<ul>";
               for(var i = 0; i<animals.length;i++){
                   out = out + "<li><a href='#"+ animals[i].name +"' data-category='"+ category +"' data-animal='"+i+"'>" + animals[i].name + "</a></li>";
               }
               return out + "</ul>";
            });
    
    
    function showTemplate(template, data){
    //console.log(data);
    var html    = template(data);    
    $('#content').html(html);
    }

    var source = $("#home-template").html();
	homeTemplate = Handlebars.compile(source);
    
    var source2 = $("#animal-template").html();
    animalTemplate = Handlebars.compile(source2);
    //console.log(animalTemplate);
    
    showTemplate(homeTemplate, animals_data);
    
    function registerEventHandlers(){
        
        $(".mainlink").on("click", function(){
        var index = $(this).data("animals");
/*        console.log(animals_data.category[index]);*/
        showTemplate(animalTemplate, animals_data.category[index].animals);
        makeAboutAnimalsTabActive();
        });
    
        $('[data-animal]').on("click", function(){
            var animalIndex = $(this).data("animal");
            var categoryIndex = $(this).data("category");
            var oneElementArray =[animals_data.category[categoryIndex].animals[animalIndex]];
            console.log(oneElementArray);
            showTemplate(animalTemplate,oneElementArray );
            makeAboutAnimalsTabActive();
        })
    }
    
    registerEventHandlers();
    
    function makeAboutAnimalsTabActive(){
        $("li.active").removeClass("active").siblings().addClass("active");
    }
    
    $("#home-tab").on("click", function() {
          showTemplate(homeTemplate, animals_data);
          $("li.active").removeClass("active").siblings().addClass("active");
          registerEventHandlers();
    });
    
})();
    

    



	
    
