<template>
  <article class="t-py-6 t-pr-8 t-border-b t-cursor-pointer" @click="show = !show">
    <div class="t-flex t-justify-between t-items-center">
      <h4 class="t-text-xl t-font-normal">{{ name }}</h4>
      <button aria-label="Показать секцию" class="t-w-6" v-if="!show"><InlineSvg class="t-w-full" :src="require('@/assets/plus.svg')"/></button>
      <button aria-label="Скрыть секцию" class="t-w-6" v-else><InlineSvg class="t-w-full" :src="require('@/assets/minus.svg')"/></button>
    </div>

    <ul v-show="show" class="t-list-disc t-list-inside t-space-y-1 t-pl-4 t-mt-4">
      <li v-for="topic in topics" :key="topic">{{ topic }}</li>
    </ul>
  </article>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  props: {
    showByDefault: {
      default: false,
      type: Boolean
    },
    name: {
      required: true,
      type: String
    },
    topics: {
      required: true,
      type: Array
    }
  },
  setup(props) {
    return {
      show: ref(props.showByDefault)
    }
  }
};
</script>

<style>
</style>
