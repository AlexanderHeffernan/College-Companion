<template>
    <div class="modal-header flex items-center justify-between mb-4 p-4 border-b border-gray-200 bg-gray-800 text-white">
      <h1 class="text-2xl font-bold">{{ props.title }}</h1>
      <button v-if="props.showCloseButton" @click="$emit('close')" class="text-white hover:text-gray-300">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
</template>
  
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
    showCloseButton?: boolean;
}>();
</script>
  
<style scoped>
  .modal-header {
    background-color: #1a202c;
  }
</style>  