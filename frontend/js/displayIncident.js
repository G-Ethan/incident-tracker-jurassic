// Récupere les incident depuis l'API'

async function Incidents(){
    try {
        const incidentResponse = await fetch('/incidents');
        if (!incidentResponse.ok) throw new Error('Erreur lors de la récupération des incidents');

        const incident = await incidentResponse.json();

        const zoneResponse = await fetch('/zones');
        if (!zoneResponse.ok) throw new Error('Erreur lors de la récupération de la zone');

        const zones = await zoneResponse.json();

        const zoneMap = {};
        zones.forEach(zone => {
            zoneMap[zone.id] = zone.name;
        });

        const activeContainer = document.getElementById('incidents-list');
        const resolvedContainer = document.getElementById('incidents-list-resolu');

        activeContainer.innerHTML = '';
        resolvedContainer.innerHTML = '';

        incident.forEach(incident => {
            const card = document.createElement('div');
            card.classList.add('card');

            let classUrgency = '';
            const level = incident.emergencyLevel.toLowerCase();

            if (level === 'élevé') classUrgency = 'eleve';
            else if (level === 'moyenne') classUrgency = 'moyenne';
            else if (level ==='faible') classUrgency = 'faible';

            const zoneName = zoneMap[incident.zoneId] || 'Zone inconnue';

            card.innerHTML = `
                <p class="incident-id"><strong>${incident.id}</strong></p>
                <h2>${incident.title}</h2>
                <p class="description"><strong>${incident.description}</strong></p>
                <p><strong>Zone : </strong>${zoneName}</p>
                <div class="type-urgency">
                    <p class="type"><strong>Type : </strong>${incident.type}</p>
                    <div class="urgenceIndicateur ${classUrgency}" title="Urgence: ${incident.emergencyLevel}"></div>
                </div>
            `;

            // vérifier si un incident est resolu ou non et l'ajouter dans la bonne partie du site
            if (incident.status === true || incident.status === 'true') {
                resolvedContainer.appendChild(card);
            }else {
                activeContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de charger les incidents');
    }
}

window.addEventListener('DOMContentLoaded', Incidents);
