const nom = document.querySelector("#nom");
const creer = document.querySelector("#creer");
const form = document.querySelector("form");
const logo = document.querySelector("#logo");
logo.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "../html/utilisateursListe.html";
});

async function createUtilisateur() {
    const url = `http://localhost:3000/gsb/visiteur`;
    let response = "";
    const formData = new FormData(form);
    let object = {};

    formData.forEach(function (value, key) {
        object[key] = value;
    });

    const responseJson = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .catch((error) => {
            console.log(`Voici mon erreur ${error}`);
        });

    if (responseJson.status === 200) {
        response = await responseJson.json();
        alert("Le visiteur a bien été créé.");
        document.location.href = "../html/utilisateursListe.html";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createUtilisateur();
});
