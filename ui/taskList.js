function TaskList(list){
  var list = list;
  this.addTask = function(title){
    var li = document.createElement('li');
    var text = document.createTextNode(title);
    li.classList.add('task');
    li.appendChild(text);
    list.appendChild(li);
  };
  this.removeTask = function(el){
    list.removeChild(el);
  }
  this.getList = function(){
    return list;
  }
  this.isEmpty =function(){
    console.log(list.children.length == 0);
    return list.children.length == 0;
  }
}
