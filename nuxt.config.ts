// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  /**
   * 源文件
   */
  srcDir: 'src',

  /**
   * 模块
   */
  modules: ['@nuxtjs/tailwindcss'],

  /**
   * 配置
   */
  runtimeConfig: {
    public: {
      appName: 'LostElk',
    },
    private: {
      rootUser: 'root',
      rootPassword: '258369',
    },
  },

  /**
   * 开发服务器配置
   */
  devServer: {
    port: 3099,
  },

  compatibilityDate: '2025-03-31',
});