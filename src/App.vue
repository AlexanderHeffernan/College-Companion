<script lang="ts" setup>
import TaskItem from './components/TaskItem.vue';
import CourseItem from './components/CourseItem.vue';
import { taskManager } from './modules/taskManager';
import { courseManager } from './modules/courseManager';
import { modalState } from './modules/modalState';
import { Course } from './modules/course';
import EditTaskModal from './modals/EditTaskModal.vue';
import AddTaskModal from './modals/AddTaskModal.vue';

courseManager.add(Course.createCourse('Software Engineering', 'SWEN-101'));
courseManager.add(Course.createCourse('Computer Science', 'CSCI-101'));
courseManager.add(Course.createCourse('Mathematics', 'MATH-101'));
courseManager.add(Course.createCourse('Physics', 'PHYS-101'));
</script>
<template>
  <div id="app" style="margin-top: 0; padding-top: 50px;" class="overflow-y-auto">
    <AddTaskModal v-if="modalState.getCurrentModal() === 'addItem'" />
    <EditTaskModal v-if="modalState.getCurrentModal() === 'editItem'" />
    <h1 class="text-white text-2xl font-bold">Your Tasks</h1>
    <TaskItem v-for="task in taskManager.getAll()" :key="task.getId()" :task="task" />
    <button class="bg-blue-500 text-white py-1 px-4 mr-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addItem')">Add Task</button>
    <br /><br />
    <h1 class="text-white text-2xl font-bold">Your Courses</h1>
    <CourseItem v-for="course in courseManager.getAll()" :key="course.getId()" :course="course" />
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

#app::-webkit-scrollbar {
  height: 8px;
}

#app::-webkit-scrollbar-thumb {
  background-color: #3C82F6;
  border-radius: 4px;
}

#app::-webkit-scrollbar-thumb:hover {
  background-color: #2463EB;
}
</style>