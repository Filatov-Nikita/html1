const { defineConfig } = require('@vue/cli-service');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');

module.exports = defineConfig({
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Базовый курс по html и css верстке';
        return args;
      });
  },
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                'imagemin-pngquant',
                ['svgo', {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                          cleanupIDs: {
                            prefix: {
                              toString() {
                                this.counter = this.counter || 0;
                                return `id-${this.counter++}`;
                              }
                            }
                          }
                        }
                      }
                    },
                  ],
                }]
              ]
            }
          },
          generator: [
            {
              preset: "webp",
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: ['imagemin-webp'],
              },
            },
          ],
        })
      ]
    }
  }
})
