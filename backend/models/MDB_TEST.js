const MONGOOSE  = require('../config/mongo');
const MODEL     = require('./MODEL');
const Schema    = MONGOOSE.Schema;

const schema    = new Schema({
    first_name:{
        type:       String,
        required:   true
    },
    last_name:{
        type:       String,
        required:   true
    },
    address:{
        type:       String,
        required:   true
    },
    age:{
        type:       String,
        required:   true
    }
});

class MDB_TEST extends MODEL
{
    constructor ()
    {
        super('test', schema);
    }
    
    async findName(info)
    {
        const res = await this.collection.findOne({ first_name: info.first_name, last_name: info.last_name,
                                                    address: info.address, age: info.age});
        return res ? res : null;
    }

    async find() 
    {
        try 
        {
            const collection     = this.collection;
            const res            = await collection.find();

            return res;
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    }

    async update(user_id, updates) 
    {
        try 
        {
            const collection     = this.collection;       
            const modelRes       = await collection.findByIdAndUpdate(user_id, updates, {new: true});

            return modelRes;
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    } 

    async del(user_id, deletes) 
    {
        try 
        {
            const collection     = this.collection;       
            const modelRes       = await collection.findByIdAndDelete(user_id, deletes);

            return modelRes;
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    } 
}

module.exports = MDB_TEST;