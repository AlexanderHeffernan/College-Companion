<script lang="ts" setup>
import { modalState } from '../modules/modalState';
</script>
<template>
  <div class="modalBox absolute top-0 left-0">
    <button @click="modalState.closeModal()">Close</button>
  </div>
</template>