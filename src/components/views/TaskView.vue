<script lang="ts" setup>
import { ref, computed } from 'vue';
import TaskItem from '@/components/TaskItem.vue';
import { taskManager } from '@/modules/taskManager';
import { courseManager } from '@/modules/courseManager';
import { modalState } from '@/modules/modalState';
import { TaskSorter } from '@/modules/taskSorter';
import { TaskFilter } from '@/modules/taskFilter';

let sortingOption = ref<string>('unsorted');
let courseFilter = ref<string>('all');

const tasks = computed(() => {
  let taskList = taskManager.getAll();
  taskList = TaskSorter.sort(taskList, sortingOption.value);
  taskList = TaskFilter.filterByCourse(taskList, courseFilter.value);
  taskList = TaskFilter.filterByStatus(taskList, 'Incomplete');
  return taskList;
});
</script>
<template>
    <div class="flex relative items-center">
        <h1 class="text-white text-2xl font-bold flex-grow text-left ml-4">Your Tasks</h1>
        <select id="taskSorting" v-model="sortingOption" class="absolute right-0 mt-1 block w-32 px-3 py-2 bg-gray-800 text-gray-500 transition-[color] transition-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:text-white">
            <option value="unsorted">Unsorted</option>
            <option value="date">Date</option>
            <option value="alphabetical">Alphabetical</option>
        </select>
        <select id="courseFilter" v-model="courseFilter" class="absolute right-36 mt-1 block w-32 px-3 py-2 bg-gray-800 text-gray-500 transition-[color] transition-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:text-white">
            <option value="all">All Courses</option>
            <option v-for="course in courseManager.getAll()" :key="course.getId()" :value="course.getId()">
            {{ course.getCode() }}
            </option>
        </select>
    </div>
    
    <TaskItem v-for="task in tasks" :key="task.getId()" :task="task" />
    <button class="bg-blue-500 text-white py-1 px-4 mr-4 mb-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" @click="modalState.openModal('addItem')">Add Task</button>

    <h1 v-if="taskManager.getAll().filter(task => task.getStatus() !== 'Incomplete').length !== 0" class="text-white text-2xl font-bold">Complete Tasks</h1>
    <TaskItem v-for="task in taskManager.getAll().filter(task => task.getStatus() !== 'Incomplete')" :key="task.getId()" :task="task" />
</template>