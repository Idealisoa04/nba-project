document.addEventListener("DOMContentLoaded", function() {
    fetch('https://catfact.ninja/fact') // Remplacez par l'URL de votre API Spring
        .then(response => response.json())
        .then(data => {
            const listeDonnees = document.getElementById('listeDonnees');

            // Boucle sur les données et les ajoute à la liste
            data.forEach(donnee => {
                const listItem = document.createElement('li');
                listItem.textContent = `ID: ${donnee.fact}`;
                listeDonnees.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
});