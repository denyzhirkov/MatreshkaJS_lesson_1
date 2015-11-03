//Приложение

;var App = Class({
	'extends': Matreshka,
	constructor: function(){
		this.feed = {}; //Объект содержащий будущие коллекции\массивы
		this.feed.tasks = new Tasks(this); //Массив задач

		this.bindNode('text','[mk-task]'); //Привязываем input
		this.bindNode('save','[mk-save]'); //Привязываем кнопку

		this.on('click::save',function(){ //По нажатию добавляем новый элемент в массив
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
