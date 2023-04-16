const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../data/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    
    routes(){
        this.app.use('/api/todo', require('../routes/todo.routes'));
        this.app.use('/api/tag', require('../routes/tag.routes'));
    }
    
    async dbConnection(){
        await dbConnection();
    };
    
    middlewares(){
        // Public directory
        this.app.use(express.static('public'));

        // Read and parse body
        this.app.use(express.json());

        // CORS
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}

module.exports = Server;