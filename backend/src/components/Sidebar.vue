<template>
  <div class="w-[200px] bg-indigo-700 text-white py-4 px-2">
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30 font-light">
      <span class="mr-2">
        <HomeIcon class="w-5 text-gray-400"/>
      </span>
      <span class="text-xs font-normal">
        Dashboard
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30 font-light">
      <span class="mr-2">
        <ViewListIcon class="w-5 text-gray-400"/>
      </span>
      <span class="text-xs font-normal">
        Products
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30 font-light">
      <span class="mr-2">
        <UsersIcon class="w-5 text-gray-400"/>
      </span>
      <span class="text-xs font-normal">
        Users
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30 font-light">
      <span class="mr-2">
        <ChartBarIcon class="w-5 text-gray-400"/>
      </span>
      <span class="text-xs font-normal">
        Reports
      </span>
    </router-link>  
    
  </div>
  
</template>
  
<script setup>
import { HomeIcon, UsersIcon, ViewListIcon, ChartBarIcon } from '@heroicons/vue/outline'

</script>

<style scoped>
    
</style>