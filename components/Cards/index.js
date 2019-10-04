import Axios from "axios";

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
Axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log("The data was not returned", error);
});
const cards = document.querySelector("card");

function newCard (headline, div, img, span) {
    const card1 = document.createElement('div');
    const headlineArticle = document.createElement('div');
    const authorDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    const authorName = document.createElement('span');

    card1.appendChild(headlineArticle);
    card1.appendChild(authorDiv);
    card1.appendChild(cardImg);
    card1.appendChild(authorName);

    card1.classList.add('card');
    headlineArticle.classList.add('headline');
    authorName.classList.add('author');
    
    cardImg.src = img;
    headlineArticle.textContent = `${Headline}`;
    authorName.textContent = `By ${author}`;
    
    console.log(response.data);
    return card1;
}
cards.appendChild(newCard());
console.log(newCard.data);
console.log(`${Headline}`);
console.log(`By ${author}`);
