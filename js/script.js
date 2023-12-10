let mainImg = document.querySelector('.mainImg');
let iconImgs =Array.from(document.querySelectorAll('.icons img'));
let container = document.querySelector('.container')

for(var i = 0;i <= iconImgs.length; i++){
    iconImgs[i].addEventListener('click',function(e){
        let imgSrc = this.src;
    // let imgSrc = e.target.getAttribute('src');
    mainImg.src = imgSrc;

    // let r = Math.round(Math.random() *255)
    // let g = Math.round(Math.random() *255)
    // let b = Math.round(Math.random() *255)
    
    // container.style.background = `rgb(${r} ,${g} ,${b})`

    // let color = e.target.getAttribute('class')
    let color = this.getAttribute('class')
    container.style.background = color; 
})
}
