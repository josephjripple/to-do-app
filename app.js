function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //convert text value input into to-do to "title"
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input for a checkbox
    let checkbox = document.createElement('input');

    //create a delete button for li items
    let deleteButton = document.createElement('input');

    //set the input type to checkbox
    checkbox.type = "checkbox";

    //set the delete button type to button
    deleteButton.type = "radio";

    //set new li text content equal to title variable (the user input text)
    newLi.textContent = title;

    //attach new li to to do list
    toDoList.appendChild(newLi);

    //attach(append) checkbox to the li
    newLi.appendChild(checkbox);

    //attach(append) delete button to li
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
          var todo = document.querySelectorAll("LI");
          var input = document.querySelectorAll("INPUT");
              for(i = 0; i < input.length; i++){
                  if(input[i].checked === true){
                          input[i].parentNode.remove();
                  }
              }
      });

    //reset input value to empty
    newToDoText.value = "";


  });
}



window.onload = function() {
  onReady();
};
