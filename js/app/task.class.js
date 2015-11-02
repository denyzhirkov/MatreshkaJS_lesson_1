// Объект и массив задач

;var _task = Class({
	'extends': MK.Object,
	constructor: function(data,parent){
		this.parentArray = parent;
		this.jset(data);

		this.on('render',function(){

			this.bindNode('sandbox',":sandbox",MK.binders.className('done'));
			this.bindNode('done',':sandbox [mk-task-done]');
			this.bindNode('text',':sandbox [mk-task-text]',MK.binders.html());
			this.bindNode('delete',':sandbox [mk-task-delete]');

			this.on('click::delete',function(){
				this.parentArray.pull(this);
			});

			this.linkProps('sandbox','done',function(){
				return this.done;
			});

		});
	}
});

var _tasks = Class({
	'extends': MK.Array,
	Model: _task,
	itemRenderer: '#mk-tpl-task',
	constructor: function(parent){
		this.parentApp = parent;
		this.bindNode('sandbox','[mk-tasks]');
	}
});