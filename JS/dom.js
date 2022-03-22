$(document).ready(function() {
    $(".tablehead").click(function() {
        $(this).next("div").slideToggle("slow");
    });
});

function order() {
    //size
    let size = document.querySelector('input[name="size"]:checked').value;
    console.log("size=" + size);
    let sizePrice = 0;
    if (size === "small") {
        sizePrice = 69;
    };
    if (size === "medium") {
        sizePrice = 90;
    };
    if (size === "large") {
        sizePrice = 114;
    };
    console.log("sizePrice=" + sizePrice);
    // toppings
    let top = document.getElementById("top").value;
    console.log("top=" + top);
    let topping = 0;
    if (top === "olice") {
        topping = 60;
    };
    if (top === "cheese") {
        topping = 100;
    };
    if (top === "pepperoni") {
        topping = 140;
    };
    console.log("top" + topping);

    // crust
    let crust = document.getElementById("cruste").value;
    console.log("crust=" + crust);
    let crustPrize = 0;
    if (crust === "stuffed") {
        crustPrize = 60;
    };
    if (crust === "glutten") {
        crustPrize = 100;
    };
    if (crust === "crispy") {
        crustPrize = 140;
    };
    console.log("crust" + crustPrize);




    let totalPrice = (crustPrize + sizePrice + topping);
    console.log("totalPrice=" + totalPrice);

    // ordertable
    // $("#size").html(size + " Pizza");
    document.getElementById('size').innerHTML = size;
    document.getElementById('crusty').innerHTML = crust;
    document.getElementById('toppy').innerHTML = top;
    document.getElementById('tt').innerHTML = totalPrice;

    // $("#crust").html(crust + " Crust");

    // $("#crust").html(crust + " Crust");



    // $("#totalprice").html(" $" + totalPrice + ".00");



};