function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new line
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach new li to ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //empty the input
    newToDoText.value = '';

    //create a new input for the delete box
    let deleteButton = document.createElement('input');

    //set the delete button type to button
    deleteButton.type = "button";

    //attach delete button to the li
    newLi.appendChild(deleteButton);

    deleteButton.addEventListener('submit', (event) => {
      var listItems = document.getElementsByTagName("li");
        for (var i = 0; i < listItems.length; i++) {
          listItems[i].onclick = function() {this.parentNode.removeChild(this);};
}
    });

  });
}



window.onload = function() {
  onReady();
};
