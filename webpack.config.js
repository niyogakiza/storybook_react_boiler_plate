module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ]
    }
};
