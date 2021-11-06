import express from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

//Συνάρτηση για έλεγχο κωδικού
router.post('/login', login);

//Δημιουργεία λογαριασμού
router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "¨Ελεγχος εισόδου" });
});

//Default περιπτώση
router.use('/', (req, res, next) => {
    res.status(404).json({error : "Η σελίδα δεν υπάρχει!"});
});

export default router;