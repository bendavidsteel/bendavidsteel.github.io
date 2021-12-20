<template>
  <footer class="footer" :style="{'background-image': 'url(' + require('@/assets/footerpic.jpg') + ')'}">
    <div class="tabs">
      <a href="https://github.com/bendavidsteel/" target="_blank">github</a>
      <a href="https://twitter.com/bendavidsteel" target="_blank">twitter</a>
      <a href="https://www.linkedin.com/in/ben-steel-9270b5126/" target="_blank">linkedin</a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  background-color: blueviolet;
  background-position: bottom -60px left 0px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100px;
  width: 100%;
}

.tabs {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
a {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: lightpink;
  text-shadow: 1px 1px 2px lightcoral, 0 0 1em slateblue, 0 0 0.2em slateblue;
  padding-right: 80px;
}
</style>