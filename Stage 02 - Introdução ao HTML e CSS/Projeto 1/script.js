let controller = 0;

function acenderLuz(){
  if(controller == 0){
    document.getElementById('imgBanner').src = "imagens/img5.png";
    controller = 1;
    console.log(controller);
  }else{
    document.getElementById('imgBanner').src = "imagens/img2.png";
    controller = 0;
  }
}