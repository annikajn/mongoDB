const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var data = {
    id:10
};

var password = '123abc!';
// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
    
// });

var hashedPassword ='$2a$10$8i2byu.2tBWbZ8HxYxuHbeEDmcpdr1f6SGDBnr6RaLS3v.PiQKsZu';

bcrypt.compare('123abc!', hashedPassword, (err,res)=>{
    console.log(res);
})
// 'password123712647917213' -> mmnn
// var token = jwt.sign(data,"123abc"); //returns the hash
// console.log('Token: '+ token);
// //the secret and the token have to be the same to get the info back
// var decoded = jwt.verify(token,'123abc'); // insures the data was not changed
// console.log('decoded',decoded);
// // var message ='I am user number 3';
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