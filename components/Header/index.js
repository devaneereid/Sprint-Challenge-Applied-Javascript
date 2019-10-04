// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const header1 = document.querySelector(".header-container");

function Header(title, span, date, temp, items) {
    const articleHeader = document.createElement('div');
    const articleDate = document.createElement('span');
    const articleTitle = document.createElement('h1');
    const articleTemp = document.createElement('span');

    articleHeader.appendChild(articleDate);
    articleHeader.appendChild(articleTitle);
    articleHeader.appendChild(articleTemp);

    articleHeader.classList.add('header');
    articleDate.classList.add('date');
    articleTitle.classList.add('h1');
    articleTemp.classList.add('temp');

    articleDate.textContent = date;
    articleTitle.textContent = title;
    articleTemp.textContent = temp;

//  var element = document.getElementById("div");
//  element.appendChild("span");

return newHeader;
}
window.onload = () => header1.forEach(header1=>{
header1.appendChild(Header(header1.date, header1.title, header1.temp))
});