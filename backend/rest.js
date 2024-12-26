const express = require('express');

const app = express();

diaryEntries = [
    { id: 1, date: "March 1st", entry: "Entry1" },
    { id: 2, date: "March 2nd", entry: "Entry2" },
    { id: 3, date: "March 3rd", entry: "Entry3" },
];

app.use('/diary-entries',(req, res, next) => {
    res.json({'diaryEntries': diaryEntries});

})

module.exports = app;