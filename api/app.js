import dotenv from "dotenv" ;
import express from "express";
import cors from "cors";
import incidentRoutes from "./routes/incidentRoutes.js";
import { sequelize } from "./models/index.js";
import zoneRoutes from "./routes/zoneRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import {swaggerOptions} from "./config/swaggerConfig.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/incidents", incidentRoutes);
app.use("/zones", zoneRoutes);

app.use((req, res) => {
    res.status(404).json({message: "Route Inexistante"});
});

const PORT = process.env.APP_PORT;

sequelize.sync()
    .then(() => {
        console.log("Synchronisation a la base de donnée réussi");
        app.listen(PORT, () => {
            console.log(`Server démarré sur http://127.0.0.1:${PORT}`);
        });
    })
    .catch(err => {
        console.error("Erreur lors de la synchroniation de la BDD:", err);
    });
