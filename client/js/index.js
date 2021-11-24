const port = 3010;

const makeAPost = document.querySelector("#write-a-post");
makeAPost.style.display = "none"; //makes form invisible to start
const postArea = document.querySelector("#posts-area");
const button = document.querySelector("#write-a-post-button");
const home = document.querySelector('#homeButton')
const darkMode = document.querySelector('#dark-mode')

darkMode.addEventListener("click" , () => {
  if (document.body.style.backgroundColor === "cadetblue" ) {
    document.body.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = "cadetblue"
  }
})

//"#2da19cb9"

button.addEventListener("click", () => {
  if (makeAPost.style.display === "block") {
    makeAPost.style.display = "none";
  } else {
    makeAPost.style.display = "block";
  }
});

home.addEventListener("click", (e) => {
  e.preventDefault();
  init();
})
function init() {

  data();
  makeNewPost();
}




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

