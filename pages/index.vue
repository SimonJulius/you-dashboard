<script lang="ts" setup>

definePageMeta({
    layout: "dashboard-layout",
    name: 'dashboard'
})


const tasks = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
const taskActiveCrumb = ref('un-assigned')

const agentActiveCrumb = ref('all')

const setAgentCrumb = (activeCrumb: string) => {
    agentActiveCrumb.value = activeCrumb
}

const setTaskActiveCrumb = (activeCrumb: string) => {
    taskActiveCrumb.value = activeCrumb
}
</script>

<template>
    <div class="h-6 bg-white"></div>
    <main class="bg-size bg-cover flex justify-between">
        <section class="right-section w-3/12 bg-white">
            <header class="bg-teal text-white pl-3 mb-2 relative">
                <span>Task</span>
                <button class="absolute left-full border bg-dark">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.9647 17.9228C16.1458 17.7305 16.2434 17.4743 16.2362 17.2102C16.2291 16.9461 16.1177 16.6956 15.9264 16.5134L12.29 13.021L15.7325 9.38599C15.9135 9.19363 16.0111 8.93743 16.004 8.67334C15.9968 8.40925 15.8854 8.15874 15.6941 7.97651C15.5986 7.88535 15.486 7.81399 15.3628 7.76655C15.2396 7.71912 15.1083 7.69654 14.9763 7.70013C14.8444 7.70372 14.7144 7.73341 14.594 7.78747C14.4735 7.84154 14.365 7.91891 14.2746 8.01514L10.1515 12.3689C10.0604 12.4644 9.989 12.577 9.94156 12.7002C9.89413 12.8233 9.87155 12.9547 9.87514 13.0867C9.87874 13.2186 9.90842 13.3486 9.96248 13.469C10.0165 13.5895 10.0939 13.698 10.1901 13.7884L14.5453 17.9615C14.6407 18.0526 14.7533 18.124 14.8765 18.1714C14.9997 18.2188 15.1311 18.2414 15.263 18.2378C15.395 18.2342 15.525 18.2046 15.6454 18.1505C15.7658 18.0964 15.8744 18.0191 15.9647 17.9228Z"
                            fill="white" />
                    </svg>

                </button>
            </header>
            <nav class="grid grid-cols-3 place-items-center border-b-2 border-b-gray-fade">
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setTaskActiveCrumb('un-assigned')" :class="{ 'border-b': taskActiveCrumb === 'un-assigned' }">24
                    Unassigned
                </div>
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setTaskActiveCrumb('assigned')" :class="{ 'border-b': taskActiveCrumb === 'assigned' }">12
                    assigned</div>
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setTaskActiveCrumb('completed')" :class="{ 'border-b': taskActiveCrumb === 'completed' }">30
                    Completed</div>
            </nav>
            <div v-for="(task, index) in tasks" :key="index" class="flex py-3 px-4 gap-4"
                :class="{ 'border-b-2 border-b-gray-light': index !== tasks.length - 1 }">
                <div class="cta">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#46B2C8" />
                        <path d="M15 9V21" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M9 15H21" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <div class="text-[10px] text-gray-400">Assign<br />Agent</div>
                </div>

                <div class="summary">
                    <div class="name font-medium text-xs">Abiodun Olawale Solomon</div>
                    <div class="address text-xs text-gray-fade mt-1 flex gap-3 items-center">
                        <div>12b Emmanuel Hign street, Sur...</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.17 6.99999C8.98375 7.18735 8.87921 7.4408 8.87921 7.70499C8.87921 7.96918 8.98375 8.22263 9.17 8.40999L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26297 17.0437 9.37357 17.1181 9.49543 17.1689C9.61729 17.2197 9.74799 17.2458 9.88 17.2458C10.012 17.2458 10.1427 17.2197 10.2646 17.1689C10.3864 17.1181 10.497 17.0437 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29L10.59 6.99999C10.497 6.90626 10.3864 6.83187 10.2646 6.7811C10.1427 6.73033 10.012 6.70419 9.88 6.70419C9.74799 6.70419 9.61729 6.73033 9.49543 6.7811C9.37357 6.83187 9.26297 6.90626 9.17 6.99999Z"
                                fill="#023A59" />
                        </svg>
                    </div>
                    <div class="bank flex gap-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.16667 6.19759L14.3058 7.21842C14.72 7.30592 15 7.65592 15 8.07009V14.0201C15 14.5043 14.6092 14.8951 14.125 14.8951H8.875C9.03833 14.8951 9.16667 14.7668 9.16667 14.6034V14.3118H14.125C14.2825 14.3118 14.4167 14.1834 14.4167 14.0201V8.07009C14.4167 7.93592 14.3233 7.81342 14.1892 7.78425L9.16667 6.79259V6.19759Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M12.375 9.06139C12.5383 9.06139 12.6667 9.18972 12.6667 9.35305C12.6667 9.51639 12.5383 9.64472 12.375 9.64472H11.2083C11.045 9.64472 10.9167 9.51639 10.9167 9.35305C10.9167 9.18972 11.045 9.06139 11.2083 9.06139H12.375Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M12.375 10.8114C12.5383 10.8114 12.6667 10.9397 12.6667 11.1031C12.6667 11.2664 12.5383 11.3947 12.375 11.3947H11.2083C11.045 11.3947 10.9167 11.2664 10.9167 11.1031C10.9167 10.9397 11.045 10.8114 11.2083 10.8114H12.375Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M12.375 12.5614C12.5383 12.5614 12.6667 12.6897 12.6667 12.8531C12.6667 13.0164 12.5383 13.1447 12.375 13.1447H11.2083C11.045 13.1447 10.9167 13.0164 10.9167 12.8531C10.9167 12.6897 11.045 12.5614 11.2083 12.5614H12.375Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M9.16668 14.6032C9.16668 14.7665 9.03834 14.8949 8.87501 14.8949C8.71168 14.8949 8.58334 14.7665 8.58334 14.6032V14.3115V6.43654C8.58334 6.34904 8.62418 6.26737 8.68834 6.20904C8.75834 6.15654 8.84584 6.1332 8.93334 6.1507L9.16668 6.19737V6.79237V14.3115V14.6032Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M8.58332 14.3114V14.6031C8.58332 14.7664 8.71166 14.8947 8.87499 14.8947H6.54166C6.70499 14.8947 6.83332 14.7664 6.83332 14.6031V14.3114H8.58332Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M7.12499 3.81139C7.28832 3.81139 7.41666 3.93972 7.41666 4.10305C7.41666 4.26639 7.28832 4.39472 7.12499 4.39472H5.95832C5.79499 4.39472 5.66666 4.26639 5.66666 4.10305C5.66666 3.93972 5.79499 3.81139 5.95832 3.81139H7.12499Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M7.41666 5.85305C7.41666 6.01639 7.28832 6.14472 7.12499 6.14472H5.95832C5.79499 6.14472 5.66666 6.01639 5.66666 5.85305C5.66666 5.68972 5.79499 5.56139 5.95832 5.56139H7.12499C7.28832 5.56139 7.41666 5.68972 7.41666 5.85305Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M7.12499 7.31139C7.28832 7.31139 7.41666 7.43972 7.41666 7.60305C7.41666 7.76639 7.28832 7.89472 7.12499 7.89472H5.95832C5.79499 7.89472 5.66666 7.76639 5.66666 7.60305C5.66666 7.43972 5.79499 7.31139 5.95832 7.31139H7.12499Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M7.12499 9.06139C7.28832 9.06139 7.41666 9.18972 7.41666 9.35305C7.41666 9.51639 7.28832 9.64472 7.12499 9.64472H5.95832C5.79499 9.64472 5.66666 9.51639 5.66666 9.35305C5.66666 9.18972 5.79499 9.06139 5.95832 9.06139H7.12499Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M4.5 9.35305C4.5 9.51639 4.37167 9.64472 4.20833 9.64472H3.04167C2.87833 9.64472 2.75 9.51639 2.75 9.35305C2.75 9.18972 2.87833 9.06139 3.04167 9.06139H4.20833C4.37167 9.06139 4.5 9.18972 4.5 9.35305Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M4.20833 3.81139C4.37167 3.81139 4.5 3.93972 4.5 4.10305C4.5 4.26639 4.37167 4.39472 4.20833 4.39472H3.04167C2.87833 4.39472 2.75 4.26639 2.75 4.10305C2.75 3.93972 2.87833 3.81139 3.04167 3.81139H4.20833Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M4.20833 5.56139C4.37167 5.56139 4.5 5.68972 4.5 5.85305C4.5 6.01639 4.37167 6.14472 4.20833 6.14472H3.04167C2.87833 6.14472 2.75 6.01639 2.75 5.85305C2.75 5.68972 2.87833 5.56139 3.04167 5.56139H4.20833Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M4.20833 7.31139C4.37167 7.31139 4.5 7.43972 4.5 7.60305C4.5 7.76639 4.37167 7.89472 4.20833 7.89472H3.04167C2.87833 7.89472 2.75 7.76639 2.75 7.60305C2.75 7.43972 2.87833 7.31139 3.04167 7.31139H4.20833Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M6.25001 11.6864C6.25001 11.5231 6.11584 11.3947 5.95834 11.3947H4.20834C4.04501 11.3947 3.91668 11.5231 3.91668 11.6864V14.3114H3.33334V11.6864C3.33334 11.2022 3.72418 10.8114 4.20834 10.8114H5.95834C6.44251 10.8114 6.83334 11.2022 6.83334 11.6864V14.3114H6.25001V11.6864Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M3.91668 14.3114H6.25001H6.83334V14.6031C6.83334 14.7664 6.70501 14.8947 6.54168 14.8947H3.62501C3.46168 14.8947 3.33334 14.7664 3.33334 14.6031V14.3114H3.91668Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                            <path
                                d="M2.02083 1.01136L8.43167 1.98552C8.8575 2.05552 9.16667 2.41719 9.16667 2.84886V6.19719L8.93333 6.15052C8.84583 6.13302 8.75833 6.15636 8.68833 6.20886C8.62417 6.26719 8.58333 6.34886 8.58333 6.43636V2.84886C8.58333 2.70302 8.47833 2.58052 8.33833 2.55719L1.9275 1.58886C1.91 1.58302 1.8925 1.58302 1.875 1.58302C1.805 1.58302 1.74083 1.60636 1.68833 1.65302C1.61833 1.71136 1.58333 1.78719 1.58333 1.87469V14.0197C1.58333 14.183 1.7175 14.3114 1.875 14.3114H3.33333V14.603C3.33333 14.7664 3.46167 14.8947 3.625 14.8947H1.875C1.39083 14.8947 1 14.5039 1 14.0197V1.87469C1 1.61802 1.11083 1.37302 1.30917 1.20969C1.5075 1.04052 1.76417 0.970524 2.02083 1.01136Z"
                                fill="black" stroke="#115766" stroke-width="0.3" />
                        </svg>
                        <span class="text-xs text-gray-fade">Sterling Bank PLC</span>
                    </div>

                    <div class="date-created font-medium text-xs text-link mt-3">2 day ago</div>
                </div>
            </div>
        </section>
        <section class="left-section w-3/12 bg-white">
            <header class="bg-teal text-white pl-3 mb-2 relative">
                <span>Agents</span>
                <button class="absolute right-full border bg-dark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.17 6.99999C8.98375 7.18735 8.87921 7.4408 8.87921 7.70499C8.87921 7.96918 8.98375 8.22263 9.17 8.40999L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26297 17.0437 9.37357 17.1181 9.49543 17.1689C9.61729 17.2197 9.74799 17.2458 9.88 17.2458C10.012 17.2458 10.1427 17.2197 10.2646 17.1689C10.3864 17.1181 10.497 17.0437 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29L10.59 6.99999C10.497 6.90626 10.3864 6.83187 10.2646 6.7811C10.1427 6.73033 10.012 6.70419 9.88 6.70419C9.74799 6.70419 9.61729 6.73033 9.49543 6.7811C9.37357 6.83187 9.26297 6.90626 9.17 6.99999Z"
                            fill="white" />
                    </svg>


                </button>
            </header>
            <nav class="grid grid-cols-3 place-items-center border-b-2 border-b-gray-fade">
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setAgentCrumb('all')" :class="{ 'border-b': agentActiveCrumb === 'all' }">
                    All
                </div>
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setAgentCrumb('online')" :class="{ 'border-b': agentActiveCrumb === 'online' }">
                    <svg class="inline mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#2EB255" />
                    </svg>
                    Online
                </div>
                <div class="task-status text-xs font-normal leading-normal capitalize h-full w-full text-center cursor-pointer"
                    @click="setAgentCrumb('offline')" :class="{ 'border-b': agentActiveCrumb === 'offline' }">
                    <svg class="inline mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#D14349" />
                    </svg>

                    Offline
                </div>
            </nav>
            <div v-for="(task, index) in tasks" :key="index" class="flex py-3 px-4 gap-4"
                :class="{ 'border-b-2 border-b-gray-light': index !== tasks.length - 1 }">
                <div class="profile-picture">
                    <div class="aspect-square bg-contain w-8 bg-[url('../../assets/img/user-1.png')] rounded-full"></div>
                </div>

                <div class="summary">
                    <div class="name font-medium text-xs">Abiodun Olawale Solomon</div>
                    <div class="address text-xs text-gray-fade mt-1 flex gap-3 items-center justify-between w-full">
                        <div>08069786754</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.17 6.99999C8.98375 7.18735 8.87921 7.4408 8.87921 7.70499C8.87921 7.96918 8.98375 8.22263 9.17 8.40999L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26297 17.0437 9.37357 17.1181 9.49543 17.1689C9.61729 17.2197 9.74799 17.2458 9.88 17.2458C10.012 17.2458 10.1427 17.2197 10.2646 17.1689C10.3864 17.1181 10.497 17.0437 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29L10.59 6.99999C10.497 6.90626 10.3864 6.83187 10.2646 6.7811C10.1427 6.73033 10.012 6.70419 9.88 6.70419C9.74799 6.70419 9.61729 6.73033 9.49543 6.7811C9.37357 6.83187 9.26297 6.90626 9.17 6.99999Z"
                                fill="#023A59" />
                        </svg>
                    </div>
                    <div class="bank flex gap-2 mt-1">
                        <span class="text-xs text-gray-fade">Akure</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
main {
    background-image: url('../assets/svg/guyana-distance.svg');
    background-position: 0% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
}
</style>
  