function ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2,];
    var valor = "";
    for (let i = 0; i < valores.length; i++) {
        if (typeof(valores[i]) == "string") {
            if (valores[i].length > valor.length) {
            valor = valores[i];
        }
    }
}
    console.log("el mayor es "+valor);
}
