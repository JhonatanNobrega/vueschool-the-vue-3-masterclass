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
function postById(postsId: string): Post {
  let post = posts.value.find((p) => p.id === postsId);
  if (post) return post;
  throw new Error('Post not found');
}
function userById(userId: string): User {
  const user = users.value.find((u) => u.id === userId);
  if (user) return user;
  throw new Error('User not found');
}
</script>

<template>
  <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">
        <div class="user-info">
          <a href="#" class="user-name">
            {{ userById(postById(postId).userId).name }}
          </a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="" />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>{{ postById(postId).text }}</p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>
