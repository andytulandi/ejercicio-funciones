/**
 * area de la figura plana del triangulo
 */

function triangulo(){

    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;

    let Area = b*h/2;

    document.getElementById("area").innerHTML =
        "el area del triangulo es: " + Area;
}

/**
 * area de la figura plana del paralelogramo
 */

function paralelogramo(){
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;

    let Area = b*h;

    document.getElementById("area").innerHTML =
        "el area del paralelogramo es: " + Area;

}

/**
 * area de la figura plana del rectangulo
 */

function rectangulo(){
    let b = document.getElementById("base").value;
    let a = document.getElementById("altura").value;

    let Area = b*a;

    document.getElementById("area").innerHTML =
        "el area del rectangulo es: " + Area;

}

/**
 * area de la figura plana del cuadrado
 */

function cuadrado(){
    let a = document.getElementById("area").value;

    let Area = a*a;

    document.getElementById("valor").innerHTML =
        "el area del cuadrado es: " + Area;
}

/**
 * area de la figura plana del rombo
 */

function rombo(){
    let D = document.getElementById("D-mayor").value;
    let d = document.getElementById("d-menor").value;

    let Area = D*d/2;

    document.getElementById("valor").innerHTML =
        "el area del rombo es: " + Area;
}

/**
 * area de la figura plana de la cometa
 */

function cometa(){
    let D = document.getElementById("D-mayor").value;
    let d = document.getElementById("d-menor").value;

    let Area = D*d/2;

    document.getElementById("valor").innerHTML =
        "el area del rombo es: " + Area;
}

/**
 * area de la figura plana del trapecio
 */

function trapecio(){
    let B = document.getElementById("B-mayor").value;
    let b = document.getElementById("b-menor").value;
    let h = document.getElementById("altura").value;

    let Area = (B*b)*h/2;

    document.getElementById("valor").innerHTML =
        "el area del rombo es: " + Area;
}

/**
 * area de la figura plana del circulo
 */

function circulo(){
    let r = document.getElementById("radio").value;

    let Area = Math.PI*r*r;

    document.getElementById("circulo").innerHTML =
        "el area del circulo es: " + Area;

}