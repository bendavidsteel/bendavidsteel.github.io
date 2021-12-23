<template>
    <section class="content">
        <div class="flex-box-page">
            <img :src="require('@/assets/northbells.jpg')" alt="Picture of the Northumbrian Bells performing" style="width:90%;height:90%;">
            <div class="flex-box-col">
                <div class="text-box">
                    <h1 id='name'>
                        Northumbrian Bells
                    </h1>
                    <h4 id='descrip'>
                        Harp and Violin duo based in Northumberland <br>
                        Available to play at events
                    </h4>
                </div>
                <img :src="require('@/assets/heather.jpg')" alt="Picture of the some bell heather" style="width:100%;height:36%;">
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="tabs">
            <a class="tab" href="https://encoremusicians.com/Northumbrian-Bells" target="_blank">Encore</a>
        </div>
    </footer>
</template>
<style scoped>

.content {
    height: 100vh;
    padding: 0px;
    background-color: white;
}

.flex-box-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.flex-box-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.link {
    text-decoration: none;
}

.text-box {
    padding-left: 40px;
}

.footer {
    height: 10%;
    width: 100%;
    background-color: fuchsia;
    position: fixed;
    bottom: 0;
}

#name {
    font-family: Georgia, Verdana, sans-serif;
    font-size: 54px;
    color: black;
}

#descrip {
    font-family: Georgia, Verdana, sans-serif;
    font-size: 26px;
    color:black;
}

.tabs {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.tab {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: black;
  padding-right: 80px;
}
</style>