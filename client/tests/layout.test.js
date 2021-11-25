/**
 * @jest-environment jsdom
 */
 const fs = require('fs');
 const path = require('path');
 const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 describe('index.html', () => {
     beforeEach(() => {
         document.documentElement.innerHTML = html.toString();
     })
     describe('head', () => {
         test('it has a title', () => {
             const title = document.querySelector('head title');
             expect(title).toBeTruthy();
             expect(title.textContent).toBe("Community Journal")
         })
     })
     describe('body', () => {
         describe('There is a h1', () => {
             let h1;
             beforeEach(() => {
                 h1 = document.querySelector('h1')
             })
             test('it exists', () => {
                 expect(h1).toBeTruthy();
             })
             test('it contains the word welcome', () => {
                 expect(h1.innerHTML).toBe('Welcome<i class="fas fa-book"></i>')
             })
         })
         describe('There is a button', () => {
             let button;
             beforeEach(() => {
                 button = document.querySelector('#dark-mode')
             })
             test('it exists', () => {
                 expect(button).toBeTruthy();
             })
             test('it turns background color to black', () => {
                 expect(document.body.style.backgroundColor = 'black').toContain('black')
             })
         })
         describe('There is a home button', () => {
             let button;
             beforeEach(() => {
                 button = document.querySelector('#homeButton')
             })
             test('it exists', () => {
                 expect(button).toBeTruthy();
             })
             
         })
         
         describe('form', () => {
             let form;
             let postTitle, postGiphy, postMessage;
             beforeEach(() => {
                 form = document.querySelector('#postForm')
                 postTitle = document.querySelector('#postTitle');
                 postGiphy = document.querySelector('#postGiphy');
                 postMessage = document.querySelector('#postMessage');
                 submitBtn = form.querySelector('[type="submit"]');
             })
     
             test('it exists', () => {
                 expect(form).toBeTruthy();
             });
     
             describe('form inputs', () => {
                 test('Title has an id of postTitle', () => {
                     expect(postTitle).toBeTruthy();
                 })
                 test('it has an id of postGiphy', () => {
                     expect(postGiphy).toBeTruthy();
                 })
         
                 test('the post message has a max length of 250', () => {
                     expect(postMessage).toBeTruthy();
                 })
             })
     
             describe('submit button', () => {
                 test('it says "Send', () => {
                     expect(submitBtn.value).toBe('Send');
                 })
             })
         })
         test('it has a section to display posts', () => {
             expect(document.querySelector('#posts-area')).toBeTruthy();
         })
     })
 })