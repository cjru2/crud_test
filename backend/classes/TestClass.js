const MDB_TEST = require('../models/MDB_TEST');

module.exports = class TestClass
{
    constructor(user_information)
    {
        this.mdb_test = new MDB_TEST();
        this.user_information = user_information;
    }

    async validate()
    {
        let res = {};   
        if(this.user_information.first_name == '' || this.user_information.last_name == '' || this.user_information.address == '' ||
           this.user_information.age == '')
        {
            res.status      = "error";
            res.message     = "You need to fill up all fields in order to proceed.";
        }
        else
        {
            // let update = await this.mdb_test.update({_id : this.user_information.user_id}, 
            //                                         {first_name : this.user_information.first_name,
            //                                         last_name : this.user_information.last_name});
            res.status      = "success";
        }
        return res;
    }

    async validate_del()
    {
        let res = {};   
        if(this.user_information.user_id == ''|| this.user_information.user_id == null)
        {
            res.status      = "error";
            res.message     = "No data selected.";
        }
        else
        {
            res.status = "success";
        }
        return res;
    }
    //camelcase
    async createTest()
    {
        let res = {};
        try
        {
            res.status = "success";
            
            let add_form =
            { 
                first_name: this.user_information.first_name,
                last_name: this.user_information.last_name,
                address: this.user_information.address,
                age: this.user_information.age,
            }
            console.log(add_form);
            await this.mdb_test.add(add_form);
        }
        catch (error)
        {
            res.status = "error";
            res.message = error.message;
        }
        return res;
    }

    async getData() 
    {
        try 
        {
            const res = await this.mdb_test.find();
            return res;
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    }

    async update_test() 
    {
        let res = {};
        try 
        {
            res.status = "success";
            
            let update_form =
            { 
                user_id: this.user_information.user_id,
                first_name: this.user_information.first_name,
                last_name: this.user_information.last_name,
                address: this.user_information.address,
                age: this.user_information.age,
            } 
            console.log(update_form);
            // await this.mdb_test.update(update_form);
            await this.mdb_test.update({_id : this.user_information.user_id}, 
                                      {first_name : this.user_information.first_name,
                                      last_name : this.user_information.last_name,
                                      address : this.user_information.address,
                                      age : this.user_information.age});
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    }

    async delete_test() 
    {
        try 
        {
            await this.mdb_test.del({_id : this.user_information.user_id});
        } 
        catch (error) 
        {
            console.log(error);
            return error;
        }
    }
}