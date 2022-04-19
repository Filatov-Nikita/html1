<template>
  <section class="t-pt-20">
    <div class="wrapper">
      <h2 class="t-mb-12">Как проходит обучение?</h2>
      <ul class="t-max-w-xl">
        <b-timeline-entry title="Формат" subtitle="Уроки будут проходить онлайн 2 раза в неделю в 20:00 по МСК. В первой части урока мы будем разбирать ваши домашние задания, а во второй части - подробно изучать тему урока.">
          <template #step>1</template>
        </b-timeline-entry>
        <b-timeline-entry title="Длительность уроков" subtitle="В среднем каждый урок занимает 2 часа. Длительность урока зависит от объема разбираемой темы и количества присланных домашних работ.">
          <template #step>2</template>
        </b-timeline-entry>
        <b-timeline-entry title="Когда можно задавать вопросы?" subtitle="Вопросы можно задавать в чате во время урока или вне урока в отдельном канале, который будет создан перед стартом курса.">
          <template #step>3</template>
        </b-timeline-entry>
        <b-timeline-entry title="Есть ли записи уроков?" subtitle="Да, после каждого урока вы получаете видеозапись и исходники кода, который был написан на уроке.">
          <template #step>4</template>
        </b-timeline-entry>
      </ul>
    </div>
  </section>
</template>

<script>
import BTimelineEntry from './BTimelineEntry.vue';

export default {
  components: { BTimelineEntry },
};
</script>

<style>
</style>
