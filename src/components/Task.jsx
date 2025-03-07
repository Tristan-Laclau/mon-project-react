const Task = ({ task, onToggle, onDelete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(task.id)}>{task.title}</span>
      <span style={{ marginLeft: "10px", fontWeight: "bold", color: task.priority === "Haute" ? "red" : task.priority === "Moyenne" ? "orange" : "green" }}>
        [{task.priority}]
      </span>
      <button onClick={() => onDelete(task.id)}> X </button>
    </li>
  );
};

// Fonction classique
function add(a, b) {
  return a + b;
}

// Fonction fléchée
const addition = (a, b) => a + b;

const numbers = [1, 2, 3, 4, 5];

// map() -> transforme chaque élément
const squares = numbers.map(n => n * n); // [1, 4, 9, 16, 25]

// filter() -> garde uniquement les éléments qui passent un test
const evenNumbers = numbers.filter(n => n % 2 === 0); // [2, 4]

// find() -> retourne le premier élément qui passe un test
const firstEven = numbers.find(n => n % 2 === 0); // 2


export default Task;
