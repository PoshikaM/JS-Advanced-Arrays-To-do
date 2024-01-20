let input = document.getElementById('input');
let addButton = document.getElementById('button');
let itemList = document.getElementById('todolist')
let listOfTodos = [];

addButton.addEventListener('click', function(){
    let inputFromUser = input.value;
    listOfTodos.push(inputFromUser);
    input.value = "";
    display();
})

// same using map method to see the difference between both(for my self clarity)
// function display(){
//     itemList.innerHTML = listOfTodos.map((element, index) => `
//     <li>
//     ${element}
//     <a onclick="editItems(${index})">Edit</a>
//     <a onclick="removeItems(${index})">x |</a>
//     </li>`
//     ).join('');
// }

function display() {
    itemList.innerHTML = '';
    listOfTodos.forEach((element, index) => {
        itemList.innerHTML += `
            <li>
                ${element}
                <a onclick="editItems(${index})">Edit</a>
                <a onclick="removeItems(${index})">x |</a>
            </li>`;
    });
}

function removeItems(items){
    listOfTodos.splice(items, 1);
    display();
}

function editItems(items){
    let textToEdit = prompt('Make changes to your Todo');
    listOfTodos.splice(items, 1, textToEdit);
    display();
}

