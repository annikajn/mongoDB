const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
    if(err){
        console.log('Unable to connect to MOngoDB serrver');
    }
    console.log('Connected to MongoDb');

    //  db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5c50b57f0136f5fe65ed14b3")
    // }, {
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result) =>{
    //     console.log(result);
    // });  
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5c38dc01b25e880f430f7715")
    }, {
        $set:{
            name:'Rachel',
            age:21
        }
    },{
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    });
    db.close();


}); 

