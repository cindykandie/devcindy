const TypeWriter = function(txtElement,words,wait = 50){
    this.txtElement = txtElement
    this.words =words
    this.txt =''
    this.wordIndex=0
    this.wait =parseInt(wait,1000)
    this.type()
    this.isDeleting = false
}

//Type Method
TypeWriter.prototype.type = function(){
    //current word index
    const current = this.wordIndex % this.words.length
    
    //get fulll text of curent word
    const fullTxt = this.words[current]
    

    //check if deleting
    if(this.isDeleting){
       //Remove char
       this.txt = fullTxt.substring(0, this.txt.length -1)
    }else{
       //Add char
       this.txt = fullTxt.substring(0, this.txt.length +1)
    }

    //insert txt into an element
    this.txtElement.innerHTML = `${this.txt}|`


    //initial type speed
    let typeSpeed = 300

    if(this.isDeleting){
        typeSpeed = 1
    }

    //if word is complete
     if(!this.isDeleting && this.txt === fullTxt){
       typeSpeed = this.wait
       //Set delete to true
       this.isDeleting = true;
    } else if(this.isDeleting && this.txt == ''){
        this.isDeleting = false
        //move to next word
        this.wordIndex++
        //pause before start typing
        typeSpeed= 50
    }


    setTimeout(()=> this.type(),100)
}

//INIT on DOM load
document.addEventListener('DOMContentLoaded',init);

//init App
function init(){
    const txtElement =document.querySelector('.typewritten')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')

    //init typewriter
    new TypeWriter(txtElement,words,wait)
}


//more projects button
let theProjects = document.querySelector(".more-projects")
let showBtn = document.querySelector(".btn-projects")
let lessBtn = document.querySelector(".btn-less")
let body = document.querySelector("body")

function showProjects(e){
    // console.log('rrrr')
    theProjects.style.display ="block"
    showBtn.style.display ="none"
    lessBtn.style.display ="block"
}

function lessProjects(e){
    // console.log('rrrr')
    theProjects.style.display ="none"
    showBtn.style.display ="block"
    lessBtn.style.display ="none"
}

let navLogo = document.querySelector('.open-nav')
let navBar = document.querySelector('.phone-screen')
let closeLogo = document.querySelector('.close-nav')
  

  function openNav(e){
    navBar.style.transform = "translate(55%,0%)" 
    navLogo.style.opacity = 0
 }

 function closeNav(e){
    navBar.style.transform = "translate(55%,-110%)" 
    navLogo.style.opacity = 1
    // navBar.style.transform = "scale(2)"
 }
 


 