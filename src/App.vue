<template>
  <div id="app">
    <div id="nav">
      <div>
        <a-button>button</a-button>
      </div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
