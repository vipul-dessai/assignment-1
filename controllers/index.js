module.exports = {
    renderLogin: function(req, res, next) {
        res.render(
            'login',
            {
                layout: 'index',
                title: 'Login'
            }
        )
    },
    renderDashboard: function(req, res, next) {
        res.render(
            'dashboard',
            {
                layout: 'index',
                title: 'Dashboard'
            }
        )
    },
    renderCart: function(req, res, next) {
        res.render(
            'cart',
            {
                layout: 'index',
                title: 'Checkout'
            }
        )
    },
    renderRegister: function(req, res, next) {
        res.render(
            'register',
            {
                layout: 'index',
                title: 'Register'
            }
        )
    },
    renderPosts: function(req, res, next) {
        res.render(
            'posts',
            {
                layout: 'index',
                title: 'Posts'
            }
        )
    },     
}