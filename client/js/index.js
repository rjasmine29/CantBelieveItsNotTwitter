const port = 3010;

const makeAPost = document.querySelector("#write-a-post");
makeAPost.style.display = 'none';
//const postArea = document.querySelector("#posts-area");
const button = document.querySelector("#write-a-post-button");
const home = document.querySelector('#homeButton')
const darkMode = document.querySelector('#dark-mode')
const textarea = document.querySelector('textarea');
// const count = document.querySelector('.count');


button.addEventListener("click", e => makePost(makeAPost))

darkMode.addEventListener("click" , makeDarkMode);

function data() {
  try{
    fetch("http://localhost:3010/entries")
    
      .then((r) => r.json())
      .then((data) => {
        const reversedList = data.reverse()
        for (let tweet of reversedList) {
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
  makeNewPost(makeAPost);
}

init();