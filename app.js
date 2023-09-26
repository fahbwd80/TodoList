// const express = require("express");

// const app = express();

// app.get("/", function(req, res){
//     let today = new Date();
//     let dayToday = today.getDay();

//     if (dayToday === 6 || dayToday === 0){
//         res.send("Happy Weekend!");

//     } else {
//         res.send("Get up and code!");
//     }
// });

// app.listen(8000, function(){
//     console.log("Server started on port")
// })

// ejs
// const express = require("express");

// const app = express();
// app.set('view engine', 'ejs');

// app.get("/", function(req, res){
//     let today = new Date();
//     let currentDay = today.getDay();
//     var day= "";

//     if (currentDay === 6 || currentDay === 0){
//         day ="Weekend";

//     } else {
//         day = "Weekday";
//     }
//     res.render("list", {myDay: day});
// });

// app.listen(8000, function(){
//     console.log("Server started on port")
// })

// const express = require(`express`);
//  const app = express();
//  const port = process.env.PORT || 2000;
//  app.set('view engine', 'ejs');
//   if (dayToday === 6 || dayToday === 0) {
//       res.send(`Happy Weekend!`);  day = 'Weekend';
//     } else {res.send(`Get up and code!`); 
//     day = "Weekday"; 
// }res.render('list', {mayDay: day});

// app.listen(port, () => {console.log(`Server is running in port ${port}`);
// });

// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs')
// app.set('views', 'views')
// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     let today = new Date();
//     let currentDay = today.getDay();
//     var day ="";
//     if (currentDay === 6 || currentDay === 0){
//         day = "Weekend";
//     } else {
//         day = "Weekday";
//     }
//     res.render("list", {myDay: today, ourDay: day});
// });

// app.listen(3000, function(){
//     console.log("Server is running on port 3000");
// })

// const express = require ("express");
// const app = express();
// let items = [];


// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));

// app.get("/", function(req, res){
// let today = new Date ();
// let myDate = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
// };

// let day = today.toLocaleDateString("en-US", myDate)
//     res.render("list", {myDay: day, addedItem: items});
// });
// app.post("/", (req, res) =>{
//     var item = req.body.addItem;
//     items.push(item);
//     res.redirect("/");
// })
// app.listen(8000, () =>{
//     console.log("Server started on port 8000")
// })

const express = require('express');
const app = express();
let items = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    let today = new Date()
    let myDate = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", myDate)
    res.render("ToDoList", {myDate: day, addedItem: items});
});
app.post("/", (req, res) =>{
    var item = req.body.addItem;
    items.push(item);
    res.redirect("/");
});
app.listen(7000, () =>{
    console.log("Server is running on port 7000");
})