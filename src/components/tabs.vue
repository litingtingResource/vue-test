<template>
  <div class="tabs">
    <ul class="bottomnav">
      <router-link :to = "{name:'home'}" tag="li" exact>
        <div><i class="icon iconfont icon-31shouye"></i></div>
        <div>首页</div>
      </router-link>
       <router-link :to = "{name:'find'}" tag="li">
        <div><i class="iconfont &#xe6bb"></i></div>
        <div>发现</div>
      </router-link>
      <router-link :to = "{name:'shopping'}" tag="li">
        <div><i class="icon iconfont icon-wo"></i></div>
        <div>购物车</div>
      </router-link>
       <router-link :to = "{name:'mine'}" tag="li">
        <div><i class="icon iconfont icon-wo"></i></div>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import '../../static/footer.css'
export default {
  name: 'tabs'
}
</script>

<style>

</style>
