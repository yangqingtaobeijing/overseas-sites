<script setup lang="ts">
import { categories } from './types'
import { sites } from './data/sites'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F8FAFC]">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2.5">
          <span class="text-2xl">🌍</span>
          <span class="text-xl font-bold text-slate-900">海外网站导航</span>
        </RouterLink>
        <div class="w-72">
          <SearchBar />
        </div>
      </div>
    </header>

    <!-- Category Quick Nav -->
    <nav class="bg-white border-b border-slate-100">
      <div class="max-w-[1200px] mx-auto px-6 flex gap-0">
        <RouterLink
          v-for="cat in categories"
          :key="cat.id"
          :to="`/category/${cat.id}`"
          class="flex items-center gap-1.5 px-5 py-3 text-sm font-medium border-b-2 transition-colors"
          :class="$route.params.id === cat.id ? 'border-[var(--cat-color)] text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'"
          :style="{ '--cat-color': cat.color }"
        >
          <span>{{ cat.icon }}</span>
          <span>{{ cat.name }}</span>
        </RouterLink>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="max-w-[1200px] mx-auto px-6 py-8">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
      海外常用网站导航 · 收录 {{ categories.length }} 大分类 {{ sites.length }} 个网站 · 持续更新中
    </footer>
  </div>
</template>
