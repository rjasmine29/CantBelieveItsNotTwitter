const makeAPost = document.querySelector('#write-a-post');
makeAPost.style.display = 'none'; //makes form invisible to start

const button = document.querySelector('#write-a-post-button');
button.addEventListener('click', () => {
    if (makeAPost.style.display === 'block') { 
       makeAPost.style.display = 'none' 
    } else {
        makeAPost.style.display = 'block'
    }
} )

function init(){

}




init();