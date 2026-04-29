export type CategoryId = 'finance' | 'search' | 'entertainment' | 'ai' | 'productivity' | 'education' | 'design' | 'travel'

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
  { id: 'productivity', name: '工具/效率', icon: '🛠️', color: '#8B5CF6', description: '任务管理、笔记、自动化与团队协作' },
  { id: 'education', name: '教育/学习', icon: '📚', color: '#06B6D4', description: 'MOOC、编程、语言、职业证书与技能提升' },
  { id: 'design', name: '设计/创意', icon: '🎨', color: '#EC4899', description: 'UI/UX 工具、设计灵感、配色与素材库' },
  { id: 'travel', name: '旅游/出行', icon: '✈️', color: '#F97316', description: '机票比价、酒店民宿、租车与旅行体验预订' },
]
