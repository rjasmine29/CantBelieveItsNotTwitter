function makeACard(dateInfo,idInfo,titleInfo,messageInfo,giphyinfo,likeInfo,dislikeInfo,loveInfo,commentsInfo){
      //Create Title, message and Giphy
      const date = document.createElement("p")
      date.textContent = dateInfo
      console.log(dateInfo)
      const title = document.createElement("h1");
      title.textContent = titleInfo;
      const message2 = document.createElement("p");
      message2.textContent = messageInfo;
      const image = document.createElement("img");
      image.src = giphyinfo;
  
      //Create Button Area with three buttons and three attaching paragraphs
      const buttonArea = document.createElement("div");
      buttonArea.className = "button-area";
      const love = document.createElement("button");
      const like = document.createElement("button");
      const dislike = document.createElement("button");
      const likeCount = document.createElement("p");
      const dislikeCount = document.createElement("p");
      const loveCount = document.createElement("p");
      love.textContent = "💙";
      like.textContent = "👍";
      dislike.textContent = "👎";
      loveCount.textContent = loveInfo
      likeCount.textContent = likeInfo
      dislikeCount.textContent = dislikeInfo
      buttonArea.appendChild(love);
      buttonArea.appendChild(loveCount);
      buttonArea.appendChild(like);
      buttonArea.appendChild(likeCount);
      buttonArea.appendChild(dislike);
      buttonArea.appendChild(dislikeCount);
  
      //Give button styling
      love.className = "btn btn-lg btn-dark";
      like.className = "btn btn-lg btn-dark";
      dislike.className = "btn btn-lg btn-dark";
  
      //Comments Area
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
      input.placeholder = "Write your comment here...";
      input.id = "commentInput";
      submit.type = "submit";
      input.className = "comment-message";
      submit.className = "btn btn-lg btn-dark";
      submit.id = "submitButton";

      


      for (let i in commentsInfo) {
        console.log(commentsInfo);
          const comment = document.createElement("p")
          comment.textContent = commentsInfo[i];
          commentbox.appendChild(comment);
        }
      

    form.appendChild(input);
    form.appendChild(submit);
    commentbox.appendChild(form);
    commentbox.style.display = "none";


     //Create card and add components to it
     const singlePost = document.createElement("div");
     singlePost.className = "card";
     singlePost.appendChild(date)
     singlePost.appendChild(title);
     singlePost.appendChild(message2);
     singlePost.appendChild(image)
     postArea.appendChild(singlePost);
     singlePost.appendChild(buttonArea);
     singlePost.appendChild(commentbox);


     comment.addEventListener("click", () => {
        if (commentbox.style.display === "none") {
          commentbox.style.display = "block";
        } else {
          commentbox.style.display = "none";
        }
      });
  
      //event listener of comments
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Submitted");
        const commentValue = {
          code: e.target.commentInput.value,
          id: 1
        };

        const options = {
          method: "POST",
          body: JSON.stringify(commentValue),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(`http://localhost:${port}/entries/${idInfo}/add`, options)
        })

      like.addEventListener('click', e =>{
        e.preventDefault();
        e.stopImmediatePropagation();
       fetch(`http://localhost:${port}/entries/${idInfo}/likes`)
      })

      love.addEventListener('click', e =>{
        e.preventDefault();
        fetch(`http://localhost:${port}/entries/${idInfo}/love`)
      })

      dislike.addEventListener('click', e =>{
        e.preventDefault();
        fetch(`http://localhost:${port}/entries/${idInfo}/dislikes`)
      })
    }

    
function makeNewPost() {
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
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          };
          fetch(`http://localhost:${port}/entries`, options).then((postData) =>
            console.log(postData)
          );
        });
    
      }

function countletters() {
const textLength = textarea.value.length;
count.innerText = `${textLength}`;
}

function makeDarkMode() 
{
    if (document.body.style.backgroundColor === "cadetblue" ) {
      document.body.style.backgroundColor = "black"
    } else {
      document.body.style.backgroundColor = "cadetblue"
    }
};
      