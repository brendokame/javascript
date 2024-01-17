const numero = Number(prompt('Digite um número: '));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero; 
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

