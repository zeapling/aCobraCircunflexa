
document.addEventListener("DOMContentLoaded",function()
{


var botaoJogar = document.getElementById('meio1');  
let gridPosicao =document.getElementById('tile${posicao}');
var y =9;
var x =9;
var posicoesX=[];
var posicoesY=[];
var comprimento=0;
var tileNumAbacaxi=0;
var tileNumCobra=0;
var tileNumCobraRabo=0;
var aux=0;
let id=0;
var cont=0;
var lugarX=0;
var lugarY=0;
var comparar=0;
var comparar2=0;
var vel=0;
var teclaP=[];
var aux2;
var tileTodo=0;
var aux3;
var comprimento=0;
var testY=[];
var testX=[];

vel=300;

document.addEventListener('keydown', (event) => {

if(document.getElementById('meio1').style.display="block"){


document.getElementById('meio1').style.display="none";
;

};






aux2+=1;
teclaP[aux2]=event.key;

if (event.key == "ArrowLeft" && teclaP[aux2-1]!="ArrowRight")
{  
   clearInterval(id);
   id = setInterval(()=>{
      x-=1;
      aux+=1
      movime();
   },vel);
   
}
else if (event.key == "ArrowRight" && teclaP[aux2-1]!="ArrowLeft")
{
   clearInterval(id);
   id = setInterval(()=>{
         x+=1;
         aux+=1
         movime();
      },vel);
      
}
else if (event.key == "ArrowUp"  && teclaP[aux2-1]!="ArrowDown")
{
   clearInterval(id);
   id = setInterval(()=>{
         y-=1;
         aux+=1
         movime();
      },vel);
      
}
else if (event.key == "ArrowDown" && teclaP[aux2-1]!="ArrowUp")
{
{
   clearInterval(id);
   id = setInterval(()=>{
         y+=1;
         aux+=1
         movime();
      },vel);
     
}
}})



function movime(){
   
   tileNumCobra = "tile" + "(" + y + ")" + "(" + x + ")";
   document.getElementById(tileNumCobra).style.backgroundColor="#73ca0f";

   comparar=tileNumCobra;

  
  
   
   posicoesX[aux]=x;
   posicoesY[aux]=y;
   
   tileNumCobraRabo = "tile" + "(" +  posicoesY[aux-comprimento] + ")" + "(" +  posicoesX[aux-comprimento] + ")";
   
   document.getElementById(tileNumCobraRabo).style.backgroundColor="#fffef3";

  
return comparar;

}


setInterval(function testar()
{
  
   if(x > 20||x < 0)
   {
      window.location.reload();
     }
     if(y > 20 ||y < 0)
   {
      window.location.reload();
      
     }

      if(comprimento>3)
         {
            testX = posicoesX.slice(-comprimento);
            testY = posicoesY.slice(-comprimento);
           
   
         for(aux3=comprimento;aux3>0;aux3--){
            tileTodo= "tile" + "(" + testY[aux3]  + ")" + "(" + testX[aux3]  + ")";
            console.log("aaaaaaaaaaaaaaa   " + comprimento);
            console.log("aaaaaaaaaaaaaaa   " + comprimento);
              console.log("bbbbbbbbbbbbbbb   " + testX[aux3]);
              console.log("bbbbbbbbbbbbbbb   " + testX);
              console.log("ccccccccccccccc   " + x );
              console.log("BBBBBBBBBBBBBB  " + testY);
              console.log("CCCCCCCCCCCCCCC  " + y );
              console.log("1111111111  " + tileTodo);
              console.log("222222222222  " + comparar);
         }
         if(comparar == tileTodo)
         {
            window.location.reload();
            
           }

         
         }

      
        
  
   if(comparar == comparar2)
   {
   
      comprimento++; 
      cont=-10;
      comparar=0;
      comparar2=0;
      if(vel>100)
      {
         vel-=10; 
      };

   };

},vel);


document.addEventListener('keydown', (event) => {

  
   
   if (cont<0){

      lugarX = Math.floor(Math.random() * 19);  
      lugarY = Math.floor(Math.random() * 19); 

      tileNumAbacaxi = "tile" + "(" + lugarY + ")" + "(" + lugarX + ")";
   document.getElementById(tileNumAbacaxi).style.backgroundColor="#a11212";
   
   comparar2 = tileNumAbacaxi;

   cont=10;

   console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

   return comparar2;
     
   };

   
  


   })
   
})















      
     
      


