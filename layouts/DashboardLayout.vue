<script lang="ts" setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>


<template>
    <HeaderComponent />
    <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <input type="search"
            class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
    </div>
</template>
  