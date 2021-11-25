/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 
 global.fetch = require('jest-fetch-mock');
 let app;
 let testCard = {
    dateInfo: "10:23, 23-11-2021",
    idInfo: 10,
    titleInfo:"This is a test title",
    messageInfo:"test message",
    giphyinfo:"no giphy",
    likeInfo: 1,
    dislikeInfo: 2,
    loveInfo: 3,
    commentsInfo: [
        "first",
        "second"
    ]
 }

 describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/app.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('dark mode', ()=>{
        test('it makes the screen go dark', ()=>{
            document.body.style.backgroundColor = "cadetblue"
            app.makeDarkMode()
            expect(document.body.style.backgroundColor).toEqual('black')
        })

        test('it makes the screen go cadeblue',()=>{
            document.body.style.backgroundColor = "black"
            app.makeDarkMode()
            expect(document.body.style.backgroundColor).toEqual('cadetblue')
        })
    })

    describe('counter', ()=>{
        test('increments counter', ()=>{
            const textarea = {value: 'Hello guys, this is a test'};
            const textArealength = textarea.value.length;
            const letters = app.countletters(textarea)
            expect(letters).toEqual(textArealength)
        })
    })

    describe('make a post button', () =>{
        test('hides make a post', ()=>{
            const makeAPost = document.querySelector("#write-a-post");
            makeAPost.style.display = "block";
            app.makePost(makeAPost)
            expect(makeAPost.style.display).toEqual("none")
        })

        test('shows make a post', ()=>{
            const makeAPost = document.querySelector("#write-a-post");
            makeAPost.style.display = "none";
            app.makePost(makeAPost)
            expect(makeAPost.style.display).toEqual("block")
        })
    })

    describe("commentbox", ()=>{
        test("shows",()=>{
            const commentbox = app.create("div");
            commentbox.style.display = "none";
            app.showCommentBox(commentbox);
            expect(commentbox.style.display).toEqual("block")
        })
        test("hides",()=>{
            const commentbox = app.create("div");
            commentbox.style.display = "block";
            app.showCommentBox(commentbox);
            expect(commentbox.style.display).toEqual("none")
        })
    })

    describe('make a card', ()=>{
        test('make a card exists', ()=>{
            //need to resolve promise to test
            expect(app.makeACard(testCard.dateInfo,testCard.idInfo,testCard.titleInfo,testCard.messageInfo,testCard.giphyinfo,testCard.likeInfo,testCard.dislikeInfo,testCard.loveInfo,testCard.commentsInfo)).toBeTruthy();
        })
        test('checks text content of date in card', ()=>{
            const date = app.create("d",testCard.dateInfo)
            expect(date.textContent).toContain(testCard.dateInfo)
        })

        test('populates a title h1 element',()=>{
            expect(app.create("img",testCard.giphyinfo).src).toBe("http://localhost/no%20giphy");
            expect(app.create("img",testCard.giphyinfo).nodeName).toBe("IMG")
        })

        // test('checks if make a post exists', ()=>{
        //     expect(app.makeAPost()).toBeTruthy();
        // })
    })



})