<script setup lang="ts">
import ThreadList from '@/components/ThreadList.vue';
import { computed, ref } from 'vue';
import {useData} from '@/composables/useData';
import type {Forum} from '@/interfaces/Forum';
import type {Thread} from '@/interfaces/Thread';

const props = defineProps<{
  id: String
}>();

const sourceData = useData();

const threadsData = ref<Thread[]>(sourceData.threads);
const forumsData = ref<Forum[]>(sourceData.forums);


const forum = computed(()=>{
  return forumsData.value.find(forum => forum.id === props.id);
});

const threads = computed(()=>{
  return threadsData.value.filter(thread => thread.forumId === props.id);
});

</script>

<template>
  <div class="col-full push-top">

    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum?.name }}</h1>
        <p class="text-lead">{{ forum?.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads"/>
  </div>
</template>