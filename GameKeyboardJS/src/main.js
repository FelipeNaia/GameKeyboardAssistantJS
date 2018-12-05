let c = new Function("a", 'b',
"let c = a*b;"+
"let d = c*c;"+
"return d");

function a(){
    log("a")
}

let jqtest = "addEventListener('click', a)";

eval(jqtest)
