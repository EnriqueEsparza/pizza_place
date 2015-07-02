describe("Pizza", function()  {

  describe("cost", function () {

    it("will return a base price of 10 for our most basic pizza", function () {
      var testPizza = new Pizza()
      expect(testPizza.cost).to.equal(10)
    });
  });

  describe("quantity", function() {
    it("will return a price based on quantity", function() {
      var testPizza = new Pizza()
      testPizza.quantity(2)
      expect(testPizza.cost).to.equal(20)

    });
  });

  describe("size", function() {
    it("will return a price based on size", function() {
      var testPizza = new Pizza()
      testPizza.size("Large")
      expect(testPizza.cost).to.equal(15)
    });
  });

  describe("toppings", function(){
    it("will return a price based on toppings", function(){
      var testPizza = new Pizza()
      testPizza.toppings("Meat")
      expect(testPizza.cost).to.equal(14)
    });
  });



});
