

document.getElementById('owl').addEventListener('click', function(e){
     console.log(e)
})  // by default 3rd parameter is FALSE  

// type
// timestamp
// defaultPrevented
// target
// srcElement
// currentTarget
// clientX, clientY
// screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode



/* 3rd Parameter Use Case */
// false - event Bubling (Bottom -> Top)
// When first click on owl
// OUTPUT:- owl clicked
//          inside ul

// true - event Capturing (Top -> Bottom)
// When first click on owl
// OUTPUT:- inside ul
//          owl clicked          


document.getElementById('ul').addEventListener('click', function(e){
    console.log("inside ul")
}, false)  

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked")
    // e.stopPropagation()      // owl clicked
}, false)  


document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("Google Clicked");    
}, false)







/* Click the image and it will be missing */
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt) 


    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG') {
        console.log(e.target.id)
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
 

})