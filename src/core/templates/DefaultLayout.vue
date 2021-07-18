<template>
    <div class="content-section implementation">
        <o-header/>
        <div class="p-grid ">
            <div class="p-col-12 body">
            <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import OHeader from '@/components/organisms/OHeader.vue'
export default {
    components:{
       OHeader
    }
}
</script>
<style scoped>

.body {
  background: #1A293E;
}
</style>