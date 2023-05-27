const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected', ()=>{
    console.log('MondoDb connection sucsessful');
});

connection.on('error', ()=>{
    console.log('MondoDb connection Failed');
});

module.exports = connection;