$(document).ready(function () {
    

//* ENSENYAR UN ACUDIT D'ENTRADA AMB FETCH */

const api_url = 'http://api.icndb.com/jokes/random';
async function joke1 (){
   const response = await fetch(api_url);
   const data = await response.json();
//    console.log(data.value);
   document.getElementById("jokes").innerHTML = data.value.joke;
}

joke1();


//* ENSENYAR UNA IMATGE D'ENTRADA AMB AJAX */

$.ajax({
    url:'images.json',
    type: 'get',
    dataType: 'json',
    success:function(data){
        // console.log(data);
        var random_index = Math.floor(Math.random()*data.length);
        var item = data[random_index];

            $('#img').html(`
            <img src=${item.image}></img>
            `);
            
          },
});



//* ENSENYAR UN ACUDIT ON CLICK */

$('#ajax').click(function (e) {
    e.preventDefault();
    $.ajax({
        url:'jokes.json',
        type: 'get',
        dataType: 'json',
        success:function(data){
            // console.log(data);
            var random_index = Math.floor(Math.random()*data.length);
            var item = data[random_index];

                $('#jokes').html(`
                ${item.joke}
                `);
                
              },
    });
});

//* ENSENYAR UNA IMATGE ON CLICK */

$('#ajax').click(function (e) {
    e.preventDefault();
    $.ajax({
        url:'images.json',
        type: 'get',
        dataType: 'json',
        success:function(data){
            // console.log(data);
            var random_index = Math.floor(Math.random()*data.length);
            var item = data[random_index];

                $('#img').html(`
                <img src=${item.image}></img>
                `);
                
              },
    });
});




});