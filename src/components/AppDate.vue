<script setup lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

// Props
const props = defineProps<{timestamp: number}>();

// Methods
function diffForHumans(){
  return dayjs.unix(props.timestamp).fromNow();
}
function hummanFriedlyDate(){
  return dayjs.unix(props.timestamp).format('llll');
}
</script>

<template>
    <span :title="hummanFriedlyDate()">
      {{ diffForHumans() }}
    </span>
</template>