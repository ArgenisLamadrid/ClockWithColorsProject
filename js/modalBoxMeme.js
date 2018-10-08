 //Incomplete
 var screenHeight = $(window).height();
 var screenWidth = $(window).height();
 var layerHeight =  $("#colorLayer").height();
 var layerWidth =  $("#colorLayer").width();
 var trapModalHeight = $("#trapModal").height();
 var trapModalWidth = $("#trapModal").width();

var trapButton = document.getElementById("trapButton");
var closeModalButton = document.getElementById("closeModalButton");
var trapModal = document.getElementsByClassName("modal")[0];


trapButton.addEventListener("click",function() {openModal();});
closeModalButton.addEventListener("click",function() {repositionModal();});

function repositionModal(){
    screenHeight = $(window).height();
    screenWidth = $(window).width();

    console.log(layerHeight + " layerHeight");
    console.log(layerWidth + " layerWidth");
    console.log(trapModalHeight + " modalHeight");
    console.log(trapModalWidth + " modalWidth");

    trapModal.style.top = ((Math.random() * layerHeight) ) + "px";
    trapModal.style.left = ((Math.random() * layerWidth) ) + "px";

}

function openModal(){
    trapModal.style.display = "block";
}