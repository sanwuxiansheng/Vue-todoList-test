<template>
  <div>
    <mt-button type="default" style="width:100%">default</mt-button>
    <mt-button type="primary" @click="showMsg" style="width:100%">primary</mt-button>
    <mt-button type="danger" style="width:100%">danger</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    methods: {
      showMsg() {
        Toast({
          message: '11111',
        });
        console.log('1111');
      }
    }
  }
</script>
<style scoped>
</style>