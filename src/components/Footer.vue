<template>
  <footer>
    <div class="footer-bottom">
      <div class="bottom-left">
        Crafted by
        <a href="https://titusdecali.com" target="_blank">Titus Decali</a>
      </div>
      <DarkSwitch class="dark-switch" />
    </div>
  </footer>
</template>

<script>
import DarkSwitch from '@/components/DarkSwitch'

export default {
  name: 'FOOTER',

  components: {
    DarkSwitch
  },
  data() {
    return { showCookieBar: true }
  },
  methods: {
    acceptCookies() {
      this.showCookieBar = false
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .footer-left {
    display: none;
  }
}

a {
  font-weight: 500;
  transition: var(--ease);
  &:hover {
    color: var(--link-hover);
  }
}

footer {
  padding: 0 20px;
}

.grid {
  box-shadow: var(--footer-shadow);
  border-top: 1px solid var(--spacer-color);
  user-select: none;
  padding-top: 60px;
  padding-bottom: 40px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .footer-left {
    grid-template-columns: 1fr;
  }
  .slogan {
    margin-top: 12px;
    font-weight: 200;
    font-size: var(--footer-slogan);
  }

  .footer-right {
    margin-left: auto;
    margin-right: 20px;
    max-width: 500px;
    width: 100%;
    grid-gap: 20px;
    display: flex;
    justify-content: space-between;

    .column-title {
      color: var(--text-title);
      font-size: var(--sm);
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
  .column-links {
    a {
      line-height: 2.5;
      color: var(--grey);
      display: grid;
      grid-template-columns: 1fr;
      &:hover {
        color: var(--link-hover) !important;
      }
    }
  }
}

.footer-bottom {
  font-weight: 300;
  display: grid;
  height: 50px;
  position: relative;
  user-select: none;
  margin: 0 auto;
  line-height: 40px;
  border-top: 1px solid var(--spacer-color);
  grid-template-columns: 1fr 40px 1fr;

  .dark-switch {
    z-index: 999;
    text-align: center;
    position: relative;
    top: 24px;
  }

  .bottom-left {
    line-height: 80px;
    height: 40px;
  }

  .bottom-right {
    text-align: right;
  }
  .accept-btn {
    margin-left: 4px;
    max-width: 60px;
    display: inline-block;
    position: relative;
    top: -2px;
  }
}
</style>
