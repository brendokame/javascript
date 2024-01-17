const nome = 'Brendo';
const sobrenome = 'Alexandre';
const idade = 24;
const peso = 90;
const altura = 1.64;
let imc;
let anoNascimento; 

imc= peso / (altura * altura)
anoNascimento = 2024 - idade 
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa ', peso, 'kg');
console.log('tem', altura, ' de altura e seu IMC é de ', imc);
console.log(nome, 'nasceu em', anoNascimento);
