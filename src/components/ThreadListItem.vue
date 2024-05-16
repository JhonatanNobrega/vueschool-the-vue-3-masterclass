<script setup lang="ts">
import { ref } from 'vue';
import { useData } from '@/composables/useData';
import type { Thread } from '@/interfaces/Thread';
import type { User } from '@/interfaces/User';

// Props
defineProps<{thread: Thread}>();

// Composables
const sourceData = useData();

// Data Reactives
const users = ref<User[]>(sourceData.users);

// Methods
function userById(userId: string): User {
  const user = users.value.find((u) => u.id === userId);
  if (user) return user;
  throw new Error('User not found');
}
</script>

<template>
  <div class="thread">
    <div>
      <p>
        <RouterLink :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</RouterLink>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="profile.html">{{ userById(thread.userId).name }}</a>, <AppDate :timestamp="thread.publishedAt"/>.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{ thread.posts.length }} replies</p>

      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

      <div>
        <p class="text-xsmall">
          <a href="#">{{ userById(thread.userId).name }}</a>
        </p>
        <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt"/></p>
      </div>
    </div>
  </div>
</template>