function Pizza(cost) {
  this.cost = 10;
}

Pizza.prototype.quantity = function(quantity) {
  this.cost *= quantity
}

Pizza.prototype.size = function(size) {
  if(size === "Large") {
    this.cost += 5;
  } else if(size === "Medium") {
    this.cost += 3;
  } else {
    this.cost;
  }
}

Pizza.prototype.toppings = function(toppings) {
  if(toppings === "Supreme") {
    this.cost += 5;
  } else if(toppings === "Meat"){
    this.cost += 4;
  } else if(toppings === "Veggie"){
    this.cost += 2;
  } else{
    this.cost;
  }
}

$(document).ready(function(){
  var newPizza = new Pizza();
  newPizza.cost = 0;


  $(function(){
    var $select = $(".1-100");
    for (i=1;i<=100;i++){
      $select.append($('<option></option>').val(i).html(i))
    }
  });



  $("form#order").submit(function(event){
    newPizza.cost = 10;
    var inputtedQuantity = parseInt($("select.1-100").val());
    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("select#toppings").val();

    // newPizza.quantity(inputtedQuantity)
    // newPizza.size(inputtedSize)
    // newPizza.toppings(inputtedToppings)

    (newPizza.cost + newPizza.size(inputtedSize) + newPizza.toppings(inputtedToppings)) * newPizza.quantity(inputtedQuantity)

    $(".order-total").text("$" + newPizza.cost);

    event.preventDefault();



  });
});
