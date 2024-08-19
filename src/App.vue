<script lang="ts" setup>
import { modalState } from './modules/modalState';
import EditTaskModal from './modals/EditTaskModal.vue';
import AddTaskModal from './modals/AddTaskModal.vue';
import EditCourseModal from './modals/EditCourseModal.vue';
import AddCourseModal from './modals/AddCourseModal.vue';
import ViewCarousel from './components/views/ViewCarousel.vue';
</script>
<template>
  <div id="app" style="margin-top: 0;" class="overflow-y-auto">
    <AddTaskModal v-if="modalState.getCurrentModal() === 'addItem'" />
    <EditTaskModal v-else-if="modalState.getCurrentModal() === 'editItem'" />
    <EditCourseModal v-else-if="modalState.getCurrentModal() === 'editCourse'" />
    <AddCourseModal v-else-if="modalState.getCurrentModal() === 'addCourse'" />
    <ViewCarousel v-else />
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