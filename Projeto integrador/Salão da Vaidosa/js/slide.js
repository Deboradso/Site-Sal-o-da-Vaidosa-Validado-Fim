var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "img/1.jpg";
    setTimeout ("slide2()",intervalo);

}

function slide2(){
    document.getElementById("banner").src = "img/2.jpg";
    setTimeout ("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "img/3.jpg";
    setTimeout ("slide1()",intervalo);
}
/*
function slide4(){
    document.getElementById("banner").src = "img/4.jpg";
    setTimeout ("slide1()",intervalo);
}
*/