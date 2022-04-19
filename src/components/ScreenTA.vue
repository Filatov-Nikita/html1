<template>
  <section class="t-pt-20">
    <div class="wrapper t-relative">
      <h2 class="t-mb-10">Онлайн-курс для новичков</h2>
      <div class="t-flex">
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
        <div class="t-w-2/4 t-relative t-hidden md:t-block md:-t-mt-36">
          <img class="t-absolute t-w-full -t-z-10" src="img/ta.svg" />
          <div style="padding-bottom: 66.25%"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
