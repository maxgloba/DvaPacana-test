<script setup>
import Selector from './components/Selector.vue'
</script>

<template>
  <div class="page">
    <Selector :items="checkboxList" :multiply="true" />
    <Selector :items="radioList" :multiply="false" />
  </div>
</template>

<script>
export default {
  computed: {
    checkboxList(){
      return this.$store.getters.checkboxList
    },
    radioList(){
      return this.$store.getters.radioList
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  @media(min-width:992px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}
</style>