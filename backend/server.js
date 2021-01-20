const express           = require('express');
const app               = express();
const cors              = require('cors')
const AccountController = require('./controllers/AccountController');
const TestController = require('./controllers/TestController');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/front/login', AccountController.login);
app.post('/api/front/registration', AccountController.registration);
app.post('/api/front/save_test', TestController.save_test);
app.post('/api/front/get_test', TestController.get_test);
app.post('/api/front/update_test', TestController.update_test);
app.post('/api/front/delete_test', TestController.delete_test);

app.listen({port: 4000}, (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }else {
        console.log('Cryptolab server is running on port 4000...');
    }
});