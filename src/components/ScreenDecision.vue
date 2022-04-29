<template>
  <section class="t-pt-20">
    <div class="wrapper">
      <h2 class="t-mb-12">Как легко преодолеть трудности в изучении?</h2>
      <div class="t-space-y-5">
        <div class="t-flex t-items-start lg:t-items-center t-space-x-3 lg:t-space-x-8 t-max-w-4xl emogi emogi-1">
          <article>
            <h3 class="t-mb-3">Максимум необходимой информации в 8 уроках</h3>
            <p class="t-mb-3">Для того чтобы не утонуть в огромном количестве информации, мы взяли все самые необходимые темы и поместили их в 8 уроков.</p>
            <p>Этих навыков будет достаточно, чтобы начать верстать и успешно справляться с задачами заказчиков.</p>
          </article>
        </div>
        <div class="t-flex t-items-start lg:t-items-center t-space-x-3 lg:t-space-x-8 t-max-w-4xl emogi emogi-2">
          <article>
            <h3 class="t-mb-3">Сначала основы, а затем углубленное изучение</h3>
            <p class="t-mb-3">В первой части курса мы делаем упор на фундаментальные основы: учим строить HTML структуру и на ее основе правильно стилизовать элементы.</p>
            <p>Во второй части курса мы разбираем более продвинутые темы: расстановка элементов по сетке, размеры элементов, адаптивная верстка и ее ключевые принципы.</p>
          </article>
        </div>
        <div class="t-flex t-items-start lg:t-items-center t-space-x-3 lg:t-space-x-8 t-max-w-4xl emogi emogi-3">
          <article>
            <h3 class="t-mb-3">Практика и еще раз практика!</h3>
            <p class="t-mb-3">В процессе обучения мы будем уделять большое внимание практике. После каждого урока у вас будет практическое задание, которое будет проверено преподавателем в начале следующего урока.</p>
            <p>В конце курса вы сверстаете реальный макет и закрепите свою первую работу в портфолио. </p>
          </article>
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
  .emogi::before {
    content: '';
    display: block;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }

  .emogi-1::before {
    background-image: url('@/assets/d1-1x.png?as=webp');
    background-image: image-set(url('@/assets/d1-1x.png?as=webp') 1x, url('@/assets/d1-2x.png?as=webp') 2x);
    background-size: 100%;
  }

  .emogi-2::before {
    background-image: url('@/assets/d2-1x.png?as=webp');
    background-image: image-set(url('@/assets/d2-1x.png?as=webp') 1x, url('@/assets/d2-2x.png?as=webp') 2x);
    background-size: 100%;
  }

  .emogi-3::before {
    background-image: url('@/assets/d3-1x.png?as=webp');
    background-image: image-set(url('@/assets/d3-1x.png?as=webp') 1x, url('@/assets/d3-2x.png?as=webp') 2x);
    background-size: 100%;
  }

  @screen md {
    .emogi::before {
      width: 120px;
      height: 120px;
    }
  }

  @screen lg {
    .emogi::before {
      width: 237px;
      height: 237px;
    }
  }
</style>
