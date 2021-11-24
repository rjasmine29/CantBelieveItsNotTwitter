

const port = 3010;

const makeAPost = document.querySelector("#write-a-post");
makeAPost.style.display = "none"; //makes form invisible to start
const postArea = document.querySelector("#posts-area");
const button = document.querySelector("#write-a-post-button");
const home = document.querySelector('#homeButton')
button.addEventListener("click", () => {
  if (makeAPost.style.display === "block") {
    makeAPost.style.display = "none";
  } else {
    makeAPost.style.display = "block";
  }
});

function makePage(){
  fetch("http://localhost:3010/entries")
    .then((r) => r.json())
    .then(appendPosts)
    .catch(console.warn)
}

function appendPosts(posts){
  posts.forEach(appendPost)
}

function appendPost(tweet){
  let idInfo = tweet.id;
  let titleInfo = tweet.title;
  const title = document.createElement("h1");
  title.textContent = titleInfo;
  let message1 = tweet.message;
  const message2 = document.createElement("p");
  message2.textContent = message1;
  let giphyinfo = tweet.image;
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
  const submit = document.createElement("button");
  const comments = tweet.comments
  //console.log(`Type of comment is: ${typeof(comments)}`)
  if(comments){
    for(let i of comments) {
      const newComment = document.createElement('p');
      newComment.textContent = i
      commentbox.appendChild(newComment);
    }
  }
  submit.textContent = "Submit tweet";
  input.type = "text";
  input.placeholder = "Write your comment here...";
  input.id = "commentInput";
  submit.type = "submit";
  input.className = "comment-message";
  submit.className = "btn btn-lg btn-dark";
  submit.id = "submitButton";
  submit.removeAttribute('onclick')

  form.appendChild(input);
  form.appendChild(submit);
  commentbox.appendChild(form);
  singlePost.appendChild(commentbox);
  commentbox.style.display = "none";

  makeCommentBox(comment,commentbox);

  //event listener of comments
  form.addEventListener("submit", (e) => {
    e.stopImmediatePropagation();
    console.log("Submitted");
    submitComment(e, idInfo, commentbox);
    e.preventDefault();
  })
}

function submitComment(e, idInfo, commentbox){
  const commentValue = {
    code: e.target.commentInput.value,
    id: 1
  };

  console.log(commentValue.code)
  const options = {
    method: "POST",
    body: JSON.stringify(commentValue),
    headers: {
      "Content-Type": "application/json",
    },
    
  };
  debugger;
   fetch(`http://localhost:${port}/entries/${idInfo}/add`, options)
    // .then(r=>r.json())
    .then(console.log)
    //.then(r => appendComment(r,commentbox))

}

function makeCommentBox(comment,commentbox){
  comment.addEventListener("click", (e) => {
    e.preventDefault();
    if (commentbox.style.display === "block") {
      commentbox.style.display = "none";
    } else {
      commentbox.style.display = "block";
    }
  });
}

function appendComment(response, commentbox){
  const newComment = document.createElement('p');
      newComment.textContent = response;
      commentbox.appendChild(newComment);
}

home.addEventListener('click',e =>{
    makePage();

        // like.addEventListener('click', e =>{
        //   e.preventDefault();
        //   e.stopImmediatePropagation();
        //   fetch(`http://localhost:${port}/entries/${idInfo}/likes`)
        // })

        // love.addEventListener('click', e =>{
        //   e.preventDefault();
        //   fetch(`http://localhost:${port}/entries/${idInfo}/love`)
        // })

        // dislike.addEventListener('click', e =>{
        //   e.preventDefault();
        //   fetch(`http://localhost:${port}/entries/${idInfo}/dislikes`)
        // })
  })


const postForm = document.querySelector("#postForm");
const submit =document.querySelector('#form-btn')
submit.removeAttribute('onsubmit')
submit.removeAttribute('onclick')
postForm.addEventListener("submit", (e) => {
  
  e.preventDefault();
  e.stopPropagation();
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
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  fetch(`http://localhost:${port}/entries`, options)
    // .then(r=>r.json())
});
