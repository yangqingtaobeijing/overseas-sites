<script setup lang="ts">
import type { Site } from '../types'

defineProps<{
  site: Site
  color: string
}>()
</script>

<template>
  <a
    :href="site.url"
    target="_blank"
    rel="noopener"
    class="group block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
  >
    <div class="flex items-start justify-between mb-3">
      <h3 class="text-base font-bold text-slate-900 group-hover:text-[var(--color)] transition-colors" :style="{ '--color': color }">
        {{ site.name }}
      </h3>
      <svg class="w-4 h-4 text-slate-300 group-hover:text-slate-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
    <p class="text-sm text-slate-500 leading-relaxed line-clamp-2">{{ site.description }}</p>
    <div v-if="site.tags?.length" class="flex flex-wrap gap-1.5 mt-3">
      <span
        v-for="tag in site.tags"
        :key="tag"
        class="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-500"
      >{{ tag }}</span>
    </div>
  </a>
</template>
