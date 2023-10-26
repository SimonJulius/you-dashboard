<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    inputClasses: string[],
    modelValue: string,
    placeholder: string
}>()

const inputClassesProperties = computed(() => props.inputClasses.join(' '))
</script>

<template>
    <div>
        <input type="search" :class="inputClassesProperties" />
    </div>
</template>