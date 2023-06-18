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
let employee;
module.exports.signIn = async (req, res) => {
    employee = await Employee.findOne({ email: req.body.email }).exec();
    
    if (employee) {
      if (employee.password === req.body.password) {
        // Set the session variables
        req.session.SignIn = true;
        req.session.employee = {
          emp_name: employee.emp_name,
          emp_id: employee.emp_id
        };
  
        return res.render('index', {
          title: 'Team Career Camp | Home',
          emp_name: employee.emp_name,
          emp_id: employee.emp_id
        });
      } 
      
      if(req.session.SignIn === false)
        {
          console.log('Please sign in with your credentials');
        }

      else {
        console.log('User password is incorrect!');
        return res.redirect('/');
      }
    }
};
  
// If the index page url is entered as http(s) request in the browser
module.exports.signInGetRequest = async (req, res) => {
  if(req.session.SignIn === true)
  {
    return res.render('index', {
      title: 'Team Career Camp | Home',
      emp_name: employee.emp_name,
      emp_id: employee.emp_id
    });    
  }
  else
    res.redirect('/');
}

module.exports.signOut = (req, res) => {
// Destroy the session
req.session.destroy((err) => {
    if (err) {
    console.log('Error while destroying session:', err);
    }
    // Redirect the user after destroying the session
    res.redirect('/');
});
};