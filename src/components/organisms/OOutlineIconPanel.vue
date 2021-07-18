<template>
    <dev>
        <div class="p-d-flex p-jc-center">
            <div class="p-mr-2">
            <o-outline-icon pack="pi" icon="pi-twitter"/>
        </div>
        <div class="p-mr-2">
            <o-outline-icon pack="mdi" icon="instagram"/>
        </div>
          <div class="p-mr-2">
            <o-outline-icon pack="pi" icon="pi-send"/>
        </div>
         <div class="p-mr-2">
            <o-outline-icon pack="fas" icon="fa-envelope"/>
        </div>
        </div>
    </dev>
</template>

<script>
import OOutlineIcon from '@/components/molecules/OOutlineIcon.vue'

export default {
  name: 'OOutlineIconPanel',
  components:{
    OOutlineIcon
  }
}
</script>

<style scoped>
</style>
