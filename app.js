const express = require("express");
const app = express();
const bodyparser = require("body-parser");
// const ejs = require('ejs');
const Request = require("request");
var fetch = require("fetch").fetchUrl;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set("view engine", "ejs");
let articles = [];
let titles=[];
let buisness=[];
let article = "";
let numbers=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Twenty-one", "Twenty-two","Twenty-three","Twenty-four","Twenty-five","Twenty-six","Twenty-seven","Twenty-eight","Twenty-nine","Thirty","Thirty-one","Thirty-two","Thirty-three","Thirty-four","Thirty-five","Thirty-six","Thirty-seven","Thirty-eight","Thirty-nine","Forty","Forty-one","Forty-two"
,"Forty-three","Forty-four","Forty-five","Forty-six","Forty-seven","Forty-eight","Forty-nine","Fifty"];
app.get("/", function (req, res) {
    console.log("Entered");
    // var url = 'https://newsapi.org/v2/everything?' + 'q=Facebook&' + 'from=2021-06-20&' + 'sortBy=popularity&' + 'apiKey=8bac747eceff47288e484eae55d5b2d5';
    var url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8bac747eceff47288e484eae55d5b2d5`;

    articles = [];
    titles=[];
    // article = "";
    Request(url, function (req, respond) {

        var body = JSON.parse(respond.body);
        for (let i = 0; i < 3; i++) {
            let content = body.articles[i].description;
            let title=body.articles[i].title;
            articles.push(content);
            titles.push(title);
        }
        // console.log(article);
      
        res.render("index", { "articles": articles,"titles":titles });
    })
});
app.get("/buisness",function (req,res) {
    console.log("entered buisness");
    var url=`https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        buisness=[];
        var body = JSON.parse(respond.body);
        console.log(body.articles.length);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
            // console.log(body.sources[i]);
            buisness.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": buisness,"titles":titles,"len":numbers });
    })
    // res.render("template",{});
});
app.get("/health",function (req,res) {
    console.log("entered health");
    
    var url=`https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        let health=[];
        var body = JSON.parse(respond.body);
        // console.log(body.articles);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
                console.log(body.articles[i]);
            health.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": health,"titles":titles,"len":numbers });
    // res.render("template",{});
})
})
app.get("/technology",function (req,res) {
    console.log("entered techonlogy");
    
    
    var url=`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        let technology=[];
        var body = JSON.parse(respond.body);
        // console.log(body.articles);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
                console.log(body.articles[i]);
            technology.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": technology,"titles":titles,"len":numbers });
    // res.render("template",{});
});
});
app.get("/entertainment",function (req,res) {
    console.log("entered entertainment");
    
    
    var url=`https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        let entertainment=[];
        var body = JSON.parse(respond.body);
        // console.log(body.articles);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
                console.log(body.articles[i]);
            entertainment.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": entertainment,"titles":titles,"len":numbers });
    // res.render("template",{});
});
});
app.get("/sports",function (req,res) {
    console.log("entered stocks");
    
    
    var url=`https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        let sports=[];
        var body = JSON.parse(respond.body);
        console.log(body.articles);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
                console.log(body.articles[i]);
            sports.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": sports,"titles":titles,"len":numbers });
    // res.render("template",{});
});
});
app.get("/crypto",function (req,res) {
    console.log("entered crypto");
    
    
    var url=`https://newsapi.org/v2/everything?q=crypto&q=bitcoin&q=dogecoin&q=cryptocurrency&language=en&apiKey=8bac747eceff47288e484eae55d5b2d5`;
    Request(url, function (req, respond) {
        titles=[];
        let crypto=[];
        var body = JSON.parse(respond.body);
        // console.log(body.articles);
       
        for (let i = 0; i < body.articles.length; i++) {
            
            let content = body.articles[i];
            let j=0;
            if(j<=14)
            {
            if(j===0)
                console.log(body.articles[i]);
            crypto.push(content.content);
            let title=content.title;
            // articles.push(content);
            titles.push(title);
            j++;
        }
        // console.log(buisness);
    }
        res.render("template", { "articles": crypto,"titles":titles,"len":numbers });
    // res.render("template",{});
});
});







app.listen(4040, function (req, res) {
    console.log("Listening to port 4040");
});





