<template>
  <li class="t-pl-20 t-pb-12 t-relative entry">
    <div class="line">
      <div class="t-h-12 t-w-12 t-rounded-full t-bg-primary t-text-center t-text-lg t-text-white step">
        <slot name="step"/>
      </div>
    </div>
    <h3 class="t-text-xl t-font-semibold t-mb-2">{{ title }}</h3>
    <p>{{ subtitle }}</p>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
.line {
  @apply t-absolute t-left-0 t-bottom-0 t-top-0;
}

.step {
  line-height: 3rem;
}

.entry:not(:last-child) .line:after {
  content: '';
  width: 1px;
  background: #A39A9A;
  z-index: -1;
  @apply t-block t-bottom-0 t-top-0 t-absolute t-left-1/2 -t-translate-x-1/2;
}
</style>
