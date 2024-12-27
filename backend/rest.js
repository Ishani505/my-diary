const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.post('/add-entry', (req, res) => {
    diaryEntries.push({id: req.body.id, date: req.body.date, entry: req.body.entry});
    res.status(200).json({
        message: 'post submitted'
    })
})

app.get('/diary-entries',(req, res, next) => {
    res.json({'diaryEntries': diaryEntries});

})



module.exports = app;