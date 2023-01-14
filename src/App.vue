<script setup>

</script>

<template>
  <div class='router-view'>
    <router-view></router-view>
  </div>
  <div>
    <a class='link' href='/#/news'>切换到/news</a>
    <a class='link'  href='/#/news2'>切换到/news2</a>
  </div>
  <van-button type='primary' size='small'> App.vue里的按钮</van-button>
  <div>run <b style="color: #08f;">"npm run b-p"</b> to see the difference between the development env and build env. </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.link {
  font-size: 14px;
  display: inline-block;
}
.link:last-child {
  margin-left: 20px;
}
.router-view {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
