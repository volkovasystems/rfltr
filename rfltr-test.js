
const assert = require( "assert" );

const rfltr = require( "./rfltr.js" );

assert.deepEqual( rfltr( [ 1, 2, 3, 4, 5 ], ( value ) => ( value % 2 == 0 ) ), [ 2, 4 ], "should be deeply equal" );

assert.deepEqual( rfltr( 1, ( value ) => ( value % 2 == 0 ) ), [ ], "should be deeply equal" );

assert.deepEqual( rfltr( false ), [ ], "should be deeply equal" );

console.log( "ok" );
