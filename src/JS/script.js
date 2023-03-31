$(document).ready(function(){
   
})
function addCart(value){
   $.ajax({
    url:'addCart.php',
    type:'post',
    data:'key='+value,
    datatype:'text'
   }).done(function(value){
console.log(value);
   })
   }