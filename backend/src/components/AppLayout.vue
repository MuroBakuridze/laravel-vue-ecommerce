<template>
    <div class="flex bg-gray-200 min-h-full">
      <!-- Sidebar -->
      <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
      <!--/  Sidebar -->
      <div class="flex-1">
        <TopHeader @toggle-sidebar="toggleSidebar"></TopHeader>
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
import {ref} from 'vue'
import Sidebar from './Sidebar.vue';
import TopHeader from './TopHeader.vue';

const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}
</script>

<style scoped>
    
</style>