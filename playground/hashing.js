const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
};

var token = jwt.sign(data,"123abc"); //returns the hash
console.log('Token: '+ token);
//the secret and the token have to be the same to get the info back
var decoded = jwt.verify(token,'123abc'); // insures the data was not changed
console.log('decoded',decoded);
// var message ='I am user number 3';
// var hash = SHA256(message).toString();

// console.log('Message: ' + message);
// console.log('Hash:  ' + hash);


// var token={
//     data,
//     hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }
// // token.data.id = 5;  
// // token.hash= SHA256(JSON.stringify(token.data)).toString();

// // called json web token to ensure the id was not changed
// var resultHash= SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//     console.log("Data was not changed");
// }else{
//     console.log("Data was changed. Do not trust!");
// }