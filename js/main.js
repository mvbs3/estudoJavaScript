/*var nome = "mazelitu mazelitu"
//alert("teste")
var a=10
var b=30
console.log(nome.toUpperCase())
console.log(a+b)
console.log(nome)

//brincando com listas
var lista = ["batata", "maca", "pera"]
lista.push("suco")
lista.pop()//suco ira morrer
var dict = {chave1: "a", batta: 2}
console.log(dict.chave1);

var idade = prompt("qual sua idade?");
if(idade >=18){
    alert(idade+" anos, "+"voce eh maior de idade")
}else{
    alert(idade + " anos, "+"voce nao eh maior de idade")
};

var count =0;
while(count <=5){
    console.log(count);
    count++;
}
//estrutura de repeticao
for(count=0;count<=5;count++){
    console.log(count)
}

var d = new Date
alert(d);
alert(d.toUTCString())

function soma(a,b){
    return a+b;
}

alert(soma(10,30))*/

//APRENDENDO A USAR COM HTML !!!!!!!!!!!!!!!!!!!!!!!!!!!
function botao(){
    //alert("voce clicou o botao");
    //console.log(document.getElementsByClassName("botaoClicado"));
    document.getElementById("botao").innerHTML="boa tarde beto"
}
function redirecionar(){
    window.open("https://www.google.com/");
}
function redirecionar2(){
   window.location.href= "https://www.google.com/";
}
//funcoes interessantes
function alerta(){
    document.getElementById("botao").innerHTML="VOCE PASSOU O MOUSE AQ!!@!!!11!"
}
function voltar(){
    document.getElementById("botao").innerHTML="boa tarde beto"
}

//refazer funcoes acima de forma masi generica
function alertaGen(doc){
    doc.innerHTML="VOCE PASSOU O MOUSE AQ!!@!!!11!"
}
function voltarGen(doc){
    doc.innerHTML="eu sou generico!"
}
function carregado(){
    alert("isso aqui acontece quando o elemento eh carregado")
}

function naTroca(elem){
    console.log(elem.value)
    //on change sempre acontece quando ocorre uma mudanca emd eterminado elemento
}