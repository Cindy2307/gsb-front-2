async function deleteRapport() {
    const url = `http://localhost:3000/gsb/rapport/${rapportId}`;
    let response = "";

    const responseJson = await fetch(url, {
        method: "DELETE",
    })
    .catch((error) => {
        console.log(`Voici mon erreur ${error}`);
    });
    
    if (responseJson.status === 200) {
        response = await responseJson.json();
        alert("Le rapport a bien été supprimé.");
        document.location.href = "../html/rapportsListe.html";
    } 
}