//var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line=2
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //color = "black";
    //width_of_line = 1;
    var width = screen.width;
    newwidth=screen.width-70
    newheight=screen.height-300
    if (width<992) {
    document.getElementById('myCanvas').width=newwidth
    document.getElementById('myCanvas').height=newheight
    document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop
        //Addictonal Activity start
     //   color = document.getElementById("color").value;
       // width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        //mouseEvent = "mouseDown";
    }

    canvas.addEventListener("touchmove", my_touch_move);
    function my_touch_move(e)
    {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       // if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
       // }

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    //canvas.addEventListener("mouseup", my_mouseup);
    //function my_mouseup(e)
    //{
        //mouseEvent = "mouseUP";
    //}

    //canvas.addEventListener("mouseleave", my_mouseleave);
    //function my_mouseleave(e)
    //{
        //mouseEvent = "mouseleave";
    //}


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}