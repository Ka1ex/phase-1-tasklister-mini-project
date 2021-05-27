document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener('submit', (e) => {
    const newTask = document.querySelector('#new-task-description').value
    const  taskList = document.querySelector("#tasks")
    const listElement = document.createElement("li")
    e.preventDefault()
   listElement.textContent += `${newTask}`
   taskList.appendChild(listElement)
   
  })
  
});
 