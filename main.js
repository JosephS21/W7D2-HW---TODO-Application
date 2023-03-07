const tdContainer = document.getElementById('td')

const todos= [
    {
        id: 1,
        title: 'Laundry',
        description: 'wash clothes'
    },
    {
        id: 2,
        title: 'School',
        description: 'do homework'
    },    {
        id: 3,
        title: 'Gym',
        description: 'do workouts'
    },    {
        id: 4,
        title: 'Groceries',
        description: 'go to grocery store'
    },    {
        id: 5,
        title: 'Dog',
        description: 'Walk the dog'
    },  {
        id: 6,
        title: 'Room',
        description: 'clean my room'
    },  {
        id: 7,
        title: 'Eat',
        description: 'make food'
    }
]

for (const todo of todos ) {
 tdContainer.innerHTML += `
 <div class="accordion" id="${todo.id}">
  <div class="accordion-item">
     <h2 class="accordion-header" id="headingOne">
       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         TODO
       </button>
     </h2>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
       <div class="accordion-body">
         <strong><h2 class="title">${todo.title}</h2></strong><p class="description">${todo.description}</p>
       </div>
     </div>
   </div>
    </div>
  </div>
</div> 
`
}


for (const todo of todos) {
    const todoE1 = document.getElementById(todo.id)
    todoE1.addEventListener('click', () => {
        todoE1.remove()
    })
}

