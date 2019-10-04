// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const axios = require('axios');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
        console.log(response.data);
    })
.catch(error => {
    console.log("The data was not returned", error);
});





const newTopics = document.querySelector('.topics')

function addTopics(div, tab, topic, content) {
    const maintitle = document.createElement('div');
    const title1 = document.createElement('javascript');
    const title2 = document.createElement('bootstrap');
    const title3 = document.createElement('technology');
    const title4 = document.createElement('jquery');    
    const title5 = document.createElement('node.js');

    maintitle.appendChild(title1);
    maintitle.appendChild(title2);
    maintitle.appendChild(title3);
    maintitle.appendChild(title4);
    maintitle.appendChild(title5);

    maintitle.classList.add('tab')
    title1.classList.add('javascript');
    title2.classList.add('bootstrap');
    title3.classList.add('technology');
    title4.classList.add('jquery');
    title5.classList.add('node.js');

    title1.textContent = "JavaScript";
    title2.textContent = "Bootstrap";
    title3.textContent = "Technology";
    title4.textContent = "JQUERY";
    title5.textContent = "Node.js";

    maintitle.addEventListener("click", () => {
        maintitle.classList.toggle("selected");
    });

    console.log(maintitle.data); 
    console.log(title1.data);
    console.log(addTopics.data);
    return maintitle;
}
newTopics.appendChild(addTopics());

// newTopics.appendChild(addTopics(data.title1, data.title2, data.title3, data.title4, data.title5));


// window.onload = () => addTopics.forEach(addTopics => {
//     newTopics.appendChild(addTopics(data.title1, newTopics.title2, newTopics.title3, newTopics.title4, newTopics.title5))
// });