import express from 'express';
import cors from 'cors';

import incidentRoutes from './routes/incident.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/incidents', incidentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
