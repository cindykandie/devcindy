let loader = document.querySelector('.load-body')
let pagey = document.querySelector('.grid-container')

function init(){
    setTimeout(()=>{
        loader.style.opacity=0
        loader.style.display='none'

        pagey.style.opacity=1

    },4000)
}
init()