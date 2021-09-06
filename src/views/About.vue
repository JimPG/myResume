<template>
  <div id="about" @touchstart="getStart" @touchend="swipeAction" @wheel="wheelAction">
    <section>
      <h1>Full Page Scroll<span># Section 2</span></h1>
      <div class="sitckman">
      <!-- <stick-man /> -->
      </div>
    </section>
    <section id="test">
      <h1>我平時都喜歡...</h1>
      <div class="sitckman">
      <stick-man />
      </div>
      <u class="changeCloud" @click="changeCloudview()">做什麼呢?</u>
      <div class="wordcloudPC">
      <pc-cloud v-if="!isMobile()" :key="componentKey" />
      <mobile-cloud v-else :key="componentKey" />
      </div>
    </section>
    <section>
      <h1>Full Page Scroll<span># Section 2</span></h1>
    </section>
    <section>
      <h1>Full Page Scroll<span># Section 3</span></h1>
      <p>{{curPage}}</p>
    </section>
    <section>
      <clock-component />
    </section>
  </div>
  <div class="pageselector">
    <div :key="page" v-for="page in (numOfPages+1)" class="pages">
      <div class="page" :class="this.curPage===page-1?'active':''" @click="jumpPage(page-1)"></div>
      <br>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import clockComponent from '../components/clock.vue'
import pcCloud from '../components/wordCloudPC.vue'
import mobileCloud from '../components/wordCloudMobile.vue'
import stickMan from '../components/stickman.vue'

export default{
  data(){
    return{
      numOfPages: "",
      curPage: 0,
      scrollLock: false,
      $body: "",
      $section: "",
      lastScrollTop: 0,
      yFrom: 0,
      yTo: 0,
      componentKey: 0
    }
  },
  components:{
    clockComponent,
    pcCloud,
    mobileCloud,
    stickMan
  },
  beforeCreate(){
    //根元件渲染body，添加變項
    document.body.className='about';
    document.documentElement.className='abouthtml';
  },
  methods:{
    jumpPage(page){
      this.curPage = page;
      this.scrollLock = true;
      (this.$body).stop().animate({
        scrollTop: (this.$section).eq(this.curPage).offset().top
      }, 1000, 'swing');
      this.scrollLock = false;
    },
    pagination() {
        this.scrollLock = true;
        const that = this;
        this.$body.stop().animate({
          scrollTop: this.$section.eq(this.curPage).offset().top
        }, 1000, 'swing', function(){
          that.scrollLock = false;
        });
    },
    resizeHandle() {
      //包括全屏版面跟文字雲處理
        this.$body.stop().animate({
          scrollTop: this.$section.eq(this.curPage).offset().top
        },0, 'linear');
        this.componentKey += 1,3000
    },
    navigateUp() {
        if (this.curPage === 0) return;
        this.curPage--;
        this.pagination();
      },
    navigateDown() {
        if (this.curPage === this.numOfPages) return;
        this.curPage++;
        this.pagination();
      },
    getStart(e){
      this.yFrom = e.touches[0].clientY
    },
    swipeAction(e){
      this.yTo = e.changedTouches[0].clientY
      let swipeDirection = this.yFrom - this.yTo
      if(swipeDirection > 30){
        this.navigateDown();
        }
      else if(swipeDirection < -30 ){
        this.navigateUp();
        }
    },
    wheelAction(e){
      if(this.scrollLock) return;
      e.deltaY >0?this.navigateDown():this.navigateUp();
    },
    isMobile(){
      //  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //   return true
      // } else {
      //   return false
      // }
      /*最後還是覺得用寬度咖欸賽*/
      if (window.innerWidth < 800){return true} else{return false}
    },
    changeCloudview(){
      this.componentKey += 1;
    }
  },
  mounted(){
    /*full page js*/
    this.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
    this.$section = $('section');
    this.numOfPages = (this.$section).length - 1; //取得section的數量
    // window.addEventListener('resize',()=>{
    //   var resizeEnd;
    //   if(resizeEnd) clearTimeout(resizeEnd)
    //   resizeEnd = setTimeout((this.$section).eq(this.curPage).offset().top,100)
    // })
    /*full page js*/
    
    /* word cloud resize event */
    // window.addEventListener('resize',()=>{
    //   var resizeEnd;
    //   clearTimeout(resizeEnd);
    //   resizeEnd = setTimeout(this.changeCloudview(),1000);
    //   })
    /* change cloud view while browser resized */

    window.addEventListener('resize',this.resizeHandle)


  }
}
</script>

<style scoped lang="less">
*, *:before, *::after {
  box-sizing: border-box;
}
section {
  height: 100vh;
  width: 100%;
  position: relative;
}
section:nth-of-type(1) {
  background: rgb(109, 106, 106);
}
section:nth-of-type(2) {
  // background-color: #6E85B2;
  background-color: rgb(0, 0, 0);
}
section:nth-of-type(3) {
  background-color: #3c91b6;
}
section:nth-of-type(4) {
  background-color: #6fc7bb;
}
section:nth-of-type(5) {
  background-color: #e59780;
}
section h1 {
  font-size: 3em;
  color: rgb(255, 255, 255);
  padding-top: 2vh;
  margin-top: 0;
  // opacity: 0.7;
}
section h1 span {
  font: italic 300 1rem/1.5 calibri;
  display: block;
  opacity: 0.5;
}
section p {
  color: #fff;
  font-size: 5rem;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* 右側選單列 */
.pageselector {
  position: fixed;
  right: 1%;
  top: 40%;
  color: antiquewhite;
  .page{
    border-radius: 50%;
    height: 10px;
    width: 10px;
    border: 1px white solid;
    cursor: pointer;
  }
  .active{
    background-color: rgb(255, 255, 255);
  } 
}
/*選選*/

/*文字雲*/
.changeCloud{
  color: rgb(226, 34, 28);
  cursor: pointer;
  font-size: 1em;
  font-family: 'sans-serif';
  &:hover{
    font-size: 1.1em;
  }
}
/*雲雲*/

/*火柴人*/
.sitckman{
  position: absolute;
  width: 30%;
  left: 5%;
  margin-bottom:20%;
}
/*人人 */
</style>
