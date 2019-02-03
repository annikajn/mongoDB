const {ObjectID} = require('mongodb');

const {mongoose}  = require("../server/db/mongo.js");
const {Todo} = require("../server/models/todos");
const {User} = require("../server/models/user");

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5c560768b623563fc0c593e8').then((todo)=>{
    console.log(todo)
});