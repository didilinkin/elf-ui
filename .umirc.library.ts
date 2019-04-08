// 类型读取不了
export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    htmlContext: {
      head: {
        links: [
          {
            rel: 'stylesheet',
            href: 'https://codemirror.net/theme/dracula.css',
          },
        ],
      },
    },
    themeConfig: {
      mode: 'dark',
      codemirrorTheme: 'dracula',
    },
    typescript: true,
    base: '/elf-ui',
  },
}
