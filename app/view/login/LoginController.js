Ext.define('MY-EXTJS-APP.view.login.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        //在本地存储中设置为已登录
        localStorage.setItem("MyExtjsAppLoggedIn", true);

        //销毁登录窗口
        this.getView().destroy();

        //add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
    }

});