<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { sites } from '../data/sites'
import { categories } from '../types'

const query = ref('')
const isOpen = ref(false)
const selectedIndex = ref(0)

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return sites
    .filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags?.some(t => t.toLowerCase().includes(q))
    )
    .slice(0, 8)
})

const resultsWithCat = computed(() => {
  return results.value.map(s => ({
    ...s,
    cat: categories.find(c => c.id === s.category),
  }))
})

watch(query, () => {
  isOpen.value = query.value.trim().length > 0
  selectedIndex.value = 0
})

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
  } else if (e.key === 'Enter' && results.value[selectedIndex.value]) {
    window.open(results.value[selectedIndex.value].url, '_blank')
    query.value = ''
    isOpen.value = false
  } else if (e.key === 'Escape') {
    isOpen.value = false
  }
}

function goToExternal(url: string) {
  window.open(url, '_blank')
  query.value = ''
  isOpen.value = false
}

function handleBlur() {
  setTimeout(() => { isOpen.value = false }, 200)
}
</script>

<template>
  <div class="relative">
    <input
      v-model="query"
      type="text"
      placeholder="搜索网站名称、简介..."
      class="w-full pl-3 pr-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
      @keydown="handleKeydown"
      @focus="isOpen = query.trim().length > 0"
      @blur="handleBlur"
    />

    <div
      v-if="isOpen && results.length > 0"
      class="absolute top-full mt-1 w-80 right-0 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50"
    >
      <div
        v-for="(site, i) in resultsWithCat"
        :key="site.id"
        class="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors"
        :class="i === selectedIndex ? 'bg-slate-50' : 'hover:bg-slate-50'"
        @mousedown.prevent="goToExternal(site.url)"
        @mouseenter="selectedIndex = i"
      >
        <span class="text-xs px-1.5 py-0.5 rounded font-medium text-white" :style="{ backgroundColor: site.cat?.color }">
          {{ site.cat?.name }}
        </span>
        <div class="flex-1 min-w-0">
          <div class="text-sm text-slate-900 truncate">{{ site.name }}</div>
          <div class="text-xs text-slate-400 truncate">{{ site.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
