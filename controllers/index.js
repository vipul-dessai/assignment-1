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
    renderTest: function(req, res, next) {
        res.render(
            'test-tep',
            {
                layout: 'index',
                title: 'test'
            }
        )
    },
}