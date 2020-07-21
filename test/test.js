var assert = require('assert');

var triangle = require('../triangle.js');

describe('triangle function', function(){
    it('should return 8 when the values 4,4 are passed in', function(){
        assert.equal(triangle(4,4),8);
    });
});