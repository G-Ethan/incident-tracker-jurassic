let allIncidents = [];
let zoneMap = {};

// Charger tout les incidents et toute les zones
async function Incidents() {
    try {
        const [incidentRes, zoneRes] = await Promise.all([
            fetch('incidents'),
            fetch('/zones')
        ]);

        if (!incidentRes.ok || !zoneRes.ok) throw new Error('Erreur de récupération des informations');

        const incidents = await incidentRes.json();
        const zones = await zoneRes.json();

        allIncidents = incidents;

        zoneMap = {};
        zones.forEach(zone => {
            zoneMap[zone.id] = zone.name;
        })

        // appel des 2 autres fonctions
        populateZoneFilter(zones);
        applyFilters();

    }catch (err)  {
        console.error('Erreur: ', err);
        alert('Chargement échoué');
    }
}

// créer la liste déroulante pour pouvoir filtrer
function populateZoneFilter(zones) {
    const zoneSelect = document.getElementById('filter-zone');

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Aucun';
    zoneSelect.appendChild(defaultOption);

    zones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone.name;
        option.textContent = zone.name;
        zoneSelect.appendChild(option)
    })
}

// fonction pour appliquer les filtres séléctionner
function applyFilters() {
    const typeVal = document.getElementById('filter-type').value;
    const urgenceVal = document.getElementById('filter-urgence').value.toLowerCase();
    const zoneVal = document.getElementById('filter-zone').value;

    const container = document.getElementById('incidents-list');
    container.innerHTML = '';

    allIncidents.filter(incident => {
        const level = incident.emergencyLevel.toLowerCase();
        const zoneName = zoneMap[incident.zoneId];

        return (
            (!typeVal || incident.type === typeVal) && (!urgenceVal || level === urgenceVal.toLowerCase()) && (!zoneVal || zoneName === zoneVal)
        );
    })
    .forEach(incident => {
        const card = document.createElement('div');
        card.classList.add('card');

        const level = incident.emergencyLevel.toLowerCase();
        let classUrgency = '';
        if (level === 'élevé') classUrgency = 'eleve';
        else if (level === 'moyenne') classUrgency = 'moyenne';
        else if (level === 'faible') classUrgency = 'faible';

        const zoneName = zoneMap[incident.zoneId] || 'zone inconnue';

        card.innerHTML = `
            <h2>${incident.title}</h2>
            <p class="description"><strong>${incident.description}</strong></p>
            <p><strong>Zone : </strong>${zoneName}</p>
            <div class="type-urgency">
                <p class="type"><strong>Type : </strong>${incident.type}</p>
                <div class="urgenceIndicateur ${classUrgency}" title="Urgence: ${incident.emergencyLevel}"></div>
            </div>
        `;
        container.appendChild(card)
    });
}

['filter-type', 'filter-urgence', 'filter-zone'].forEach(id => {
    document.getElementById(id).addEventListener('change', applyFilters);
})

window.addEventListener('DOMContentLoaded', Incidents);
