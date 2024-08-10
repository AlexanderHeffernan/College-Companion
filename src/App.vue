<script lang="ts" setup>
  import TaskItem from './components/TaskItem.vue';
  import { taskManager } from './modules/taskManager';
  import { modalState } from './modules/modalState';
  import { Task } from './modules/task';
  import { Course } from './modules/course';
  import EditItem from './components/EditItemModal.vue';

  const swenCourse: Course = Course.createCourse('Software Engineering', 'SWEN-101');

  // Adding some tasks for demonstration
  taskManager.addTask(Task.createQuickTask('Science Project'));

  swenCourse.addTask(taskManager.addTask(Task.createQuickTask('Math Homework')));
</script>
<template>
  <div id="app" style="margin-top: 0; padding-top: 50px;">
    <EditItem v-if="modalState.getCurrentModal() === 'edit'" />
    <h1 class="text-white text-2xl font-bold">Your Tasks</h1>
    <TaskItem v-for="task in taskManager.getTasks()" :key="task.getId()" :task="task" />
  </div>
</template>

<style>
#app, .modalBox {
  width: 100%;
  max-width: 600px;
  height: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(24, 30, 46);
  border-radius: 12px;
  position: relative;
}

#app {
  margin-top: 50px;
}
body {
  display: flex;
  justify-content: center;
  background-color: rgb(20, 22, 28);
  width: 100vw;
}

@media screen and (max-width: 600px) {
  #app, .modalBox {
    margin-top: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>