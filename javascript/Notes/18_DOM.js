
    // <div class="bg-black">
    //     <h1 id="title" class="heading">DOM learning<span style="display:none">text text</span></h1>
    //     <h2>Lorem ipsum dolor sit amet.</h2>
    //     <h2>Lorem ipsum dolor sit amet.</h2>
    //     <h2>Lorem ipsum dolor sit amet.</h2>
    //     <p>Lorem ipsum dolor sit amet.</p>
    //    <input type="password" name="" id="">

    //     <!-- ul>li*3 -->
    //    <ul>
    //     <li class="list=item">one</l>
    //     <li class="list=item">two</li>
    //     <li class="list=item">three</li>
    //     <li class="list=item">four</li>
    //    </ul>

    // </div>






// document.getElementById()
// document.getElementById().innerHTML = ;


// const title = document.getElementById("title")
// title.style.backgroundColor = 'green'


title.innerText          // DOM learning
title.innerContent       // DOM learning text text
title.innerHTML          // DOM learning<span style="display:none">text text</span>


document.getElementsByClassName('heading')
document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')



document.querySelector('input [type="password]')   // Selecting tag and Attribute
document.querySelector('p:first-child')            // Paragraph Selector






document.querySelector('ul')
const myul = document.querySelector('ul')
myul.querySelector('li')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = "Green"
turnGreen.innerText
turnGreen.innerText = "Five"
document.querySelectorAll('li')
const tempLiList = document.querySelectorAll('li')
tempLiList[0].style.color = "red"
tempLiList.forEach( function (l) {
    l.style.backgroundColor = "yellow"
})
document.getElementsByClassName('list-item')
const tempClassList = document.getElementsByClassName('list-item')
tempClassList
/*
tempClassList.forEach( function (li) {
    console.log(li)
})
*/
Array.from(tempClassList)
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach( function (li) {
    li.style.color = 'pink'
})








const myh1 = document.querySelectorAll('h1')
myh1
myh1[0].style.color = "green"
