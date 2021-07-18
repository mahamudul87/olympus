<template>
  <div class="p-grid header">
    <div class="p-col-12 p-lg-12 p-md-12 p-sm-12">
      <div class="p-d-flex p-jc-between o-sub-title">
        <div><o-header-left /></div>
        <div class="p-my-auto"><o-header-right /></div>
      </div>
      <div class="o-line p-mt-2" />
    </div>
  </div>
</template>

<script>
import OHeaderLeft from "@/components/organisms/OHeaderLeft.vue";
import OHeaderRight from "@/components/organisms/OHeaderRight.vue";
export default {
  components: {
    OHeaderRight,
    OHeaderLeft,
  },
};
</script>

<style scoped>
.header {
  /*background-image: url("../assets/header_bg.png");
    height:169px;*/
  background: #07192d;
}
</style>