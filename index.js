const express = require("express");
const bodyParse = require("body-parser");
const { urlencoded } = require("body-parser");
let items=["Breakfast","Study", "Lunch"];
const app = express();


app.set("view engine","ejs");

app.use(bodyParse.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    let today = new Date();
  
    let options ={
        weekday: "long",
        day:"numeric",
        month:"long"

    };

    let day= today.toLocaleDateString("en-US",options);
   
            
    

    res.render("lists",{
        KindofDay:day,
        newList:items
    });
});

app.post("/",function(req,res){
    let item = req.body.Item;
    items.push(item)
    res.redirect("/")

});

app.get("/about",function(req,res){
    res.render("about");
});



app.listen(3000,function(){
    console.log("Server is running");
});