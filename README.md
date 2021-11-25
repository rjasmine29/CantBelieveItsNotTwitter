# Can't Believe It's Not Twitter

### By Menelaos Kaskiris, Angela Dyrmishi, Rhys Cairns, Jasmine Raja
A community journaling website, where users can anonymously post and react to others' posts.

## Installation & Usage
### Installation

* Clone or download the repo.
* Open terminal and navigate to the CantBelieveItsNotTwitter folder.
* Run `npm install`, `npm i jest -D supertest`, `npm install cors` and `npm install express` to install all dependencies. 
_Or
* If you are accessing the site as a user, go to <https://kind-tesla-f16978.netlify.app/>

### Usage
#### Dev
* Navigate to the server folder and run `npm run dev` to launch the server.
* Run `npm test` to launch the test suite.
* Run `npm run coverage` to launch the test for coverage.
* Right click on the index.html file in the client folder and select Open with Live Server to view the website.

## Technologies
* HTML/CSS for the static elements of the website.
* Javascript for the dynamic elements.
* Netlify to deploy the front end.
* Heroku to deploy the back end.

## Process
* Drafted the layout of the website where a one page design was decided on and sorted the team into a smaller front-end and back-end team.
* Front-end created a skeleton website using HTML and CSS whilst back-end set up the server and routes to be used.
* Front-end created dynamic elements that would be created depending on the user's interactions with the site.
* Team worked together to implement post methods so users could send posts/comments and they could be retrieved.
* Created tests for front-end and back-end before deploying to find bugs in the code.
* Deployed the site to function.

## Wins & Challenges
### Wins
* All requirements in the brief were met.
* A 'Dark Mode' option was implemented to give the user some choice on the website's appearance.
* The time and date of when the post was submitted can be seen for each post on the website.
* Users can see other people's comments on all posts.
* Users can see how many characters they've used in their entry.

### Challenges
* Had to go through a lot of trial and error to get the post method to work for the entries and relevant comments to that entry.
* Tests for the front end weren't initially being recognised by jest.
* Many elements were being created dynamically within a fetch which made accessing the elements difficult.

## Bugs
* Some front-end tests are failing.
* The page has to refresh in order for any interaction the user makes to be reflected on the website.

## Future features
* Filter posts on title or content.
* Let users choose their gif from within the website by introducing a search bar that brings back gif results.
* Allow users to make a profile so users can delete their own comments or posts.
* Page to update automatically without refreshing.
* Let users have more choice over the look of their post i.e. choosing background color, fonts and adding elements like lists or emphasised text.

## Testing
Overall coverage: **????**
### Front end
Coverage: 80.4%
* Testing was performed on the app functionality and layout of the HTML. All HTML tests passed successfully.
* Due to a lack of understanding with mock testing, it was difficult for us to complete the app testing. 

### Back end 
Coverage: 100%
* Testing was performed on routes and functions' functionality. All tests passed succesfully.

![Coverage](![image](https://user-images.githubusercontent.com/55515038/143484351-ba35372a-f451-4892-98d0-b5de17340180.png)
