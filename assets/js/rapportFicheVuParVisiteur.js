const dateRapport = document.querySelector("#date");
const motif = document.querySelector("#motif");
const bilan = document.querySelector("#bilan");
const mofifier = document.querySelector("#modifier");
const supprimer = document.querySelector("#supprimer");
const logo = document.querySelector("#logo");
let rapportId;

logo.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "../html/rapportsListe.html";
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
        sessionStorage.setItem("bilan", response.bilan);
        sessionStorage.setItem("motif", response.motif);

        supprimer.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Voulez-vous vraiment supprimer ce rapport?")) {
                rapportId = response.id;
                deleteRapport();
            }
        })
    } 
}

modifier.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "../html/modifierRapport.html";
})

getRapportById();

