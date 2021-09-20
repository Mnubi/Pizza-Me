// function to alert upon choice home delivery
function delivery() {
    alert("Home delivery cost is Ksh. 320");
    prompt("Enter your location")
    return parseInt(location);

    

}


// slide show to Change image every 2 seconds

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}


//Calculation for user interface and required output

$(document).ready(function() {
  $("#form").submit(function (event) {

      //functions to get user input from the forms
      
      function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
      }
      function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
      }
      function topping() {
          var pizzaTopping = document.getElementById("toppings").value;
          return parseInt(pizzaTopping);
      }
      function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
      }
      //object for user order
      function submit(flavor, size, crusting, topping, quantity) {
          this.newFlavor = flavor;
          this.newSize = size;
          this.newCrust = crusting;
          this.newTopping = toppings;
          this.newQuantity = quantity;
      }
      //saving user order, getting totals for order
      let userInput = new order(size(), crust(), topping(), number());
      var totalCost = (userInput.newSize + userInput.newCrust + userInput.newTopping) * userInput.newQuantity;

      //alert and prompt for user
      alert("Your total charges for Pizza is " +'Ksh. '+ totalCost +", It will be delivered");
      alert("Your pizza will be delivered " + location +".");

      $("#form").reset();


      event.preventDefault();
          
                                
  });
});