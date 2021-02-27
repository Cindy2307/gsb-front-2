const dateRapport = document.querySelector("#date");
const motif = document.querySelector("#motif");
const bilan = document.querySelector("#bilan");
const logo = document.querySelector("#logo");
let rapportId;

//Evenement pour revenir a la page liste des rapports
logo.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "../html/rapportsListeRedacteur.html";
});

async function getRapportById() {
    const url = `http://localhost:3000/gsb/rapport/${sessionStorage.getItem("rapportId")}`;
    let response = "";

    const responseJson = await fetch(url)
    .catch((error) => {
        console.log(`Voici mon erreur ${error}`);
    });

    if (responseJson.status === 200) {
        response = await responseJson.json();
        const date = new Date(response.date);
        const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
                
        motif.insertAdjacentHTML("beforeend", response.motif);
        bilan.insertAdjacentHTML("beforeend", response.bilan);
        dateRapport.insertAdjacentHTML("beforeend", `${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}`);
    }
}

getRapportById();