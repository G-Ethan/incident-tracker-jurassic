document.addEventListener('DOMContentLoaded', () => {
    populateZoneSelect();

    const form = document.getElementById('incident-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            type: document.getElementById('type').value,
            emergencyLevel: document.getElementById('emergencyLevel').value,
            zoneId: document.getElementById('zone').value,
            status: document.getElementById('status').checked,
        }

        try {
            const response = await fetch('/incidents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || "Erreur lors de la création");
            }

            alert('Incident créer');
            form.reset();
        } catch (error) {
            alert('Erreur: ' + error.message);
        }
    });
});

async function populateZoneSelect() {
    const select = document.getElementById('zone');

    try{
        const res = await fetch('/zones');

        if (!res.ok) throw new Error('Erreur lors dun chargements des zones');

        const zones = await res.json();

        select.innerHTML = '<option value="">-- Choisir une zone --</option>';
        zones.forEach(zone => {
            const option = document.createElement('option');
            option.value = zone.id;
            option.textContent = zone.name;
            select.appendChild(option);
        });

    } catch (error) {
        alert('Impossible de charger les zones');
    }
}

