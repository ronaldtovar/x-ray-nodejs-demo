const path = require("path");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/lambdas/index.ts",
    //devtool: "source-map", //generate source maps?
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    output: {
        libraryTarget: "commonjs",
        path: path.join(__dirname, "build"),
        filename: "handler.js"
    },
    target: "node",
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ZipPlugin({
            filename: require("./package").name + ".zip"
        })
    ],
    optimization: {
        minimize: false,
    }
};

