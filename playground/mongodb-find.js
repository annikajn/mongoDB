const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

// var user = {name:'Annika', age:'22'};
// var {name} =user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err){
        console.log('Unable to connect to MOngoDB server');
    }
    console.log('Connected to MongoDb server');


    // db.collection('Todos').find({
    //     _id: new ObjectID('5c38d9fd4ca3380eb7a63112')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    //     },(err) =>{
    //         console.log('Unable to fetch todos');
    //     });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos count: ' + count);
    //     },(err) =>{
    //         console.log('Unable to fetch todos');
    //     });

    db.collection('Users').find({name:'Annika'}).toArray().then((docs)=>{
        console.log('Users : ');
        console.log(JSON.stringify(docs,undefined,2))
        },(err) =>{
            console.log('Unable to fetch Users');
    });
}); 