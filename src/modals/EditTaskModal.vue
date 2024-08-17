<script lang="ts" setup>
import { modalState } from '../modules/modalState';
import { courseManager } from '../modules/courseManager';
import TaskModal from './templates/TaskModal.vue';
import { taskManager } from '../modules/taskManager';

function handleUpdate(name: string, dueDate: string, courseId: string | undefined) {
  const task = modalState.getTempData();
  if (courseId && task.getCourse() && courseId !== task.getCourse().getId()) {
    task.getCourse()?.removeTask(task);
  }

  task.setTitle(name);
  task.setDueDate(dueDate);
  task.setCourseId(courseId);
  if (courseId) { courseManager.getFromIndex(courseId)?.addTask(task); }
  taskManager.update();
  modalState.closeModal();
}

</script>
<template>
  <TaskModal modalTitle="Edit Task" submitText="Save" :initialTask="modalState.getTempData()" @submit="handleUpdate" />
</template>