var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false,
        required:true
    },
    completedAt:{
        type:Number,
        default:null
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// var newTodo1 = new Todo({
//     text: 'pet dog ',
//     completed: true
// });

module.exports = {Todo};
// newTodo1.save().then((doc) =>{
//     console.log(JSON.stringify(doc, undefined,2));
// }, (e)=>{
//     console.log('Unable to save Todo');
// });
