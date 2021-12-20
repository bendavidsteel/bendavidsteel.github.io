<template>
  <section class="content">
    <div class="content-body" :style="{'background-image': 'url(' + require('@/assets/alps.jpg') + ')'}">
      <div class="center-col">
        <div class="text-col">
          <div id='about-text'>
            <h2 id='about-title'>Hello fellow web wanderer!</h2>
            <p id='main-about'>
              <!--TODO improve formatting-->
              I love doing fun things, being among good people, and making the most of life. <br>
              From the UK, living in Montreal. Formerly worked as a data developer at Ubisoft and Maya HTT, now back in academia, where I'm excited to be contributing to the computational social science space, specifically data science for political science. <br>
              I fill my time outside research with climbing, backpacking, skiing, and other hobbies, and more importantly, spending quality time with friends. <br>
              I'm trying to find the balance between creating positive contributions to society and enjoying my life.
              <br>
              <br>
              Please say hi: bendavidsteel@gmail.com
            </p>
            <p id='about-foot'>
              Site designed by me, pictures by me, using the Vue framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AboutFooter/>
</template>
<script>
import AboutFooter from '@/components/AboutFooter'

export default {
  name: 'App',
  components: {
    AboutFooter
  }
}
</script>
<style scoped>

.content {
    height: 100%;
    margin: 0px;
    margin-top: 100px;
    padding: 0px;
    background-color: lightsteelblue;
}

.content-body {
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100%;
  width: 100%;
}

.center-col {
  margin-right: 30%;
  margin-left: 30%;
  height: 100%;
  background-color: lightgoldenrodyellow;
}

.text-col {
  margin-right: 10%;
  margin-left: 10%;
  height: 100%;
}

#about-text {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color:darkslateblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

#about-foot {
  font-size: 14px;
}

#about-title {
  text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
}
</style>