// Объект и массив задач

;var Task = Class({
	'extends': MK.Object,
	constructor: function(data,parent){
		this.parentArray = parent; //Добавялем ссылку на родителя - массив
		this.jset(data); //При создании объекта заполняем переданными данными

		this.on('render',function(){

			this.bindNode('_sandbox',":sandbox",MK.binders.className('done')); //Привязываем "песочный" div
			this.bindNode('done',':sandbox [mk-task-done]'); //Привязываем чекбокс (выполнено\невыполнено)
			this.bindNode('text',':sandbox [mk-task-text]',MK.binders.html()); //Привязываем <p/> для текста задачи
			this.bindNode('delete',':sandbox [mk-task-delete]'); //Привязываем крестик для удаления

			this.on('click::delete',function(){ //По клику, говорим родителю-массиву удалить "себя"
				this.parentArray.pull(this);
			});

			this.linkProps('_sandbox','done',function(){ //Связываем чекбокс с "песочным" дивом для "скрытия"
				return this.done;
			});

		});
	}
});

var Tasks = Class({
	'extends': MK.Array,
	Model: Task,
	itemRenderer: '#mk-tpl-task',
	constructor: function(parent){
		this.parentApp = parent; //Добавляем ссылку на родителя - приложение
		this.bindNode('sandbox','[mk-tasks]'); //Указываем в каком месте будем рисовать наш массив
	}
});