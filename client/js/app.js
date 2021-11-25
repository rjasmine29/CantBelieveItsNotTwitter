//const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');
const postArea = document.querySelector("#posts-area");

function makeACard(dateInfo,idInfo,titleInfo,messageInfo,giphyinfo,likeInfo,dislikeInfo,loveInfo,commentsInfo){
    //Create Title, message and Giphy
    const date = create("p",dateInfo)
    //console.log(dateInfo)
    const title = create("h1",titleInfo)
    const message2 = create("p",messageInfo);
    const image = create("img",giphyinfo)

    //Create Button Area with three buttons and three attaching paragraphs
    const buttonArea = create("div","");
    //console.log(typeof(buttonArea))
    buttonArea.className = "button-area";
    const love = create("button", "💙");
    const like = create("button", "👍");
    const dislike = create("button", "👎");
    const likeCount = create("p", likeInfo);
    const dislikeCount = create("p", dislikeInfo);
    const loveCount = create("p", loveInfo);

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
    const comment = create("button", "comments");
    comment.className = "btn btn-lg btn-dark";
    buttonArea.appendChild(comment);
    const commentbox = create("div");
    const form = create("form");
    const input = create("input");
    const submit = create("button","Submit tweet");

    input.type = "text";
    input.placeholder = "Write your comment here...";
    input.id = "commentInput";
    input.className = "comment-message";

    submit.type = "submit";
    submit.className = "btn btn-lg btn-dark";
    submit.id = "submitButton";

    for (let i in commentsInfo) {
      //console.log(commentsInfo);
        const comment = create("p", commentsInfo[i])
        commentbox.appendChild(comment);
      }

    form.appendChild(input);
    form.appendChild(submit);
    commentbox.appendChild(form);
    commentbox.style.display = "none";

     //Create card and add components to it
     const singlePost = create("div");
     singlePost.className = "card";

    singlePost.appendChild(date)
    singlePost.appendChild(title);
    singlePost.appendChild(message2);
    singlePost.appendChild(image)
    postArea.appendChild(singlePost);
    singlePost.appendChild(buttonArea);
    singlePost.appendChild(commentbox);


    comment.addEventListener("click", (e) => {
      showCommentBox(commentbox)
    });

    //event listener of comments
    form.addEventListener("submit", (e) => {
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
      fetch(`http://localhost:${port}/entries/${idInfo}/likes`)
    })

    love.addEventListener('click', e =>{
      fetch(`http://localhost:${port}/entries/${idInfo}/love`)
    })

    dislike.addEventListener('click', e =>{
      fetch(`http://localhost:${port}/entries/${idInfo}/dislikes`)
    })
}

function create(type, info = ""){
  if(type == 'img'){
    console.log(info)
    const img = document.createElement(type);
    img.src = info;
    return img;
  }else{
    const item = document.createElement(type);
    item.textContent = info;
    return  item;
  }
}

function showCommentBox(commentbox){
  if (commentbox.style.display === "none") {
    commentbox.style.display = "block";
  } else {
    commentbox.style.display = "none";
  }
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
  //console.log(count.textContent)
  const textLength = textarea.value.length;
  //console.log(textLength)
  count.textContent = `${textLength}`;
  return textLength;
}

function makeDarkMode(){
    if (document.body.style.backgroundColor === "cadetblue" ) {
      document.body.style.backgroundColor = "black"
    } else {
      document.body.style.backgroundColor = "cadetblue"
    }
};

function makePost(makeAPost){
  if (makeAPost.style.display == "block") {
    makeAPost.style.display = "none";
  } else if(makeAPost.style.display == "none"){
    makeAPost.style.display = "block";
  }
};
      
module.exports = {
  makePost,
  makeACard,
  makeNewPost,
  countletters,
  makeDarkMode,
  create,
  showCommentBox
}