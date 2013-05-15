/***************************************************************************
 * 
 * Copyright (c) 2013 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * test_gcc.js ~ 2013/05/15 22:01:34
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var should = require('should');
var gcc = require('../src/gcc');

describe('gcc#main', function() {
    it('should pass', function(done){
        gcc.main('../src/main.js', null, function(err, stdout, stderr){
            should.not.exist(err);
            stderr.should.be.empty;
            stdout.should.not.be.empty;
            stdout.should.equal('exports.gcc=require("./gcc").main;exports.yui=require("./yui").main;\n');
            done();
        });
    });
    it('should throw error when feed duplicate files.', function(done){
        gcc.main(['../src/main.js', '../src/main.js'], null, function(err, stdout, stderr){
            should.exist(err);
            stderr.should.not.be.empty;
            stdout.should.be.empty;
            stderr.should.equal('ERROR - Duplicate input: ../src/main.js\n\n1 error(s), 0 warning(s)\n');
            done();
        });
    });
});





















/* vim: set ts=4 sw=4 sts=4 tw=100: */
