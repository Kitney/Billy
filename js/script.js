let input_task = document.getElementById("add-task-input");//get input box
let add_task_btn = document.getElementById("add-task-button");//get add button
let clear_task_btn = document.getElementById("clear-btn");//get clear task
let todo_list = document.getElementById("todo-list");//get list
let list_information = document.getElementById("info");//get informating text

let number_of_unfinished_task = 0;
let number_of_finished_task = 0;

add_task_btn.onclick = ()=>{//on click add button

  if(input_task.value!=""){//if value is not empty
    let isCheck = false;
    let task_container = document.createElement("li");
    let task_content_trash = document.createElement("span");
    let task_content_check = document.createElement("span");
  
    let task_i_trash = document.createElement("i");
    let task_i_check = document.createElement("i");
    
    // task_content_check.id = "line-through"
    task_content_check.id = "spand-check"
    task_content_trash.id = "spand-trash"

    task_i_trash.className = "fas fa-trash";//check trash icon
    task_i_check.className = "fas fa-check-square"//load check icon
    // task_i_check.className = "line-through"

    task_content_trash.append(task_i_trash);
    task_content_check.append(task_i_check);
    // task_content_check.append(task_i_check);
  
    task_content_trash.onclick = ()=>{//on click delete
      if(number_of_unfinished_task>1){
        number_of_unfinished_task--;//subtract number of unfinished task by 1
      }
      
      task_container.parentNode.removeChild(task_container)//remove the task container to the todo list(parentNode)
    }

    task_content_check.onclick = ()=>{//on click check
      if(!isCheck){//is isCheck is false? then make it true
        number_of_finished_task++;//add number of finish task by 1
        number_of_unfinished_task--;//subtract number of unfinished task by 1
        task_content_check.style.backgroundColor = "#34e761" //change the color to green
        isCheck = true
        // task_content_check.style.display = 'flex';
        task_content_check.style.textDecoration ='line-through';
      }
      else{//else then make it false
        number_of_finished_task--;//subtrack number of finish task by 1
        number_of_unfinished_task++;///add number of unfinished task by 1
        task_content_check.style.backgroundColor = "#686868"//change the color to grey
        isCheck = false
      }
      
    }

    task_container.innerText = input_task.value;//set text to what the user enter on the input field
    //append task content to task container
    task_container.append(task_content_trash);
    task_container.append(task_content_check);
  
    todo_list.append(task_container)//append task container to the todo list element
    input_task.value = "";//empty the input field
    number_of_unfinished_task++;//add number of unfinished task by 1
  }
  else{//else alert the user
    alert("You need to input task")
  }
}
