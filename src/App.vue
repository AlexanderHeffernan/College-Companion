<script lang="ts" setup>
import { ref, computed } from 'vue';
import TaskItem from './components/TaskItem.vue';
import CourseItem from './components/CourseItem.vue';
import { taskManager } from './modules/taskManager';
import { courseManager } from './modules/courseManager';
import { modalState } from './modules/modalState';
import EditTaskModal from './modals/EditTaskModal.vue';
import AddTaskModal from './modals/AddTaskModal.vue';
import EditCourseModal from './modals/EditCourseModal.vue';
import AddCourseModal from './modals/AddCourseModal.vue';

let sortingOption = ref<string>('unsorted');

const sortedTasks = computed(() => {
  let tasks = taskManager.getAll();
  if (sortingOption.value === 'date') {
    return tasks.sort((a, b) => new Date(a.getDueDate()).getTime() - new Date(b.getDueDate()).getTime());
  } else if (sortingOption.value === 'alphabetical') {
    return tasks.sort((a, b) => a.getName().localeCompare(b.getName()));
  } else {
    return tasks;
  }
})

</script>
<template>
  <div id="app" style="margin-top: 0; padding-top: 50px;" class="overflow-y-auto">
    <AddTaskModal v-if="modalState.getCurrentModal() === 'addItem'" />
    <EditTaskModal v-else-if="modalState.getCurrentModal() === 'editItem'" />
    <EditCourseModal v-else-if="modalState.getCurrentModal() === 'editCourse'" />
    <AddCourseModal v-else-if="modalState.getCurrentModal() === 'addCourse'" />
    <div v-else class="mx-5">
      <div class="flex relative items-center">
        <h1 class="text-white text-2xl font-bold flex-grow">Your Tasks</h1>
        <select id="taskSorting" v-model="sortingOption" class="absolute right-0 mt-1 block w-32 px-3 py-2 bg-gray-800 text-gray-500 transition-[color] transition-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:text-white">
          <option value="unsorted">Unsorted</option>
          <option value="date">Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      <TaskItem v-for="task in sortedTasks.filter(task => task.getStatus() !== 'Complete')" :key="task.getId()" :task="task" />
      <button class="bg-blue-500 text-white py-1 px-4 mr-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addItem')">Add Task</button>
      <br /><br />

      <h1 v-if="taskManager.getAll().filter(task => task.getStatus() !== 'Incomplete').length !== 0" class="text-white text-2xl font-bold">Complete Tasks</h1>
      <TaskItem v-for="task in taskManager.getAll().filter(task => task.getStatus() !== 'Incomplete')" :key="task.getId()" :task="task" />
      <br /><br />
      
      <h1 class="text-white text-2xl font-bold mb-3">Your Courses</h1>
      <CourseItem v-for="course in courseManager.getAll()" :key="course.getId()" :course="course" />
      <button class="bg-blue-500 text-white py-1 px-4 mr-4 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addCourse')">Add Course</button>
    </div>
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