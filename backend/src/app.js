import 'dotenv/config';
import express from 'express';
import incidentRoutes from './routes/incidentRoutes.js';
import { sequelize } from './models/index.js';
import zoneRoutes from "./routes/zoneRoutes.js";
const app = express();

app.use(express.json());

app.use(express.static('../src'));

app.use('/incidents', incidentRoutes)
app.use('/zones', zoneRoutes)

app.use((req, res) => {
    res.status(404).json({message: "Route Inexistante"});
})

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log('Synchronisation a la base de donnée réussi');
        app.listen(PORT, () => {
            console.log(`Server démarré sur http://127.0.0.1:${PORT}`);
        });
    })
    .catch(err => {
        console.error("Erreur lors de la synchroniation de la BDD:", err);
    });
