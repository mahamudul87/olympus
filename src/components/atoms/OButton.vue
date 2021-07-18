<template>
    <Button v-bind="$attrs"   class="o-button" ><slot>{{label}}</slot></Button>
</template>

<script>

export default {
    inheritAttrs: false,
    props:['label']
}
</script>

<style scoped>



</style>
