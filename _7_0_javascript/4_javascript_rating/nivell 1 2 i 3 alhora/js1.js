const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item'); 

/* 
container.onclick = e =>{
    const elClass = e.target.classList;
    if(!elClass.contains('active')){
    items.forEach(
        item => item.classList.remove('active'));
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
} 
}
*/
 
document.addEventListener("click", function(event){

if (event.target.closest(".rating")){

container.onclick = e =>{
    const elClass = e.target.classList;
    if(!elClass.contains('active')){
    items.forEach(
        item => item.classList.remove('active'));
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
} 
}

} else {

items.forEach(
        item => item.classList.remove('active'));

items.forEach(
        item => item.classList.add('outside'));

}

})
