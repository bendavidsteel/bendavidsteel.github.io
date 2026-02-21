module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.md$/,
                    type: 'asset/source'
                }
            ]
        }
    }
}