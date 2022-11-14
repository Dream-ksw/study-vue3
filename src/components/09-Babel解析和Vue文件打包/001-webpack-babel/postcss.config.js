module.exports = {
  plugins: [
    // 除了使用autoprefixer插件也可以使用postcss-preset-env 可以将一些现代的css特性转成大多数浏览器认识的css  也会自动添加autoprofixer
    // postcss-preset-env
    // autoprofixer
    require('postcss-preset-env')
  ]
}