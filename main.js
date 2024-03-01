//Mettre du code HTML dans une variable
//Utiliser cette variable avec .insertAdjacentHTML
//Et mettre tout ça dans une fonction pour afficher plusieurs lignes

const todoList = [
  {
    item: "Je suis une todo-une tâche à faire",
    done: false,
  },
];

const list = document.querySelector("li");
console.log(list);

const text = `<li class="item">
<strong>Je suis du code HTML</strong>
<br> coucou ${todoList[0].item}</li>`;

console.log(text);

const position = "afterend";

list.insertAdjacentHTML(position, text);
