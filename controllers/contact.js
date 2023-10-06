exports.addContactDetails = (req, res, next) =>{
    res.render('contactus', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}