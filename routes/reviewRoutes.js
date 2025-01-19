const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

//? Get All reviews

router.get('/reviews',async (req , res)=>{
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message : error.message})
    }
})

//? POST a new review
router.post('/reviews', async (req, res) => {
    const { title, author, rating, reviewText } = req.body;
    const newReview = new Review({ title, author, rating, reviewText });

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//? GET single review
router.get('/reviews/:id' , async (req,res)=>{
    const {id} = req.params;

    try {
        const review = await Review.findById(id);
        if(!review){
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//? update a review
router.put('/reviews/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const updatedReview = await Review.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//? DELETE a review
router.delete('/reviews/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router; 