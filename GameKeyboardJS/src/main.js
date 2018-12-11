let c = new Function("a", 'b',
"let c = a*b;"+
"let d = c*c;"+
"return d");

let inputKeys = [119];

let kb = new GKeyboard(inputKeys);

//game loop:
function draw(){
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw)

// function a(){
//     log("a")
//     eval(addEve);
// }

// let jqtest = "addEventListener('click', a)";
// let addEve = "addEventListener('keypress', a)"

// eval(jqtest)
