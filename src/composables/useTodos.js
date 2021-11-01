import { ref, computed } from "vue";

const useTodos = () => {
  const pending = computed(() => {
    return todos.value.filter((todo) => !todo.done);
  });

  const completed = computed(() => {
    return todos.value.filter((todo) => todo.done);
  });

  const addTodo = (newTodo) => {
    if (newTodo.trim()) {
      todos.value.push({
        id: todos.value.length,
        content: newTodo,
        done: false,
      });
    }
  };

  const changeStatus = (id) => {
    const todo = todos.value.find((todo) => todo.id === id);
    todo.done = !todo.done;
  };
  return {
    todos,
    pending,
    completed,
    addTo,
    changeStatus,
  };
};

export default useTodos;
