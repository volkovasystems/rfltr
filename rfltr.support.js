"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "rfltr",
              			"path": "rfltr/rfltr.js",
              			"file": "rfltr.js",
              			"module": "rfltr",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/rfltr.git",
              			"test": "rfltr-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Alternative array filter function.
              	@end-module-documentation
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var rfltr = function rfltr(array, filter, context) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"array:required": Array,
                                                    			"filter:required": "function",
                                                    			"context": "*"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	try {
		array = (0, _from2.default)(array);

	} catch (error) {
		return [];
	}

	if (
	array.length === 0 ||
	typeof filter != "function")
	{
		return array;
	}

	context = context || array;

	var index = -1;

	var filtered = [];
	try {
		while (++index < array.length) {
			if (filter.call(context, array[index], index, array)) {
				filtered.push(array[index]);
			}
		}

		return filtered;

	} catch (error) {
		throw new Error("cannot execute filter function, " + error.stack);

	} finally {
		array = undefined;

		context = undefined;

		filter = undefined;
	}
};

module.exports = rfltr;

//# sourceMappingURL=rfltr.support.js.map