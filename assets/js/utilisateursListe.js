const visiteurs = document.querySelector("#visiteurs");
let visiteurDelete = "";
let updateId = "";

async function getVisiteurs() {
    const url = 'http://localhost:3002/gsb/visiteur';
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
                            <div class="card-body d-flex justify-content-between py-0 px-1">
                                <div class="conteneurInfos py-1 px-0">
                                    <div class="infos infos${visiteur.id}">
                                        ${visiteur.nom}<br>
                                    </div>
                                </div>
                                <div class="boutons d_flex justify-content-end py-1 px-0">    
                                    <button class="modifier modifierVisiteur${visiteur.id} mr-2 text-primary bg-white"><i class="fas fa-pen"></i></button>
                                    <button class="supprimer supprimerVisiteur${visiteur.id} text-danger bg-white"><i class="fas fa-trash-alt"></i></button>
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


