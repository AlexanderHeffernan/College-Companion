<template>
    <div class="flex justify-end space-x-2">
      <button @click="handleClose" class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Close</button>
      <button @click="handleSubmit" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">{{ props.submitText }}</button>
    </div>
</template>
  
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ submitText: string; }>();

const emit = defineEmits(['submit', 'close']);
function handleSubmit() { emit('submit'); }
function handleClose() { emit('close'); }
</script>