<script lang="ts" setup>
  import TaskItem from './components/TaskItem.vue';
  import { taskManager } from './modules/taskManager';
  import { courseManager } from './modules/courseManager';
  import { modalState } from './modules/modalState';
  import { Task } from './modules/task';
  import { Course } from './modules/course';
  import EditItem from './components/EditItemModal.vue';

  courseManager.addCourse(Course.createCourse('Software Engineering', 'SWEN-101'));
  courseManager.addCourse(Course.createCourse('Computer Science', 'CSCI-101'));
  courseManager.addCourse(Course.createCourse('Mathematics', 'MATH-101'));
  courseManager.addCourse(Course.createCourse('Physics', 'PHYS-101'));

  courseManager.getCourses()[0].addTask(taskManager.addTask(Task.createQuickTask('Create a UML Diagram')));
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