


function fetchUser() {
    fetch('./pictures.json')
    .then((res) => res.json())
    .then((data) => {
        
        displayUser(data.results[2]);
     });
}

function displayUser(user) {
    
    const userDisplay = document.querySelector('#user');

    // if(userDisplay.gender  === 'male') {
    //     document.body.style.backgroundColor = 'blue';
    // }else {
    //     document.body.style.backgroundColor = 'pink';
    // }
    userDisplay.innerHTML = `
        <div class= "flex flex-col justify-between">
        <div class="flex flex-col text-center items-center">
        <img src="${user.picture}" alt="picture of jerry applegarth" title="Jerry Applegarth"  >
        <div class="space-y-3 space-x-3">
        <p class="text-xl"><span class="font-bold">Name:</span> ${user.name}</p>
        <p class="tex-xl"><span class="font-bold">Email:</span> ${user.email}</p>
        <p class="tex-xl"><span class="font-bold">Cell:</span> ${user.cell}</p>
        <p class="tex-xl"><span class="font-bold">Age:</span> ${user.age}</p>
        
    `;
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();
