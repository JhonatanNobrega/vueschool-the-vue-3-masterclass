<script setup lang="ts">
import PostListItem from '@/components/PostListItem.vue';
import type { Post } from '@/interfaces/Post';

// Props
defineProps<{posts: Post[]}>();
</script>

<template>
  <div class="post-list">
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.post-list {
    margin-top: 20px;
}
</style>