//El siguiente código es el encargado de generar la informaación de prueba. Se recomienda no modificarlo.
var categorias = [];
var localstorage2 = window.localStorage;

if (localstorage2.getItem('aplicacionesCatg') == null) {
    localstorage2.setItem('aplicacionesCatg', JSON.stringify(categorias));
} else {

    categorias = JSON.parse(localstorage2.getItem('aplicacionesCatg'))


}


(()=>{
  //Este arreglo es para generar textos de prueba
  let textosDePrueba=[
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
      "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
      "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
      "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
      "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
  ]
  
  //Genera dinamicamente los JSON de prueba para esta evaluacion,
  //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria

  
  let contador = 1;
  for (let i=0;i<5;i++){//Generar 5 categorias
      let categoria = {
          nombreCategoria:i+1,
          descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
          aplicaciones:[]
          
      };
 
         document.getElementById('listaCategoria').innerHTML +=` 
        <option onclick="obtenervalor(${i})" value="${i}" id="${i}">${categoria.nombreCategoria}</option>`;

      
      for (let j=0;j<10;j++){//Generar 10 apps por categoria
          let aplicacion = {
              codigo:contador,
              nombre:"App "+contador,
              descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
              icono:`img/app-icons/${contador}.webp`,
              instalada:contador%3==0?true:false,
              app:"app/demo.apk",
              calificacion:Math.floor(Math.random() * (5 - 1)) + 1,
              descargas:1000,
              desarrollador:`Desarrollador ${(i+1)*(j+1)}`,
              imagenes:["img/app-screenshots/1.webp","img/app-screenshots/2.webp","img/app-screenshots/3.webp"],
              comentarios:[
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Juan"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Pedro"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Maria"},
              ]
          };
          contador++; 
          categoria.aplicaciones.push(aplicacion);

      }
      categorias.push(categoria);
      localstorage2.setItem('aplicacionesCatg', JSON.stringify(categorias));

  }
  
  console.log(categorias);
})();


  

function cargarAplicaciones(){
    document.getElementById('aplicacionesCatg').innerHTML = '';
 var info=document.getElementById('listaCategoria');
 var info2=info.value;
 for (let i = 0; i < categorias[info2].aplicaciones.length; i++) {
    var info2=info.value;
    var app = {
        sentinela: categorias[info2].aplicaciones[i],
    };


let estrellas = '';


    for (let i = 0; i < app.sentinela.calificacion; i++) {
        if (app.sentinela.calificacion>=3) {
            estrellas += '<i style=" color:#A4EC37 " class="fa-solid fa-star ml-auto mr-auto"></i>';
          
        }else{
            estrellas += '<i  style=" color:#E74D4D " class="fa-solid fa-star ml-auto mr-auto"></i>';
        
        }
    
    }
    
function cargarAplicaciones(){
    document.getElementById('aplicacionesCatg').innerHTML = '';
 var info=document.getElementById('listaCategoria');
 var info2=info.value;
 for (let i = 0; i < categorias[info2].aplicaciones.length; i++) {
    var info2=info.value;
    var app = {
        sentinela: categorias[info2].aplicaciones[i],
    };


let estrellas = '';


    for (let i = 0; i < app.sentinela.calificacion; i++) {
        if (app.sentinela.calificacion>=3) {
            estrellas += '<i style=" color:#A4EC37 " class="fa-solid fa-star ml-auto mr-auto"></i>';
          
        }else{
            estrellas += '<i  style=" color:#E74D4D " class="fa-solid fa-star ml-auto mr-auto"></i>';
        
        }
    
    }

for (let i = 0; i < 5 - app.sentinela.calificacion; i++) {

    estrellas += '<i class="fa-regular fa-star"></i>';

}
document.getElementById('aplicacionesCatg').innerHTML +=` 

    <div class="col-xl-2 col-md-3 col-sm-2 col-6" style="padding: 10px; " "> 
              <div class="card" style="padding 15px" >
                  <img onclick="imgModal(${i})" src="${app.sentinela.icono}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title" >${app.sentinela.nombre}</h5>
                    <p class="card-text">${app.sentinela.desarrollador}</p>
                    ${estrellas}
                  </div>
                </div>

            </div>

`;

}


}


var myModal = new bootstrap.Modal(document.getElementById('modalnuevaApp'), {
    keyboard: false
})

//funcion  mostar modal
function imgModal(indice) {

    var info=document.getElementById('listaCategoria');
    var info2=info.value;
    console.log(info2);

    var app = {
        sentinela: categorias[info2].aplicaciones[indice],
     
    
    };
    



myModal.show();







console.log('sacando nombre',app.sentinela.nombre)
document.getElementById('nombre-app').textContent=app.sentinela.nombre;
console.log('desarrollador',app.sentinela.desarrollador);
document.getElementById('desarrollador').textContent=app.sentinela.desarrollador;
document.getElementById('descripcionApp').textContent=app.sentinela.descripcion;
//estrellas
let estrellas = '';
for (let i = 0; i < app.sentinela.calificacion; i++) {
if (app.sentinela.calificacion>=3) {
    estrellas += '<i style=" color:#A4EC37 " class="fa-solid fa-star ml-auto mr-auto"></i>';
  
}else{
    estrellas += '<i  style=" color:#E74D4D " class="fa-solid fa-star ml-auto mr-auto"></i>';

}

}

for (let i = 0; i < 5 - app.sentinela.calificacion; i++) {

    estrellas += '<i class="fa-regular fa-star ml-auto mr-auto"></i>';

}

document.getElementById('estrellascont').innerHTML =` 


${estrellas}

`;

var largo = {
    sentinela2: app.sentinela.comentarios,
 

};

//IMAGEN SUPERIOR


document.getElementById('arribaIMAGEN').innerHTML =` 
    
<img  src="${app.sentinela.icono}" class="img-fluid rounded-start imagenAarriba" alt="...">       
        
        `;

document.getElementById('comentarios').innerHTML =``;
    //comentarios 

    for (let i = 0; i < largo.sentinela2.length; i++) {
       
        document.getElementById('comentarios').innerHTML +=` 
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 "  id="padrecom">
          <div id="hijo">   <img src="img/user.webp" ></div>
       
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <p>${app.sentinela.comentarios[i].usuario}</p>
            <p>${app.sentinela.comentarios[i].comentario}</p>
      
            </div>
          </div>
        </div>
      </div>
      <hr>     
        
        `;
    }
   
 
    //para boton instalar
  
if (app.sentinela.instalada==true) {
 document.getElementById('btn-instalar').style.display='none';
  console.log('display nono',app.sentinela.instalada)
}else{

    document.getElementById('btn-instalar').style.display='block';
    console.log('display si',app.sentinela.instalada)
}

    
console.log('ver largo',largo.sentinela2.length)
}

//funcion eliminar
function eliminar(params) {
    var info=document.getElementById('listaCategoria');
    var info2=info.value;
    console.log(info2);

    var app3 = {
        sentinela: categorias[info2].aplicaciones,   
    };

console.log('viendo aplicacion a eliminar',app3)
app3.sentinela.splice(params,1)//para eliminar de un arreglo

localstorage2.setItem('aplicacionesCatg',JSON.stringify(categorias));
cargarAplicaciones()


}



   
   
