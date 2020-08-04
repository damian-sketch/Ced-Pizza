$(document).ready(function(){
  var size = parseInt($("input[name='size']:checked").val());
  var toppings = parseInt($("input[name='toppings']:checked").val());
  var crusts = parseInt($("input[name='crusts']:checked").val());

  var price = size + toppings + crusts;

  $("#orderBtn").click(function(){
    alert("Your order costs " + price);
  });

});