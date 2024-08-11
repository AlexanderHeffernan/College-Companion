<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { Course } from '../../modules/course';
import { modalState } from '@/modules/modalState';
import ModalHeader from '../components/ModalHeader.vue';
import InputField from '../components/InputField.vue';
import ModalFooter from '../components/ModalFooter.vue';

const props = defineProps<{
    modalTitle: string;
    submitText: string;
    initialCourse?: Course;
}>();

onMounted(() => {
    if (!props.initialCourse) { return; }
    if (!(props.initialCourse instanceof Course)) { 
      console.error("initialCourse must be an instance of Course");
      return; 
    }
    courseTitle.value = props.initialCourse.getTitle();
    courseCode.value = props.initialCourse.getCode();
});

const emit = defineEmits(['submit', 'close']);

let courseTitle = ref<string>('');
let courseCode = ref<string>('');

function handleSubmit() {
    if (courseTitle.value === '') {
        alert('Please enter a course name');
        return;
    }
    emit('submit', courseTitle.value, courseCode.value);
}

function handleClose() { modalState.closeModal(); }

</script>

<template>
  <div class="modalBox absolute top-0 left-0 p-6 pt-[60px]">
    <ModalHeader :title="props.modalTitle" :showCloseButton="true" @close="handleClose" />

    <InputField id="courseName" label="Course Name" type="text" placeholder="Course Name" v-model="courseTitle" />
    <InputField id="courseCode" label="Course Code" type="text" placeholder="Course Code" v-model="courseCode" />

    <ModalFooter :submitText="submitText" @submit="handleSubmit" @close="handleClose" />
  </div>
</template>