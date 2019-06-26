Ext.define('MY-EXTJS-APP.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'MY-EXTJS-APP.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        },{
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'login',
            formBind: true, //表单绑定，它的 disabled/enabled 取决于Form的有效性状态
            listeners: {    //侦听器
                click: 'onLoginClick'
            }
        }]
    }
});