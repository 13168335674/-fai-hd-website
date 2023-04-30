import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@fai-hd',
  resolve: {
    docDirs: ['./website'],
  },
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  // mfsu: false,
  themeConfig: {
    nav: [
      {
        title: '快速上手',
        link: '/getting-started',
      },
      {
        title: '配置',
        link: '/config',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/13168335674/fai-hd-website',
      },
    ],
  },
  base: '/fai-hd-website/',
  publicPath: '/fai-hd-website/',
  outputPath: './dist-website',
});
