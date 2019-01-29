const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err){
        console.log('Unable to connect to MOngoDB serrver');
    }
    console.log('Connected to MongoDb');


    //DeleteMany from the mongo db database

    // db.collection('Todos').deleteMany({
    //     text:'walk the dog'
    // }).then((result) =>{
    //     console.log(result);
    // });

    //  //DeleteONefrom the mongo db database
    // db.collection('Todos').deleteOne({
    //     text:'something to do'
    // }).then((result) =>{
    //     console.log(result);
    // });

     //FindOne and DeleteOnefrom the mongo db database
     db.collection('Todos').findOneAndDelete({
        completed:false
    }).then((result) =>{
        console.log(result);
    });
    db.close();
}); 



