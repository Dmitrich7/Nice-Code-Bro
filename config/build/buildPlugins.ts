import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/types";

export function buildPlugins(options: IBuildOptions): Configuration['plugins']{
    const {paths,mode} = options
    const isDev = mode === "development";

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
    ]

    if(isDev){
        plugins.push(
            new webpack.ProgressPlugin()
        )
    }

    if(!isDev){
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        )
    }

    return plugins;
}
