let amigos = ["5520", "25", "10", "55","6920","9520","6","6581", "100"];
let sorteio = document.getElementById("lista-sorteio");
let gp1 = [" Gerson, você tirou o MATHEUS", " matheus - regina ", "Regina,você tirou a MARYANA ", "Maryana, você tirou o IVAN", 'Ivan, você tirou a SUSANE', 'Susane, você tirou a LAURA','Laura,você tirou o MAIKON','Maikon, você tirou a MANUELA','Manuela, você tirou o GERSON'];

function sortear() {
  
  let valor = document.getElementById("nome-amigo");

  if (amigos[0] == valor.value) {
    console.log("hello greg");
    sorteio.innerHTML=gp1[0];
  } else if (amigos[1] == valor.value) {
    console.log("hello matheus");
    sorteio.innerHTML = gp1[1]
  } else if (amigos[2] == valor.value) {
    console.log("hello milena");
    sorteio.innerHTML = gp1[2]
  } else if (amigos[3] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[3]
  } else if (amigos[4] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[4]
  }else if (amigos[5] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[5]
  }else if (amigos[6] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[6]
  }else if (amigos[7] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[7]
  }
  else if (amigos[8] == valor.value) {
    console.log("hello lucas");
    sorteio.innerHTML = gp1[8]
  }
}

// function adicionar(){
//     let amigo = document.getElementById('nome-amigo');
//     if(amigo.value == ''){
//         alert('Informe um amigo!');
//         return;
//     }
//     if(amigos.includes(amigo.value)){
//         alert('nome ja adicionado');
//         return;
//     }

//     let lista = document.getElementById('lista-amigos');
//     amigos.push(amigo.value);
//     if(lista.textContent == ''){
//         lista.textContent = amigo.value;
//     }   else {
//         lista.textContent = lista.textContent + ', ' + amigo.value;
//     }

//     document.getElementById('nome-amigo').value = '';
// }

// function sortear(){
//     if(amigos.length < 4){
//         alert('informe pelo menos 4 amigos!');
//         return;
//     }
//     embaralha(amigos);
//     let sorteio = document.getElementById('lista-sorteio');

//     for(let i = 0; i < amigos.length; i++){
//         if(i == amigos.length - 1){
//             sorteio.innerHTML = sorteio.innerHTML +  amigos[i] + ' -- ' + amigos[0    ] + '<br>';

//         }   else{
//             sorteio.innerHTML = sorteio.innerHTML +  amigos[i] + ' -- ' + amigos[i + 1] + '<br>';

//         }
//     }
// }

// function embaralha(lista){
//     for (let indice = lista.length; indice; indice--){
//         const indiceAleatorio = Math.floor(Math.random() * indice);

//         [lista[indice - 1], lista[indiceAleatorio]] =
//         [lista[indiceAleatorio], lista[indice - 1]];
//     }
// }

// function reiniciar(){
//     amigos = [];
//     document.getElementById('lista-amigos').innerHTML = '';
//     document.getElementById('nome-amigo').innerHTML = '';
// }
