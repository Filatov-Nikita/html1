<template>
  <div class="b-input">
    <input class="b-input__field" :id="name" v-bind="{ type, ...$attrs }" v-model="value" />
    <label
      class="b-input__label"
      :class="{ opened: value.length > 0 }"
      :for="name"
      >{{ label }}</label
    >
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  inheritAttrs: false,
  props: {
    name: {
      required: true,
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
  },
  setup() {
    return {
      value: ref(''),
    };
  },
};
</script>

<style scoped>
.b-input {
  height: 48px;
  padding-top: 18px;
  @apply t-relative t-text-black;
}

.b-input__label {
  left: 0;
  top: 14px;
  transition: top 300ms, font-size 300ms;
  @apply t-text-base t-absolute;
}

.b-input__field {
  border-bottom: 1px solid #000;
  @apply t-block t-text-sm t-w-full t-h-full t-pb-1;
}

.b-input__field:focus {
  @apply t-border-primary;
}

.b-input__field:focus ~ label,
.opened {
  top: 0px;
  font-size: 10px;
}
</style>
