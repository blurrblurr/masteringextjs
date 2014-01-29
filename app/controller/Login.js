Ext.define('Packt.controller.Login', {
	extend : 'Ext.app.Controller',
	requires : ['Packt.util.MD5'],
	views : ['Login'],

	init : function(application) {
		this.control({
			"login form button#submit" : {
				click : this.onButtonClickSubmit
			},
			"login form button#cancel" : {
				click : this.onButtonClickCancel
			}
		});
	},

	onButtonClickSubmit : function(button, e, options) {
		var formPanel = button.up('form'), login = button.up('login'), user = formPanel.down('textfield[name=user]').getValue(), pass = formPanel.down('textfield[name=password]').getValue();

		pass = Packt.util.MD5.encode(pass);

		if (formPanel.getForm().isValid()) {
			Ext.Ajax.request({
				url : 'php/login.php',
				params : {
					user : user,
					password : pass
				}
			});
		}
	},

	onButtonClickCancel : function(button, e, options) {
		button.up('form').getForm().reset();
	}
});
