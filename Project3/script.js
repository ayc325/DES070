function randomLinks(){

}
function zoom(){
const zoomElement = document.querySelector("video");
let zoom = 1;
const ZOOM_SPEED = 0.05;
var limitUp = `scale(${(zoom += ZOOM_SPEED)})`;
var limitDown = `scale(${(zoom -= ZOOM_SPEED)})`

document.addEventListener("wheel", function (e) {
  
  if (e.deltaY > 0 && zoom <= 2) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } 
  else if (zoom >= 0.2){
    //while(zoomElement.style.transform >= zoomElement.width){
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    //}
  }

});
}
zoom();

function randomlinks(){
  var myrandom=Math.round(Math.random()*5)
  var links=new Array()
  links[0]="https://elenikary.github.io/project3_web_ring/"
  links[1]="https://avm325.github.io/WebRingProject/"
  links[2]="https://williammorano.github.io/DES-070/html/webring.html"
  links[3]="https://clarejachim.github.io/webring/"
  links[4]="http://www.cse.lehigh.edu/~haz323/WebDesign/Project%203/index.html"
  links[5]="https://msh223.github.io/WebRing/"
  links[6]="https://mlk224.github.io/WebRing/"
  links[7]="https://katiacarnevale.github.io/WebRing/"
  links[8]="https://ctcooper11.github.io/Web-Ring/Web-Ring.html"
window.location=links[myrandom]

}
