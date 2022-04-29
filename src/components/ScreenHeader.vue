<template>
  <div class="header t-overflow-hidden t-relative">
    <div class="wrapper t-relative cover">
      <div class="t-max-w-2xl">
        <p class="t-text-sm t-font-semibold">Курсы Никиты Антонова</p>
        <div class="t-pt-28 t-relative t-z-10">
          <h1 class="t-mb-4">Базовый курс по верстке</h1>
          <p class="t-mb-9">{{ subtitle }}</p>
          <div class="t-space-x-7 t-mb-12 t-flex">
            <BButton class="t-w-full">записаться на курс</BButton>
            <BButton class="t-w-full" design="secondary">программа курса</BButton>
          </div>
          <div class="t-flex t-space-x-6">
            <p class="t-font-semibold t-text-xs lg:t-text-sm">Старт: 1 декабря</p>
            <p class="t-font-semibold t-text-xs lg:t-text-sm">Длительность: 1 месяц</p>
            <p class="t-font-semibold t-text-xs lg:t-text-sm">Уровень: начинающий</p>
          </div>
        </div>
        <InlineSvg class="man" :src="require('@/assets/man.svg')"/>
      </div>
    </div>
    <InlineSvg class="t-absolute t-left-0 t-top-0" style="z-index: -1" width="100%" height="100%" :src="require('@/assets/bg.svg')" />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      subtitle:
        '8 онлайн-уроков для начинающих верстальщиков. После обучения вы будете верстать качественно и быстро и сможете начать работать',
    };
  },
};
</script>

<style scoped>
.header {
  @apply t-text-white t-pt-4 t-pb-28 lg:t-pb-48 t-relative;
}

.cover::after {
  content: "1";
  display: block;
  background: url('@/assets/layer.png?as=webp') no-repeat;
  background-size: 100%;
  z-index: -2;
  top: 38px;
  right: 0px;
  width: 250px;
  height: 250px;
  @apply t-absolute;
}

.man {
  @apply t-absolute t-hidden;
  z-index: 0;
}

@screen md {
  .cover::after {
    width: 291px;
    height: 291px;
    top: 42px;
    right: 0px;
  }

  .man {
    width: 51%;
    top: 59px;
    right: 0px;
    @apply t-block
  }
}

@screen lg {
  .cover::after {
    width: 389px;
    height: 389px;
    top: 83px;
    right: -45px;
  }

  .man {
    width: 73%;
    top: 72px;
    right: -103px;
  }
}

@screen xl {
  .cover::after {
    width: 640px;
    height: 640px;
    top: 43px;
    right: -30px;
  }

  .man {
    width: 77%;
    top: 64px;
    right: 10px;
  }

  .header {
    min-height: 786px
  }

}
</style>
