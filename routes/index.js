var express=require("express");

var axios=require("axios");

var router=express.Router();

require('dotenv').config()
router.get("/",(req,res)=>{
    res.send("Hello please check the protfolio url. :)");
});


router.get("/myportfolio/:username", async (req, res) => {
    try {
      const uri = encodeURI(
        `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
      );
      const headers = {
        'user-agent': 'node.js',
        Authorization: `token ${process.env.GITHUBSECRET}`
      };
  
      const gitHubResponse = await axios.get(uri, { headers });
    
      
     return res.render("data",{data:gitHubResponse.data});
    
     
    } catch (err) {
      console.error(err.message);
      return res.status(404).json({ msg: 'No Github profile found' });
    }
  });

module.exports=router;