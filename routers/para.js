const express = require('express');
const Para = require('../models/para');
const router = new express.Router();

router.post('/para', async (req, res) => {

    const para = req.body.paragraph;

    try {
        
        const sortThePara = (para) => {

            const [splitPara, splitCopy] = [para.split(" "), para.toLowerCase().split(" ")]
            const sorted = splitCopy.sort();
            const sortedReally = [];

            for(let i =0; i<sorted.length; i++){
                const wordToFind = splitPara[i].toLowerCase();
                const indexOFWord = sorted.indexOf(wordToFind);
                sortedReally[indexOFWord] = splitPara[i];
            }

             console.log({para, sorted, sortedReally})
            return sortedReally.join(" ");
        }

        const sorted = sortThePara(para)
        await Para({
            paragraph: sorted,
        }).save();

        res.status(201).send(sorted)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router