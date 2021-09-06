<template>
  <div 
  id="nav"
  ref="moveID" 
  @touchmove.prevent ="dragTo"
  @touchend="dragEnd"
  >
    <router-link v-if="routeName != `Home`" to="/">
    <div class="about"></div>
    </router-link>
    <!-- <router-link v-if="routeName != `About`" to="/about">
    <div class="home"></div>
    </router-link> -->
  </div>
  <router-view/>
</template>
<script>
export default{
  data() {
    return {
        routeName: null,
    };
},

watch: {
    '$route': 'currentRoute'
},

methods: {
    currentRoute() {
        this.$nextTick(() => {
            this.routeName = this.$route.name
        });
    },
      dragTo(e){
        let dragItem = this.$refs.moveID
        let touches = e.touches[0];
        dragItem.style.left = touches.clientX + "px";
        dragItem.style.top = touches.clientY + "px";
      },
      dragEnd(e){
        let dragItem = this.$refs.moveID
        let stopPosition =  e.changedTouches[0]
        let screenWidth = window.innerWidth
        if(stopPosition.clientX < screenWidth/2){
          dragItem.style.right = "auto";
          dragItem.style.left = 5 + "px";
        }else{
          dragItem.style.left = "auto";
          dragItem.style.right = 5 +"px";
        }
      }
}
}
</script>
<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap.css');

//分成兩種html,body去渲染不同頁面
html.abouthtml{
  position: relative;
  overflow: hidden;
  height: 100%;
}
html.homehtml{
  overflow-y: auto;
}
body.home{
  margin: 0;
}
body.about{
  overflow-y: hidden;
  position: relative;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-family: 'Noto Sans TC', sans-serif;
}

#nav {
  bottom: 20px;
  right: 5px;
  position: fixed;
  z-index: 99;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

.home{
    width: 50px;
    height: 50px;
    border-radius: 50%;   
    background-color: rgb(124, 175, 135);
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
    background-image: url('./assets/icon/home.svg');
    &:hover{
      background-color: rgb(124, 175, 180);
    }
}

.about{
    width: 50px;
    height: 50px;
    border-radius: 50%;   
    background-color: rgb(124, 175, 135);
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
    background-image: url('./assets/icon/user.svg');
    &:hover{
      background-color: rgb(124, 175, 180);
    }
}

}
</style>
