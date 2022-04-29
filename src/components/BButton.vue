<template>
  <button
    :name="design === 'primary' ? 'order' : 'programm'"
    v-bind="{ type, onClick: type === 'button' ? onClick : null }"
    class="button-main"
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

.button-main::after {
  content: '';
  background: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  @apply t-rounded-2xl t-transition-opacity t-duration-100;
}

.button-main:hover::after {
  opacity: 0.1;
}

.button-secondary {
  @apply t-text-white t-z-10;
}

.button-secondary::before {
  content: '';
  @apply t-absolute t-inset-0 t-border t-border-solid t-border-white t-rounded-2xl t-z-0;
}
</style>
