import express from 'express';
import connectDB from './config/db.js';
import vehicleRouter from './routers/vehicle-router.js';
import workshopRouter from './routers/workshop-router.js';
import maintenanceRouter from './routers/maintenance-router.js';


connectDB();

const app = express();
app.use(express.json());

app.use('/vehicles', vehicleRouter);
app.use('/workshops', workshopRouter);
app.use('/maintenances', maintenanceRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));

