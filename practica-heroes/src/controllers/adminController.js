let adminController = {
    
    admin: (req, res )=> {
    res.render('admin');
    },
    
    createProducts: (req, res )=> {
      res.render('createProducts');
    },

    editProducts: (req, res )=> {
        res.render('editProducts');
      },
    };
    
    module.exports = adminController;