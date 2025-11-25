/**
 * volumen de la figura solida
 */

function cubo(){
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    let resultado = lado1*lado2*lado3;

    document.getElementById("resultado").innerHTML =
    "el volumen del cubo es: " + resultado;

    }
    /**
     * volumen de la figura solida paralelepipedo
     */

    function paralelpipedo(){
        let longitud = document.getElementById("longitud").value;
        let base = document.getElementById("base").value;
        let altura = document.getElementById("altura").value;

        let resul = longitud*base*altura;

        document.getElementById("resul").innerHTML =
        "el volumen del cubo es: " + resul;

    }
    /**
     * volumen de la figura solida cilindro
     */

    function cilindro(){
        let r = document.getElementById("radio").value;
        let h = document.getElementById("altura").value;

        let volumen = Math.PI*r*r*h;
        document.getElementById("vol").innerHTML =
        "el volumen del cilindro es: " + volumen;
    }
    /**
     * volumen de la figura solida esfera
     */

    function Esfera(){
        let r = document.getElementById("radio").value;

        let volumen = (4/3)*Math.PI*r*r*r;
        document.getElementById("vol").innerHTML =
        "el volumen de la esfera es: " + volumen;

    }
    /**
     * volumen de la figura solida cono
     */
    function cono(){
        let r = document.getElementById("radio").value;
        let h = document.getElementById("altura").value;

        let volumen = (1/3)*Math.PI*r*r*h;
        document.getElementById("vol").innerHTML =
        "el volumen del cono es: " + volumen;
    }