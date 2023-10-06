exports.getSuccess = (req, res, next) =>{
    res.render('success', {
        pageTitle: 'Success Page',
        path: '/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}