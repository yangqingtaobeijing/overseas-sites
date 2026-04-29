<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sites } from '../data/sites'
import { categories, type CategoryId } from '../types'
import SiteCard from '../components/SiteCard.vue'

const route = useRoute()
const catId = computed(() => route.params.id as CategoryId)
const cat = computed(() => categories.find(c => c.id === catId.value))

const filteredSites = computed(() => {
  return sites.filter(s => s.category === catId.value)
})
</script>

<template>
  <div v-if="cat">
    <!-- Category Header -->
    <div class="mb-8">
      <button
        @click="$router.push('/')"
        class="text-sm text-slate-400 hover:text-slate-600 mb-4 inline-block"
      >
        ← 返回首页
      </button>
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" :style="{ backgroundColor: cat.color + '15' }">
          {{ cat.icon }}
        </div>
        <div>
          <h1 class="text-3xl font-bold text-slate-900">{{ cat.name }}</h1>
          <p class="text-slate-500 mt-1">{{ cat.description }} · 共 {{ filteredSites.length }} 个网站</p>
        </div>
      </div>
    </div>

    <!-- Sites Grid -->
    <div class="grid grid-cols-3 gap-4">
      <SiteCard
        v-for="site in filteredSites"
        :key="site.id"
        :site="site"
        :color="cat.color"
      />
    </div>

    <!-- Empty -->
    <div v-if="filteredSites.length === 0" class="text-center py-20 text-slate-400">
      暂无内容
    </div>
  </div>
</template>
