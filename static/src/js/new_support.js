odoo.define('web.newSupport', function (require) {
    "use strict";

    var UserMenu = require('web.UserMenu');

    UserMenu.include({
        on_menu_new_support: function () {
            window.open('https://suvit.ru', '_blank');
        },
        on_menu_support: function () {
            window.open('https://suvit.ru', '_blank');
        },
    });
});