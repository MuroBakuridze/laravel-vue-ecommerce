<template>
    <div class="flex bg-gray-200 min-h-full">
      <!-- Sidebar -->
      <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
      <!--/  Sidebar -->
      <div class="flex-1">
        <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
        <!-- Content -->
        <main class="p-6">
          <div class="p-4 rounded">
            <router-view></router-view>
          </div>
        </main>
        <!--/ Content -->
      </div>
    </div>
</template>
  
<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

onMounted(() => {
  handleSidebarOpened();
  window.addEventListener('resize', handleSidebarOpened);
})

onUnmounted(() => {
  window.removeEventListener('resize', handleSidebarOpened);
})


function handleSidebarOpened() {
  sidebarOpened.value = window.outerWidth > 768;
}
</script>

<style scoped>
    
</style>