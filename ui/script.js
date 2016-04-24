(function(){
  window.addEventListener('load',function(){
    var list = document.querySelector('#tasks');
    var btn = document.querySelector('.plusBtn');
    var msg = document.querySelector('.messageEmptyList');
    var hide = document.querySelector('.hideAll');
    var taskBox = document.querySelector('.taskBox');
    var taskList = new TaskList(list);
    btn.addEventListener('click',function(){
      if(taskList.isEmpty()){
        msg.classList.toggle('is-hidden');
      }
      hide.classList.toggle('fadeIn');
      taskBox.classList.toggle('is-hidden');
      taskList.addTask();
    });
    hide.addEventListener('click',function(){
      this.classList.remove('fadeIn');
      taskBox.classList.add('is-hidden');
    })
  });


})();
