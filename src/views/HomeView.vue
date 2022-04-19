<template>
  <main>
    <ScreenHeader />
    <ScreenTA />
    <ScreenPain />
    <ScreenDecision />
    <ScreenProgram />
    <ScreenLearning />
    <ScreenAuthor />
    <ScreenFooter />
  </main>
</template>

<script>
import ScreenHeader from '@/components/ScreenHeader.vue';
import ScreenDecision from '@/components/ScreenDecision.vue';
import ScreenPain from '@/components/ScreenPain.vue';
import ScreenProgram from '@/components/ScreenProgram.vue';
import ScreenFooter from '@/components/ScreenFooter.vue';
import ScreenLearning from '@/components/ScreenLearning.vue';
import ScreenAuthor from '@/components/ScreenAuthor.vue';
import ScreenTA from '@/components/ScreenTA.vue';

export default {
  name: 'HomeView',
  components: {
    ScreenHeader,
    ScreenPain,
    ScreenDecision,
    ScreenProgram,
    ScreenFooter,
    ScreenLearning,
    ScreenAuthor,
    ScreenTA
  }
}
</script>
