let icon= document.querySelector(".icon")
let menuList = document.querySelector(".menu-list")

//menuList.style.display="none";



icon.addEventListener("click",function(){
   

    if(menuList.style.display=="none"){
       
        menuList.style.display="block";
    }   
     else{
        menuList.style.display="none";
    }
});
/*
function toggleicon(){
    

    if(menuList.style.display=="none"){
        menuList.style.display="block";
    }
    else{
        menuList.style.display="none";
    }
};*/