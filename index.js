var categories = [];
$(document).ready(function () {


        const request_one = {
            "url": "https://gorest.co.in/public-api/categories",
            "method": "GET"
        };

       
        const request_four = {
            "url": "https://gorest.co.in/public-api/categories",
            "method": "GET"
        };

        $.ajax(request_four).done(function (response) {

            for (var i = 0; i < response.data.length; i++) {

                let current_category = response.data[i].name;
                $('#menu').prepend($('<div class="my_menu" >' + '<button id="'+ i +'"  >' + current_category  +'</button> </div>'));
                // console.log(current_category)
 
                    const request_five = {
                        "url": "https://gorest.co.in/public-api/products?categories[]=" + response.data[i].id,
                        "method": "GET"
                    };
                    // console.log(categories)

                    $.ajax(request_five).done(function (response_1) {
                        for (var i = 0; i < response_1.data.length; i++) {
                            categories.push(response_1.data[i].name);
                            // categories.push(response_1.data[i].id);
                        }
            
                });
                     
                $("#"+i).click(function(){
                    // console.log(current_category);
                    // alert(current_category);
                    
                    document.write(categories)
                }); 
            }

        
});
});

$(function (){
    $("#search").autocomplete({source: categories});
})
$(document).on('keypress', function(e) {
    if(e.which === 13) {
        var input = $('#search').val();  

        const request_two = {
            "url": "https://gorest.co.in/public-api/categories",
            "method": "GET"
        };

        $.ajax(request_two).done(function (response) {

            for (var i = 0; i < response.data.length; i++) {

                let current_category = response.data[i].name;

                if (input === response.data[i].name || input.toUpperCase() === response.data[i].name.toUpperCase()) {  
                    const request_three = {
                        "url": "https://gorest.co.in/public-api/products?categories[]=" + response.data[i].id,
                        "method": "GET"
                    };

                    $.ajax(request_three).done(function (response_1) {

                        console.log(current_category, response_1.data);

                        for (var i = 0; i < response_1.data.length; i++) {
                            categories.push(response_1.data[i].name);
                        }

                    });
                } else {
        
                }
            }

        });


    }
});

