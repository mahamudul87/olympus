<template>
    <div class="p-grid p-jc-between o-card o-sm-ml" style="widht:100%">
      <div class="p-my-auto p-mx-start" style="margin-left:-40px; display:block">
          <slot name="avatar" />
      </div>
      <div class="p-d-flex p-flex-column p-my-auto">
      <div class="p-d-block p-mx-auto p-mt-3 p-mb-2 title">
        <slot name="title-1" />
      </div>
      <div class="p-d-block p-mx-auto p-mb-2 title" style="color:#97A0AD;">
        <slot name="title-2" />
      </div>
      <div class="p-d-block p-mx-auto p-p-2 p-mb-3 sub-title">
        <slot name="sub-title" />
      </div>
      </div>
</div>
</template>
<script>
export default {
  components: {
  },
};
</script>

