const mongoose = require('mongoose');

// conexion a la base de datos
const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true          
        });
        console.log('Database online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}


module.exports = {
    dbConnection
};