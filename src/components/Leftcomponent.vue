<template>
  <div id="centerpixel">
    <div id="Portfolio">
      <div class="person-image">
        <!-- <img
          class="round-image"
          :src="require(`@/assets/${person.headshot}`)"
        /> -->
        <div class="round-image"></div>
      </div>
      <div class="Portfolio_title">
        {{ person.name }} <br />
        <p>{{ person.position }}</p>
      </div>
      <div class="Portfolio_content">
        <table class="Portfolio-table">
          <tr>
            <td class="title">生日</td>
            <td class="one">:</td>
            <td class="detail">{{ person.birth }} ({{ person.age }})</td>
          </tr>
          <tr>
            <td class="title">信箱</td>
            <td class="one">:</td>
            <td class="detail" :href="'mailto:' + person.contact.email">
              {{ person.contact.email }}
            </td>
          </tr>
          <tr>
            <td class="title">手機</td>
            <td class="one">:</td>
            <td class="detail" :href="'tel:' + person.contact.phone">
              {{ person.contact.phone }}
            </td>
          </tr>
          <tr>
            <td class="title">地址</td>
            <td class="one">:</td>
            <td class="detail">
              {{ person.location }}
            </td>
          </tr>
        </table>
      </div>
      <div class="education">
        
        <h3>
          <img class="icon animate__animated animate__delay-1s animate__rubberBand" src="https://image.flaticon.com/icons/png/512/999/999735.png" alt="">
          學歷</h3>
        <div
          class="education-block"
          :key="education"
          v-for="education in person.education"
        >
          <div class="row">
            <span class="degree">{{ education.degree }}</span>
          </div>
          <div class="row">
            <span class="degree-description">
              {{ education.description }}
            </span>
          </div>
          <div class="row">
            <span class="period">{{ "(" + education.timeperiod + ")" }}</span>
          </div>
        </div>
      </div>
       <div class="skills">
        <h3>
          <img class="icon animate__animated animate__delay-1s animate__rubberBand" src="https://image.flaticon.com/icons/png/512/2640/2640125.png" alt="">
          技能</h3>
        <div class="skill-block" :key="skill" v-for="skill in person.skills">
          <div class="skill">
              <div class="skill-title">
                {{ skill.name }}
              </div>
              <div class="skill-bar" :data-bar="skill.score"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: ["person"],
  mounted() {
    $(window).on('scroll',function(){
       var skillviewed = $(window).scrollTop();
          if (skillviewed >= 300){
            $(".skills").addClass("active")
            $(".skills .skill .skill-bar span").each(function() {
            $(this).animate({
              "width": $(this).parent().attr("data-bar") + "%"
            }, 0)})
            $(window).off('scroll')
            }
    })
  },
}

</script>

<style scoped lang="less">
h3 {
  font-weight: bold;
  font-size: 2em;
}
.icon{
    width: 35px;
  }
.Portfolio_title {
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 15px;
  width: 80%;
}
.Portfolio_title > p {
  font-weight: lighter;
  font-size: 20px;
  color: #6e6e6e;
}
/*Skill */
.skill-block{
  width: 85%;
  margin: 0 auto;
}

.skills .skill {
   margin-bottom: 20px;
}

.skills .skill .skill-title {
  text-align: left;
   color: #858282;
   margin-bottom: 10px;
   font-weight: 400;
   font-size: 14px;
   padding-right: 50px;
}

.skills .skill .skill-bar {
  border: 1px hsl(240,70%,30%) solid;
  border-radius: 20px;
  width: 0;
  height: 6px;
  background: #f0f0f0;
  transition: 1s cubic-bezier(1, 0, .5, 1);
  -webkit-transition: 1s cubic-bezier(1, 0, .5, 1);
  -ms-transition: 1s cubic-bezier(1, 0, .5, 1);
}

.skills.active .skill .skill-bar {
  width: 100%;
  border-radius: 20px;
}

.skills .skill .skill-bar span {
   float: left;
   width: 0%;
   border-radius: 20px;
   background: #2d8edd;
   height: 6px;
   position: relative;
   transition: 1s cubic-bezier(1, 0, .5, 1);
   -webkit-transition: 1s cubic-bezier(1, 0, .5, 1);
   -ms-transition: 1s cubic-bezier(1, 0, .5, 1);
}
/* end of skills */

/* animate.css */

/* end of animate*/
@media (min-width: 996px) {
  .round-image {
  border-radius: 100%;
  background-color: white;
  background-image: url('../assets/M074020042.jpg');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border: 2px solid #ccd5db;
  z-index: 1;
}
   .Portfolio-table {
      margin: 0 auto;
      width: 80%;
    td {
      height: 40px;
    }
    td.one {
      text-align: center;
      width: 15%
    }
    td.title {
      text-align: center;
      width: 10%;
      white-space: nowrap;
    }
    td.detail {
      text-align: left;
      width: 220px;
    }
  }
  .education {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    .education-block {
      margin-bottom: 20px;
      border: 1px black solid;
      .period {
        font-size: 12px;
      }
      .degree {
        font-size: 18px;
        text-transform: uppercase;
        margin-bottom: 3px;
      }
    }
  }
}

@media (max-width: 995px) {
  .round-image {
  background-color: white;
  background-image: url('../assets/M074020042.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  border: 2px solid #ccd5db;
  z-index: 1;
  object-fit: cover;
  object-position: 100% 25%;
}
  .Portfolio-table {
    text-align: center;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    td {
      height: 30px;
    }
    td.one {
      text-align: center;
      padding: 0px 10px;
    }
    td.title {
      width: 30px;
      white-space: nowrap;
    }
    td.detail {
      text-align: left;
    }
  }
  .education {
    margin-top: 25px;
    .education-block {    
      width: 60%;
      border: 1px black solid;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      .period {
        font-size: 12px;
      }
      .degree {
        font-size: 18px;
        text-transform: uppercase;
        margin-bottom: 3px;
      }
    }
  }

  .skill-block{
    width: 70%;
    max-width: 450px;
  }
}

</style>
