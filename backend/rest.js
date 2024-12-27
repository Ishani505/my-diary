const express = require('express');
const bodyParser = require('body-parser');
const DiaryEntryModel = require('./entry-schema');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb+srv://Ishani:Yoba1995@cluster0.w8cy8.mongodb.net/diarydb?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(() => {
        console.log('failed to connect to MongoDB');
    })

diaryEntries = [
    { id: 1, date: "March 1st", entry: "Entry1" },
    { id: 2, date: "March 2nd", entry: "Entry2" },
    { id: 3, date: "March 3rd", entry: "Entry3" },
];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.get('/max-id', (req, res) => {
    var max =0;
    for(var i=0 ; i<diaryEntries.length; i++){
        if(diaryEntries[i].id > max){
            max = diaryEntries[i].id;
        }
    }
    res.json({maxId: max});
})

app.delete('/remove-entry/:id', (req, res) => {
    const index = diaryEntries.findIndex(el => {
        return el.id == req.params.id;
    })
    diaryEntries.splice(index, 1);
    res.status(200).json({
        message: 'post deleted'
    })
})

app.put('/update-entry/:id', (req, res) => {
    const index = diaryEntries.findIndex(el => {
        return el.id == req.params.id;
    })
    diaryEntries[index] = {id: req.body.id, date: req.body.date, entry: req.body.entry}
    res.status(200).json({
        message: 'Updated!'
    })
})


app.post('/add-entry', (req, res) => {
    const diaryEntry = new DiaryEntryModel({date: req.body.date, entry: req.body.entry});
    diaryEntry.save()
        .then(() => {
            res.status(200).json({
                message: 'post submitted'
            })
        })
    
})

app.get('/diary-entries',(req, res, next) => {
    res.json({'diaryEntries': diaryEntries});

})



module.exports = app;