<template>
  <div class="supplement">
    <div class="leftpic">
      <div class="pic-modify">
        <img src="@/assets/598sample.png" @click="showMultiple(0)" alt="598搬家網"/>
        <div class="picture_name">&uarr;598搬家網開發畫面</div>
        <br>
        <img src="@/assets/toeic.jpg" @click="showMultiple(1)" alt="toeic" />
        <div class="picture_name">&uarr;多益成績單, 750分</div>
      </div>
    </div>
    <div class="paper">
      <div class="paper-district">
        <img src="@/assets/paper.jpg" alt="論文網址" @click="alert_newtab" />
        <div class="picture_name">碩士論文</div>
      </div>
    </div>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: [require("@/assets/598sample.png"), require("@/assets/toeic.jpg")],
      visible: false,
    };
  },
  methods: {
    showMultiple(index) {
      this.index = index;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    alert_newtab() {
      var newtab = confirm("是否開啟新分頁瀏覽pdf檔?");
      if (newtab) {
        window.open(
          "https://drive.google.com/file/d/1Vc0vxYSMgxbv8sa13fJngnNhoqDgJEgS/view"
        );
        window.opener = null;
      }
    },
  },
};
</script>


<style scoped lang="less">
@media (min-width: 992px) {
  .supplement {
    display: inline-block;
    .leftpic {
      width: 50%;
      text-align: center;
      float: left;
      .pic-modify {
        max-width: 80%;
        float: right;
      }
      img {
        width: 100%;
      }
    }
    .paper {
      float: right;
      width: 50%;
      text-align: center;
      img {
        max-width: 56%;
        cursor: pointer;
      }
    }
    .picture_name {
      text-align: center;
    }
  }
}
@media (max-width: 992px) {
  .supplement {
    display: inline-block;
    .leftpic {
      width: 100%;
      text-align: center;
      img {
        width: 80%;
      }
    }

    .paper {
      width: 70%;
      margin: 0 auto;
      padding-top: 30px;
      text-align: center;
      img {
        width: 80%;
        cursor: pointer;
      }
    }
  }
}
</style>
