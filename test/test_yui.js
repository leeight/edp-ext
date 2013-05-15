/***************************************************************************
 * 
 * Copyright (c) 2013 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * test_yui.js ~ 2013/05/15 22:01:34
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var should = require('should');
var yui = require('../src/yui');

describe('yui#main', function() {
    it('should pass', function(done){
        yui.main('../src/main.js', null, function(err, stdout, stderr){
            should.not.exist(err);
            stderr.should.be.empty;
            stdout.should.not.be.empty;
            stdout.should.equal('exports.gcc=require("./gcc").main;exports.yui=require("./yui").main;');
            done();
        });
    });
    it('should throw error when feed duplicate files.', function(done){
        yui.main(['../src/main.js', '../src/main.js'], null, function(err, stdout, stderr){
            should.not.exist(err);
            stderr.should.be.empty;
            stdout.should.not.be.empty;
            stdout.should.equal('exports.gcc=require("./gcc").main;exports.yui=require("./yui").main;');
            done();
        });
    });
});





















/* vim: set ts=4 sw=4 sts=4 tw=100: */
