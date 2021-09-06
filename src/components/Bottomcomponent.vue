<template>
  <div class="supplement">
    <div class="leftpic">
      <div class="pic-modify">
        <div class="imgarea">
        <img src="@/assets/598sample1.jpg" @click="showMultiple(0)" alt="598搬家網"/>
        </div>
        <div class="picture_name">&uarr;598搬家網開發畫面</div>
        <br>
        <div class="imgarea">
        <img src="@/assets/toeic.jpg" @click="showMultiple(2)" alt="toeic" />
        </div>
        <div class="picture_name">&uarr;多益成績單, 750分</div>
      </div>
    </div>
    <div class="paper">
      <div class="paper-district">
        <div class="imgarea1">
          <img src="@/assets/paper.jpg" @click="alert_newtab" alt="paper">
        </div>
        <div class="picture_name">碩士論文</div>
      </div>
    </div>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
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
      imgs: [require("@/assets/598sample1.jpg"),require("@/assets/598sample2.jpg"), require("@/assets/toeic.jpg")],
      visible: false,
      index: 0
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
.imgarea{
  overflow: hidden;
}

@media (min-width: 996px) {
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
        cursor: pointer;
      }
      img:hover{
        transform: scale(1.06);
      }
    }
      .imgarea:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
      }
    .paper {
      float: right;
      width: 50%;
      text-align: center;
      img {
        max-width: 56%;
        cursor: pointer;
        border: 1px #DDDDDD solid;
      }
      img:hover{
        transform: scale(1.02);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
      }
    }
    .picture_name {
      text-align: center;
    }
  }
}
@media (max-width: 995px) {
  .supplement {
    display: inline-block;
    .leftpic {
      width: 100%;
      text-align: center;
      img {
        width: 80%;
        cursor: pointer;
      }
      img:hover{
        transform: scale(1.05);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
      }
    }

    .paper {
      width: 70%;
      margin: 0 auto;
      padding-top: 30px;
      text-align: center;
      height: ;
      img {
        width: 80%;
        cursor: pointer;
        border: 1px #DDDDDD solid;
      }
      img:hover{
        transform: scale(1.02);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
      }
    }
  }
}
</style>
