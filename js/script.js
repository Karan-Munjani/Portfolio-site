console.log("its working or not");


let theme = localStorage.getItem('theme');

if(theme=="null"){
    setTheme('light');
}
else{
    setTheme(theme);
}



let themeDots = document.getElementsByClassName("theme-dot");

for(var i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        console.log("option clicked:",mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode=='light'){
        document.getElementById('theme-style').href= "./css/default.css"
    }
    
    if(mode=='blue'){
        document.getElementById('theme-style').href= "./css/blue.css"
        console.log(document.getElementById('theme-style'));
    }

    if(mode=='green'){
        document.getElementById('theme-style').href= "./css/green.css"
    }

    if(mode=='purple'){
        document.getElementById('theme-style').href= "./css/purple.css"
    }

    // localstorage stores key and value pair only
    localStorage.setItem('theme',mode);

}