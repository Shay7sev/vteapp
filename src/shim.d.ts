/* eslint-disable */

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default Component
}