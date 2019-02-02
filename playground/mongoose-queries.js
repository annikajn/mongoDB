const {ObjectID} = require('mongodb');

const {mongoose}  = require("../server/db/mongo.js");
const {Todo} = require("../server/models/todos");
const {User} = require("../server/models/user")
// var id  = "5c54c84cc1e9060c418d17011";

// if(!ObjectID.isValid(id)){
//     console.log("ObjectId is invalid.");
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log("Todos: ",todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
    
//     console.log("Todos: ",todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         console.log("Id not found");
//     }else{
//     console.log("Todo by Id", todo);}
// }).catch((e)=> console.log(e));

var id = "5c50cc7351e6d8c81ef1a6ba";
User.findById(id).then((user)=>{
    if(!user){
        console.log("Unable to find user");
    }else{
    console.log("User by Id", user);}
}).catch((e)=> console.log(e));