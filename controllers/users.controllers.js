const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/users.models');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/create-user', (req, res) => {
    const { name, email, phone, password } = req.body;
    if(!name) return res.status(409).json({ error: 'Name is required' });
    if(!email) return res.status(409).json({ error: 'Email is required' });
    if(!phone) return res.status(409).json({ error: 'Phone is required' });
    if(!password) return res.status(409).json({ error: 'Password is required' });

    let err;
    userModel.forEach((user) => {
        if(user.Email === email || user.Phone === phone) {
            err = true
        }
    });
    if(err) {
        return res.status(409).json({
            error: 'Duplicate credentials'
        });
    }
    bcrypt.hash(password, 12, (err, hash) => {
        if(err) throw err;
        const user = {
            "id": userModel.length += 1,
            "Name": name,
            "Email": email,
            "Password": hash,
            "Phone": phone,
            "Total": 0,
            "Paid": 0,
            "Balance": 0,
            "isVerified": false
        };
        const token = jwt.sign({email: email, phone: phone}, 'secret_key', {expiresIn: '7 days'});
        userModel.push(user);
        res.status(200).json({ 
            success: 'User added successfully',
            token: token,
            user: user
        });
    });
});
app.get('/users', (req, res) => {
    const validUsers = [];
    userModel.forEach((user) => {
        if(user !== null) validUsers.push(user);
    });
    res.status(200).json({
        success: 'Users found',
        users: validUsers
    });
});
module.exports = app;