const visiteurs = document.querySelector("#visiteurs");
let visiteurDelete = "";
let updateId = "";

const getVisiteurs = () => {
    const url = 'http://localhost:3000/gsb/visiteur';
    fetch(url)
    .then(response => response.json())
        .then((data) => {
        for (const visiteur of data) {
            const date = new Date(visiteur.dateEmbauche);
            const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
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
            
            if (data.indexOf(visiteur) < data.length - 1) {
                document.querySelector(`.visiteur${visiteur.id}`).style.marginBottom = "0.3%";
            }
        }
    })
    .catch((error) => {
        console.log(`Voici mon erreur ${error}`);
    });
}

getVisiteurs();


