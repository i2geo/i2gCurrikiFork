(function(){Ext.ns("Curriki.module.organize");Ext.ns("Curriki.data.organize");var A=Curriki.module.organize;var B=Curriki.data.organize;var C=Curriki.ui;A.init=function(){B.isMoving=false;B.removed=[];B.moved=[];B.changedFolders=[];B.selected=false;B.confirmedCallback=Ext.emptyFn;C.treeLoader.Organize=function(D){C.treeLoader.Organize.superclass.constructor.call(this)};Ext.extend(C.treeLoader.Organize,C.treeLoader.Base,{setFullRollover:true,setAllowDrag:true});A.getMovedList=function(D){if("undefined"!=typeof D.attributes.origLocation){B.moved.push(D)}if(D.hasChildNodes()){D.eachChild(A.getMovedList)}};A.mainDlg=Ext.extend(C.dialog.Messages,{initComponent:function(){Ext.apply(this,{id:"OrganizeDialogueWindow",title:_("organize.dialog_header"),cls:"organize resource resource-edit",autoScroll:false,width:634,bbar:[{text:_("organize.dialog.remove_button"),id:"organize-remove-btn",cls:"button remove",disabled:true,listeners:{click:function(){if(B.selected!==false){B.selected.remove();B.selected=false}}}},"->",{text:_("organize.dialog.cancel_button"),id:"organize-cancel-btn",cls:"button cancel",listeners:{click:{fn:function(){this.close();if(Ext.isIE){window.location.reload()}},scope:this}}},{text:_("organize.dialog.done_button"),id:"organize-done-btn",cls:"button done",disabled:true,listeners:{click:{fn:function(){var F=[];console.log("Organizing",F);Ext.getCmp("organize-tree-cmp").getRootNode().eachChild(A.getMovedList);console.log("Removed Items",B.removed);console.log("Moved Items",B.moved);B.changedFolders=B.moved.concat(B.removed).collect(function(G){return G.attributes.origLocation.parentNode}).concat(B.moved.collect(function(G){return G.parentNode})).uniq();console.log("Changed folders",B.changedFolders);var E=function(){console.log("All folders checked");var G=function(){console.log("save folders complete");Curriki.hideLoading();window.location.reload()};B.changedFolders.each(function(I){var H=G;G=function(){var J=I.childNodes.collect(function(K){return K.id});console.log("saving folder",I.id,J);if("function"==typeof H){H()}}});G()};B.changedFolders.each(function(H){var G=E;E=function(){console.log("checking folder",H);Curriki.assets.GetMetadata(H.id,function(I){console.log("checking folder in callback",H.id);if(I.revision!=H.attributes.revision){console.log("revision didnt match",H,I)}else{if("function"==typeof G){G()}}})}});var D=E;E=function(){Curriki.showLoading();D()};B.confirmedCallback=E;B.confirmMsg="";B.removed.each(function(G){B.confirmMsg+="<br />"+_("organize.confirmation.dialog_removed_listing",G.text,G.attributes.origLocation.parentNode.text)});B.moved.uniq().each(function(G){if(B.removed.indexOf(G)==-1){B.confirmMsg+="<br />"+_("organize.confirmation.dialog_moved_listing",G.text,G.attributes.origLocation.index,G.attributes.origLocation.parentNode.text,G.parentNode.indexOf(G)+1,G.parentNode.text)}});C.show("confirmOrganizeDlg")},scope:this}}}],items:[{xtype:"panel",id:"guidingquestion-container",cls:"guidingquestion-container",items:[{xtype:"box",autoEl:{tag:"div",html:_("organize.dialog.guidingquestion_text"),cls:"guidingquestion"}},{xtype:"box",autoEl:{tag:"div",html:_("organize.dialog.instruction_text"),cls:"instruction"}}]},{xtype:"panel",id:"organize-panel",cls:"organize-panel",items:[{xtype:"treepanel",loader:new C.treeLoader.Organize(),id:"organize-tree-cmp",autoScroll:true,useArrows:true,border:false,hlColor:"93C53C",hlDrop:false,cls:"organize-tree",animate:true,enableDD:true,ddScroll:true,containerScroll:true,rootVisible:true,listeners:{beforeclick:function(D,E){console.log("before click",D,E);D.select();B.selected=D;Ext.getCmp("organize-remove-btn").enable();if(!D.isLeaf()){D.toggle()}E.cancel=true;E.stopEvent();E.preventDefault();return false},click:function(D,E){console.log("click",D,E);return false},dblclick:function(D,E){console.log("dblclick",D,E);return false},beforemovenode:function(D,H,F,G,E){console.log("beforemove node",H,F,G,E,D);B.isMoving=true},movenode:function(D,H,F,G,E){console.log("moved node",H,F,G,E,D);B.isMoving=false},beforeremove:function(D,E,F){console.log("before remove node",F,E,D);B.removeFrom=E.indexOf(F)+1;if(F.isSelected()){F.unselect()}if("undefined"==typeof F.attributes.origLocation){F.attributes.origLocation={parentResource:E.id,index:B.removeFrom,parentNode:E}}},remove:function(D,E,F){console.log("removed node",F,E,D);if(!B.isMoving){B.removed.push(F);B.selected=false;Ext.getCmp("organize-remove-btn").disable()}Ext.getCmp("organize-done-btn").enable()},beforeinsert:function(D,G,F,E){console.log("before insert node",F,G,D,E)},insert:function(D,G,F,E){console.log("inserted node",F,G,D,E)}},root:B.root}]}]});A.mainDlg.superclass.initComponent.call(this)}});Ext.reg("organizeDlg",A.mainDlg);A.msgComplete=Ext.extend(C.dialog.Messages,{});A.confirmDlg=Ext.extend(C.dialog.Messages,{initComponent:function(){Ext.apply(this,{id:"ConfirmOrganizeDialogueWindow",title:_("organize.confirmation.dialog_header"),cls:"organize resource resource-edit",autoScroll:false,bbar:["->",{text:_("organize.dialog.cancel_button"),id:"organize-confirm-cancel-button",cls:"button cancel",listeners:{click:{fn:function(E,D){this.close()},scope:this}}},{text:_("organize.dialog.ok_button"),id:"organize-confirm-ok-button",cls:"button next",listeners:{click:{fn:function(E,D){B.confirmedCallback();this.close()},scope:this}}}],items:[{xtype:"box",autoEl:{tag:"div",html:_("organize.confirmation.dialog_summary_text")+"<br />"+B.confirmMsg+(B.removed.size()>0?("<br /><br />"+_("organize.confirmation.dialog_note_text")):"")+"<br /><br />"+_("organize.confirmation.dialog_instruction_text")}}]});A.confirmDlg.superclass.initComponent.call(this)}});Ext.reg("confirmOrganizeDlg",A.confirmDlg);A.intentionDlg=Ext.extend(C.dialog.Messages,{initComponent:function(){Ext.apply(this,{id:"IntentionOrganizeDialogueWindow",title:_("organize.intention.dialog_title"),cls:"organize resource resource-edit",autoScroll:false,bbar:[{text:_("organize.intention.message.continue_button"),id:"organize-intention-continue-button",cls:"button continue",listeners:{click:{fn:function(E,D){C.show("organizeDlg");this.close()},scope:this}}},{text:_("organize.dialog.cancel_button"),id:"organize-intention-cancel-button",cls:"button cancel",listeners:{click:{fn:function(E,D){this.close()},scope:this}}}],items:[{xtype:"box",autoEl:{tag:"div",html:_("organize.intention.message_text",B.title,B.creatorName)}}]});A.intentionDlg.superclass.initComponent.call(this)}});Ext.reg("intentOrganizeDlg",A.intentionDlg);A.display=function(){if(B.creator==Curriki.global.username||Curriki.global.isAdmin){C.show("organizeDlg")}else{C.show("intentOrganizeDlg")}};A.startMetadata=function(D){Curriki.assets.GetMetadata(D,function(E){console.log("returned",E);E.fwItems=E.fw_items;E.levels=E.educational_level;E.ict=E.instructional_component;E.displayTitle=E.title;E.rights=E.rightsList;E.leaf=false;E.allowDrag=false;E.allowDrop=true;E.expanded=true;var F=new C.treeLoader.Organize();B.root=F.createNode(E);console.log("created",B.root);B.root.addListener("beforecollapse",function(){return false});B.resource=D;Ext.onReady(function(){A.display()})})};return true};A.start=function(D){if(A.init()){if("undefined"==typeof D||"undefined"==typeof D.assetPage){alert("No resource to organize given.");return false}B.resource=D.assetPage;if("undefined"==typeof D.title||"undefined"==typeof D.creator||"undefined"==typeof D.creatorName){Curriki.assets.GetAssetInfo(B.resource,function(E){A.start(E)});return false}else{B.title=D.title;B.creator=D.creator;B.creatorName=D.creatorName;A.startMetadata(B.resource)}}else{alert("ERROR: Could not start Organize.")}}})();