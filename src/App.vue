<script setup>
import { ref, computed } from "vue";

const newTodo = ref("");
const todos = ref([
    {id:0, content: "Feed Dogs", done: true },
    {id:1, content: "Homework", done: false },
    {id:2, content: "Gym", done: false },
    {id:3, content: "Rest", done: false },
    {id:4, content: "Laundry", done: true },
    {id:5, content: "Wash Truck", done: true },
    {id:6, content: "Get Coffee", done: false },
    {id:7, content: "Watch football", done: false },


])



const pending = computed(() => {
    return todos.value.filter((todo) => !todo.done);
});

const completed = computed(() => {
    return todos.value.filter((todo) => todo.done);
});

const addTodo = () => {
    if (newTodo.value.trim()) {
        todos.value.push({
            id: todos.value.length,
            content: newTodo.value,
            done: false,
        });
        newTodo.value = "";
    }
};

const changeStatus = (id) => {
    const todo = todos.value.find((todo) => todo.id === id);
    todo.done = !todo.done;
};
</script>

<template>
<div class="min-h-screen bg-red-500">
<div class="container flex flex-col pt-8 mx-auto space-y-8">
<hi class="text-6xl font-thin tracking-tight text-center">🥸 Edgar's Weekend Todo List App 🥸</hi>
<input @change="addTodo"
v-model="newTodo"
type="text" class="px-4 py-2 text-xl text-center rounded-lg" placeholder="New Task(Please no more)" />
<div class="flex justify-between">
    <div class="w-1/3">
        <h3 class="text-2xl font-extrabold text-center text-black underline">Pending</h3>
        <ul class="pt-8 space-y-4">
            <li 
            v-for="todo in pending"
            :key="todo.id"
            @click="changeStatus(todo.id)"
            class="w-full px-4 py-2 font-bold text-center text-blue-800 transition-colors duration-200 bg-blue-200 rounded-lg hover:cursor-pointer hover:bg-yellow-500 hover:text-black">{{todo.content }}</li>
        </ul>
    </div>
    <div class="w-1/3">
        <h3 class="text-2xl font-extrabold text-center text-black underline">Completed</h3>
        <ul class="pt-8 space-y-4">
            <li  
            @click="changeStatus(todo.id)"
            v-for="todo in completed"
            :key="todo.id"
            class="w-full px-4 py-2 font-bold text-center text-blue-800 transition-colors duration-200 bg-blue-200 rounded-lg hover:cursor-pointer hover:bg-pink-500 hover:text-black">{{todo.content}}</li>
        </ul>
    </div>
</div>
</div>
</div>
</template>


