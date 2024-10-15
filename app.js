import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';
import router from './routes/api.js';


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'OK'
    })
});

try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use('/api', router); 

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log('server running');

})
