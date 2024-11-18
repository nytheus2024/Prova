//Questão 1

let amigo = ["joão", "Gabriel", "Vinicius"];
console.log(amigo);
console.log(amigo[1]);

//Questão 2

let carro = {
    nome: "Impala",
    marca: "Chevrolet",
    cor: "Preto"
};

console.log(carro);

console.log(carro.nome);
console.log(carro.marca);
console.log(carro.cor);

let { nome, cor } = carro;
console.log(nome, cor);

//Questão 3

let alunos = [
    { nome: "Marcelo", turma: "3DS", altura: "1,80" },
    { nome: "Nycolas", turma: "2DS", altura: "1,75" },
    { nome: "João", turma: "2Far", altura: "1,68" },
]

console.log(alunos);

console.log(alunos[1]);

console.log(alunos[1].nome);

//Questão 4

let Nome = "Nycolas";
let Sobrenome = "Marques";
let Curso = "Desenvolvimento de Sistemas";

console.log(`Meu nome é ${Nome} ${Sobrenome} e meu curso é ${Curso}`);

//Questão 5

let numero = [1, 2, 3];
let novoarray = [...numero, 4, 5, 6];

console.log(novoarray);

//Questão 6

let materias = ['Geografia', 'Matemática', 'Sociologia'];

materias.map(materias =>
    console.log(`Materias preferidas: ${materias}`));

