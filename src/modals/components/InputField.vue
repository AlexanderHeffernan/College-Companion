<template>
    <div class="mb-4 flex items-center pl-5">
        <label :for="props.id" class="text-left block text-sm font-medium text-white w-48">{{ props.label }}</label>
        <input
            :id="props.id"
            :value="props.modelValue"
            @input="updateValue"
            :type="props.type"
            :placeholder="props.placeholder"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

function updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>