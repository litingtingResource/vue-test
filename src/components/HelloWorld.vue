<template>
  <div class="hello">
    <div class="sec_1">
      <section>
        <img src="../assets/mo1.png" />
        <p>商城介绍</p>
      </section>
      <section>
        <img src="../assets/mo2.png" />
        <p>商城介绍</p>
      </section>
      <section>
        <img src="../assets/mo3.png" />
        <p>商城介绍</p>
      </section>
      <section>
        <img src="../assets/mo7.png" />
        <p>商城介绍</p>
      </section>
    </div>
  </div>
</template>

<script>
import '../../static/section.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
