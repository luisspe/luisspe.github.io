 /*------DECLARACIÓN VARIABLES---------*/
 let clientesAlMes = document.getElementById("clientesPorMes");
 let progressValue1 = 0;
 let progressValueDos = 0;
 let progressEndValue1 = 0;
 let progressEndValueDos = 0;
 let progressBar1 = document.getElementById("circular-progress");
 let valueContainer1 = document.getElementById("valor-circulo")
 let speed = 0.5

 let costPerVisit = document.getElementById("precioVisita");
 let textoInversion = document.getElementById("texto-inversion");
 let costPerLead = document.getElementById("costPerLead")
 let roastext = document.getElementById("ROASTEXT")

 let progressBarDos = document.getElementById("circular-progreso");
 let valueContainerDos = document.getElementById("vs")

 let speedeDos = 0
 

 /*----PRIMER SLIDER Y PORCENTAJE CIRCULAR----*/
 const slideValuePorcentaje = document.getElementById("porcentajeClientes");
 const inputSliderPorcentaje = document.getElementById("slidePorcentajeClientes");
 inputSliderPorcentaje.oninput = (() => {
     let value = inputSliderPorcentaje.value;
     slideValuePorcentaje.textContent = '%' + value;
     slideValuePorcentaje.style.left = (value / 2) + "%";
     slideValuePorcentaje.classList.add("show");

     leadsAlMes = Math.round(clientesAlMes.value / value  * 100);
     
     progressEndValue1 = leadsAlMes;

     
     if(inputSliderPorcentaje2.value > 0){
       visitantesNecesariosDos = Number((leadsAlMes / inputSliderPorcentaje2.value * 100).toFixed(0));
       valueContainerDos.textContent = visitantesNecesariosDos
       visitantesNecesarios = visitantesNecesariosDos
       progressEndValueDos = visitantesNecesariosDos
       progressValueDos = visitantesNecesariosDos

     };

     
     progressBar1.style.background = `conic-gradient(
         
         #8400FF ${inputSliderPorcentaje.value * 3.6}deg,
         #8400ff10 ${inputSliderPorcentaje.value * 3.6}deg
     )`;

     

 });
 inputSliderPorcentaje.onblur = (() => {

   
   slideValuePorcentaje.classList.remove("show");

 });

 
 inputSliderPorcentaje.onmousedown = (() =>{

   if (inputSliderPorcentaje.value >0){
     progressValue1 = 0;
     valueContainer1.textContent = 0
     
   };
   
 });

 
 inputSliderPorcentaje.onmouseup = (() => {

   if (clientesAlMes.value >= 1 && progressValue1 == 0 && inputSliderPorcentaje.value >=1){

     let progress = setInterval( () =>{
       progressValue1++;
       valueContainer1.textContent = `${progressValue1}`

       if(progressValue1 == progressEndValue1){
         clearInterval(progress);
       }

       if(costOfLead > 0){
           inversion()
           
       }

       
     }, speed)
   };
 });


 /*-----SEGUNDO SLIDER Y PORCENTAJE CIRCULAR------*/
 const slideValuePorcentaje2 = document.getElementById("porcetajeClientes2");
 const inputSliderPorcentaje2 = document.getElementById("slidePorcentajeClientes2");
 inputSliderPorcentaje2.oninput = (() => {
     let value2 = inputSliderPorcentaje2.value;
     slideValuePorcentaje2.textContent = '%' + value2;
     slideValuePorcentaje2.style.left = (value2 / 2) + "%";
     slideValuePorcentaje2.classList.add("show");

     visitantesNecesarios = Math.round(progressEndValue1 / inputSliderPorcentaje2.value) * 100;
     visitantesNecesariosDos = Number((leadsAlMes / inputSliderPorcentaje2.value * 100).toFixed(0));
     progressEndValueDos = visitantesNecesariosDos
     console.log(progressEndValueDos)

     progressBarDos.style.background = `conic-gradient(
           
           #8400FF ${inputSliderPorcentaje2.value * 3.6}deg,
           #8400ff10 ${inputSliderPorcentaje2.value * 3.6}deg
         
     )`; 
 });

 inputSliderPorcentaje2.onblur = (() => {
   slideValuePorcentaje2.classList.remove("show");
 });

 inputSliderPorcentaje2.onmousedown = (() =>{

   if (inputSliderPorcentaje2.value >0){
     progressValueDos = 0;
     valueContainerDos.textContent = 0
     
   };

 });

 inputSliderPorcentaje2.onmouseup = (() => {

   if ( progressValueDos == 0 && inputSliderPorcentaje2.value >=1){
     if(progressEndValueDos > 0){
     console.log("entro");

       let progresDos = setInterval( () =>{

         progressValueDos  = progressValueDos +5;
         valueContainerDos.textContent = `${progressValueDos}`
         
         if(progressValueDos >= progressEndValueDos){
           clearInterval(progresDos);
         }
         if(costOfLead > 0){
           inversion()
           
         }
         
         
       },speedeDos)
     };
   };

 });


   /* FORMULAS DE RESULTADOS */

   let ingresototal = 0
   let ingresoPromedioPorCliente = document.getElementById("ingresoPromedioPorCliente");
   let resultadoIngresosTotales = document.getElementById("resultadoIngresosTotales");


   function ingresoTotal() {
       
       ingresototal = (clientesAlMes.value * ingresoPromedioPorCliente.value);
       resultadoIngresosTotales.textContent = '$ '+ingresototal.toLocaleString()+' MXN'
       
   };

   function ingresoTotal2(){
     ingresototal = (clientesAlMes.value * ingresoPromedioPorCliente.value);
      
       resultadoIngresosTotales.textContent = '$ '+ingresototal.toLocaleString()+' MXN'
      
     
   };

   function inversion(){
    visitantesNecesariosDos = Number((leadsAlMes / inputSliderPorcentaje2.value * 100).toFixed(0));
     
    progressValueDos = visitantesNecesariosDos
    
     
    

     investment = costPerVisit.value * progressValueDos
     textoInversion.textContent = '$ '+investment.toLocaleString()+' MXN'

     costOfLead = investment / leadsAlMes;
     costPerLead.textContent = '$ '+costOfLead.toFixed(2)+' MXN'

     roas = (((ingresototal - investment)/investment) *100).toFixed(2)
     roastext.textContent = roas+'%'

    
   }

   function primerInput(){
     if(inputSliderPorcentaje.value >= 1){
         leadsAlMes = Math.round(clientesAlMes.value / inputSliderPorcentaje.value  * 100);
         valueContainer1.textContent = leadsAlMes

       };
     if(inputSliderPorcentaje.value >= 1 && inputSliderPorcentaje2.value >=1){
       leadsAlMes = Math.round(clientesAlMes.value / inputSliderPorcentaje.value  * 100);
       valueContainer1.textContent = leadsAlMes

       visitantesNecesarios = (leadsAlMes / inputSliderPorcentaje2.value * 100).toFixed(0);
       valueContainerDos.textContent = visitantesNecesarios


       


     }
   }
   




   /* ----------  CIRCULOS DE PORCENTAJE   */  

   
