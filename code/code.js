// Exemplo 1
let add = document.getElementById('btn1');
let clear = document.getElementById('btn2');
let rem = document.getElementById('btn3')
let cont = document.getElementById('txt1');
let count = 0;

add.addEventListener('click', function(){
    count++;
    cont.textContent = `Cliques: ${count}`
    console.log(count);
});
clear.addEventListener('click', () =>{
    count = count - count;
    cont.textContent = `Cliques: ${count}`
});
rem.addEventListener('click', () =>{
    count--;
    cont.textContent = `Cliques: ${count}`
    console.log(count);
})

//Exemplo 2
let button = document.getElementById('btn4');
let cont1 = document.getElementById('txt2');

button.addEventListener('click', () =>{
    let nome = prompt("Qual seu nome?");
    cont1.innerText=`Ola ${nome}, Seja vem vindo`;
})

//Exemplo 3
let datebtn = document.getElementById('btn5');
let dia= document.getElementById('dia');
let mes = document.getElementById('mes');
let dia_semana = document.getElementById('dia_semana');
let ano = document.getElementById('ano');
let hora = document.getElementById('hora');
let minuto = document.getElementById('minuto');
let segundo = document.getElementById('segundo');

let arrysemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
let arraymes = ["Janeiro","Fevereira","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

datebtn.addEventListener('click', () =>{
    ano.innerText = new Date().getFullYear();
    mes.innerText = new Date().getMonth();
    dia.innerText = new Date().getDate();
    dia_semana.innerText = new Date().getDay();
})