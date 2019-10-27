<template>
  <a-layout class="basic-layout" style="min-height: 100vh">
    <a-layout-sider
      v-if="navLayout === 'left'"
      :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]"
      :theme="navTheme"
      width="256"
      collapsible
      v-model="collapsed"
      :trigger="null"
    >
      <div class="logo">Antd</div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        class="basic-layout-header"
        style="background: #fff; padding: 0"
      >
        <div class="sider-menu-trigger" @click="collapsed = !collapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </div>
        <Header class="basic-header-content" />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
    <SettingDrawer />
  </a-layout>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiderMenu from "../components/SiderMenu";
import SettingDrawer from "@/components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: true
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>

<style lang="less" scoped>
.basic-layout {
  .logo {
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
  .nav-theme-dark {
    color: #fff;
    .logo {
      background-color: #002140;
    }
  }
  .basic-layout-header {
    overflow: hidden;
    .sider-menu-trigger {
      display: inline-block;
      height: 64px;
      width: 68px;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
      transition-duration: 0.3s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.025);
      }
    }
    .basic-header-content {
      float: right;
    }
  }
}
</style>
