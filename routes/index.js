var express = require('express');
var router = express.Router();

const collection= []
let counter=1;
let increaseCounter = async()=>{
    ++counter;
}

router.get('/insta', (req,res)=>{
    try{
        console.log("I am in router")
    }
    catch(err)
    {
        console.log(err);
        
    }
    res.send("Thanks for visiting")
    
})

router.get('/auth', async(req,res)=>{

    await increaseCounter();
    collection.push({"count": counter,
        "code": req.query.code
        })

        res.send("Thanks");
})


router.post('/auth', async(req,res)=>{

})

router.get('/giveCollection', async(req, res)=>{
try{
    res.send(collection)
}
catch(err)
{console.log(err)}

})

router.get('/',(req,res)=>{
    res.send("App by Anmol Monga")
})
module.exports= router