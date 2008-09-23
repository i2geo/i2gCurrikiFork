// vim: ts=4:sw=4
/*global Ext */
/*global Curriki */
/*global _ */

(function(){
var modName = 'resource';

Ext.ns('Curriki.module.search.data.'+modName);

var data = Curriki.module.search.data.resource;

data.init = function(){
	console.log('data.'+modName+': init');

	// Set up filters
	data.filter = {};
	var f = data.filter; // Alias

	f.data = {};

	f.data.subject =  {
		mapping: Curriki.data.fw_item.fwMap['FW_masterFramework.WebHome']
		,list: []
		,data: [
			['', _('XWiki.AssetClass_fw_items_FW_masterFramework.UNSPECIFIED')]
		]
	};
	f.data.subject.mapping.each(function(value){
		f.data.subject.list.push(value.id);
	});
	f.data.subject.list.each(function(value){
		f.data.subject.data.push([
			value
			,_('XWiki.AssetClass_fw_items_'+value)
		]);
	});

	f.data.subsubject =  {
		mapping: Curriki.data.fw_item.fwMap
		,data: [
		]
	};
	f.data.subject.mapping.each(function(parentItem){
		f.data.subsubject.data.push([
			parentItem.id
			,_('XWiki.AssetClass_fw_items_'+parentItem.id+'.UNSPECIFIED')
			,parentItem.id
		]);
		f.data.subsubject.mapping[parentItem.id].each(function(subject){
			f.data.subsubject.data.push([
				subject.id
				,_('XWiki.AssetClass_fw_items_'+subject.id)
				,parentItem.id
			]);
		});
	});

	f.data.level =  {
		list: Curriki.data.el.list
		,data: [
			['', _('XWiki.AssetClass_educational_level2_UNSPECIFIED')]
		]
	};
	f.data.level.list.each(function(value){
		f.data.level.data.push([
			value
			,_('XWiki.AssetClass_educational_level2_'+value)
		]);
	});

	f.data.ict =  {
		fullList: Curriki.data.ict.list
		,parentList: {}
		,list: []
		,data: [
			['', _('XWiki.AssetClass_instructional_component2_UNSPECIFIED')]
		]
	};
	f.data.ict.fullList.each(function(value){
		var name = value.replace(/_.*/, '');
		f.data.ict.parentList[name] = name;
	});
	Object.keys(f.data.ict.parentList).each(function(value){
		f.data.ict.data.push([
			value
			,_('XWiki.AssetClass_instructional_component2_'+value)
		]);
	});

	f.data.subict =  {
		list: Curriki.data.ict.list
		,parents: {}
		,data: [
		]
	};
	f.data.subict.list.each(function(value){
		var parentICT = value.replace(/_.*/, '');
		if (parentICT !== value) {
			if (Ext.isEmpty(f.data.subict.parents[parentICT])) {
				f.data.subict.data.push([
					parentICT+'*'
					,_('XWiki.AssetClass_instructional_component2_'+parentICT+'_UNSPECIFIED')
					,parentICT
				]);
				f.data.subict.parents[parentICT] = parentICT;
			}
			f.data.subict.data.push([
				value
				,_('XWiki.AssetClass_instructional_component2_'+value)
				,parentICT
			]);
		}
	});

	f.data.language =  {
		list: Curriki.data.language.list
		,data: [
			['', _('XWiki.AssetClass_language_UNSPECIFIED')]
		]
	};
	f.data.language.list.each(function(value){
		f.data.language.data.push([
			value
			,_('XWiki.AssetClass_language_'+value)
		]);
	});

	f.data.review = {
		list: [
			'partners', 'highest_rated'
		]
		,data: [
			['', _('search.resource.review.selector.UNSPECIFIED')]
		]
	};
	f.data.review.list.each(function(review){
		f.data.review.data.push([
			review
			,_('search.resource.review.selector.'+review)
		]);
	});

	f.data.special = {
		list: [
			'contributions', 'collections', 'updated'
		]
		,data: [
			['', _('search.resource.special.selector.UNSPECIFIED')]
		]
	};
	f.data.special.list.each(function(special){
		f.data.special.data.push([
			special
			,_('search.resource.special.selector.'+special)
		]);
	});

	f.store = {
		subject: new Ext.data.SimpleStore({
			fields: ['id', 'subject']
			,data: f.data.subject.data
			,id: 0
		})

		,subsubject: new Ext.data.SimpleStore({
			fields: ['id', 'subject', 'parentItem']
			,data: f.data.subsubject.data
			,id: 0
		})

		,level: new Ext.data.SimpleStore({
			fields: ['id', 'level']
			,data: f.data.level.data
			,id: 0
		})

		,ict: new Ext.data.SimpleStore({
			fields: ['id', 'ict']
			,data: f.data.ict.data
			,id: 0
		})

		,subict: new Ext.data.SimpleStore({
			fields: ['id', 'ict', 'parentICT']
			,data: f.data.subict.data
			,id: 0
		})

		,language: new Ext.data.SimpleStore({
			fields: ['id', 'language']
			,data: f.data.language.data
			,id: 0
		})

		,review: new Ext.data.SimpleStore({
			fields: ['id', 'review']
			,data: f.data.review.data
			,id: 0
		})

		,special: new Ext.data.SimpleStore({
			fields: ['id', 'special']
			,data: f.data.special.data
			,id: 0
		})
	};



	// Set up data store
	data.store = {};

	data.store.record = new Ext.data.Record.create([
		{ name: 'title' }
		,{ name: 'assetType' }
		,{ name: 'ict' }
		,{ name: 'ictText' }
		,{ name: 'ictIcon' }
		,{ name: 'contributor' }
		,{ name: 'contributorName' }
		,{ name: 'rating', mapping: 'review' }
		,{ name: 'description' }
		,{ name: 'info' }
		,{ name: 'updated' }
	]);

	data.store.results = new Ext.data.Store({
		storeId: 'search-store-'+modName
		,proxy: new Ext.data.HttpProxy({
			url: '/xwiki/bin/view/Search/Resources'
			,method:'GET'
		})
		,baseParams: { xpage: "plain" }

		,reader: new Ext.data.JsonReader({
			root: 'rows'
			,totalProperty: 'resultCount'
			,id: 'page'
		}, data.store.record)

		// turn on remote sorting
		,remoteSort: true
	});
	data.store.results.setDefaultSort('title', 'asc');



	// Set up renderers
	data.renderer = {
		assetType: function(value, metadata, record, rowIndex, colIndex, store){
			metadata.css = String.format('resource-{0}', value); // Added to <td>
			var rollover = _('search.resource.icon.'+value+'.rollover');
			if (rollover === 'search.resource.icon.'+value+'.rollover') {
				rollover = _('search.resource.icon.Unknown.rollover');
			}
			return String.format('<img class="x-tree-node-icon assettype-icon" style="width:16px;height:17px;background-repeat:no-repeat;" src="{0}" alt="{1}" ext:qtip="{1}" />', Ext.BLANK_IMAGE_URL, rollover);
		}

		,title: function(value, metadata, record, rowIndex, colIndex, store){
			// Title
			var page = record.id.replace(/\./, '/');
			var desc = Ext.util.Format.stripTags(record.data.description);
			desc = Ext.util.Format.ellipsis(desc, 300);
			desc = Ext.util.Format.htmlEncode(desc);
//			return String.format('<a href="/xwiki/bin/view/{0}" ext:qtitle="{3}" ext:qtip="{2}">{1}</a>', page, value, desc, _('search.resource.column.title.tooltip.title'));

			// Asset Type icon
			var assetType = record.data.assetType;
			metadata.css = String.format('resource-{0}', assetType); // Added to <td>
			var rollover = _('search.resource.icon.'+assetType+'.rollover');
			if (rollover === 'search.resource.icon.'+assetType+'.rollover') {
				rollover = _('search.resource.icon.Unknown.rollover');
			}
//			return String.format('<img class="x-tree-node-icon assettype-icon" style="width:16px;height:17px;background-repeat:no-repeat;" src="{0}" alt="{1}" ext:qtip="{1}" />', Ext.BLANK_IMAGE_URL, rollover);
			return String.format('<img class="x-tree-node-icon assettype-icon" src="{4}" alt="{5}" ext:qtip="{5}" /><a href="/xwiki/bin/view/{0}" class="asset-title" ext:qtitle="{3}" ext:qtip="{2}">{1}</a>', page, value, desc, _('search.resource.column.title.tooltip.title'), Ext.BLANK_IMAGE_URL, rollover);
		}

		,ict: function(value, metadata, record, rowIndex, colIndex, store){
			var css;
			var dotIct;
			var ict = record.data.ict;
			if (!Ext.isEmpty(ict)){
				// Find CSS classes needed
				var topIct = ict.replace(/_.*/, '');
				css = 'ict-'+topIct;
				if (topIct !== ict) {
					css = css + ' ict-'+ict;
				}

				// Get value to use in lookup key
				dotIct = ict.replace(/_/, '.');
			} else {
				css = 'ict-unknown';
				dotIct = 'unknown';
			}
			metadata.css = css;
			return String.format('<img class="ict-icon" src="{1}" /><span class="ict-title">{0}</span>', _('search.resource.ict.'+dotIct), Ext.BLANK_IMAGE_URL);
		}

		,contributor: function(value, metadata, record, rowIndex, colIndex, store){
			var page = value.replace(/\./, '/');
			return String.format('<a href="/xwiki/bin/view/{0}">{1}</a>', page, record.data.contributorName);
		}

		,rating: function(value, metadata, record, rowIndex, colIndex, store){
			if (value != "") {
				// TODO: This should use CSS
				metadata.css = String.format('crs-{0}', value); // Added to <td>
				//metadata.attr = String.format('title="{0}"', _('curriki.crs.rating'+value)); // Added to <div> around the returned HTML
				return String.format('<img class="crs-icon" alt="" src="{2}" /><span class="crs-text">{1}</a>', value, _('curriki.crs.rating'+value), Ext.BLANK_IMAGE_URL);
			} else {
				return String.format('');
			}
		}

		,updated: function(value, metadata, record, rowIndex, colIndex, store){
			var dt = Ext.util.Format.date(value, 'M-d-Y');
			return String.format('{0}', dt);
		}
	};
};

Ext.onReady(function(){
	data.init();
});
})();