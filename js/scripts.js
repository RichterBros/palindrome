$(document).ready(function(){
$('#submitButton').click(function(event){
  console.log("button works")
  event.preventDefault();  
  var pal = $("input#pal").val();
  console.log(pal)
    function reverseString(str) {
        return str.split("").reverse("").join("");
      }
      var lap = reverseString(pal);
      alert(lap)
      if (lap === pal){
        alert("You got yourself a palindrome!")    
      }
      else alert("WRONG!")
    });
});