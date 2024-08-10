<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { Course } from '../../modules/course';
import { Task } from '../../modules/task';
import { courseManager } from '../../modules/courseManager';
import DatePicker from 'vue3-datepicker';
import { modalState } from '@/modules/modalState';

const props = defineProps<{
    modalTitle: string;
    submitText: string;
    initialTask?: Task;
}>();

onMounted(() => {
    if (!props.initialTask) { return; }
    if (!(props.initialTask instanceof Task)) { 
      console.error("initialTask must be an instance of Task");
      return; 
    }
    taskName.value = props.initialTask.getTitle();
    taskDueDate.value = props.initialTask.getDueDate() ? new Date(props.initialTask.getDueDate()) : undefined;
    taskCourse.value = props.initialTask.getCourse();
});

const emit = defineEmits(['submit', 'close']);

let taskName = ref<string>('');
let taskDueDate = ref<Date | undefined>(undefined);
let taskCourse = ref<Course | undefined>(undefined);

function handleSubmit() {
    if (taskName.value === '') {
        alert('Please enter a task name');
        return;
    }
    let dateString = '';
    if (taskDueDate.value) {
        const adjustedDate = new Date(Date.UTC(taskDueDate.value.getFullYear(), taskDueDate.value.getMonth(), taskDueDate.value.getDate()));
        dateString = adjustedDate.toISOString().split('T')[0];
    }
    emit('submit', taskName.value, dateString, taskCourse.value);
}

function handleClose() { modalState.closeModal(); }

</script>

<template>
  <div class="modalBox absolute top-0 left-0 p-6 pt-[60px]">
    <h1 class="text-white text-2xl font-bold">{{ props.modalTitle }}</h1>
    
    <div class="mb-4">
      <label for="taskName" class="block text-sm font-medium text-gray-700">Task Name</label>
      <input id="taskName" v-model="taskName" type="text" placeholder="Task Name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
    </div>

    <div class="mb-4">
      <label for="taskDueDate" class="block text-sm font-medium text-gray-700">Due Date</label>
      <DatePicker v-model="taskDueDate" format="yyyy-MM-dd" placeholder="Due Date" class="border border-gray-300 p-2 rounded mb-4"/>
    </div>

    <div class="mb-4">
      <label for="taskCourseId" class="block text-sm font-medium text-gray-700">Course ID</label>
      <select id="taskCourseId" v-model="taskCourse" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" >
        <option value="">No Course</option>
        <option v-for="course in courseManager.getAll()" :key="course.getId()" :value="course">{{ course.getCode() }}</option>
      </select>
    </div>

    <div class="flex justify-end space-x-2">
      <button @click="handleClose()" class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Close</button>
      <button @click="handleSubmit()" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">{{ props.submitText }}</button>
    </div>
  </div>
</template>