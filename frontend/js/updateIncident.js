document.addEventListener('DOMContentLoaded', () => {
    populateZoneSelect();

    const form = document.getElementById('incident-edit-form');
    const idInput = document.getElementById("incident-id");
    let originalIncident = null;
    let clickedButton = null;

    // Savoir quel bouton a était cliqué

    document.getElementById('btn-update').addEventListener('click', () => {
        clickedButton = 'update';
    })
    document.getElementById('btn-delete').addEventListener('click', () => {
        clickedButton = 'delete';
    })

    async function loadIncident(id){

        if (!id) {
            alert("Veuillez saisir un ID d'incident valide.");
            return;
        }

        try {
            const res = await fetch(`incidents/${id}`);
            if (!res.ok) throw new Error('Incident non trouvé');

            originalIncident = await res.json();

            document.getElementById('title').value = originalIncident.title || '';
            document.getElementById('description').value = originalIncident.description || '';
            document.getElementById('type').value = originalIncident.type || '';
            document.getElementById('emergencyLevel').value = originalIncident.emergencyLevel || '';
            document.getElementById('zone').value = originalIncident.zoneId || '';
            document.getElementById('status').value = !!originalIncident.status || '';
            document.getElementById('status').checked = !!originalIncident.status;


        } catch (err) {
            alert(err.message);
            originalIncident = null;
            form.reset();
        }
    }

    // changer les donnée de l'incident une fois que l'id dans le champs input a changer
    idInput.addEventListener('change', () => {
        loadIncident(idInput.value.trim());
    })

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const id = idInput.value.trim();

        if (!id) {
            alert('Merci de saisir un ID valide');
            return;
        }

        if (!originalIncident) {
            alert("Merci de charger un incident avant de modifier");
            return;
        }

        // gestion de la suppresion de l'incident
        if (clickedButton === 'delete') {
            const confirmDelete = confirm("Etes-vous sur de vouloir supprimer l'incident " + {id});

            if (!confirmDelete) return;

            try {
                const res = await fetch(`incidents/${id}`, {
                    method: 'DELETE'
                });

                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message || "Erreur lors de la suppression");
                }

                alert("Incident supprimé avec succés");
                form.reset();
                idInput.value = "";
                originalIncident = null;
                return;
            } catch (err) {
                alert("Erreur: " + err.message);
                return;
            }

        }

        // nouvelle valeur dans le formulaire
        const newValue = {
            title: document.getElementById('title').value.trim(),
            description: document.getElementById('description').value.trim(),
            type: document.getElementById('type').value,
            emergencyLevel: document.getElementById('emergencyLevel').value,
            zoneId: document.getElementById('zone').value,
            status: document.getElementById('status').checked,
        }

        const updateData = {};

        for (const key in newValue) {
            if (key === 'status') {
                if (newValue.status !== originalIncident.status) {
                    updateData.status = newValue.status;
                }
            } else {
                if (newValue[key] !== '' && newValue[key] !== (originalIncident[key] ?? '')) {
                    updateData[key] = newValue[key];
                }
            }
        }

        if (Object.keys(updateData).length === 0) {
            alert('Aucun changement détecté');
        }

        try {
            const res = await fetch(`incidents/${id}`, {
                method: 'PATCH',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(updateData)
            });

            if (!res.ok){
                const err = await res.json();
                throw new Error(err.message || "Erreur lors de la modification");
            }

            alert("Incident modifier avec succès");
            originalIncident = null;
            form.reset();
            idInput.value = "";

        } catch (error) {
            alert("Erreur: " + error.message);
        }
    });
});

async function populateZoneSelect() {
    const select = document.getElementById('zone');

    try {
        const res = await fetch('/zones');
        if (!res.ok) throw new Error('Erreur lors du changement des zones');

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
