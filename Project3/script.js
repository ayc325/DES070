function randomLinks(){

}
function zoom(){
const zoomElement = document.querySelector("video");
let zoom = 1;
const ZOOM_SPEED = 0.05;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } 
  else {
    while(zoomElement.style.transform >= zoomElement.width){
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    }
  }

});
}
zoom();