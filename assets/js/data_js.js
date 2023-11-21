document.addEventListener("DOMContentLoaded", function() {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population') // Remplacez par l'URL de votre API Spring
        .then(response => response.json())
        .then(data => {
            const listeDonnees = document.getElementById('list');

            console.log(data);
            //Boucle sur les données et les ajoute à la liste
            data.data.forEach(donnee => {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${donnee.Nation}`;
                listeDonnees.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
});