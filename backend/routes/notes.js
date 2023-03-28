const express = require('express');
const router = express.Router();
const Note = require('../models/Note.js');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser.js');

//Route:1 Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
})

//Route:2 Add a new note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description cannot be blank').exists()
], async (req, res) => {

    const { title, description, tag } = req.body;
    // If there are errors, return Bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //Add details to Note schema
        const note = Note({ title, description, tag, user: req.user.id });
        const savedNote = await note.save();
        res.json(savedNote);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;