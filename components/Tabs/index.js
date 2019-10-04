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


function addTopics(topicInfo) {
    const title1 = document.createElement('javascript');
    const title2 = document.createElement('bootstrap');
    const title3 = document.createElement('technology');
    const title4 = document.createElement('jquery');    
    const title5 = document.createElement('node.js');

    title1.appendChild(title2);
    title1.appendChild(title3);
    title1.appendChild(title4);
    title1.appendChild(title5);

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

    console.log(title1.data); 
    console.log(addTopics.data);
    return title1;
}
