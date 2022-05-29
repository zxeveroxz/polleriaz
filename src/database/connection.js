import sql from 'mssql';
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPass,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed cert
        }
    
};

export  async function getConnection(){
    try {        
        const pool = await  sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};

 
