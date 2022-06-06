



var datos =[]



var guardarnombre = function(){

    var texto = document.getElementById('midato').value
    console.log(texto)
    
    datos.push(texto) 
    localStorage.setItem('datos',JSON.stringify(datos))
       

}

var mostrar = function(){
    console.log(datos)
    console.log(localStorage.getItem('datos'))

    datos = JSON.parse(localStorage.getItem('datos'))
}


var modificar = function(){
    var posicion = document.getElementById('posicion').value
    datos[posicion] = document.getElementById('midato').value

}

var eliminar = function(){

    var posicion = document.getElementById('posicion').value
    datos.splice(posicion,1)

}