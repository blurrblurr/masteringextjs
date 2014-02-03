Ext.define('Packt.Application', {
	name : 'Packt',

	extend : 'Ext.app.Application',

	views : [],

	controllers : ['Login','TranslationManager'],

	stores : [
	// TODO: add stores here
	],

	init : function() {
		splashscreen = Ext.getBody().mask('Loading Aplication', 'splashscreen');
		splashscreen.addCls('splashscreen');
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
			cls : 'x-splash-icon'
		});
	},
	
	launch : function() {
		Ext.tip.QuickTipManager.init(); 
		var task = new Ext.util.DelayedTask(function() {
			splashscreen.fadeOut({
				duration : 1000,
				remove : true
			});
			splashscreen.next().fadeOut({
				duration : 1000,
				remove : true,
				listeners : {
					afteranimate : function(el, startTime, eOpts) {
						Ext.widget('login');
					}
				}
			});
			//console.log('launch');
		});
		task.delay(2000);
	},
});
