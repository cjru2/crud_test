const TestClass = require('../classes/TestClass');

module.exports =
{
    async save_test(req, res)
    {
        let user_information =
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            age: req.body.age,
        }
        console.log('u', user_information);
        let account_class = new TestClass(user_information);
       
        let account_validation = await account_class.validate();

        if(account_validation.status == "success")
        {
            await account_class.createTest();
            res.send(true);
        }
        else if(account_validation.status == "error")
        {
            res.status(400).send({ message: account_validation.message });
        }
       
    },

    async get_test(req, res)
    {
        let account_class = new TestClass();

        let getdata = await  account_class.getData();

        console.log(getdata);
        res.status(200).send({getdata})
    },
    
    async update_test(req, res)
    {
        let user_information =
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            age: req.body.age,
            user_id: req.body.user_id,
        }

        let account_class = new TestClass(user_information);
        let account_validation = await account_class.validate();
        let validate_edit = await account_class.validate_del();

        console.log('ACC', account_validation);

        if(validate_edit.status == "success")
        {
            if(account_validation.status == "success")
            {
                await account_class.updateTest();
            }
            else if(account_validation.status == "error")
            {
                res.status(400).send({ message: account_validation.message });
            }
        }
       else if(validate_edit.status == "error")
       {
        res.status(400).send({ message: validate_edit.message });
       }
        res.send(true);
    },
    async delete_test(req, res)
    {
        let user_information =
        {
            user_id: req.body.user_id
        }

        let account_class = new TestClass(user_information);
        let validate_delete = await account_class.validate_del();
        console.log('ACC', validate_delete);

        if(validate_delete.status == "success")
        { 
            let account_class = new TestClass(user_information);
            let del = await account_class.delete_test();
        }
        else if(validate_delete.status == "error")
        {
            res.status(400).send({ message: validate_delete.message });
        }
        res.send(true);
    }
}