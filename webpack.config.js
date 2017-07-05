"use strict";

const webpack = require( "webpack" );
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

module.exports = {
	"entry": "./rfltr.support.js",
	"resolve": {
		"descriptionFiles": [
			"bower.json",
			"package.json"
		],
		"modules": [
			"bower_components",
			"node_modules"
		],
		"mainFields": [
			"support",
			"browser",
			"module",
			"main"
		]
	},
	"module": {
		"rules": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader",
				"enforce": "pre"
			}
		]
	},
	"output": {
		"library": "rfltr",
		"libraryTarget": "umd",
		"filename": "rfltr.deploy.js"
	},
	"plugins": [
		new UglifyJsPlugin( {
			"compress": {
				"keep_fargs": true,
				"keep_fnames": true,
				"warnings": false
			},
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} ),
		new ModuleConcatenationPlugin( )
	],
	"devtool": "#source-map"
};
