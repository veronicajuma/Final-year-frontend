const {createPool} = require("mysql");
const pool = createPool({
    host:"localhost",
    user: "root",
    password:"",
    port:3306,
    database:"missing"
});
pool.getConnection((err)=>{
    if(err){
        console.log("Error connecting to db...");
    }
    console.log("connected to database...")
});
const executeQuery = (query,arraParms) => {
    return new Promise ((resolve,reject)=> {
        try {
            pool.query(query,arraParms, (err, data) => {
                if(err){
                    console.log("error in executing the query");
                    reject (err);
                }
                resolve(data);
            });
        }
        catch(err){
            reject(err);
        }
    })
}
module.exports = {executeQuery};