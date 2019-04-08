// .umirc.library.ts - 读取不了
// import { IBundleOptions } from 'umi-library/src/types'
// const options: any = {
//   entry: 'src/index.ts',
//   esm: 'rollup',
//   cjs: 'rollup',
//   doc: {
//     themeConfig: { mode: 'dark' },
//     typescript: true,
//   },
// }
// export default options


// js
export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    themeConfig: { mode: 'dark' },
    typescript: true,
  },
}
