function jump(){
    log("jump");
}

function walkLeft(){
    log("walkLeft");
}

function walkRight(){
    log("walkRight");
}

function down(){
    log("down");
}

////               w    a   s   d  spc
//let inputKeys = [87, 65, 83, 68, 32];
let inputKeys = {87: [jump, walkLeft], 65: [walkLeft, jump], 68: [walkRight, jump], 83: [down]}

let kb = new GKeyboard(inputKeys);