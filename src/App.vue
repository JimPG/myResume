<template>
  <div id="resume" class="resume">
    <div class="header">
      <div class="top-row"></div>
    </div>
          <div class="formal">
      <div class="basicinformation">
        <left-component :person="person"/>
      </div>

      <div class="selfintro">
        <right-component :person="person"/>
      </div>
      </div>
      <div class="extra">
        <buttom-component />
      </div>
  </div>
</template>

<script>
import yaml from 'js-yaml';
import {
    MYDATA
} from './data/data.yml';
import leftComponent from './components/Leftcomponent.vue';
import rightComponent from './components/Rightcomponent.vue';
import buttomComponent from './components/Bottomcomponent.vue';
const person = yaml.load(MYDATA);

export default {
  data(){
    return{
      person
    }
  },
  components:{
    leftComponent,
    rightComponent,
    buttomComponent
  },
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap.css');

html{
    overflow-y: scroll;
}
body{
  background-color: #d6cfcf;
  width: 100vw;
  overflow: hidden;
  margin: 0;
}
:root {
  overflow-y: auto;
  overflow-x: hidden;
}
:root body {
  position: absolute;
}

 #resume {
  font-family: 'Noto Sans TC', sans-serif;
  padding-bottom:50px;
  text-align: center;
  display: inline-block;
  a, a:focus, a:hover, a:visited {
    text-decoration:none;
  }
  h3 {
    text-transform:uppercase;
    padding-top:0;
    margin-top:0;
    letter-spacing:5px;
    font-weight:400;
  }
}
  .header{
    width: 100%;
    height: 50px;
  }

  .top-row {
    height: 300px;
    background-image: url("https://cdn.pixabay.com/photo/2019/04/04/08/01/icon-4102192__340.png");
    background-color: rgb(184, 98, 98);
    background-size: contain;
    background-repeat: ;
    transform: rotate(-4deg);
    margin-top: -70px;
    position: absolute;
    top: 0;
    right: -20%;
    left: -20%;
    bottom: 0;
    border: 2px solid #131b20;
  }

@media(min-width: 992px){
.basicinformation {
    width:26%;
    left: 10%;
    margin-top: 100px;
    float: left;
    position: relative;
  }

.selfintro {
    width:60%;
    position: relative;
    float: right;
    margin-top: 250px;
}
.extra {
  width: 100%;
  float: right;
  margin-top: 50px;
  position: relative;
  }
}

@media(max-width: 992px) {
  .basicinformation{
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
  }
  .selfintro{
    margin: 0 auto;
    padding-top: 15px;
    position: relative;
    width: 100%;
  }
  .extra {
  width: 100%;
  position: relative;
  bottom: 0;
  }
}
</style>