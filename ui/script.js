(function(){
  window.addEventListener('load',function(){


/* -------------------GLOBAL VARIABLES-------------------------------------*/
    var list = document.querySelector('#tasks');
    var plusBtn = document.querySelector('.plusBtn');
    var trashIcon = document.querySelector('.trashBtn');
    var msg = document.querySelector('.messageEmptyList');
    var hide = document.querySelector('.hideAll');
    var taskBox = document.querySelector('.taskBox');
    var taskList = new TaskList(list);
    var newTask = document.querySelector('#newTask');
    var okBtn = document.querySelector('#okTask');
    var cancelBtn = document.querySelector('#cancelTask');
    var taskBoxForm = document.querySelector('.taskBoxForm');

/* --------------------------------------------------------*/
    plusBtn.addEventListener('click',function(){
      if(taskList.isEmpty()){
        msg.classList.add('is-hidden');
      }
      showTaskBox.call(hide);
      newTask.focus();
    });
    function showTaskBox(){
      this.classList.add('fadeIn');
      this.classList.remove('is-hidden');
      taskBox.classList.remove('is-hidden');
    }
    function hideTaskBox(){
          this.classList.remove('fadeIn');
          this.classList.add('is-hidden');
          taskBox.classList.add('is-hidden');
    }

      taskBoxForm.addEventListener('submit',function(e){
        e.preventDefault();
        newTask.blur();
      });

      trashIcon.addEventListener('click',function(){
        var deleted = document.querySelectorAll('.active');
        Array.prototype.forEach.call(deleted,function(el){
          taskList.removeTask(el);
        });
          plusBtn.classList.remove('is-hidden');
          trashIcon.classList.add('is-hidden');
      });

          taskBox.addEventListener('click',function(e){
            if(e.target === okBtn){
              taskList.addTask(newTask.value);
              hideTaskBox.call(hide);
              newTask.value = '';
              var tasks = document.querySelectorAll('.task');
                tasks[tasks.length -1].addEventListener('click',function(){
                  this.classList.toggle('active');
                  var tasks = document.querySelectorAll('.task'); // aktualna lista
                  var passed = Array.prototype.some.call(tasks,function(item){
                    console.log(item.classList);
                    return item.classList.contains('active');
                  });
                  if(passed){
                    plusBtn.classList.add('is-hidden');
                    trashIcon.classList.remove('is-hidden');
                  }
                  else if(Array.prototype.every.call(tasks,function(item){
                    return !item.classList.contains('active');
                  })){
                    plusBtn.classList.remove('is-hidden');
                    trashIcon.classList.add('is-hidden');
                  }
                });
            }
            else if(e.target === cancelTask){
              hideTaskBox.call(hide);
              newTask.value = '';
            }
          });



    hide.addEventListener('click',function(){ //ukrywanie elementu po najechaniu na cos innego niz taskBox
        hideTaskBox.call(this);
        newTask.value = '';
    });

  });



})();
