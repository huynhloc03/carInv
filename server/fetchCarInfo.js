import { database } from "../database.js";

const express = require('express');
const app = express();

app.get('/cars', (req, res) => {
    const q = 'SELECT makeAndModel, description, type FROM Car';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/Sedan', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%Sedan%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/SUVs', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%SUVs%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/Truck', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%Truck%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/Luxury', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%Luxury%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/Electric', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%Electric%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/Hybrids', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%Hybrids%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});

app.get('/SportCars', (req, res) => {
    const q = 'SELECT * FROM Car WHERE type LIKE '%SportCars%'';

    database.query(q, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching car data from database.');
        } else {
            res.json(data);
        }
    });
});