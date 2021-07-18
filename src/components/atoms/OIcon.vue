<template>
<div class="p-p-1">
    <font-awesome-icon v-if="getComponent=='fas'" :class="getSize" :icon="getIcon" />
    <i v-else-if="getComponent=='pi'" :class="'pi '+getSize+' '+getIcon"></i>
    <mdicon v-else-if="getComponent=='mdi'" style="vertical-align: -webkit-baseline-middle;" :name="getIcon" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function getFontComponent(name){
    switch(name){
        case 'fas':
            return 'fas';
        case 'pi':
            return 'pi';
        case 'mdi':
            return 'mdi'
        default:
            return 'pi'

    }

}

function getIcon(name){
    switch(name){
        case 'fa-envelope':
            return faEnvelope;

        default:
            return name;
    }

}

function getSize(size){
    switch(size){
        case 'xlarge':
            return 'xlarge';
        case 'large':
            return 'large';
        case 'medium':
            return 'medium';
        case 'small':
            return 'small';
        case 'xsmall':
            return 'xsmall';

        default:
            return 'unknow-font-size';
    }

}

export default {
  name: 'Oicon',
  components:{
      FontAwesomeIcon
  },

  data () {
    return {
    }
  },
computed:{
    getComponent(){
        return getFontComponent(this.pack)
    },
    getIcon(){
        return getIcon(this.icon)
    },
    getSize(){
        return getSize(this.size)
    }
},
  props:['pack','icon', 'size']
}
</script>

<style scoped>
.xlarge{
    font-size: 40px;
    margin-top:2px;
}
.large{
font-size: 36px;
margin-top:2px;
}
.medium{
font-size: 28px;
margin-top:2px;
}

.small{
font-size: 20px;
margin-top:15px;
}
.xsmall{
font-size: 12px;
margin-top:2px;
}

.unknow-font-size{
font-size: 24px;
margin-top:2px;
}
</style>
