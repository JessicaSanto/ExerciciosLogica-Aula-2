//Percorrer de Zero até o número de alunos

//1 - Inserir o Número
//2 - Listar o nome dos participantes

// Laço Contado - Quando sabemos a quantidade de vezes que vamos repetir
// Laço de Repetição - Quando não sabemos a quantidade de vezes que vamos repetir

var numeroAlunos = 10;

for (let contador = 0; contador <= numeroAlunos; contador++) {
    //console.log(contador)    

    if(contador == 0)
    {
        console.log("O número" +contador+ "é ZERO")
    }else if (contador % 2 == 0)
    {
        console.log("O número" +contador+ "é PAR")
    }else{
        console.log(`O número ${contador} é IMPAR`)
    }
}


contador = 0;
classificaoAlunos = 10;

while (contador <= classificaoAlunos) {
    console.log(contador)

    if(contador == 0)
    {
        console.log("O número" +contador+ "é ZERO")
    }else if (contador % 2 != 0)
    {
        console.log("O número" +contador+ "é IMPAR")
    }else{
        console.log(`O número ${contador} é PAR`)
    }

    contador++; 
}


let nomeAlunos = ["Jessica", "Caique", "Odirlei", "Thiago"]

for (let nome of nomeAlunos) {
    console.log(`O nome desse aluno é ${nome}`)
}

