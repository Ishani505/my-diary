const express = require('express');


const app = express();

diaryEntries = [
    {id: 1, date:"22nd Jan", entry:"entry 1"},
    {id: 2, date:"23nd Jan", entry:"entry 2"},
    {id: 3, date:"24nd Jan", entry:"entry 3"},
];

app.use('/diary-entries',(req, res, next) => {
    res.json({'diaryEntries': diaryEntries});

})

module.exports = app;


