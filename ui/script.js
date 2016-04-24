(function(){
  window.addEventListener('load',function(){
    var list = document.querySelector('#tasks');
    var btn = document.querySelector('.plusBtn');
    var msg = document.querySelector('.messageEmptyList');
    var taskList = new TaskList(list);
    btn.addEventListener('click',function(){
      if(taskList.isEmpty()){
        msg.classList.toggle('messageEmptyList-hidden');
      }
      taskList.addTask('Jajko');
    });
  });

})();
