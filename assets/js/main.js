const connexion = document.querySelector("#connexion");

async function login() {
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    const credential = window.btoa(login + ":" + password);
    console.log(credential);
    const url = "http://localhost:3002/gsb/login";
    let response = "";

    const responseJson = await fetch(url, {
        headers: {
            "test": "test",
            "Content-Type": "application/json",
            "Authorization": "Basic Q29jbzpjb3Vjb3U="
        },
        mode: "no-cors",
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
