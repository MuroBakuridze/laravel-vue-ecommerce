<template>
    <div class="flex bg-gray-200 min-h-full">
      <!-- Sidebar -->
      <Sidebar/>
      <!--/  Sidebar -->
      <div class="flex-1">
        <TopHeader></TopHeader>
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
import Sidebar from './Sidebar.vue';
import TopHeader from './TopHeader.vue';

    const {title} = defineProps({
        title: String
    })
</script>

<style scoped>
    
</style>