<template>
    <div v-if="currentUser.id" class="flex bg-gray-200 min-h-full">
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
    <div v-else class=" min-h-full bg-gray-200 flex items-center justify-center">
      <Spinner/>
    </div>
</template>
  
<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import store from "../store";
import Spinner from "../components/core/Spinner.vue";


const {title} = defineProps({
    title: String
})

const sidebarOpened = ref(true);
const currentUser = computed(() => store.state.user.data);


function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

onMounted(() => {
  store.dispatch('getUser')
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