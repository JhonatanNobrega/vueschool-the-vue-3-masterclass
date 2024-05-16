<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useData } from '@/composables/useData';
import PostList from '@/components/PostList.vue';
import PostEditor from '@/components/PostEditor.vue';
import type { Thread } from '@/interfaces/Thread';
import type { Post } from '@/interfaces/Post';

// Props
const props = defineProps<{ id: string }>();

// Composables
const sourceData = useData();

// Data Reactives
const threads = ref<Thread[]>(sourceData.threads);
const posts = ref<Post[]>(sourceData.posts);

// Computed
const thread = computed(() => threads.value.find(t => t.id === props.id) as Thread);
const threadPosts = computed(() => posts.value.filter(p => p.threadId === props.id));

// Methods
function addPost(entry: { post: Post }) {
  posts.value.push(entry.post);
  thread.value.posts.push(entry.post.id);
}
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor :threadId="id" @@save="addPost" />
  </div>
</template>