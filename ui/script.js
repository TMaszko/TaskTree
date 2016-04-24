(function(){
  window.addEventListener('load',function(){


/* -------------------GLOBAL VARIABLES-------------------------------------*/
    var list = document.querySelector('#tasks');
    var btn = document.querySelector('.plusBtn');
    var msg = document.querySelector('.messageEmptyList');
    var hide = document.querySelector('.hideAll');
    var taskBox = document.querySelector('.taskBox');
    var taskList = new TaskList(list);
    var newTask = document.querySelector('#newTask');
    var okBtn = document.querySelector('#okTask');
    var cancelBtn = document.querySelector('#cancelTask');
    var taskBoxForm = document.querySelector('.taskBoxForm');

/* --------------------------------------------------------*/
    btn.addEventListener('click',function(){
      if(taskList.isEmpty()){
        msg.classList.add('is-hidden');
      }
      hide.classList.add('fadeIn');
      hide.classList.remove('is-hidden');
      taskBox.classList.remove('is-hidden');
      newTask.focus();
    });
    function hideTaskBox(){
          this.classList.remove('fadeIn');
          this.classList.add('is-hidden');
          taskBox.classList.add('is-hidden');
    }
      taskBoxForm.addEventListener('submit',function(e){
        e.preventDefault();
      });
          taskBox.addEventListener('click',function(e){
            if(e.target === okBtn){
              taskList.addTask(newTask.value);
              hideTaskBox.call(hide);
              newTask.value = '';
            }
            else if(e.target === cancelTask){
              hideTaskBox.call(hide);
              newTask.value = '';
            }
          });



    hide.addEventListener('click',function(){ //ukrywanie elementu po najechaniu na cos innego niz taskBox
        hideTaskBox.call(this);
    })
  });


})();
