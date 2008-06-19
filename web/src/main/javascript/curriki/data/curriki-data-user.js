// vim: ts=4:sw=4
/*global Ext */
/*global Curriki */
/*global _ */

Ext.ns('Curriki.data.user');
Curriki.data.user = {
	 me:{username:'XWiki.XWikiGuest', fullname:'Guest'}
	,collections:[]
	,groups:[]

	,collectionChildren:[]
	,groupChildren:[]

	,json_prefix:'/xwiki/curriki/users/'
	,user_try:0
	,GetUserinfo:function(callback){
		this.user_try++;
		Ext.Ajax.request({
			 url: this.json_prefix+'me'
			,method:'GET'
			,headers: {
				'Accept':'application/json'
			}
			,scope:this
			,success:function(response, options){
				var json = response.responseText;
				var o = json.evalJSON(true);
				if(!o) {
					console.warn('Cannot get user information');
					if (this.user_try < 5){
						this.GetUserinfo(callback);
					} else {
						throw {message: "GetUserinfo: Json object not found"};
					}
				} else {
					this.user_try = 0;
					this.me = o;
					this.GetCollections(callback);
				}
			}
			,failure:function(options){
				console.error('Cannot get user information');
				throw {message: "Server Error: Cannot find out who is logged in."};
			}
		});
	}

	,collection_try:0
	,GetCollections:function(callback){
		this.collection_try++;
		Ext.Ajax.request({
			 url: this.json_prefix+this.me.username+'/collections'
			,method:'GET'
			,headers: {
				'Accept':'application/json'
			}
			,scope:this
			,success:function(response, options){
				var json = response.responseText;
				var o = json.evalJSON(true);
				if(!o) {
					console.warn('Cannot read user\'s collection information');
					if (this.collection_try < 5){
						this.GetCollections(callback);
					} else {
						throw {message: "GetUserinfo: Json object not found"};
					}
				} else {
					this.collection_try = 0;
					this.collections = o;
					this.collectionChildren = this.CreateCollectionChildren();
console.log('Collections: ', this.collectionChildren);
					this.GetGroups(callback);
				}
			}
			,failure:function(options){
				console.error('Cannot get user\'s collection information');
				this.collections = [];
				this.GetGroups(callback);
			}
		});
	}

	,group_try:0
	,GetGroups:function(callback){
		Ext.Ajax.request({
			 url: this.json_prefix+this.me.username+'/groups'
			,method:'GET'
			,headers: {
				'Accept':'application/json'
			}
			,scope:this
			,success:function(response, options){
				var json = response.responseText;
				var o = json.evalJSON(true);
				if(!o) {
					console.warn('Cannot read user\'s group information');
					if (this.group_try < 5){
						this.GetGroups(callback);
					} else {
						throw {message: "GetUserinfo: Json object not found"};
					}
				} else {
					this.group_try = 0;
					this.groups = o;
					this.groupChildren = this.CreateGroupChildren();
					callback();
				}
			}
			,failure:function(options){
				console.error('Cannot get user\'s group information');
				this.groups = [];
				callback();
			}
		});
	}

	,CreateCollectionChildren:function(){
		var retVal = [];

		this.collections.each(function(collection){
			var colInfo = {
				 id:collection.collectionPage
				,text:collection.displayTitle
				,qtip:collection.description
				,cls:'resource-'+collection.assetType
				,allowDrag:false
				,allowDrop:true
				,loaded:true
			};

			if (Ext.isArray(collection.children) && collection.children.length > 0) {
				var children = [];

				collection.children.each(function(child){
					var childInfo = {
						 id:child.assetpage
						,order:child.order
						,text:child.displayTitle
						,qtip:child.description
						,cls:'ctv-resource resource-'+child.assetType
						,allowDrag:false
						,allowDrop:false
					};

					if ("undefined" === typeof child.rights || !child.rights.view){
						childInfo.text = _('resource.unviewable');
						childInfo.qtip = undefined;
						childInfo.disabled = true;
						childInfo.allowDrop = false;
						childInfo.leaf = true;
						childInfo.cls = childInfo.cls+' rights-unviewable';
					} else if (child.assetType.search(/Composite$/) === -1){
						childInfo.leaf = true;
						childInfo.loaded = true;
					} else {
						childInfo.leaf = false;
						childInfo.loaded = false;
						childInfo.allowDrop = child.rights.edit;
					}

					children.push(childInfo);
				});

				colInfo.children = children;
			} else {
				colInfo.leaf = false;
				colInfo.children = [];
			}

			retVal.push(colInfo);
		});

		return retVal;
	}

	,CreateGroupChildren:function(){
		var retVal = [];

		this.groups.each(function(group){
			if (group.editableCollectionCount > 0) {
				var colInfo = {
					 id:group.groupSpace
					,currikiNodeType:'group'
					,text:group.displayTitle
					,qtip:group.description
					,cls:'curriki-group'
					,allowDrag:false
					,allowDrop:false
					,loaded:true
				};

				retVal.push(colInfo);
			}
		});

		return retVal;
	}
};

