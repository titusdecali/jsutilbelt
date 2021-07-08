<template>
  <div>
    <div class="submit-card p-1">
      <a href="/">
        <button class="text-center mw-800 my-2 btn btn-medium">
          Back to resources
        </button>
      </a>

      <form action="https://formspree.io/f/xoqylogr" method="POST">
        <label>
          Utility Title
          <input
            class="mb-1"
            type="text"
            name="util_title"
            required
            placeholder="Recursive rocket launcher"
          />
        </label>
        <label>
          Utility Description
          <input
            class="mb-1"
            type="text"
            name="util_description"
            required
            placeholder="Fires rockets, recursively"
          />
        </label>

        <!-- CODE -->
        <label> Utility Function Code </label>
        <prism-editor
          v-model="code"
          class="my-editor"
          :highlight="highlighter"
          line-numbers
        />

        <!-- Binds in code for form submission -->
        <input type="text" name="code" :value="code" class="hide" />

        <label>
          Submitter Name
          <input
            class="mb-1"
            type="text"
            name="name"
            required
            placeholder="Evan You"
          />
        </label>
        <label>
          Submitter Email
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
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-solarizedlight.css'

export default {
  name: 'Submit',

  components: {
    PrismEditor
  },

  data: () => ({
    code: 'console.log("Hello World")',
    lineNumbers: true
  }),

  methods: {
    highlighter(code) {
      return highlight(code, languages.js) // languages.<insert language> to return html with markup
    }
  }
}
</script>

<style>
textarea {
  padding-top: 20px !important;
  padding-left: 10px !important;
}
</style>

<style lang="scss" scoped>
@media (max-width: 601px) {
  #cta44181 {
    display: none !important;
  }
}

.hide {
  position: absolute;
  right: 3000px;
  width: 300px;
}

.mw-800 {
  max-width: 800px;
}

.submit-card {
  position: relative;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
  input {
    padding: 8px;
  }
}

/* required class */
.my-editor {
  margin-top: 10px;
  border-radius: 8px;
  background: #ffffff;
  color: rgb(18, 15, 77);
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  height: fit-content;
  min-height: 300px;
  margin-bottom: 30px;
  border: 2px solid var(--grey);
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
