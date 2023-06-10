const Employee = require('../Models/employee_accounts')
// Format: module.exports.actionName = function() { body/definition }

module.exports.createAccount = (req, res)=> {

    // If the password and confirm password do not match, then render the error page
    if(req.body.password != req.body.confirm_password){
        return res.render('error',{
            title: 'Team Career Camp | Password Error'
        });
    } 
    
    // Creating the account with entered data via sign up form
    Employee.create(
        {
            emp_name: req.body.emp_name,
            emp_id: req.body.emp_id,
            email: req.body.email,
            password: req.body.password
        }
    );
    
    return res.render('success', {
        title: 'Team Career Camp | Success' 
    })

}