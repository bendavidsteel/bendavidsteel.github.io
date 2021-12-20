<template>
  <header class="header" :style="{'background-image': 'url(' + require('@/assets/headerpic.jpg') + ')'}">
    <div class="tabs">
      <a href="/">home</a>
      <a href="about">about</a>
    </div>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  background-color: goldenrod;
  background-position: bottom -20px left 0px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100px;
  width: 100%;
}

.tabs {
  padding-top: 45px;
}

a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-decoration: none;
  color: lightgoldenrodyellow;
  text-shadow: 0.5px 0.5px 1px lightcoral, 0 0 1px lightsteelblue, 0 0 1px lightsteelblue;
  padding-left: 80px;
}
</style>