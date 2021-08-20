<template>
  <div id="centerpixel">
    <div id="Portfolio">
      <div class="person-image">
        <img
          class="round-image"
          :src="require(`@/assets/${person.headshot}`)"
          alt="圖片顯示錯誤"
        />
        <!-- <img
              class="round-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22c22e57910025.59e8689468e11.jpg"
              alt="圖片顯示錯誤"
            /> -->
      </div>
      <div class="Portfolio_title">
        {{ person.name.first + person.name.last }} <br />
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
              <!-- {{ person.contact.city + person.contact.street }} -->
              {{ person.location }}
            </td>
          </tr>
        </table>
      </div>
      <div class="education">
        <h3>學歷</h3>
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
        <h3>技能</h3>
        <ul :key="skill" v-for="skill in person.skills">
          <li>{{ skill.name }}
            <div class="skill-bar">
              <div :style="'width: ' + skill.level + '%'" class="level"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  font-weight: bold;
  font-size: 2em;
}
.Portfolio_title {
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 15px;
  width: 300px;
}
.Portfolio_title > p {
  font-weight: lighter;
  font-size: 20px;
  color: #6e6e6e;
}

@media (min-width: 992px) {
  .round-image {
  border-radius: 100%;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border: 2px solid #ccd5db;
  z-index: 1;
  object-fit: cover;
  object-position: 100% 25%;
}
   .Portfolio-table {
      margin: 0 auto;
    td {
      height: 40px;
    }
    td.one {
      text-align: center;
      padding: 0px 20px;
    }
    td.title {
      text-align: left;
      width: 40px;
      white-space: nowrap;
    }
    td.detail {
      text-align: left;
      width: 220px;
    }
  }
  .education {
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
  .skills {
    text-align: center;
    padding-top: 20px;
    li {
      text-align: left;
      list-style: none;
      margin-left: -15%;
      display: inline;
    }
    .skill-bar {
      float: right;
      background: #e0e0e0;
      overflow: hidden;
      height: 8px;
      border-radius: 3px;
      margin-top: 6.5px;
      position: relative;
      width: 70%;
      margin-right: 35px;
      .level {
        background: #757575;
        height: 100%;
      }
    }
  }
}

@media (max-width: 992px) {
    .round-image {
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
    padding-left: 65px;
    td {
      height: 30px;
    }
    td.one {
      text-align: center;
      padding: 0px 10px;
    }
    td.title {
      text-align: left;
      width: 40px;
      white-space: nowrap;
    }
    td.detail {
      text-align: left;
      width: 220px;
    }
  }
  .skills {
    text-align: center;
    margin-top: 25px;
    li {
      text-align: left;
      list-style: none;
    }
    .skill-bar {
      float: right;
      background: #e0e0e0;
      overflow: hidden;
      height: 8px;
      border-radius: 3px;
      margin-top: 6.5px;
      position: relative;
      width: 70%;
      margin-right: 12%; 
      .level {
        background: #757575;
        height: 100%;
      }
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
}
</style>
