<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useData } from '@/composables/useData';
import PostList from '@/components/PostList.vue';
import type { Thread } from '@/interfaces/Thread';
import type { Post } from '@/interfaces/Post';

// Props
const props = defineProps<{ id: string }>();

// Composables
const sourceData = useData();

// Data Reactives
const threads = ref<Thread[]>(sourceData.threads);
const posts = ref<Post[]>(sourceData.posts);
const newPostText = ref('');

// Computed
const thread = computed(() => threads.value.find(t => t.id === props.id) as Thread);
const threadPosts = computed(() => posts.value.filter(p => p.threadId === props.id));

// Methods
function addPost(){
  const postId = 'gggg' + Math.random();
  const post: Post = {
    id: postId,
    text: newPostText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  };
  posts.value.push(post);
  thread.value.posts.push(postId);
  newPostText.value = '';
}
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" class="form-input" />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>