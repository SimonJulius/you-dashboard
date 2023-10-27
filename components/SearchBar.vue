<script setup lang="ts">
const props = defineProps<{
    inputClasses: string[],
    modelValue: string,
    placeholder: string
}>()

const inputClassesProperties = computed(() => props.inputClasses.join(' '))
</script>

<template>
    <div>
        <input type="search" :class="inputClassesProperties" :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target && ($event.target as HTMLInputElement).value)"
            class="h-full" />
    </div>
</template>