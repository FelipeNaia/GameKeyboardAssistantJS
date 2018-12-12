//game loop:
function draw(){
    requestAnimationFrame(draw);
    if(kb.pressedKeys.length > 0){
        //log(kb.pressedKeys);
    }
}

requestAnimationFrame(draw)
