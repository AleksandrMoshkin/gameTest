//Timer
var timer = {
	time: 60,
	timerElem: document.getElementById("timerElem"),
	timerOn: document.createElement("span"),
	tiker: function(){
		if (timer.time == 0){
			timer.timerOn.innerHTML = "0";
			timer.timerElem.appendChild(timer.timerOn);
		}
		else {
			timer.timerOn.innerHTML = timer.time;
			timer.timerElem.appendChild(timer.timerOn);
			timer.time = timer.time - 1;
		}
	}
}
setInterval(timer.tiker, 1000);//запускаем таймер

//Task
var task = {
	taskElem: document.getElementById("task"),
	taskOn: document.createElement("span"),
	num1: undefined,
	num2: undefined,
	newTask: function(){
		task.num1 = Math.round(Math.random()*9);
		task.num2 = Math.round(Math.random()*9);
		task.taskOn.innerHTML = (task.num1 + " x " + task.num2);
		task.taskElem.appendChild(task.taskOn);
	}
}
task.newTask();

//Select
var select = {
	selects: document.getElementsByClassName("select"),
	newSelect: function(){
		select.randomSelect = Math.round(Math.random()*4);
		for(var i = 0; i < 5; i++) {
			if(i == this.randomSelect) {
				this.selects[i].innerHTML = task.num1 * task.num2;	
				this.selects[i].onclick = function() {
					score.beginScore = score.beginScore + 100;
					score.newScore.innerHTML = score.beginScore;
					scoreValue.appendChild(score.newScore);
					task.newTask();
					select.newSelect();
					
				}
			}
			else{
				this.selects[i].innerHTML = task.num1 * task.num2 + Math.round(Math.random()*5)+5*i;
				this.selects[i].onclick = function() {
					if(score.beginScore == 0){
						score.newScore.innerHTML = score.beginScore;
						scoreValue.appendChild(score.newScore);
					}
					else{
						score.beginScore = score.beginScore - 100;
						score.newScore.innerHTML = score.beginScore;
						scoreValue.appendChild(score.newScore);	
					}
				}
			}
		}
		/**/
	}

}
select.newSelect();

//Score
var score = {
	beginScore: 0,
	scoreValue: document.getElementById("scoreValue"),
	newScore: document.createElement("p"),
	addScore: function() {
		score.newScore.innerHTML = this.beginScore;
		scoreValue.appendChild(score.newScore);
	},
}
score.addScore();
