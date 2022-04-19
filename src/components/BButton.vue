<template>
  <button
    v-bind="{ type, onClick: type === 'button' ? onClick : null }"
    :class="{
      'button-primary': design === 'primary',
      'button-secondary': design === 'secondary',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    design: {
      default: 'primary',
      type: String,
    },
    type: {
      default: 'button',
      type: String,
    },
  },
  methods: {
    onClick() {
      if (this.design === 'primary') {
        document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
      } else {
        document
          .querySelector('#program')
          .querySelector('h2')
          .scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.button-primary,
.button-secondary {
  max-width: 228px;
  @apply t-rounded-2xl t-py-4 t-px-6 t-font-semibold t-relative;
}

.button-primary {
  @apply t-bg-secondary t-text-black;
}

.button-secondary {
  @apply t-text-white t-z-10;
}

.button-secondary::after {
  content: '';
  @apply t-absolute t-inset-0 t-border t-border-solid t-border-white t-rounded-2xl t-z-0;
}
</style>
