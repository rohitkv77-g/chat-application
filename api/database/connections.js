const mongo = require("mongodb");

const client = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

console.log(url);
let dbo = null;



client.connect(url, (err, db)=>{
    if(err){
        console.log("Database Connection Error: \n" + err);
        return;
    }
    console.log("Database Connected");
    dbo = db.db('chat-app');
})


module.exports = getDB = ()=> {
    return dbo;
};

