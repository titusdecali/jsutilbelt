<template>
  <div>
    <div class="submit-card p-1">
      <a href="/">
        <button class="text-center mw-800 my-2 btn btn-medium">
          Back to resources
        </button>
      </a>

      <form action="https://formspree.io/mnqdrnkb" method="POST">
        <label>
          Link to resource page
          <input
            class="mb-1"
            type="url"
            name="url"
            required
            placeholder="https://"
          />
        </label>
        <label>
          Link to preview (demo)
          <input
            class="mb-1"
            type="url"
            name="url"
            required
            placeholder="https://"
          />
        </label>
        <label>
          Link to download
          <input
            class="mb-1"
            type="url"
            name="url"
            required
            placeholder="https://"
          />
        </label>
        <label>
          Your email:
          <input
            required
            class="mb-1"
            type="email"
            name="_replyto"
            placeholder="evanyou@vuejs.org"
          />
        </label>

        <input class="btn btn-medium my-1" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submit'
}
</script>

<style lang="scss" scoped>
@media (max-width: 601px) {
  #cta44181 {
    display: none !important;
  }
}

.mw-800 {
  max-width: 800px;
}

.submit-card {
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  input {
    padding: 8px;
  }
}
</style>
