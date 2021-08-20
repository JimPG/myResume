<template>
<div id="right-component">
    <div class="experience">
      <h3>專案經歷</h3>
      <div class="experience-block" :key="experience" v-for="experience in person.experience">
        <div class="container">
          <div class="row">
            <span class="experience-name"> {{ experience.name }} </span>
          </div>
          <div class="row">
            <span class="time-period"> {{ experience.timeperiod }}</span>
          </div>
          <div class="row">
            <span class="job-description"> ˙ {{ experience.description1 }} </span>
          </div>
          <div class="row">
            <span class="job-description"> ˙ {{ experience.description2 }} </span>
          </div>
          <div class="row">
            <span class="job-description"> ˙ {{ experience.description3 }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <h3>個人簡介</h3>
      <div
        class="detail-block"
        :key="project"
        v-for="project in person.projects"
      >
        <div class="row">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="description"> {{ project.description }} </span>
        </div>
        <br>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ["person"],
};
</script>

<style scoped lang="less">
h3 {
    font-weight: bold;
    font-size: 2em;
  }

@media (min-width: 992px) {
    .detail{
        width: 80%;
        padding-top: 50px;
        margin: 0 auto;
        .detail-block{
            text-align: justify;
            line-height: 30px;
        }
    }
    .experience-block{
    display: inline-block;
    width: 370px;
    height: 130px;
    margin: 10px;
    border: 1px black solid;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
    .container{
        display: inline-block;
        .experience-name{
            font-weight: bold;
        }
        .time-period{
            font-weight: lighter;
            color: #504b4b;
        }
        .job-description{
            display: block;
            text-align: left;
        }
    }
}
}
@media (max-width: 992px){
    .detail{
        width:80%;
        padding-top: 35px;
        margin: 0 auto;
        .detail-block{
            text-align: justify;
            line-height: 30px;
        }
    }
    .experience-block{
    display: inline-block;
    width: 90%;
    height: 130px;
    margin-top: 10px;
    border: 1px black solid;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
    .container{
        display: inline-block;
        .experience-name{
            font-weight: bold;
        }
        .time-period{
            font-weight: lighter;
            color: #504b4b;
        }
        .job-description{
            display: block;
            text-align: left;
        }
    }
}
}
</style>