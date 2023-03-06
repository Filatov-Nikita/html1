<template>
  <section id="order" class="t-bg-primary t-text-white t-pt-12 t-pb-24 t-relative">
    <div class="wrapper t-relative">
      <InlineSvg class="sticky" :src="require('@/assets/stick.svg')" />
      <h2 class="t-max-w-xl t-mb-16 md:t-pr-0">
        Запишитесь на курс прямо сейчас или получите консультацию
      </h2>
      <div class="row md:-t-mx-4">
        <div class="t-w-full md:t-w-1/2 md:t-px-4">
          <div class="t-mb-16">
            <p class="t-text-xl t-font-semibold t-pb-4">Стоимость обучения</p>
            <div class="t-flex t-items-center t-space-x-16 t-mb-3">
              <p class="t-text-3xl t-font-bold t-text-secondary">25 900 руб</p>
              <p class="t-line-through t-text-serebro t-font-bold t-text-1.1xl">
                37 900 руб
              </p>
            </div>
            <p class="t-text-lg t-font-medium">
              Скидка 20% действует до 30 мая
            </p>
          </div>
          <div>
            <p class="t-text-lg t-font-semibold t-mb-2">
              Действует гарантия возврата
            </p>
            <p class="t-text-sm">
              Если курс вам не подойдет, у вас есть 2 первых урока, чтобы
              вернуть деньги.
            </p>
          </div>
        </div>
        <div class="t-w-full md:t-w-1/2 t-mt-16 md:t-mt-0 md:t-px-4">
          <p class="t-text-lg t-mb-5">Ваши контакты:</p>
          <form @submit="1" class="t-bg-white t-rounded-2xl t-block t-px-12 t-py-14 t-pb-9 t-text-center">
            <div class="t-space-y-6">
              <BInput required name="name" label="Имя"/>
              <BInput required v-maska="'+7 (###) ###-##-##'" name="tel" label="Телефон" type="tel" />
              <BInput required name="email" label="E-mail" type="email" />
            </div>
            <BButton class="t-mt-8 t-mx-auto t-block t-mb-6 t-w-full" type="submit">записаться на курс</BButton>
            <div class="t-text-black t-text-xs">Нажимая на кнопку, я даю согласие на <a class="link" href="#">обработку персональных данных</a></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.sticky {
  width: 118px;
  height: 105px;
  bottom: 297px;
  @apply t-absolute t-right-5 t-z-10;
}

@screen lg {
  .sticky {
    @apply t--top-4 t-right-0 t-w-auto t-h-auto;
  }
}
</style>
