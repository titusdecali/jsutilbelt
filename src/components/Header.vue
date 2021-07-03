<template>
  <nav class="header" role="navigation" aria-label="main navigation">
    <div class="logo-align">
      <router-link to="/" class="float-left" aria-label="Go Home">
        <img src="" alt="JS Util Generator logo" />
      </router-link>
      <router-link to="/submit">
        <Button
          v-show="$route.path !== '/submit'"
          class="submit btn btn-medium float-right"
        >
          Submit Resource
        </Button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 20px 10px;
  background: var(--bg);
  box-shadow: var(--nav-shadow);
}

.logo-align {
  text-align: left;
}
</style>
