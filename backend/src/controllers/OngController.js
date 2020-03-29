
const crypto = require('crypto');
const connection = require('../databases/connection');

module.exports ={
//Listagem
    async index(req,res){
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

//Cadastro
    async create (req,res) {
        const {name,email,whatsapp,city,uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({id});
    }
};