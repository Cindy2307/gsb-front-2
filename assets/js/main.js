const connexion = document.querySelector("#connexion");

async function login() {

    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    
    const credential = window.btoa(login + ":" + password);
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
        switch (response.role) {
            case "VIS":
                location.href = "../../html/rapportsListe.html";
                break;
            case "RC":
                location.href = "../../html/rapportsListeRedacteur.html";
                break;
            case "RH":
                location.href = "../../html/utilisateursListe.html";
                break;
        }
    }
}

connexion.addEventListener("click", (e) => {
    e.preventDefault();
    login();
});
