Ext.define('Packt.view.authentication.CapsLockTooltip', {
	extend : 'Ext.tip.QuickTip',
	alias : 'widget.capslocktooltip',

	target : 'password',
	anchor : 'top',
	anchorOffset : 60,
	width : 300,
	dismissDelay : 0,
	autoHide : false,
	title : '<div class="capslock">translations.capsLockTitle</div>',
	html : '<div>Having Caps Lock on may cause you to enter your password</div>' + '<div>incorrectly.</div><br/>' + '<div>You should press Caps Lock to turn it off before entering</div>' + '<div>your password.</div>'
});
