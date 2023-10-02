
const form = document.querySelector('#new-tasks');
const input = document.querySelector('#new-todos');
const newAddedTasks = document.querySelector('#toDo-list');






newAddedTasks.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()};
        
});



form.addEventListener('submit', function(e){
e.preventDefault();
console.log(input.value);
const newTask = document.createElement('li');
const newListButton = document.createElement('button')
newListButton.innerText = 'completed';
newTask.innerText = input.value;
input.value = '';
newTask.appendChild(newListButton);
newAddedTasks.appendChild(newTask);
})
  
// need to add css

for(let i = 0; i < listElements.length; i ++){
    listElements[i].addEventListener('click', function(e){
        console.log(e.target.classList);

        if(e.target.classList.contains('textThrough')){
            e.target.classList.remove('textThrough');
        }
        else{
           e.target.classList.add('textThrough'); 
        }
        
    });
}