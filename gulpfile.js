const minimist   = require('minimist');
global.env = minimist(process.argv.slice(2), { string: 'env', default: { env: process.env.NODE_ENV || 'dev' } }).env;
global.envConfig = require('./config')[global.env];
const gulp       = require('gulp');
const requireDir = require('require-dir');

requireDir('./node_modules/@sweetui/sweet-sdk/build/tasks/', { recurse: true });


console.log('  ');
console.log('   _____                       __     __  __ ____');
console.log('  / ___/_      __ ___   ___   / /_   / / / //  _/');
console.log('  \\__ \\| | /| / // _ \\ / _ \\ / __/  / / / / / /  ');
console.log(' ___/ /| |/ |/ //  __//  __// /_   / /_/ /_/ /   ');
console.log('/____/ |__/|__/ \\___/ \\___/ \\__/   \\____//___/   ');
console.log('  ');
