<template>
  <div class="grid grid-rows-2 gap-4">
    <nav class="absolute flex justify-between top-0 w-full h-16 border-transparent border-b-4 shadow-lg bg-blue-300">
      <div class="flex m-3 px-2 py-1 text-sm md:text-xl cursor-pointer">
        <span>
          TheDevelopersCongo
        </span>
      </div>
      <ul class="flex flex-row mr-10">
        <li class="menu-item">Home</li>
        <li class="menu-item">Services</li>
        <li class="menu-item">About us</li>
      </ul>
    </nav>
    <div class="mt-20 grid grid-rows-1 md:grid-cols-3 gap-1 md:gap-4">
      <div class="section-home bg-red-700">This is the grid body</div>
      <div class="section-home bg-blue-700">This is the grid body</div>
      <div class="section-home bg-yellow-700">This is the grid body</div>
    </div>
  </div>
</template>

<script setup>
</script>
