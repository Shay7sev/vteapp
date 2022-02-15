/* eslint-disable */
// import type { DefineComponent } from 'vue'

// declare module '*.vue' {
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default Component
}