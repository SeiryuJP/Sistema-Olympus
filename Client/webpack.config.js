const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const filesHTML = [
    {
        filename: 'index.html',
        chunks: ['index']
    },
    {
        filename: './html/pruebas.html',
        chunks: ['pruebas']
    },
    {
        filename: './html/pruebaeleccion.html',
        chunks: ['pruebasEleccion']
    },
    {
        filename: './html/pruebavaloracion.html',
        chunks: ['pruebasValoracion']
    },
    {
        filename: './html/pruebapuntual.html',
        chunks: ['pruebasPuntual']
    },
    {
        filename: './html/pruebaresplibre.html',
        chunks: ['pruebasRespLibre']
    },
    {
        filename: './html/historialpruebas.html',
        chunks: ['listadoPruebas']
    },
    {
        filename: './html/registro.html',
        chunks: ['registro']
    },
    {
        filename: './html/listadoUsuarios.html',
        chunks: ['listadoUsuarios']
    }
]

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, '/')
        },
        hot: true,
        open:true
    },
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },       
            {
                test: /\.(c|sc|sa)ss$/,
                use: [ MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => {
                                    require('autoprefixer')
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    entry: {
        index: './src/index.js',
        pruebas: './src/index.js',
        pruebasValoracion: './src/js/indexValidacion.js',
        pruebasEleccion: './src/js/indexValidacion.js',
        pruebasPuntual: './src/js/indexValidacion.js',
        pruebasRespLibre: './src/js/indexValidacion.js',
        listadoPruebas: './src/js/indexListado.js',
        registro: './src/index.js',
        listadoUsuarios: './src/js/listadoUsuarios.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'},
                {from: 'src/html/*', to: 'html/[name].[ext]'}
            ]
        })
    ].concat(filesHTML.map((templateFile) => new HtmlWebPackPlugin({
        filename: templateFile.filename,
        template: './src/'+templateFile.filename,
        chunks: templateFile.chunks,
        inject: (templateFile.chunks.length == 0) ? false: true
    })))
};