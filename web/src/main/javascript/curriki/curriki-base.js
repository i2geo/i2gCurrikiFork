// vim: ts=4:sw=4
/*global Ext */
/*global _ */

Ext.BLANK_IMAGE_URL = '/xwiki/skins/curriki8/extjs/resources/images/default/s.gif';

Ext.Ajax.defaultHeaders = {
	'Accept': 'application/json'
};
Ext.Ajax.disableCaching=false;

try {
	console.log('init');
} catch(e) {
	console = {
		 log: Ext.emptyFn
		,debug: Ext.emptyFn
		,info: Ext.emptyFn
		,warn: Ext.emptyFn
		,error: Ext.emptyFn
		,assert: Ext.emptyFn
		,dir: Ext.emptyFn
		,dirxml: Ext.emptyFn
		,trace: Ext.emptyFn
		,group: Ext.emptyFn
		,groupEnd: Ext.emptyFn
		,time: Ext.emptyFn
		,timeEnd: Ext.emptyFn
		,profile: Ext.emptyFn
		,profileEnd: Ext.emptyFn
		,count: Ext.emptyFn
	};
}

Ext.onReady(function(){
	Ext.QuickTips.init();
});

/*
 * Example of dynamically loading javascript
function initLoader() {
  var script = document.createElement("script");
  script.src = "http://www.google.com/jsapi?key=ABCDEFG&callback=loadMaps";
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
}
*/

Ext.ns('Curriki');

Ext.ns('Curriki.fn');
Curriki.fn.id = function(prefix){
	return Ext.id('', prefix+':');
};
Curriki.id = Curriki.fn.id;

Curriki.start = function(callback){
console.log('Start Callback: ', callback);
	var args = {};

	if ("object" === typeof callback){
		if (callback.args){
			args = callback.args;
		}
		if (callback.callback){
			callback = callback.callback;
		} else if (callback.module){
			callback = callback.module;
		}
	}

	if ("string" === typeof callback){
		var module = eval('(Curriki.module.'+callback.toLowerCase()+')');

		if (module && "function" === typeof module.init){
			// callback is the name of a module
			module.init(args);
			if ("function" === typeof module.start) {
				callback = module.start;
			} else {
				callback = Ext.emptyFn;
			}
		} else {
			// callback is a known string
			switch(callback){
				default:
					callback = Ext.emptyFn;
					break;
			}
		}
	}

	if ("function" === typeof callback) {
		callback(args);
	}
};

Curriki.init = function(callback){
console.log('Curriki.init: ', callback);
	Curriki.data.user.GetUserinfo(function(){Curriki.start(callback);});
};

