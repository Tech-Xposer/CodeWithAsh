const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)
async function dbConnect(collectionName){
    let res = await client.connect()
    db = res.db('codewithash')
    return db.collection(collectionName)

} 
module.exports = dbConnect;

// dbConnect().then((resp)=>{
//     resp.find().toArray().then(data=>{
//         console.log(data);
//     })
// })
