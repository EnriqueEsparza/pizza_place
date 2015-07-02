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
