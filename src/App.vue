<script lang="ts" setup>
  import TaskItem from './components/TaskItem.vue';
  import { taskManager } from './modules/taskManager';
  import { courseManager } from './modules/courseManager';
  import { modalState } from './modules/modalState';
  import { Task } from './modules/task';
  import { Course } from './modules/course';
  import EditItem from './components/EditItemModal.vue';
  import AddItem from './components/AddItemModal.vue';

  courseManager.addCourse(Course.createCourse('Software Engineering', 'SWEN-101'));
  courseManager.addCourse(Course.createCourse('Computer Science', 'CSCI-101'));
  courseManager.addCourse(Course.createCourse('Mathematics', 'MATH-101'));
  courseManager.addCourse(Course.createCourse('Physics', 'PHYS-101'));

  courseManager.getCourses()[0].addTask(taskManager.addTask(Task.createQuickTask('Create a UML Diagram')));
</script>
<template>
  <div id="app" style="margin-top: 0; padding-top: 50px;">
    <AddItem v-if="modalState.getCurrentModal() === 'addItem'" />
    <EditItem v-if="modalState.getCurrentModal() === 'editItem'" />
    <h1 class="text-white text-2xl font-bold">Your Tasks</h1>
    <TaskItem v-for="task in taskManager.getTasks()" :key="task.getId()" :task="task" />
    <button class="bg-blue-500 text-white py-1 px-4 mr-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addItem')">Add Task</button>
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