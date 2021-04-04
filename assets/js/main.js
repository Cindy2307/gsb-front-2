const connexion = document.querySelector("#connexion");
// connexion.addEventListener("click", (e) => {
//     e.preventDefault();
    
// });
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic Q29jbzQ6Y291Y291NA==");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Cookie", "JSESSIONID=8DE2D6B332466F5F537E6C0802649E12");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
  
//   fetch("localhost:3002/gsb/visiteur", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

async function login() {

    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    
    const credential = window.btoa(login + ":" + password);
    alert(login+password)
    console.log(credential);
    const url = "http://localhost:3002/gsb/login";
    let response = "";

    const responseJson = await fetch(url, {
        
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + credential
        },
    })
        .catch((error) => {
            console.log(`Voici mon erreur ${error}`);
        });

    if (responseJson.status === 200) {
        response = await responseJson.json();
        console.log(response);
    }
}

connexion.addEventListener("click", (e) => {
    e.preventDefault();
    login();
});
