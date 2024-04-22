<script lang="ts" setup>
import { ref } from 'vue';
import { useData } from '@/composables/useData';
import type { Thread } from '@/interfaces/Thread';
import type { Post } from '@/interfaces/Post';
import type { User } from '@/interfaces/User';

// Composables
const sourceData = useData();

// Data Reactives
const threads = ref<Thread[]>(sourceData.threads);
const posts = ref<Post[]>(sourceData.posts);
const users = ref<User[]>(sourceData.users);

// Methods
function postById(postsId: string): Post | undefined {
  return posts.value.find((p) => p.id === postsId);
}
function userById(userId: string | undefined): User | undefined {
  return users.value.find((u) => u.id === userId);
}
</script>

<template>
  <div>Hello form page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ userById(postById(postId)?.userId)?.name }}</p>
      <p>{{ postById(postId)?.text }}</p>
    </div>
  </div>
</template>
