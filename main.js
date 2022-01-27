var canvas = document.getElementById("myCanvas") ;
var canvas2d = canvas.getContext("2d")
var color = "black"
var current_position_x, current_position_y, last_position_x, last_position_y

canvas.addEventListener("mousedown",mymousedown) ;
canvas.addEventListener("mousemove",mymousemove) ;
canvas.addEventListener("mouseup",mymouseup) ;
canvas.addEventListener("mouseleave",mymouseleave) ;

var mouse_event_type = "empty"

function mymousedown(e) {
    mouse_event_type = "mousedown" ;
    color = document.getElementById("textbox").value ;

}

function mymousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft
    current_position_y = e.clientY - canvas.offsetTop
    console.log("current_position_x :"+ current_position_x + "current_position_y" + current_position_y)
   console.log("mouse_down" + mouse_event_type)
    if(mouse_event_type == "mousedown") {
        canvas2d.beginPath() ;
        canvas2d.strokeStyle = color ;
        canvas2d.lineWidth = 4 ;
        console.log("last_position_x :"+ last_position_x + "last_position_y" + last_position_y)
        canvas2d.moveTo(last_position_x, last_position_y) ;
        console.log("inside if" + "current_position_x :"+ current_position_x + "current_position_y" + current_position_y)
        canvas2d.lineTo(current_position_x, current_position_y) ;
        canvas2d.stroke() ;
    }
    last_position_x = current_position_x ;
    last_position_y = current_position_y ;
}   

function mymouseup(e) {
    mouse_event_type = "mouseup"
}

function mymouseleave(e) {
    mouse_event_type = "mouseleave"
}

function erase() {
    canvas2d.clearRect(0,0, canvas2d.canvas.width,canvas2d.canvas.height)
}

canvas.addEventListener("touchstart", mytouchstart) ;
canvas.addEventListener("touchmove", mytouchmove)

var width = screen.width
var new_width = screen.width - 70
var new_height = screen.height -300

if(width < 992) {
    document.getElementById("myCanvas").width = new_width 
    document.getElementById("myCanvas").height = new_height 
    document.body.style.overflow = "hidden"
}

function mytouchstart(e) {
    color = getElementById("textbox").value
    last_position_x = e.touches[0].clientX
    last_position_y = e.touches[0].clientY
}

function mytouchmove(e) {
    current_position_x = e.touch[0].clientX - canvas.offsetLeft
    current_position_y = e.touch[0].clientY - canvas.offsetTop
    console.log("current_position_x :"+ current_position_x + "current_position_y" + current_position_y)
   console.log("mouse_down" + mouse_event_type)

   canvas2d.beginPath() ;
        canvas2d.strokeStyle = color ;
        canvas2d.lineWidth = 4 ;
        console.log("last_position_x :"+ last_position_x + "last_position_y" + last_position_y)
        canvas2d.moveTo(last_position_x, last_position_y) ;
        console.log("inside if" + "current_position_x :"+ current_position_x + "current_position_y" + current_position_y)
        canvas2d.lineTo(current_position_x, current_position_y) ;
        canvas2d.stroke() ;

        last_position_x = current_position_x ;
    last_position_y = current_position_y ;
}