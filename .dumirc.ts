import { defineConfig } from 'dumi';

export default defineConfig({
  logo: false,
  resolve: {
    docDirs: ['./website'],
  },
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  // mfsu: false,
  themeConfig: {
    name: '@fai-hd',
    nav: [
      {
        title: '指南',
        link: '/getting-started',
      },
      {
        title: '配置',
        link: '/config',
      },
      // {
      //   title: 'GitHub',
      //   link: 'https://github.com/13168335674/fai-hd-website',
      // },
    ],
  },
  base: '/fai-hd-website/',
  publicPath: '/fai-hd-website/',
  outputPath: './fai-hd-website',
});
