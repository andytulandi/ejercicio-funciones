/**
 * area de la figura solida
 */

function cubo(){
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    let resultado = lado1*lado2*lado3;

    document.getElementById("resultado").innerHTML =
    "el area del cubo es: " + resultado;

    }
    /**
     * area de la figura solida paralelepipedo
     */

    function paralelpipedo(){
        let longitud = document.getElementById("longitud").value;
        let base = document.getElementById("base").value;
        let altura = document.getElementById("altura").value;

        let resul = longitud*base*altura;

        document.getElementById("resul").innerHTML =
        "el area del cubo es: " + resul;

    }
    