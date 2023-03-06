function add(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var add=num1+num2;
    document.getElementById("demo").innerHTML=add;

}

function sub(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var sub=num1-num2;
    document.getElementById("demo").innerHTML=sub;

}

function div(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var div=num1/num2;
    document.getElementById("demo").innerHTML=div;

}

function mul(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var mul=num1*num2;
    document.getElementById("demo").innerHTML=mul;

}

function mod(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    var mod=num1%num2;
    document.getElementById("demo").innerHTML=mod;

}

function and(){
    var num1= Number(document.getElementById("num3").value);
    var num2= Number(document.getElementById("num4").value);
    var and=num1 & num2;
    document.getElementById("demo1").innerHTML=and;

}

function or(){
    var num1= Number(document.getElementById("num3").value);
    var num2= Number(document.getElementById("num4").value);
    var or=num1|num2;
    document.getElementById("demo1").innerHTML=or;

}

function xor(){
    var num1= Number(document.getElementById("num3").value);
    var num2= Number(document.getElementById("num4").value);
    var xor=num1^num2;
    document.getElementById("demo1").innerHTML=xor;

}

function left(){
    var num1= Number(document.getElementById("num3").value);
    var num2= Number(document.getElementById("num4").value);
    var left=num1<<num2;
    document.getElementById("demo1").innerHTML=left;

}

function right(){
    var num1= Number(document.getElementById("num3").value);
    var num2= Number(document.getElementById("num4").value);
    var right=num1>>num2;
    document.getElementById("demo1").innerHTML=right;

}