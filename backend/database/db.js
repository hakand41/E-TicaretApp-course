const mongoose = require('mongoose');
const uri ="mongodb+srv://hakan:hakan@eticaretdb.j8rq4.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb"

const connection = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}
module.exports = connection;