<template>
  <div class="p-grid">
    <div class="p-col-12 p-lg-3 p-md-3 p-sm-12">
      <o-card class="p-d-none p-d-sm-inline-flex p-md-12 o-card">
        <template #avatar>
          <img class="avatar" src="@/assets/images/olympus_logo.png" />
        </template>
        <template #title-1>
          <span class="o-gradient-text"> 2,216,144.16</span>
        </template>
        <template #title-2> ~ $2,893 </template>
        <template #sub-title> TOTAL OLYMPUS HOLDINGS </template>
      </o-card>
      <o-card-small class="p-d-md-none p-mr-1">
        <template #avatar>
          <img class="avatar" src="@/assets/images/olympus_logo.png" />
        </template>
        <template #title-1>
          <span class="o-gradient-text"> 2,216,144,315.16</span>
        </template>
        <template #title-2><span> ~ $2,893 </span></template>
        <template #sub-title> TOTAL OLYMPUS HOLDINGS </template>
      </o-card-small>
      <div class="o-sm-button">
        <o-button class="p-mt-2 o-button-focus" label="BUY OLYMPUS" />
      </div>
      <div style="padding: 30px 80px 30px 100px">
        <div class="o-horizental-seperator" />
      </div>
    </div>
    <div class="p-col-12 p-lg-3 p-md-3 p-sm-12">
      <o-card class="p-d-none p-d-sm-inline-flex p-md-12 o-card">
        <template #avatar>
          <img class="avatar" src="@/assets/images/busd_holding.png" />
        </template>
        <template #title-1>
          <div>
            <span class="o-gradient-text">1,282</span><span> BUSD</span>
          </div>
        </template>
        <template #sub-title> TOTAL OLYMPUS HOLDINGS </template>
      </o-card>
      <o-card-small class="p-d-md-none p-mr-1">
        <template #avatar>
          <img class="avatar" src="@/assets/images/busd_holding.png" />
        </template>
        <template #title-1>
          <div><span class="o-gradient-text">1,282</span> BUSD</div>
        </template>
        <template #sub-title> TOTAL OLYMPUS HOLDINGS </template>
      </o-card-small>
      <div class="o-sm-button">
        <o-button class="p-mt-2" label="APPROVE BUSD" />
        <div
          class="p-mt-2 p-pl-2 p-pr-2"
          style="width: 100%; text-align-last: justify"
        >
          25% 50% 75% 100%
        </div>
        <o-button disabled class="p-mt-2"
          ><span>500</span><span style="float: right"> BUSD</span></o-button
        >
        <o-button class="p-mt-2 o-button-focus" label="RE-INVEST BUSD" />
      </div>

      <div style="padding: 30px 80px 30px 100px">
        <div class="o-horizental-seperator" />
      </div>
    </div>
    <div class="p-col-12 p-lg-3 p-md-3 p-sm-12">
      <o-card class="p-d-none p-d-sm-inline-flex p-md-12 o-card">
        <template #avatar>
          <img class="avatar" src="@/assets/images/payout_time.png" />
        </template>
        <template #title-1>
          <span class="o-gradient-text"> 2 HOURS 3 MINS AGO</span>
        </template>
        <template #sub-title> PREVIOUS PAYOUT TIME </template>
      </o-card>
      <o-card-small class="p-d-md-none p-mr-1">
        <template #avatar>
          <img class="avatar" src="@/assets/images/payout_time.png" />
        </template>
        <template #title-1>
          <span class="o-gradient-text"> 2 HURS 3 MINS AGO</span>
        </template>
        <template #sub-title> PREVIOUS PAYOUT TIME </template>
      </o-card-small>
      <div class="o-sm-button">
        <o-button class="p-mt-2" label="CLAIM 1,282 BUSD" />
      </div>
      <div
        class="p-mt-2 p-mx-auto"
        style="color: #cfd1d4; text-align: -webkit-center"
      >
        <span class="o-sm-ml o-text">Places a small transaction to trigger</span
        ><br /><span class="o-sm-ml">(less than $0.10)</span>
      </div>
      <div style="padding: 30px 80px 30px 100px">
        <div class="o-horizental-seperator" />
      </div>
    </div>
    <div class="p-col-12 p-lg-3 p-md-3 p-sm-12">
      <o-card class="p-d-none p-d-sm-inline-flex p-md-12 o-card">
        <template #avatar>
          <img class="avatar" src="@/assets/images/sell_tax.png" />
        </template>
        <template #title-1>
          <span style="font-size: 2.8rem" class="o-gradient-text"> 14%</span>
        </template>
        <template #sub-title> CURRENT HADES SELL TAX </template>
      </o-card>
      <o-card-small class="p-d-md-none p-mr-1">
        <template #avatar>
          <img class="avatar" src="@/assets/images/sell_tax.png" />
        </template>
        <template #title-1>
          <span style="font-size: 2.8rem" class="o-gradient-text"> 14%</span>
        </template>
        <template #sub-title> CURRENT HADES SELL TAX </template>
      </o-card-small>
      <div style="padding: 30px 80px 30px 100px">
        <div class="o-horizental-seperator" />
      </div>
    </div>
  </div>
</template>
<script>
import OCard from "@/components/molecules/OCard.vue";
import OCardSmall from "@/components/molecules/OCardSmall.vue";
import OButton from "@/components/atoms/OButton.vue";

export default {
  components: {
    OCard,
    OCardSmall,
    OButton,
  },
};
</script>
