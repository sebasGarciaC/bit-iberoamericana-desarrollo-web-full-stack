var suma = function(){
            
    var x = document.getElementById('valor1').value
    var y = document.getElementById('valor2').value

    document.getElementById('resultado').innerHTML = ("El resultado es :" + (parseInt(y) + parseInt(x)))

   // alert ( parseInt(y) + parseInt(x))
}


var resta = function(){
    var x = document.getElementById('valor1').value
    var y = document.getElementById('valor2').value

   document.getElementById('resultado').innerHTML = ("El resultado es :" + (parseInt(x) - parseInt(y)))
}

var multiplicacion = function(){
    var x = document.getElementById('valor1').value
    var y = document.getElementById('valor2').value

   document.getElementById('resultado').innerHTML = ("El resultado es :" + (parseInt(x) * parseInt(y)))
}

var division = function(){
    var x = document.getElementById('valor1').value
    var y = document.getElementById('valor2').value

   document.getElementById('resultado').innerHTML = ("El resultado es :" +  (parseInt(x) / parseInt(y)))
}
