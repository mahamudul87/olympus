<template>
<div>
  <div class="p-d-flex p-jc-center o-sm-ml" style="margin-top: 30px">
    <div class="o-sub-title">YOUR GATEWAY TO OLYMPUS</div>
  </div>

  <div class="p-grid" style="margin-top: 30px">
    <div class="p-col-12 p-md-1 p-d-none p-d-sm-inline-flex" />
    <div class="p-col-12 p-lg-10 p-md-10 p-sm-12">
      <o-card-panel/>
    </div>
    <div class="p-col-12 p-lg-1 p-md-1 p-d-none p-d-sm-inline-flex" />
  </div>
  <div class="p-grid">
    <div class="p-col-12 p-lg-1 p-md-1 p-d-none p-d-sm-inline-flex" />
    <div class="p-col-12 p-lg-10 p-md-10 p-sm-12">
        <div class="p-d-none p-d-sm-inline-flex p-col-12">
      <o-basic-card class="o-sub-title p-col-12" style="height: 150px;margin-top: -30px;">
        <div class="p-my-auto p-p-2 p-mx-auto">
         <span style="vertical-align: super;"> TOTAL PAID TO HOLDERS</span>
          <span class="o-gradient-text p-ml-2 p-mr-2" style="font-size: 2.5rem"
            >23,640,393</span
          > <span style="vertical-align: super;">BUSD</span>
        </div>
      </o-basic-card>
        </div>

      <o-basic-card class="o-sub-title p-d-md-none p-mr-1" style="height: 150px">
          <div class="p-my-auto p-mx-auto p-mb-1">
          <span class="o-gradient-text" style="font-size: 2.5rem"
            >23,640,393</span
          ><span style="vertical-align: super;">BUSD</span>
          <br/>
        <span class="p-my-auto p-p-2 p-mx-auto">
          TOTAL PAID TO HOLDERS
          </span>
          </div>
      </o-basic-card>
      
    </div>
    <div class="p-col-12 p-lg-1 p-md-1 p-d-none p-d-sm-inline-flex" />
  </div>
  <div class="p-grid  " style="margin-top: 30px">
        <div class="p-col-12 p-d-md-none p-d-md-inline-flex">
        <div class="o-line"/> 
        </div>
    </div>
  <div class="p-grid o-tasks-sm">
      
    <div class="p-lg-1 p-md-1" />
    <div class="p-lg-5 p-md-5 p-sm-10">
      <div class="o-card p-pt-3 p-pb-3" style="text-align: -webkit-center;">
            <div class="o-gradient-text"
              >GAIN FAVOUR FROM THE GODS - 9 DAILY TASKS</div
            >
            <div class="p-m-2"
              >
              ⚡️Do these to invoke favour from the Gods of Olympus⚡️ 
            </div>
            <div class="p-m-2">
              1. Bogged.Charts - Click 'Heart' on Olympus Icon (Visit at least once 
              every 8 hours to give an upvote on the backend)
              <br/>https://charts.bogged.finance/0
            </div>
             <div class="p-m-2">
              2. Twitter - Like, Retweet & Comment on every new post
              https://twitter.com/olympus_token 
             </div>
              <div class="p-m-2">
              3. Instagram - Like & comment on every new post 
              https://www.instagram.com/olympusbsc/?hl=en 
              </div>
               <div class="p-m-2">
              4. Coinmarketcap - Add to Watchlist
              https://coinmarketcap.com/currencies/ olympus-token/ 
               </div>
                <div class="p-m-2">
              5. Coingecko - Click Like 
              https://www.coingecko.com/en/coins/ olympus-token 
                </div>
                 <div class="p-m-2">
              6. CoinSniper - Vote 
              https://coinsniper.net/coin/4469 
                 </div>
                  <div class="p-m-2">
              7. CoinHunt - Click all the positive emojis 
              https://coinhunt.cc/coin/1375929387
                  </div>
                   <div class="p-m-2">
              8. Coinbase - Add to Watchlist
              https://www.coinbase.com/price/ olympus-token 
                   </div>
                    <div class="p-m-2">
              9. Reddit - Upvote,Comment and Award the latest post
              https://www.reddit.com/search/? q=Olympus%20token
                    </div>
      </div>
    </div>
    <div class="p-lg-5 p-md-5" style="text-align: end;">
            <div class="p-d-none p-d-sm-inline-flex">
          <img class="o-zeus" src="@/assets/images/zeus.png" />
            </div>
        </div>
        <div class="p-col-1"/>
  </div>
   <div class="p-d-md-none p-d-md-inline-flex">
  <div  class="o-line p-dm-none" />
   </div>
<div class="p-grid" style="margin-top:50px; margin-bottom:50px">
    <div class="p-col-12">
        <o-outline-icon-panel/>
    </div>
</div>
</div>
</template>

<script>
import OBasicCard from "@/components/atoms/OBasicCard.vue";
import OCardPanel from "@/components/organisms/OCardPanel.vue";
import OOutlineIconPanel from "@/components/organisms/OOutlineIconPanel.vue";
export default {
  components: {
    OBasicCard,
    OOutlineIconPanel,
    OCardPanel,
  },
};
</script>


<style scoped>
</style>