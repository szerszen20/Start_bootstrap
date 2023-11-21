function openOverlay(imageName, text) {
    let overlayImage = document.getElementById("overlayImage");
    overlayImage.src = imageName;
    document.getElementById("overlay").style.display = "flex";
    document.body.style.overflow = "hidden";

    document.getElementById("overlayText").innerText = text;
  }

  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }


  const ustawienie = document.getElementById("jss");
  const prevScrollPos = window.pageYOffset;


  function navbar() {
   
      var currentScrollPos = window.pageYOffset;
  
      
      if (currentScrollPos > prevScrollPos) {
         
          ustawienie.classList.add("scrolled");
        
      } else {
          
          if (currentScrollPos === 0) {
              ustawienie.classList.remove("scrolled");
             
          }
      }
      prevScrollPos = currentScrollPos;

    
      
  }

//   function aktywuj(){
//     var sekcjaoffset = document.getElementById("aktywne1");
//     var about = sekcjaoffset.offsetTop;
//     var currentScrollPos = window.pageYOffset;

//     if (currentScrollPos >= about){
//         odstep.classList.add = ("aktywne");

//       } else {
//         odstep.classList.remove = ("aktywne");
//       }
//   }
  window.onscroll = function()
  {
    aktywuj()
  }



function aktywuj() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
 
    let div1 = document.getElementById('odstep1');
    let div2 = document.getElementById('odstep2');
    let div3 = document.getElementById('odstep3');
 
    if (scrollTop > 500 && scrollTop < 1400) {
      div1.classList.add('aktywne');
      div2.classList.remove('aktywne');
      div3.classList.remove('aktywne');
    } else if (scrollTop >= 1400 && scrollTop < 2000) {
      div1.classList.remove('aktywne');
      div2.classList.add('aktywne');
      div3.classList.remove('aktywne');
    } else if (scrollTop >= 2000) {
      div1.classList.remove('aktywne');
      div2.classList.remove('aktywne');
      div3.classList.add('aktywne');
    } else {
      div1.classList.remove('aktywne');
      div2.classList.remove('aktywne');
      div3.classList.remove('aktywne');
    }
  }



  
  window.addEventListener("scroll", navbar, aktywuj);