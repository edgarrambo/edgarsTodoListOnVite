<script setup>
import { ref } from "vue";
const newTodo = ref("");
import useTodos from "../composables/useTodos";
const {addTodo} = useTodos();



const add = () => {
    if(newTodo.value) {
        addTodo(newTodo.value);
        newTodo.value = "";
    }
};
</script>

<template>
<hi class="text-6xl font-thin tracking-tight text-center">🥸 Edgar's Weekend Todo List App 🥸</hi>

<input 
@change="add"
v-model="newTodo"
type="text" class="px-4 py-2 text-xl text-center rounded-lg" 
placeholder="New Task(Please no more)" />
</template>