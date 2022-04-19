<template>
  <section id="program" class="t-pt-20">
    <div class="wrapper">
      <h2 class="t-mb-9">Программа курса</h2>
      <div class="t-rounded-2xl t-bg-primary t-text-white t-px-12 lg:t-pr-24 t-py-16">
        <div class="t-mb-16">
          <h3 class="t-mb-6">Вводная часть. Знакомство с версткой</h3>
          <div>
            <ProgramItem v-for="(item, index) in lessons1" :key="item.name" v-bind="item" :showByDefault="index === 0" />
           </div>
        </div>
        <div class="t-mb-12">
          <h3 class="t-mb-6">Основная часть. Изучение верстки</h3>
          <div>
            <ProgramItem v-for="(item, index) in lessons2" :key="item.name" v-bind="item" :showByDefault="index === 0" />
           </div>
        </div>
        <BButton class="t-mx-auto t-w-full t-block">записаться на курс</BButton>
      </div>
    </div>
  </section>
</template>

<script>
import { markRaw } from '@vue/reactivity';
import ProgramItem from './ProgramItem.vue';

export default {
  setup() {
    return {
      lessons1: markRaw([
        {
          name: 'Урок 1. Теги',
          topics: [
            'Как классифицируются теги?',
            'Какие теги можно вкладывать друг в друга?',
            'Структура документа',
            'Семантические теги',
            'Валидация html',
          ]
        },
        {
          name: 'Урок 2. Селекторы',
          topics: [
            'Основные виды селекторов',
            'Приоритеты селекторов',
            'Бэм селекторы',
            'Псевдоэлементы',
            'Псевдоклассы',
          ]
        },
        {
          name: 'Урок 3. Виды моделей',
          topics: [
            'Блочная модель',
            'Строчная модель',
            'Строчно блочная модель'
          ]
        },
        {
          name: 'Урок 4. Позиционирование',
          topics: [
            'Абсолютное позиционирование',
            'Относительное позиционирование',
            'Фиксированное позиционирование',
            'Центровка по горизонтали и вертикале',
          ]
        }
      ]),
      lessons2: markRaw([
        {
          name: 'Урок 5. Флексы и сетки',
          topics: [
            'Флексы',
            'Размеры в процентах',
            'Максимальная ширина',
            'Сетка на падингах',
            'Сетка на марджинах',
            'Симметричные марджины',
          ]
        },
        {
          name: 'Урок 6. Композиция',
          topics: [
            'Строка столбец',
            'Медиа запросы',
            'Стратегия от меньшего к большему',
            'Сложные структурно разные элементы',
            'Отступы spacing',
            'CSS gutter'
          ]
        },
        {
          name: 'Урок 7. Стили верстки',
          topics: [
            'Верстка макета',
            'Разделение кода на базовые стили',
            'Сброс и нормализация стилей',
            'CSS переменные',
          ]
        },
        {
          name: 'Урок 8. Сборка макета',
          topics: [
            'Разбор верстки макета',
            'Оптимизация css',
            'Выносим части макета',
            'Сборка проекта',
          ]
        }
      ]),
    }
  },
  components: { ProgramItem },
}
</script>

<style>

</style>
