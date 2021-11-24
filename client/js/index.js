const port = 3010;

const makeAPost = document.querySelector("#write-a-post");
const postArea = document.querySelector("#posts-area");
const button = document.querySelector("#write-a-post-button");
const home = document.querySelector('#homeButton')
const darkMode = document.querySelector('#dark-mode')
const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

makeAPost.style.display = "none";

darkMode.addEventListener("click" , makeDarkMode);

button.addEventListener("click", () => {
  if (makeAPost.style.display === "block") {
    makeAPost.style.display = "none";
  } else {
    makeAPost.style.display = "block";
  }
});


function data() {
  try{
    
    fetch("http://localhost:3010/entries")
    
      .then((r) => r.json())
      // .then(r=> console.log(r))
      .then((data) => {
        for (let tweet of data) {
          let dateInfo = tweet.date
          let idInfo = tweet.id;
          let titleInfo = tweet.title;
          let messageInfo = tweet.message;
          let giphyinfo = tweet.image;
          let likeInfo = tweet.likes;
          let dislikeInfo = tweet.dislikes;
          let loveInfo = tweet.love;
          let commentsInfo = tweet.comments;
          makeACard(
            dateInfo,
            idInfo,
            titleInfo,
            messageInfo,
            giphyinfo,
            likeInfo,
            dislikeInfo,
            loveInfo,
            commentsInfo
          );
          
        }
      })
    }
  catch(err){
    console.log(err);
  }
     ;
    }


function init() {
  countletters();
  data();
  makeNewPost();
}

home.addEventListener("click", (e) => {
  e.preventDefault();
  init();
})