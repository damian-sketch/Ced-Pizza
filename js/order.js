function totalPrice(){
  var size = parseInt(document.getElementById("size").value);
  var crusts = parseInt(document.getElementById("crusts").value);
  var toppings = parseInt(document.getElementById("toppings").value);
  var price = 0;

  price = size + crusts + toppings;

  alert("Your order costs " + price);
};