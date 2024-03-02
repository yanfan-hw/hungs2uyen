const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\main\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
})
