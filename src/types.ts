export type CategoryId = 'finance' | 'search' | 'entertainment' | 'ai'

export interface CategoryMeta {
  id: CategoryId
  name: string
  icon: string
  color: string
  description: string
}

export interface Site {
  id: string
  name: string
  url: string
  description: string
  category: CategoryId
  tags?: string[]
}

export const categories: CategoryMeta[] = [
  { id: 'finance', name: '财经', icon: '📈', color: '#16A34A', description: '投资、行情、财经资讯、加密货币' },
  { id: 'search', name: '信息检索', icon: '🔍', color: '#2563EB', description: '搜索、知识、开发者社区、科技媒体' },
  { id: 'entertainment', name: '娱乐', icon: '🎮', color: '#D946EF', description: '视频、音乐、游戏、社交、影视' },
  { id: 'ai', name: 'AI', icon: '🤖', color: '#F59E0B', description: '大模型、图像生成、AI 工具、社区学习' },
]
