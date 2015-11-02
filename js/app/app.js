//Приложение

;var App = Class({
	'extends': Matreshka,
	constructor: function(){
		this.feed = {};
		this.feed.tasks = new Tasks(this);

		this.bindNode('text','[mk-task]');
		this.bindNode('save','[mk-save]');

		this.on('click::save',function(){
			if(this.text!=''){
				this.feed.tasks.unshift({
					text: this.text
				});
				this.text = '';
			}
		});

		$(document).foundation();
	}
});
