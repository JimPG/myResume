<template>
<div id="outerspace">
  <div id="resume" class="resume animate__animated animate__zoomIn ">
    <div class="header">
      <div class="top-row"></div>
    </div>
      <div class="basicinformation">
        <left-component :person="person"/>
      </div>
      <div class="selfintro">
        <right-component :person="person"/>
      </div>
      <div class="extra">
        <buttom-component />
      </div>
  </div>
</div>
<!-- <div style="background:black; height:200px;  position: relative; padding-bottom:80%" >
  <header-component></header-component>
</div> -->
</template>

<script>
import yaml from 'js-yaml';
import {
    MYDATA
} from '../data/data.yml';
import leftComponent from '../components/Leftcomponent.vue';
import rightComponent from '../components/Rightcomponent.vue';
import buttomComponent from '../components/Bottomcomponent.vue';

const person = yaml.load(MYDATA);
export default {
  data(){
    return{
      person,
    }
  },
  beforeCreate(){
    document.body.className='home';
    document.documentElement.className='homehtml';
  },
  components:{
    leftComponent,
    rightComponent,
    buttomComponent,
  },
}
</script>

<style scoped lang="less">
// html{
//     overflow-y: scroll;
//     height: 100%;
// }
// body{
//   margin: 0;
// }
:root {
  overflow-y: auto;
  overflow-x: hidden;
}
:root body {
  position: absolute;
}
#outerspace{
  background: radial-gradient(#628b2d, #2f378a);
  display: flex;
  justify-content:center;
}
 #resume {
  width: 80%;
  margin-top: 9%;
  margin-bottom: 9%;
  background-color: rgb(255, 255, 255);
  padding-bottom:50px;
  text-align: center;
  display: inline-block;
  border: 1px black solid;
  a, a:focus, a:hover, a:visited {
    text-decoration:none;
  }
  h3 {
    text-transform:uppercase;
    padding-top:0;
    margin-top:0;
    letter-spacing:5px;
    font-weight:400;
    margin-bottom: 15px;
  }
}
  .header{
    width: 100%;
    height: 50px;
  }
  /*animated.css*/
#resume .animate__animated{
  --animate-duration: 1s;
}
  /*end of animated.css */
@media(min-width: 996px){
.basicinformation {
    width:26%;
    left: 10%;
    margin-top: 70px;
    float: left;
    position: relative;
  }
.selfintro {
    width:60%;
    position: relative;
    float: right;
    margin-top: 70px;
}
.extra {
  width: 100%;
  float: right;
  margin-top: 40px;
  position: relative;
  }
}
@media(max-width: 995px) {
  .basicinformation{
    width: 100%;
    margin: 0 auto;
    margin-top: 12%;
    position: relative;
  }
  .selfintro{
    margin: 0 auto;
    padding-top: 15px;
    position: relative;
    width: 100%;
    // background-color: salmon;
  }
  .extra {
  width: 100%;
  bottom: 0;
  }
}
@media only screen and(max-width: 600px){
  #resume {
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
}  
}
/* test area*/
/* end */
</style>