<template>
          <o-basic-card>
    <div class="p-d-flex p-flex-column p-mx-auto">
      <div class="p-d-block p-mx-auto p-mt-2"><slot name="avatar" /></div>
      <div class="p-d-block p-mx-auto p-mb-2 title">
        <slot name="title-1" />
      </div>
      <div class="p-d-block p-mx-auto p-mb-3 title" style="color:#97A0AD;">
        <slot name="title-2" />
      </div>
      <div class="p-d-block p-mx-auto p-mb-3 sub-title">
        <slot name="sub-title" />
      </div>
    </div>
    </o-basic-card>
</template>
<script>
export default {
  components: {
  },
};
</script>

