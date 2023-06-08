// Format: module.exports.actionName = function() { body/definition }

module.exports.homePage = (req, res)=> { 
    return res.render('home',{
        title: 'Team Career Camp'
    });
};