const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function makeCard(userArray){
userArray.forEach(index =>{
axios.get(`https://api.github.com/users/${index}`)
.then(res =>{
  console.log(res.data);
  document.querySelector('.cards').appendChild(profileMaker(res.data))
})
.catch(err => console.error(err))

})}    
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 'jcep54','tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

   
*/
function profileMaker(profileObj){
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.className = 'card';
  cardInfo.className = 'card-info';
  name.className = 'name';
  userName.className = 'username';

  image.src = profileObj.avatar_url;
  image.alt = 'github user';
  name.textContent = profileObj.name;
  userName.textContent = profileObj.login;
  location.textContent = profileObj.location;
  profile.textContent = 'Profile';
  followers.textContent = `Followers: ${profileObj.followers}`;
  following.textContent = `Following: ${profileObj.following}`;
  bio.textContent = profileObj.bio;
  profileLink.href = profileObj.html_url;
  profileLink.textContent = 'Link to profile';

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  console.log(card)
  //!!!!!!!!APPEND AFTER ASSIGNING VALUES!!!!!!!!

  return card
}
makeCard(followersArray);
// console.dir(profileMaker().outerHTML);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
