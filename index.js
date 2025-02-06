const express=require("express");
const app=express();

const users=[{
   name:"harsha",
   kidneys:[{
    healthy:false

  }]

}];
app.get("//",function(req,res){
    const harshakidneys=users[0].kidneys;
    const numberofkidneys=harshakidneys.length;
    const numberofhealthykidneys=0;
    for(let i=0; i<harshakidneys.length;i++){
        if(harshakidneys[i].healthy){
            numberofhealthykidneys=numberofhealthykidneys+1;

        }
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
app.post("//",function(req,res){
    const ishealthy=req.bodyishealthy;
    users[0].kidneys.push({
    healthy:ishealthy
    })
    res.json({
        msg:"done!"
    })
})
app.put("//",function(req,res){
for(let i=0; i<users[0].length;i++){
    users[0].kidneys[i].healthy=true;
}
})
app.listen(3000);
