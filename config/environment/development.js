'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://bribe:bribe@ds061984.mlab.com:61984/bribe',
        options: {
            server : {
                auto_reconnect: true
            },
            db: {
                safe: true
            }
        }
    },
    domain: 'http://localhost:3000',
    seedDB: true,
    server: {
        port: 3000
    }
};
