<script setup lang="ts">
import type { Forum } from '@/interfaces/Forum';

withDefaults(defineProps<{
  title?: string;
  forums: Forum[];
  categoryId?: string
}>(), {
  title: () => 'Forums',
  categoryId: () => '',
});


function forumThreadsWord(forum: Forum) {
  if (forum.threads?.length) {
    return forum.threads.length > 1 ? 'threads' : 'thread';
  }
  return 'no thread';
}

</script>

<template>
  <div class="col-full">
    <div class="forum-list">

      <h2 class="list-title">
        <RouterLink v-if="categoryId" :to="{name: 'Category', params: {id: categoryId}}">{{ title }}</RouterLink>
        <span v-else>{{ title }}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <RouterLink :to="{ name: 'Forum', params: { id: forum.id } }" class="text-xlarge">
            {{ forum.name }}
          </RouterLink>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">
              {{ forum.threads?.length }}
            </span> {{ forumThreadsWord(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>

    </div>
  </div>

</template>