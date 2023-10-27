<script setup lang="ts">

const searchQuery = ref('')

</script>

<template>
    <nav class="flex flex-row justify-between gap-12 px-16 py-6 border-b-2 border-b-gray items-center">
        <div class="brand min-w-fit">
            <IconsLogo />
        </div>
        <div class="w-8 h-8 shrink-0 fill-white shadow-lg rounded-full grid place-items-center translate-x-3/4">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_690)">
                    <path
                        d="M5.82082 10.7525C5.75534 10.911 5.75534 11.089 5.82082 11.2475C5.85244 11.326 5.89915 11.3977 5.95832 11.4583L10.5417 16.0416C10.6632 16.1632 10.8281 16.2315 11 16.2315C11.1719 16.2315 11.3368 16.1632 11.4583 16.0416C11.5799 15.9201 11.6482 15.7552 11.6482 15.5833C11.6482 15.4114 11.5799 15.2465 11.4583 15.125L7.97958 11.6462L15.5833 11.6508C15.6689 11.6511 15.7537 11.6345 15.8328 11.602C15.9119 11.5694 15.9838 11.5215 16.0443 11.4609C16.1048 11.4004 16.1528 11.3286 16.1853 11.2494C16.2179 11.1703 16.2345 11.0855 16.2342 11C16.2345 10.9144 16.2179 10.8296 16.1853 10.7505C16.1528 10.6714 16.1048 10.5995 16.0443 10.539C15.9838 10.4785 15.9119 10.4305 15.8328 10.3979C15.7537 10.3654 15.6689 10.3488 15.5833 10.3491L7.97957 10.3537L11.4583 6.87495C11.5799 6.75339 11.6482 6.58852 11.6482 6.41662C11.6482 6.24471 11.5799 6.07984 11.4583 5.95828C11.3368 5.83672 11.1719 5.76843 11 5.76843C10.8281 5.76843 10.6632 5.83672 10.5417 5.95828L5.95832 10.5416C5.89915 10.6022 5.85244 10.6739 5.82082 10.7525Z"
                        fill="#0F808C" />
                </g>
                <defs>
                    <clipPath id="clip0_0_690">
                        <rect width="15.5564" height="15.5564" fill="white" transform="translate(11 22) rotate(-135)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="search grow">
            <search-bar placeholder="Search for anything here"
                :input-classes="['font-sans', 'p-4', 'bg-gray', 'block', 'text-sm', 'leading-5', 'w-full', 'text-slate-500', 'shadow-sm', 'focus:outline-none', 'focus:ring', 'focus:ring-rose-200', 'focus:border-rose-500', 'dark:text-slate-400', 'dark:placeholder:text-slate-600', 'dark:bg-slate-900', 'dark:border-rose-500', 'dark:focus:ring-rose-900', 'dark:focus:border-rose-600']"
                v-model="searchQuery" />
        </div>
        <div class="profile-and-notification min-w-fit flex items-center gap-4">
            <div class="notification">
                <IconsNotification />
            </div>
            <div class="aspect-square bg-contain h-[2.8rem] bg-[url('../../assets/img/user-1.png')] rounded-full">
            </div>
            <div class="text-sm text-dark font-medium leading-normal flex gap-2 items-center">
                <span>Solomon</span>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z"
                        fill="#023A59" />
                </svg>
            </div>


        </div>
    </nav>
</template>
