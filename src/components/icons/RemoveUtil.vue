<template>
  <svg
    class="remove"
    viewBox="0 0 251 229"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Artboard" transform="translate(-145.000000, -201.000000)">
        <g id="Group-3" transform="translate(145.945946, 201.554054)">
          <g id="Group-2" transform="translate(-0.000000, -0.000000)">
            <g id="Group" transform="translate(0.000000, -0.000000)">
              <rect
                id="Rectangle-Copy-4"
                fill="var(--bg-invert)"
                x="0.0540540541"
                y="193.445946"
                width="250"
                height="35"
                rx="17.5"
              ></rect>
              <rect
                id="Rectangle-Copy-5"
                fill="var(--bg-invert)"
                x="0.0540540541"
                y="141.445946"
                width="250"
                height="35"
                rx="17.5"
              ></rect>
              <rect
                id="Rectangle-Copy-6"
                fill="var(--bg-invert)"
                x="0.0540540541"
                y="89.4459459"
                width="250"
                height="35"
                rx="17.5"
              ></rect>
              <rect
                id="Rectangle-Copy-8"
                fill="#FF0000"
                x="78.0540541"
                y="15.4459459"
                width="172"
                height="35"
                rx="17.5"
                class="inner"
              ></rect>
              <path
                id="Path"
                d="M59.5024876,59.5024876 C56.4662953,62.5386798 51.543655,62.5386798 48.5074627,59.5024876 L32.5,43.4950249 L32.5,43.4950249 L16.4925373,59.5024876 C13.456345,62.5386798 8.53370472,62.5386798 5.49751244,59.5024876 C2.46132016,56.4662953 2.46132016,51.543655 5.49751244,48.5074627 L21.5049751,32.5 L21.5049751,32.5 L5.49751244,16.4925373 C2.46132016,13.456345 2.46132016,8.53370472 5.49751244,5.49751244 C8.53370472,2.46132016 13.456345,2.46132016 16.4925373,5.49751244 L32.5,21.5049751 L32.5,21.5049751 L48.5074627,5.49751244 C51.543655,2.46132016 56.4662953,2.46132016 59.5024876,5.49751244 C62.5386798,8.53370472 62.5386798,13.456345 59.5024876,16.4925373 L43.4950249,32.5 L43.4950249,32.5 L59.5024876,48.5074627 C62.5386798,51.543655 62.5386798,56.4662953 59.5024876,59.5024876 Z"
                fill="#FF0000"
                class="inner"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ICONAddUtil'
}
</script>

<style lang="scss" scoped>
.remove {
  cursor: pointer !important;
  &:hover {
    .inner {
      fill: var(--danger);
    }

    &:active {
      .inner {
        fill: var(--danger);
      }
    }
  }

  .inner {
    fill: var(--danger-pre);
    transition: var(--ease);
  }
}
</style>
