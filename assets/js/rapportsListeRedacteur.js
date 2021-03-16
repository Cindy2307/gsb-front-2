const rapports = document.querySelector("#rapports");
const liste = document.querySelector("#idRapport");
let rapportId;

async function getRapports() {
    const url = 'http://localhost:3000/gsb/rapport';
    let response = "";

    const responseJson = await fetch(url)
        .catch((error) => {
            console.log(`Voici mon erreur ${error}`);
        });

    if (responseJson.status === 200) {
        response = await responseJson.json();
    }

    for (const rapport of response) {
        const date = new Date(rapport.date);

        rapports.insertAdjacentHTML('beforeEnd',
            `
                    <li>
                        <div class="card rapport${rapport.id}">
                            <div class="card-body d-flex justify-content-between py-1 px-1">
                                <div class="infos infos${rapport.id} d-flex justify-content-between">
                                    <span>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</span>
                                    <span>${rapport.motif.substr(0, 20)}...</span>
                                    <span>${rapport.bilan.substr(0, 20)}...</span>
                                </div>
                            </div>
                        </div>
                    </li>
                `
        );

        let rapportFiche = document.querySelector(`.infos${rapport.id}`);

        rapportFiche.addEventListener("click", (e) => {
            e.preventDefault();
            sessionStorage.setItem("rapportId", rapport.id);
            document.location.href = "../html/rapportFicheVuParRedacteur.html";
        })

        if (response.indexOf(rapport) < response.length - 1) {
            document.querySelector(`.rapport${rapport.id}`).style.marginBottom = "0.3%";
        }
    }
}

getRapports();

