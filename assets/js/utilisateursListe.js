const visiteurs = document.querySelector("#visiteurs");
let visiteurDelete = "";
let updateId = "";

async function getVisiteurs() {
    const url = 'http://localhost:3000/gsb/visiteur';
    let response = "";

    const responseJson = await fetch(url)
        .catch((error) => {
            console.log(`Voici mon erreur ${error}`);
        });

    if (responseJson.status === 200) {
        response = await responseJson.json();
    }

    for (const visiteur of response) {
        visiteurs.insertAdjacentHTML('beforeEnd',
            `
                    <li>
                        <div class="card visiteur${visiteur.id}">
                            <div class="card-body">
                                <div class="infos${visiteur.id}">
                                    ${visiteur.nom}<br>
                                </div>
                                <div class="boutons">    
                                    <button class="modifier modifierVisiteur${visiteur.id}"><i class="fas fa-pen"></i></button>
                                    <button class="supprimer supprimerVisiteur${visiteur.id}"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </li>
                `
        );

        if (response.indexOf(visiteur) < response.length - 1) {
            document.querySelector(`.visiteur${visiteur.id}`).style.marginBottom = "0.3%";
        }
    }
}

getVisiteurs();


