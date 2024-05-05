<script setup lang="ts">
import ThreadListItem from '@/components/ThreadListItem.vue';
import type { Thread } from '@/interfaces/Thread';

// Props
defineProps<{threads: Thread[]}>()
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <ThreadListItem v-for="thread in threads" :key="thread.id" :thread="thread" />
    </div>
  </div>
</template>