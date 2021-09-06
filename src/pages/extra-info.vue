<template>
  <div class="person">
    <div class="head"></div>
    <div ref="upperbody" class="upperBody"></div>
    <div class="lowerBody"></div>
  </div>
</template>

<script>
export default{
  methods:{
  },
  mounted(){ 
  }
}

</script>

<style lang="less" scoped>
  .person{
    text-align: center;
  }
  .head{
    position: relative;
    margin: 0 auto;
    width: 8vw;
    height: calc(100vw * 0.08);
    border-radius: 50%;
    border: 3px black solid;
    &:after{
      content: "";
      position: absolute;
      border: 2px solid;
      top:45%;
      right:15%;
    }
    &:before{
      content: "";
      width: 2vw;
      position: absolute;
      border: 2px solid;
      top:30%;
      right:5%;
      transform: rotate(15deg);
      transform-origin: bottom right;
    }
  }
  .upperBody{
    position: relative;
    margin: 0 auto;
    width: 0;
    border-left: 2px solid;
    border-right: 2px solid;
    height: 15vw;
    &:after{
      content: "";
      position: absolute;
      border: 2px solid;
      top: 10%;
      width: 6vw;
      // height:15vh;
      left: 0;
      transform: rotate(65deg);
      transform-origin: bottom left;
    }
     &:before{
      content: "";
      position: absolute;
      border: 2px solid;
      top: 10%;
      width: 6vw;
      // height: 15vh;
      right: 0;
      transform: rotate(-65deg);
      transform-origin: bottom right;
    }
  }

  .lowerBody{
    position: relative;
    margin: 0 auto;
    width: 0;
    border-left: 2px solid;
    border-right: 2px solid;
    height: 5vw;
    &:after{
      content: "";
      position: absolute;
      border: 2px solid;
      top: 97%;
      width: 6vw;
      // height:15vh;
      left: 0;
      transform: rotate(0deg);
      transform-origin: top left;
    }
     &:before{
      content: "";
      position: absolute;
      border: 2px solid;
      top: 97%;
      width: 6vw;
      // height: 15vh;
      right: 0;
      transform: rotate(-40deg);
      transform-origin: top right;
    }
  }
</style>