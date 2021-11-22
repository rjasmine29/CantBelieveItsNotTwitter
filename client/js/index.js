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

function init(){
    data();
}

function data() {
  fetch("http://localhost:3000/entries")
    .then((r) => r.json())
    .then((data) => {
      for (let tweet of data) {
        let titleInfo = tweet.title;
        const title = document.createElement("h1");
        title.textContent = titleInfo;
        let message1 = tweet.message;
        const message2 = document.createElement("p");
        message2.textContent = message1;
        const singlePost = document.createElement("div");
        const buttonArea = document.createElement("div");
        buttonArea.className = "button-area";
        singlePost.className = "card";
        singlePost.appendChild(title);
        singlePost.appendChild(message2);
        postArea.appendChild(singlePost);
        const love = document.createElement("button");
        const like = document.createElement("button");
        const dislike = document.createElement("button");
        love.className = "btn btn-lg btn-dark";
        like.className = "btn btn-lg btn-dark";
        dislike.className = "btn btn-lg btn-dark";
        love.textContent = "💙";
        like.textContent = "👍";
        dislike.textContent = "👎";
        buttonArea.appendChild(love);
        buttonArea.appendChild(like);
        buttonArea.appendChild(dislike);
        singlePost.appendChild(buttonArea);
        const comment = document.createElement("button");
        comment.className = "btn btn-lg btn-dark";
        comment.textContent = "comments";
        buttonArea.appendChild(comment);
        const commentbox = document.createElement("div");
        const form = document.createElement("form");
        const input = document.createElement("input");
        const submit = document.createElement("button");
        submit.textContent = "Submit tweet";
        input.type = "text";
        form.method = "POST";
        input.placeholder = "Write your comment here...";
        submit.type = "Submit";
        form.appendChild(input);
        form.appendChild(submit);
        commentbox.appendChild(form);
        singlePost.appendChild(commentbox);
        input.className = "comment-message";
        submit.className = "btn btn-lg btn-dark";
        commentbox.style.display = "none";
        comment.addEventListener("click", () => {
          if (commentbox.style.display === "block") {
            commentbox.style.display = "none";
          } else {
            commentbox.style.display = "block";
          }
        });
      }
    });
}

const postForm = document.querySelector('#postForm');
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hi ')
})





//for(let i in data) - go in to an object
//for(let i of data) - go through an array

// function title() {
//     for (let i=0; i< data.length; i++) {
//         console.log(data[i])
//     }
// }
//http://localhost:3000/entries

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


init();
