<template>
  <section class="t-pt-20">
    <div class="wrapper t-relative">
      <h2 class="t-mb-10">Онлайн-курс для новичков</h2>
      <div class="t-flex ta">
        <div class="md:t-w-1/2">
          <h3 class="t-mb-8">Курс подходит вам, если вы имеете представление:</h3>
          <ul>
            <li class="t-flex t-items-center t-py-2">
              <InlineSvg class="t-mr-5" :src="require('@/assets/list-style.svg')" /> Что такое тег?
            </li>
            <li class="t-flex t-items-center t-py-2">
              <InlineSvg class="t-mr-5" :src="require('@/assets/list-style.svg')" />
              Что такое атрибуты тегов и для чего они нужны?
            </li>
            <li class="t-flex t-items-center t-py-2">
              <InlineSvg class="t-mr-5" :src="require('@/assets/list-style.svg')" />
              Как тегам можно задавать стили через CSS?
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.ta::after {
  content: '';
  background: url('@/assets/ta.svg') no-repeat;
  background-position-x: 20px;
  display: block;
  @apply t-relative md:-t-mt-36;
}

@screen sm {
  .ta:after {
    width: 310px;
    height: 179px;
    background-size: 310px;
  }
}

@screen md {
.ta:after {
    width: 410px;
    height: 279px;
    background-size: 410px;
  }
}

@screen lg {
.ta:after {
    width: 510px;
    height: 379px;
    background-size: 510px;
  }
}
</style>
