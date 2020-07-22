var assert = require('assert');
// make sure var assert = require('assert') is at the top of a test.js
var triangle = require('../triangle.js');

describe('triangle function', function(){
    it('should return 8 when the values 4,4 are passed in', function(){
        assert.equal(triangle(4,4),8);
    });
});