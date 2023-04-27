import {database} from "../database.js";
export const register = (req,res)=>{
    const q = "SELECT * FROM agents WHERE email = ? OR username =?";
    database.query(q,[req.body.email, req.body.username],(err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("Username already exists.");
        // Don't know if should implement encryption for password yet.
        const q =  "INSERT INTO agents (username, email, password, firstname, lastname) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
          ];
        database.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("User has been successfully created.");
        });
    });

};
export const login = (req,res)=>{
    
}
export const logout = (req,res)=>{
    
}