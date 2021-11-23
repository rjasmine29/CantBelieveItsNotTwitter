const port = 3010;

const makeAPost = document.querySelector("#write-a-post");
makeAPost.style.display = "none"; //makes form invisible to start
const postArea = document.querySelector("#posts-area");
const button = document.querySelector("#write-a-post-button");
button.addEventListener("click", () => {
  if (makeAPost.style.display === "block") {
    makeAPost.style.display = "none";
  } else {
    makeAPost.style.display = "block";
  }
});
function init() {
  data();
}

function data() {
  fetch("http://localhost:3010/entries")
    .then((r) => r.json())
    .then((data) => {
      for (let tweet of data) {
        let titleInfo = tweet.title;
        const title = document.createElement("h1");
        title.textContent = titleInfo;
        let message1 = tweet.message;
        const message2 = document.createElement("p");
        message2.textContent = message1;
        let giphyinfo = tweet.image;
        let likeInfo = tweet.likes;
        let dislikeInfo = tweet.dislikes;
        let loveInfo = tweet.love;
        const image = document.createElement("img");
        image.src = giphyinfo;
        const singlePost = document.createElement("div");
        const buttonArea = document.createElement("div");
        buttonArea.className = "button-area";
        singlePost.className = "card";
        singlePost.appendChild(title);
        singlePost.appendChild(message2);
        singlePost.appendChild(image);
        postArea.appendChild(singlePost);
        const love = document.createElement("button");
        const like = document.createElement("button");
        const dislike = document.createElement("button");
        const likeCount = document.createElement("p");
        const dislikeCount = document.createElement("p");
        const loveCount = document.createElement("p");
        // likeCount.textContent = `${checkCount(like)}`
        love.className = "btn btn-lg btn-dark";
        like.className = "btn btn-lg btn-dark";
        dislike.className = "btn btn-lg btn-dark";
        love.textContent = "💙";
        like.textContent = "👍";
        dislike.textContent = "👎";
        buttonArea.appendChild(love);
        buttonArea.appendChild(like);
        buttonArea.appendChild(dislike);
        buttonArea.appendChild(likeCount);
        buttonArea.appendChild(loveCount);
        buttonArea.appendChild(dislikeCount);
        
        singlePost.appendChild(buttonArea);
        const comment = document.createElement("button");
        comment.className = "btn btn-lg btn-dark";
        comment.textContent = "comments";
        buttonArea.appendChild(comment);
        const commentbox = document.createElement("div");
        const form = document.createElement("form");
        const input = document.createElement("input");
        const submit = document.createElement("input");
        form.id = 'comment-form';
        submit.textContent = "Submit tweet";
        input.type = "text";
        form.method = "POST";
        input.placeholder = "Write your comment here...";
        submit.type = "Submit";
        submit.id = 'reply';
        form.appendChild(input);
        form.appendChild(submit);
        commentbox.appendChild(form);
        singlePost.appendChild(commentbox);
        input.className ="message";
        submit.className = "btn btn-lg btn-dark";
        commentbox.style.display = "none";
        comment.addEventListener("click", () => {
          if (commentbox.style.display === "block") {
            commentbox.style.display = "none";
          } else {
            commentbox.style.display = "block";
          }
        });
        count = document.querySelector("#count");
        let clicked = false;
        like.addEventListener("click", () => {
          likeCount.textContent++;
        });
        dislike.addEventListener("click", () => {
          dislikeCount.textContent++;
        });
        love.addEventListener("click", () => {
          loveCount.textContent++;
        });
    }})
    .then(r => {
      const reply = document.querySelector('#comment-form')
      reply.addEventListener('submit', e =>{
        e.preventDefault();
        console.log(e.target.message.value)
      })
    })
    .catch(console.warn)

}





const postForm = document.querySelector("#postForm");
postForm.addEventListener("submit", (e) => {
  console.log("Submitted");
  e.preventDefault();
  const postData = {
    title: e.target.postTitle.value,
    message: e.target.postMessage.value,
    image: e.target.postGiphy.value,
    like: 0,
    dislikes: 0,
    loves: 0,
    comments: [],
  };
  console.log(postData);
  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch(`http://localhost:${port}/entries`, options).then(postData => console.log(postData));
});

init();