<template>
  <div class="section border m-4">
    <a :id="`anchor-section-${id}`" :href="`#section-${id}`">
      <h2 :id="`section-${id}`" class="text-2xl font-bold">Section {{ id }}</h2>
    </a>
    <p>
      <slot></slot>
    </p>
    <a
      v-if="prevId"
      :href="`#section-${prevId}`"
      class="underline text-blue-400"
      >Prev</a
    >
    <a
      v-if="nextId"
      :href="`#section-${nextId}`"
      class="underline text-blue-400"
      >Next</a
    >
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PageSection',
  props: {
    id: {
      type: String,
      default: null,
    },
    nextId: {
      type: String,
      default: null,
    },
    prevId: {
      type: String,
      default: null,
    },
  },
})
</script>
<style scoped>
.section {
  min-height: 80vh;
}
</style>
