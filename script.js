const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelectorAll(".gallery-item")
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image"); 
const button = document.querySelector("button"); 

galleryItem.forEach(function(item){
item.addEventListener("click", function(){
  lightbox.style.display = "flex";
  let targetNama = item.src;
    lightboxImage.src = targetNama.replace("-thumbnail", "");
    
})

})

lightbox.addEventListener("click", function(event){
  if(event.target === lightbox){
    lightbox.style.display = "none";
    console.log(lightbox.style.display)
  }
  
  });

  button.addEventListener("click", function(){
    lightbox.style.display = "none";
    console.log(lightbox.style.display)
  });
