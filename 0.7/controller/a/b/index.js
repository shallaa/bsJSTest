var file = 'controller/a/b/index.js';
exports.controller = {
	index:function( v0, v1 ){
		var args = bs.router('arguments'), method = 'index';
		bsTest.tear( '/a/b/index.js :: index' + ( args ? ' :: ' + args.join(',') : '' ), function(){});
		bsTest( 'file', function(){
			return bs.router('file');
		}, file );
		bsTest( 'virtual', function(){
			return bs.router('virtual');
		}, bsTest.REG( new RegExp( '^a/b' + ( v0 ? '/' + v0 + ( v1 ? '/' + v1 : '' ) : '' ) ) ) );
		bsTest( 'args1', function(){
			return args ? args[0] : undefined;
		}, v0 );
		bsTest( 'args2', function(){
			return args ? args[1] : undefined;
		}, v1 );
		bsTest( 'method', function(){
			return bs.router('method');
		}, method );
	},
	test:function( v0, v1 ){
		var args = bs.router('arguments'), virtual = /^a\/b\/test/, method = 'test';
		bsTest.tear( '/a/b/index.js :: test' + ( args ? ' :: ' + args.join(',') : '' ), function(){});
		bsTest( 'file', function(){
			return bs.router('file');
		}, file );
		bsTest( 'virtual', function(){
			return bs.router('virtual');
		}, bsTest.REG(virtual) );
		bsTest( 'args1', function(){
			return args[0];
		}, v0 );
		bsTest( 'args2', function(){
			return args[1];
		}, v1 );
		bsTest( 'method', function(){
			return bs.router('method');
		}, method );
	}
};