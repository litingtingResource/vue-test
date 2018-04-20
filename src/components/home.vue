<template>
<div class="box">
      <!----轮播--->
      <div class="headerPic">
      <ul class="listPic">
        <li><img src="../assets/header1.jpg" /></li>
      </ul>
      </div>
      <!----导航--->
      <div class="sec_1">
        <section>
         <router-link :to = "{name:'shopintrduce'}">
            <img src="../assets/mo1.png" />
            <p>商城介绍</p>
          </router-link>
        </section>
        <section>
         <router-link :to = "{name:'beshopheader'}">
          <img src="../assets/mo2.png" />
          <p>成为店主</p>
         </router-link>
        </section>
        <section>
          <img src="../assets/mo3.png" />
          <p>店主福利</p>
        </section>
        <section>
          <img src="../assets/mo7.png" />
          <p>店主服务</p>
        </section>
      </div>
      <div class="sec_2">
        <div class="sec_2left"><img src="../assets/secTwo1.jpg" /></div>
        <div><img src="../assets/secTwo2.jpg" /></div>
      </div>
      <!----标题--->
      <div class="sec_3">颜值Queen</div>
      <!----主题列表--->
      <div class="sec_4">
          <div>
            <img src="../assets/section1.jpg" />
          </div>
          <div class="sec4bottom">
            <div class="sec4bottom_one">
            <span class="one_left floatleft">Q+自然赋能美颜水   </span>
            <span class="one_right floatright">198  </span>
            </div>
            <div  class="sec4bottom_two">
            <span class="two_left floatleft">【预售】肌肤24小时自带加湿器</span>
            <div class="two_right floatright">立即剁手</div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import '../../static/header.css'
import '../../static/section.css'
export default {
  name: 'home',
}
</script>
<style>

</style>