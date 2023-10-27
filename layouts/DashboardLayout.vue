<script lang="ts" setup>
import { useRoute } from 'vue-router'
import HeaderComponent from '../components/HeaderComponent.vue';
import SideBar from '../components/SideBar.vue';

const route = useRoute()


const company = {
    name: 'Cheta And Daughters Limited',
    regNo: 'RC123456789'
}
</script>


<template>
    <HeaderComponent />
    <main class="flex">
        <nav class="side basis-2/12 bg-white border-r-2 border-r-gray-light">
            <SideBar :company="company" :is-dashboard="route.meta.name === 'dashboard'" />
        </nav>
        <section class="grow">
            <slot />
        </section>
    </main>
</template>
  