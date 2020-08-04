$(document).ready(function(){
  var size = $("input[name=size]:checked").val();
  var toppings = $("input[name=toppings]:checked").val();
  var crusts = $("input[name=crusts]:checked").val();

  var price = parseInt(size + toppings + crusts);

  $("#orderBtn").click(function(){
    alert("Your order costs " + price);
  });

});