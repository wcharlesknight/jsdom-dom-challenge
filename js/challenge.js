

let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let likes = document.querySelector('.likes')
let comment = document.getElementById('submit')
let commentInput = document.querySelector('input')
let commentList = document.querySelector('.comments')

let time = setInterval(run, 1000)


function run(){
    counter.innerHTML++
}

plus.addEventListener('click', () => {
    counter.innerHTML++
})

minus.addEventListener('click', () => {
    counter.innerHTML--
})



heart.addEventListener('click', () => {
   if(document.getElementById(`li${counter.innerHTML}`) == null){     
     let li = document.createElement('li');
     let likeCount = document.createElement('li')
     likeCount.setAttribute('id', `c${counter.innerHTML}`)
     li.setAttribute('id', `li${counter.innerHTML}`)
     likeCount.innerHTML = 1 
     li.innerHTML = `${counter.innerHTML} has ${likeCount.innerHTML} like`
     likes.appendChild(li)
     likes.appendChild(likeCount).style.visibility = "hidden"
 } else {
     let li = document.getElementById(`li${counter.innerHTML}`)    
     let likeCount = document.getElementById(`c${counter.innerHTML}`)
     likeCount.innerHTML++
     li.innerHTML = `${counter.innerHTML} has ${likeCount.innerHTML} likes`
     
   }
})

pause.addEventListener('click', () => {
    if (pause.innerHTML === "resume") {
        pause.innerHTML = 'pause'
        time = setInterval(run, 1000)
}  else {
    pause.innerHTML = 'resume'
    clearInterval(time)
    } 
} )

comment.addEventListener('click', commentHandler) 

function commentHandler(e){
    // debugger 
    e.preventDefault()
    let newComment = document.createElement('li')
    newComment.innerText = commentInput.value
    commentList.appendChild(newComment)
}

