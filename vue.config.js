module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // data: `@import "~@/assets/style/variable.scss";`
                prependData: `@import '@/assets/style/variable.scss';`
            }
        }
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
      
    },
  lintOnSave: false
}
