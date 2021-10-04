$(function(){

    $("#register-form").validate({
        rules:{
            email:{
                required: true,
                email: true
            },
        password: "required",
        password2: {
            required: true,
            equalTo: "#password"
        }
             },
        messages:{
            email:{
                required:"Introdueix un correu electrònic",
                email: "Introdueix un correu electrònic correcte"
            },
            password:{
                required:"Introdueix una contrassenya",
            },
            password2:{
                required:"Torna a introduir la contrassenya",
            },
        }
    });


})