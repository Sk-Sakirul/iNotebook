import express from "express";
import User from '../models/User.js';
const router = express.Router();

// Create a user using: POST "/api/auth"
router.get('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
})

export default router;