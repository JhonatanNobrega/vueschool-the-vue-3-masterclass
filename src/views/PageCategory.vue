<script setup lang="ts">
import ForumList from '@/components/ForumList.vue';
import { useData } from '@/composables/useData';
import type { Category } from '@/interfaces/Category';
import { computed } from 'vue';

// Props
const props = defineProps<{
  id: string
}>();

// Data
const sourceData = useData();

// Computed
const category = computed(() => {
  return sourceData.categories.find(category => category.id === props.id);
});

// Methods
function getForumsCategory(category: Category | undefined) {
  if(category){
    return sourceData.forums.filter(forum => forum.categoryId === category.id);
  } else {
    return [];
  }
}
</script>

<template>
  <h1>{{ category?.name }}</h1>
  <ForumList 
    :title="category?.name" 
    :forums="getForumsCategory(category)" 
  />
</template>