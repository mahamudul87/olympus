<template>
<div class="p-mr-md-3 p-mr-lg-3 p-mr-sm-2 p-mr-xsm-2 o-icon-outline">
   <o-icon v-bind="$attrs"/>
</div>
</template>

<script>
import OIcon from '@/components/atoms/OIcon.vue'

export default {
  name: 'OOutlineIcon',
  components:{
    OIcon
  }
}
</script>

<style scoped>
</style>
