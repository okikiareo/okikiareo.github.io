
  var menubtn = document.getElementById("menubtn");
  var sidenav = document.getElementById("sidenav"); 
  var menu = document.getElementById("menu");
  var background = document.getElementById("banner");

  sidenav.style.right = "-220px";

  
  var docbody = document.body;

 

  menubtn.onclick = function(){
    if(sidenav.style.right == "-220px"){
      sidenav.style.right = "0px";
    }
    else{
      sidenav.style.right = "-220px";
    }
  } 

  /*change img --*/
  let images = ['bg-1', 'bg-2','bg-3', 'bg-4'];
  let index = 1;

//fadeBg();

 const fadeBg = () => {
   //setInterval(fadeInterval, 5000);

     const fadeInterval = () => {
         index = index + 1;
         if (index === images.length) index = 0;
         background.style.backgroundImage = `url(images/${images[index]}.jpg)`;
     }
   setInterval(fadeInterval, 5000);
  }
fadeBg();