<script setup lang="ts">
import ForumList from '@/components/ForumList.vue';
import { useData } from '@/composables/useData';
import type { Category } from '@/interfaces/Category';

// Props
defineProps<{
  categories: Category[]
}>();

// Composables
const sourceData = useData();

// Methods
function getForumsCategory(category: Category) {
  return sourceData.forums.filter(forum => forum.categoryId === category.id);
}
</script>

<template>
  <ForumList 
    v-for="category in categories" 
    :key="category.id" 
    :forums="getForumsCategory(category)" 
    :title="category.name"
    :category-id="category.id"
  />
</template>