<template>
  <nav class="header" role="navigation" aria-label="main navigation">
    <!-- Logo -->
    <router-link to="/" class="logo" aria-label="Go Home">
      <span class="js">JS</span>UtilityBelt
    </router-link>

    <!-- Util Belt Icon -->

    <IconBelt class="belt" />

    <!-- Submit -->
    <router-link to="/submit" class="submit">
      <Button
        v-show="$route.path !== '/submit'"
        class="btn btn-medium float-right"
      >
        Submit Resource
      </Button>
    </router-link>
  </nav>
</template>

<script>
import IconBelt from '@/components/icons/Belt'

export default {
  name: 'Header',

  components: {
    IconBelt
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 20px 10px;
  background: var(--bg);
  box-shadow: var(--nav-shadow);
  display: flex;
  justify-content: space-between;
}

.logo {
  position: relative;
  top: 9px;
  font-size: 22px;
  font-weight: 300;
  .js {
    font-weight: 900;
  }
}

.belt {
  pointer-events: none;
  user-select: none;
  height: 40px;
  width: 150px;
}

.logo-align {
  text-align: left;
}

.submit {
  @media (max-width: 500px) {
    display: none;
  }
}
</style>
