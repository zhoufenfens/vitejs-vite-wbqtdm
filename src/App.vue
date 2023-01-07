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
  <van-button>App.vue里的按钮</van-button>
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
  display: block;
}
.router-view {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 5px;
}
</style>
