<template>
    <section class="content">
        <div class="flex-box-page">
            <img :src="require('@/assets/northbells.jpg')" alt="Picture of the Northumbrian Bells performing" style="width:50%;height:90%;">
            <div class="flex-box-col">
                <div class="text-box">
                    <h1 id='name'>
                        Northumbrian Bells
                    </h1>
                    <h4 id='descrip'>
                        Harp and Violin duo based in Northumberland <br>
                        Playing a variety of English and Scottish traditional folk music <br>
                        Available to play at weddings and events
                    </h4>
                </div>
                <img :src="require('@/assets/heather.jpg')" alt="Picture of the some bell heather" style="width:100%;height:40%;">
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="footer-gap"></div>
        <div class="main-footer">
            <div class="tabs">
                <div class="tab" >
                    <a class="link" href="https://encoremusicians.com/Northumbrian-Bells" target="_blank">
                        <b>Encore</b>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>

.content {
    height: 100vh;
    padding: 0px;
    background-color: lightpink;
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
    height: 90%;
    width: 50%;
}

.link {
    text-decoration: none;
}

.text-box {
    padding-top: 80px;
    padding-left: 40px;
}

.footer {
    height: 10%;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.footer-gap {
    background-color: silver;
    height: 10%;
}

.main-footer {
    background-color: skyblue;
    height: 90%;
}

#name {
    font-family: Garamond, "Times New Roman", serif;
    font-size: 90px;
    color: darkorchid;
    text-shadow: -2px -2px 0 silver, 2px -2px 0 silver, -2px 2px 0 silver, 2px 2px 0 silver;
}

#descrip {
    font-family: Georgia, Verdana, sans-serif;
    font-size: 20px;
    color:darkslategray;
}

.tabs {
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.tab {
  margin-right: 80px;
  padding: 10px;
}

.tab:hover {
    background-color: rgba(1, 1, 1, 0.1);
}

.link {
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: darkslategray;
}
</style>