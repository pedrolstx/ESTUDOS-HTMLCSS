import prompt from 'prompt-sync'
let ler = prompt();


console.log('Dobro');

console.log('Me informe um número:');
let n1 = Number(ler());

let r = n1 * 2

console.log(`O dobro de ${n1} é ${r}`)