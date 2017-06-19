function Task(id,name,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
}

var taskObj = {
    taskList : [],
    id : 0,
    addTask : function(name,desc){
        this.id ++;
        var obj = new Task(this.id,name,desc);
        this.taskList.push(obj);
        /*console.log(this.taskList);*/
    }
}