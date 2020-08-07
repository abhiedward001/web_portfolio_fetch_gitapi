var express=require("express");
var app=express();
var index=require("./routes/index");
var port = process.env.PORT || 8000;
app.set("view engine","ejs");
app.use("",index);
app.use(express.static("public"));

app.listen(port,function(){
   
    console.log("server connected!");
});