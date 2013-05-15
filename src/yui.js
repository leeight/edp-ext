/***************************************************************************
 * 
 * Copyright (c) 2013 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * yui.js ~ 2013/05/15 22:24:54
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var path = require('path');
var spawn = require('child_process').spawn;

/**
 * @type {string}
 * @const
 */
var COMPILER_JAR = path.join(__dirname,
    'third_party', 'yui', 'yuicompressor-2.4.7.jar');

/**
 * @param {string|Array.<string>} js_files 输入的文件列表
 * @param {Array.<string>=} opt_args 额外的运行参数
 * @param {function(Error, string, string)} opt_callback 回掉函数.
 */
function yui(js_files, opt_args, opt_callback) {
    if (typeof js_files === 'string') {
        js_files = [js_files];
    }

    var args = ['-jar', COMPILER_JAR];
    if (opt_args) {
        args = args.concat(opt_args);
    }
    js_files.forEach(function(item){
        args.push(item);
    });

    var child = spawn('java', args, {
        stdio: ['pipe', 'pipe', 'pipe']
    });
    // child.stdin.end();

    var stdout = '';
    var stderr = '';
    child.stdout.on('data', function(chunk){
        stdout += chunk;
    });
    child.stderr.on('data', function(chunk){
        stderr += chunk;
    });
    child.on('exit', function(){
        var err = null;
        if (stderr.length > 0) {
            err = stderr;
        }
        if (opt_callback) {
            opt_callback(err, stdout, stderr);
        }
    });
}

exports.main = yui;





















/* vim: set ts=4 sw=4 sts=4 tw=100: */
