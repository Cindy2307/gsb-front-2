const rapports = document.querySelector("#rapports");

async function getRapportByVisiteurId() {
    const url = `http://localhost:3000/gsb/visiteur/3/rapport`;
    let response = "";

    const responseJson = await fetch(url)
        .catch((error) => {
            console.log(`Voici mon erreur ${error}`);
        });

    if (responseJson.status === 200) {
        response = await responseJson.json();
    }

    for (let rapport of response) {
        const date = new Date(rapport.date);

        rapports.insertAdjacentHTML('beforeEnd',
            `
                <li>
                    <div class="card rapports${rapport.id}">
                        <div class="card-body">
                            <div class="infos infos${rapport.id}">
                                <span>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</span>
                                <span>${rapport.motif}</span>
                                <span>${rapport.bilan}</span>
                            </div>
                            <div class="boutons">    
                                <button class="modifier modifierRapport${rapport.id}"><i class="fas fa-pen"></i></button>
                                <button class="supprimer supprimerRapport${rapport.id}"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </li>
            `
        );

        if (response.indexOf(rapport) < response.length - 1) {
            document.querySelector(`.rapports${rapport.id}`).style.marginBottom = "0.3%";
        }
    }
}

getRapportByVisiteurId();
