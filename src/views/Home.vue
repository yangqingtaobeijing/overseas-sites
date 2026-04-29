<script setup lang="ts">
import { categories, type CategoryId } from '../types'
import { sites } from '../data/sites'
import { useRouter } from 'vue-router'
import SiteCard from '../components/SiteCard.vue'

const router = useRouter()

function getSitesByCategory(catId: CategoryId) {
  return sites.filter(s => s.category === catId).slice(0, 6)
}

function countByCategory(catId: CategoryId) {
  return sites.filter(s => s.category === catId).length
}
</script>

<template>
  <div class="space-y-12">
    <!-- Hero -->
    <div class="text-center py-8">
      <h1 class="text-3xl font-bold text-slate-900 mb-3">海外常用网站导航</h1>
      <p class="text-slate-500 max-w-2xl mx-auto">
        覆盖财经、信息检索、娱乐、AI 四大领域，帮你快速找到海外优质网站。每个网站配有中文简介，点击即可跳转。
      </p>
    </div>

    <!-- Category Sections -->
    <section v-for="cat in categories" :key="cat.id">
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl" :style="{ backgroundColor: cat.color + '15' }">
            {{ cat.icon }}
          </div>
          <div>
            <h2 class="text-xl font-bold text-slate-900">{{ cat.name }}</h2>
            <p class="text-sm text-slate-400">{{ cat.description }}</p>
          </div>
        </div>
        <button
          @click="router.push(`/category/${cat.id}`)"
          class="text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:bg-slate-100"
          :style="{ color: cat.color }"
        >
          查看全部 {{ countByCategory(cat.id) }} 个 →
        </button>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <SiteCard
          v-for="site in getSitesByCategory(cat.id)"
          :key="site.id"
          :site="site"
          :color="cat.color"
        />
      </div>
    </section>
  </div>
</template>
