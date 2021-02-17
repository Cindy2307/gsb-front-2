const form = document.querySelector("form");
const bilan = document.querySelector("#bilan");
const motif = document.querySelector("#motif");
const annuler = document.querySelector("#annuler");
const logo = document.querySelector("#logo");

bilan.insertAdjacentHTML("beforeend", sessionStorage.getItem("bilan"));
motif.insertAdjacentHTML("beforeend", sessionStorage.getItem("motif"));
annuler.addEventListener("click", (e) => {
    document.location.href = "../html/rapportsListe.html"
});

logo.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "../html/rapportsListe.html";
});

async function updateRapport() {
    const url = `http://localhost:3000/gsb/rapport/${sessionStorage.getItem("rapportId")}`;
    let response = "";
    const formData = new FormData(form);
    let object = {};

    formData.forEach(function(value, key){
        object[key] = value;
    });

    const responseJson = await fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .catch((error) => {
        console.log(`Voici mon erreur ${error}`);
    });
   
    if (responseJson.status === 200) {
        response = await responseJson.json();
        alert("Le rapport a bien été modifié.");
        document.location.href="../html/rapportFicheVuParVisiteur.html"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateRapport();
})

