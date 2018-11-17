<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">抢单</h1>
    </header>
  
    <div class="mui-content">
      <div class="nav">
        <ul>
          <li v-for="(system,index) in systems" :class="{'active':ind === index}" @click="changeBgc(index)" :key="index">
            {{system.name}}
          </li>
        </ul>
        <router-view></router-view>
      </div>
  
      <!--更多订单-->
  
    </div>
  </div>
</template>

<script>
  import storage from '../model/storage.js';
  import {
    formatDate
  } from '../model/date.js';
  import {
    MessageBox
  } from 'mint-ui';
  export default {
    data() {
      return {
        systems: [{
            name: "普通订单"
          },
          {
            name: "VIP订单"
          }
        ],
  
        json: "",
        show: -1,
        ind: 0
  
      };
    },
   
    methods: {
      changeBgc(index) {
        this.ind = index;
        this.$router.replace({ path: "/index/content1/content"+parseInt(index+7),query:{sys_id:index}});
      }
  
    },
    async mounted() {
  
    }
  };
</script>

<style scoped>
  .active {
    color: #4ea64f;
    border-bottom: 3px solid #4ea64f;
  }
</style>
