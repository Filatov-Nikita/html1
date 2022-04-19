<template>
  <section class="t-pt-20">
    <div class="wrapper">
    <h2 class="t-pb-12">С какими трудностями сталкиваются новички?</h2>
      <div class="row items t-text-left">
        <article class="t-w-full lg:t-w-1/3 t-relative t-flex">
          <img class="emogi" src="img/emogi1.png" />
          <div class="lg:t-mt-44 pain">
            <h3 class="t-mb-3">Много информации</h3>
            <p>Новички теряются в большом количестве информации по верстке</p>
          </div>
        </article>

        <article class="t-w-full lg:t-w-1/3 t-relative t-flex">
          <img class="emogi" src="img/emogi2.png" />
          <div class="lg:t-mt-44 pain">
            <h3 class="t-mb-3">Пробелы в основах</h3>
            <p>Новички мало уделяют внимание основам, отчего на практике много ошибок</p>
          </div>
        </article>

        <article class="t-w-full lg:t-w-1/3 t-relative t-flex">
          <img class="emogi" src="img/emogi3.png" />
          <div class="lg:t-mt-44 pain">
            <h3 class="t-mb-3">Усложнение макетов</h3>
            <p>Сейчас крайне важно уметь делать макет адаптивным под разные устройства </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

.items {
  @include col-gutter(12px, 32px);
}

.emogi {
  width: 82px;
  height: 82px;
  @apply t-absolute t-left-0 t-top-8;
}

.pain {
  padding-left: 58px;
}

@screen md {
  .emogi {
    width: 152px;
    height: 152px;
    top: 34px;
    left: 0px;
  }

  .pain {
    padding-left: 98px;
  }

  .items {
    @include col-gutter(12px, 62px);
  }
}

@screen lg {
  .items {
    @include col-gutter(12px, 32px);
  }

  .pain {
    padding-left: 0;
  }

  .emogi {
    width: 290px;
    height: 290px;
    margin-left: 25px;
    z-index: -1;
    @apply t-absolute t-top-0 t-left-auto;
  }
}
</style>
