<template>
  <section class="t-py-20">
    <div class="wrapper">
      <h2 class="t-mb-10">Об авторе курса</h2>

      <div class="row">
        <div class="md:t-w-2/4">
          <div class="t-text-2xl t-text-primary t-font-bold t-mb-1 t-text-center md:t-text-left">Никита Антонов</div>
          <p class="t-text-xl t-font-semibold t-mb-6 t-text-center md:t-text-left">фронтенд-разработчик, автор курса</p>
          <p class="t-mb-6">“Имею 5 лет опыта в верстке, активно занимаюсь фронтенд-разработкой, как основной деятельностью. Учавствую во многих мелких, средних и крупных проектах. Разрабатываю курсы, чтобы делиться опытом.</p>
          <p>Понимая как непросто освоиться в новой сфере, сколько возникает вопросов и ошибок, мы с командой подготовили этот курс, чтобы помочь новичкам получить необходимые навыки для успешного старта в интересной и перспективной сфере.”</p>
        </div>

        <div class="md:t-ml-16 md:t-max-w-sm md:t-order-1 md:t-mx-0 t-max-w-xs t-mx-auto t-relative -t-top-3 -t-order-1">
          <picture>
            <source type="image/webp" srcset="@/assets/author.png?as=webp 1x, @/assets/author-2x.png?as=webp 2x" />
            <source type="image/png" srcset="@/assets/author.png 1x, @/assets/author-2x.png 2x" />
            <img width="411" height="402" src="@/assets/author.png" alt="Никита Антонов - автор курса" loading="lazy">
          </picture>
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
