
    var num_aleatorio = Math.floor((Math.random() * 10000) + 1);
    var contador = 0;

    document.getElementById("btn").onclick= function() {
        var valor = document.getElementById("num").value; 

        if(valor > num_aleatorio) {
            console.log("Menor");
            contador ++ ;
        } else if (valor < num_aleatorio){
            console.log("Maior");
            contador++;
        } else {
            console.log("Parabéns ! número de tentativas " + contador);
        }
    }



