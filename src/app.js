const express= require ('express');
const app= express();
const port= process.env.PORT || 8000;
const path= require ('path');
const hbs=  require ('hbs');

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// To set the view engines

app.set('view engine',"hbs");
app.set("views",templatePath); //To change the foldername from views to templates

hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

    // app.set('view engine',"hbs");
    app.get("/",(req,res)=>{
        res.render("index");
    });
   
    app.get("/about",(req,res)=>{
        res.render("about");
    });
    app.get("/specification",(req,res)=>{
        res.render("specification");
    });
    app.get("/product",(req,res)=>{
        res.render("product");
    });
    app.get("/connect",(req,res)=>{
        res.render("connect");
    });
    app.get("*",(req,res)=>{
        res.render("404");
    });
    

app.listen(port,"",()=>{
    console.log ("listening the port number"+ port);


});
