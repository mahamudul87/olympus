<template>
    <div>
                  <o-chip class="p-mr-2 p-d-none p-d-md-inline-flex" style="vertical-align: middle;" image="olympus_logo.png" label="$ 0.000000568"/>
                  <div class="p-grid p-ml-1 p-mr-1 p-d-none p-d-md-inline-flex" >
                    <o-icon class="p-mr-2" pack="pi" icon="pi-twitter" size="small"/>
                    <o-icon class="p-mr-2" style="margin-top:2px" pack="mdi" icon="instagram" size="small"/>
                    <o-icon class="p-mr-2" pack="pi" icon="pi-send" size="small"/>
                    <o-icon class="p-mr-2"  pack="fas" icon="fa-envelope" size="small"/>
                </div>
              <o-button class=" o-button-focus" style="width: fit-content;vertical-align: middle;" label="CONNECT"/>
              </div>
</template>

<script>
import OChip from '@/components/atoms/OChip.vue'
import OIcon from '@/components/atoms/OIcon.vue'
import OButton from '@/components/atoms/OButton.vue'
export default {
    components:{
      OChip,
       OIcon,
       OButton
    }
    
}
</script>

<style scoped>
.header {
  /*background-image: url("../assets/header_bg.png");
    height:169px;*/
  background: #07192d;
}
</style>