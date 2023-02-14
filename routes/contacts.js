const express = require('express');
var Contact =require ('../models/contact.js')
const router = express.Router();
/*router.get('/', (req ,res ,next) =>{
res.json({message:'hola'}) ; 

}); */
router.get('/',async(req,res,next)=>{
    try {
        await Contact.find({}).then((resutl)=>{
            res.send(resutl)
        })
        
    } catch (err) {
        console.log(err);
    }
})

router.post('/',(req,res,next)=>{
let contact = new Contact({fullName :req.body.contactName,phone :req.body.contactNumber})
contact.save((err,newContact)=>{
if(err){
    console.log(`errorr ! ${err}`);
}else{
    res.json(newContact);
}
})
})
router.delete('/delete/:id', async(req,res)=>{
try {
    await Contact.findOneAndDelete(
        {id:req.params.id}
        );
    res.send("deleted ! ")
    
} catch (err) {
    res.send(err);
    
}

})
router.put('/update/:id',async(req,res)=>{
    try {
        await Contact.findOneAndUpdate(
                 {id:req.params.id},
                 {fullName :req.body.fullName},
                 );
              
        res.send('Updateeed !! ')
        
    } catch (err) {
        res.send(err);
        
    }
})
router.get('/findbyid/:id',function(req,res){
    Contact.findById(req.params.id).then(resutl=>{
        if(!resutl){return res.status(404).end();}
        return res.status(200).json(resutl)
    })
})

module.exports=router ; 