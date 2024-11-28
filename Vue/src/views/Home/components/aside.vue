<template>
  <div class="aside">
    <div class="aside-logo">
      <i class="iconfont icon-circulation"></i>
      <span title="Multi Person Online Editor"> Multi Person Online Editor </span>
    </div>
    <div class="aside-search">
      <el-input placeholder="search" v-model="searchKeyWord" clearable>
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
    </div>

    <div
      class="aside-icon"
      @click="menuClick('pages')"
      :class="{ active: activeMenu === 'pages' }"  
    >
      <!-- 点击时class为"aside-icon active"未点击时为"aside-icon"如果active就变色 -->
      <i class="iconfont icon-shouye-zhihui"></i>
      <span> Home </span>
    </div>


    <div
      class="aside-icon"
      @click="menuClick('share')"
      :class="{ active: activeMenu === 'share' }"
    >
      <i class="iconfont icon-shujugongxiang"></i>
      <span> Share with me </span>
    </div>


    <div class="aside-bottom" @click="router.push('/recycle')">
      <i class="iconfont icon-huishouzhan"></i>
      <span> bin </span>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, watch } from "vue";
import router from "@/router";
import { Search } from "@element-plus/icons-vue";
import { User } from "@element-plus/icons-vue";
import store from "../../../store";

const searchKeyWord = ref("");
/**
 * /home/pages: 首页
 * /home/news: 最近
 * /home/share: 共享
 */

watch(searchKeyWord, (val) => store.commit("setSearchKeyWord", val));   //在组件中调用Vuex的mutations来改变state的值

let { activeMenu } = defineProps({
  activeMenu: {
    type: String,
    default: "pages",
  },
});  // 父组件向子组件传递数据

const menuClick = (path) => router.push(`/home/${path}`);
</script>

<style lang="less" scoped>
.aside {
  position: relative;
  background-color: #fafbfc;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  & > div {
    // margin: 5px 0;
    padding: 0 20px;
    cursor: pointer;
  }
  i {
    margin-right: 10px;
    font-weight: 700;
  }

  &-logo {
    display: flex;
    align-items: center;
    i {
      font-weight: 900;
      color: var(--main-color);
      margin-right: 10px;
      font-size: 24px;
    }
    span {
      font-weight: 700;
    }
  }

  &-icon {
    margin: 5px 0;
    padding: 20px !important;
    &:hover {
      background-color: #ccc;
    }
  }

  &-search {
    margin: 20px 0;
  }

  &-bottom {
    width: calc(100% - 20px);
    padding-top: 20px !important;
    border-top: solid #ccc 1px;
    position: absolute;
    left: 10px;
    bottom: 20px;
    background-color: #FAFBFC;
    i {
      margin-right: 10px;
    }
  }
}

.active {
  background-color: #ccc;
}
</style>
