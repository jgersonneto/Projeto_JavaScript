/*
var nome = "Neto";
//alert("Bem Vindo " + nome);

var listaP = ["Kaline", "Neto é foda", "Anastásia"];
var listaF = {Pai: "Neto", Mae: "Kaline", Filhos: "Anastásia"}
var listasF = [{Pai: "Neto", Mae: "Kaline", Filhos: "Anastásia"}, {Pai: "Roberto", Mae: "Inalda", Filhos: "Neto"}]
console.log(listasF);
listaP.push("Roberto");
listaP.push("Igor");
listaP.pop();
console.log(listaP);
console.log(listaP[1].replace("Neto", "Igor"));
console.log(listaP.join(" - "));
console.log(listaP.toString());
console.log(listaP.reverse());
var data = new Date();
console.log(data);
console.log(data.getHours());
var idade = prompt("Qual sua Idade?");
console.log(idade);
if(listasF[0].Pai == "Neto" && listasF[1].Filhos == "Neto") {
  alert(listasF[0].Pai + " é filho de " + listasF[1].Pai);
}else {
  alert("Não tem nenhum tipo de parentesco.");
}
*/
function neto() {
  document.getElementById("textClick").innerHTML = "Obrigado pela sua presença";
  console.log(document.getElementById("textClick").innerHTML = "Obrigado pela sua presença");
}

function redirecionar() {
  window.open("https://github.com/jgersonneto/Projeto_JavaScript");
  window.location.href = "https://github.com/jgersonneto/Projeto_JavaScript";
}

function pMouse() {
  document.getElementById("textClick2").innerHTML = "Obrigado passar o mouse";
}

function voltar() {
  document.getElementById("textClick2").innerHTML = "Passe o mouse aqui";
}

function pMouse2(elemento) {
  elemento.innerHTML = "Obrigado passar o mouse 2";
}

function voltar2(elemento) {
  elemento.innerHTML = "Passe o mouse aqui 2";
}

function load() {
  alert("PAG carregada");
}

function change(elemento) {
  console.log(elemento.value);
}
