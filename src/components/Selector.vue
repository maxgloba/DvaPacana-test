<template>
  <div class="selector">
    <div class="box box__selected">
      <div v-if="selected.length === 0">Please choose the item under this box</div>
      <button class="btn btn__selected"
        v-for="(selectedItem, index) in selected"
        :key="`removeCheckbox_${index}`"
        @click="removeSelected(index)">
        {{ items[selectedItem].name }}
      </button>
    </div>
    <div class="box box__list">
      <button
        class="btn"
        v-for="(item, index) in items"
        :disabled="selected.includes(index)"
        :key="`checkbox_${index}`"
        @click="chooseItem(index)">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    items: Array,
    multiply: Boolean
  },
  data(){
    return {
      selected: []
    }
  },
  methods: {
    chooseItem(i){
      if(this.multiply){
        if(this.selected.length === 6) return alert('You can choose only 6 items.')
        this.selected.push(i)
      } else {
        this.selected = [i]
      }
    },
    removeSelected(i){
      this.selected.splice(i, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
$dark: #151515;
$white: #fafafa;
$active: #00bd6f;

.selector{
  &:not(:first-child){
    margin-top: 30px;
    @media(min-width:992px){
      margin-top: 0;
    }
  }
}

.btn{
  background: $active;
  border: none;
  color: $white;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px 30px;
  transition: background .3s ease;
  &:hover{
    background: rgba($active, .7);
  }
  &__selected{
    font-size: 16px;
    position: relative;
    &:after{
      content: "+";
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &:disabled{
    background: rgba($white, .5);
    cursor: default;
    pointer-events: none;
  }
}

.box{
  background: rgba($dark, .2);
  border: 1px solid rgba($white, .2);
  border-radius: 8px;
  padding: 15px;
  &__list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  &__selected{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
  }
}
</style>