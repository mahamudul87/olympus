<template>
  <div class="p-chip p-component p-chip-image p-mr-2 p-d-none p-d-md-inline-flex o-chip"  style="vertical-align: middle;">
    <img :src="internalImage">
  <div class="p-chip-text">{{label}}</div>
  </div>
</template>

<script>

export default {
   props:['image','label'],

   computed:{
       internalImage(){
           return require(`@/assets/images/${this.image}`);
       }
   }
}
</script>
