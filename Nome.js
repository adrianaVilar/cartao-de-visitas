function retornaNomeDeclarada(nome, qtd) {
    let texto = "";

    for(let x = 0; x < qtd; x++) {
        console.log(nome + " " + x);
        texto += nome + " " + x + "</br>";
    }
    return texto;
}


let retornaNomeAnonima = function(nome, qtd) {
    let texto = "";

    for(let x = 0; x < qtd; x++) {
        texto += nome + " " + x + "</br>";
    }
    return texto;
}


let retornaNomeArrow = (nome, qtd) => {
    let texto = "";

    for(let x = 0; x < qtd; x++) {
        texto += nome + " " + x + "</br>";
    }
    return texto;
};

(function(nome, qtd) {
    let texto = "";

    for(let x = 0; x < qtd; x++) {
        texto += nome + " " + x + "</br>";
    }
    console.log(texto);
})("e",3)