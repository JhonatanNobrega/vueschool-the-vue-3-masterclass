<script lang="ts" setup>
import { ref} from 'vue';
import type { Post } from '@/interfaces/Post';

// Props
const props = defineProps<{ threadId: string }>();

// Data Reactives
const text = ref('');

// Emits
const emits = defineEmits<{
  '@save': [entry: {post: Post}]
}>();


// Methods
function save() {
  const postId = 'gggg' + Math.random();
  const post: Post = {
    id: postId,
    text: text.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.threadId,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
  };
  emits('@save', { post });
  text.value = '';
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>