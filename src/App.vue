<script setup>
  import { Task } from './modules/task.js';

  const task = new Task(1, "Assignment 1", "2024-09-30", "Incomplete", 0);
</script>

<template>
  <h1>{{task.title}}</h1>
</template>

<style>
</style>
