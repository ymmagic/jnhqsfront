<template>
  <div>
	<header class="mui-bar mui-bar-nav">
		<h1 class="mui-title">配送中</h1>
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

    </div>
  </div>
</template>


<script>
import storage from "../model/storage.js";
import { formatDate } from "../model/date.js";
import { MessageBox} from 'mint-ui';
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
      bookingdata: [0],
      begins: -1,
      ends: false,
      ind:0,
     
      json: "",
      proc2: "y_qishou.robbooking",
     
      proc4: "y_qishou.ends",
	  proc5: "y_qishou.getgps"
    };
  },

  methods: {
       changeBgc(index) {
        this.ind = index;
        this.$router.replace({ path: "/index/content2/content"+parseInt(index+9),query:{sys_id:index}});
      }
  },
  async mounted() {
    /*生命周期函数       vue页面刷新就会触发的方法*/
    let userid=storage.get('userid');
    this.bookingdata = (await this.axios.get(
      `/robinfo/${this.proc1}/${userid}`
    )).data;
  }
};
</script>



<style scoped>
  .active {
    color: #4ea64f;
    border-bottom: 3px solid #4ea64f;
  }
</style>
