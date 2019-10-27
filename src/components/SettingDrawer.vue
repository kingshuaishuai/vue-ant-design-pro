<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300"
    >
      <template v-slot:handle>
        <div class="drawer-setting" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div class="style-setting">
        <h2>整体风格设置</h2>
        <a-radio-group
          @change="e => handleChangeSetting('navTheme', e.target.value)"
          :value="$route.query.navTheme || 'dark'"
        >
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
      </div>
      <div class="layout-setting">
        <h2>导航模式</h2>
        <a-radio-group
          @change="e => handleChangeSetting('navLayout', e.target.value)"
          :value="$route.query.navLayout || 'left'"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleChangeSetting(type, value) {
      this.$router.push({
        query: { ...this.$route.query, [type]: value }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.drawer-setting {
  position: absolute;
  left: -48px;
  top: 240px;
  width: 48px;
  height: 48px;
  border-radius: 4px 0 0 4px;
  background-color: #1890ff;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
}
</style>
