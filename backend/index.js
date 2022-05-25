const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

// koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bangkit'
});

app.get('/connection', (req, res) => {
    db.connect(function (err) {
        if (err) {
            res.json({
                "status": 200,
                "message": "Koneksi gagal dilakukan.",
                "data": err
            });
        } else {
            res.json({
                "status": 200,
                "message": "Koneksi berhasil dilakukan."
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// create
app.post('/users', (req, res) => {
    let sql = "INSERT INTO users SET email='" + req.body.email
        + "', password=password('" + req.body.password
        + "'), fullname='" + req.body.fullname
        + "', picture='" + req.body.picture + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "error": null,
            "response": results,
            "data": req.body
        });
    });
});

// retrieve
app.get('/users', (req, res) => {
    let sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) throw err;
        let email = req.query.email;
        if (email !== undefined) {
            filteres = filteres.filter((result) => result.email.toLowerCase().includes(email.toLowerCase()));
            res.json({
                "status": 200,
                "message": "Data berhasil diambil.",
                "data": filteres.results
            });
        }
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});

// retrieve with spesific id
app.get('/users/:email', (req, res) => {
    let sql = "SELECT * FROM users WHERE email='" + req.params.email + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});

// update
app.put('/users/:id', (req, res) => {
    let sql = "UPDATE users SET password=password('" + req.body.password
        + "'), fullname='" + req.body.fullname
        + "', picture='" + req.body.picture + "'"
        + " WHERE email='" + req.params.id + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "error": null,
            "response": results,
            "data": req.body
        });
    });
});

// delete
app.delete('/users/:email', (req, res) => {
    let sql = "DELETE FROM users WHERE email='" + req.params.email + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil dihapus",
            "response": results
        });
    });
});

app.get('/shop', (req, res) => {
    let sql = "SELECT * FROM article";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});

app.get('/article:id', (req, res) => {
    let sql = "SELECT * FROM article WHERE id='" + req.params.id + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});

app.get('/shop', (req, res) => {
    let sql = "SELECT * FROM shop";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});

app.get('/shop:id', (req, res) => {
    let sql = "SELECT * FROM shop WHERE id='" + req.params.id + "'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data berhasil diambil.",
            "data": results
        });
    });
});