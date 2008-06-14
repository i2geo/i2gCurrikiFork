Ext.ns("Curriki.module.addpath");Curriki.module.addpath.init=function(){var A=Curriki.module.addpath;A.EnableNext=function(){Ext.getCmp("nextbutton").enable()};A.DisableNext=function(){Ext.getCmp("nextbutton").disable()};A.RadioSelect=function(D,C){var B;var E=false;B=Ext.getCmp(D.value+"-entry-box");if(B){if(B.isVisible()!=C){E=true;B.setVisible(C);B.setDisabled(!C)}}else{B=Ext.get(D.value+"-entry-box");if(B.isVisible()!=C){B.setVisibilityMode(Ext.Element.DISPLAY).setVisible(C)}}B=Ext.getCmp(D.value+"-entry-value");if(E&&B){B.setDisabled(!C)}Ext.getCmp(A.AddSourceDialogueId).doLayout();Ext.getCmp(A.AddSourceDialogueId).syncShadow()};A.AddSourceDialogueId="resource-source-dialogue";A.AddSource=Ext.extend(Curriki.ui.dialog.Actions,{initComponent:function(){Ext.apply(this,{title:_("add.contributemenu.title_addto_"+(this.toFolder?"composite":"site")),cls:"resource resource-add",id:A.AddSourceDialogueId,items:[{xtype:"form",id:"addDialoguePanel",formId:"addDialogueForm",labelWidth:25,autoScroll:true,border:false,defaults:{labelSeparator:"",hideLabel:true,name:"assetSource"},bbar:["->",{text:_("add.contributemenu.cancel.button"),id:"cancelbutton",cls:"button cancel",listeners:{click:{fn:function(){this.close()},scope:this}}},{text:_("add.contributemenu.next.button"),id:"nextbutton",cls:"button next",disabled:true,listeners:{click:{fn:function(){var C=this.findByType("form")[0].getForm();var B=(C.getValues(false))["assetSource"];A.SourceSelected(B,C.getValues(false))},scope:this}}}],monitorValid:true,listeners:{clientvalidation:function(B,C){if(C){A.EnableNext()}else{A.DisableNext()}}},items:[{xtype:"box",autoEl:{tag:"div",html:this.toFolder?_("add.contributemenu.guidingquestion_addto_composite",this.folderName):_("add.contributemenu.guidingquestion_addto_site"),cls:"guidingquestion"}},{xtype:"box",autoEl:{tag:"div",html:_("add.contributemenu.subtitle_have"),cls:"subtitle"}},{xtype:"radio",value:"file",inputValue:"file",boxLabel:_("add.contributemenu.option.file"),listeners:{check:A.RadioSelect}},{xtype:"textfield",inputType:"file",id:"file-entry-box",name:"filepath",disabled:true,allowBlank:false,hideMode:"display",hideLabel:true,hidden:true,listeners:{focus:function(){var B=Ext.getCmp("file-entry-box").getValue();var E=B.lastIndexOf("\\");var D=B.lastIndexOf("/");var C=(E>D)?E:D;B=B.substring(C+1);Ext.getCmp("filename-entry-box").setValue(B)}}},{xtype:"textfield",id:"filename-entry-box",name:"filename",allowBlank:false,hideLabel:true,hidden:true,disabled:true},{xtype:"radio",value:"video_upload",inputValue:"video_upload",boxLabel:_("add.contributemenu.option.video_upload"),listeners:{check:A.RadioSelect}},{xtype:"container",id:"video_upload-entry-box",listeners:{show:function(){window.uploadComplete=function(B){Ext.getCmp("video_upload-entry-value").setValue(B);Ext.getCmp("nextbutton").events.click.fire()};window.capture_div="";window.flashLoaded=false;window.called_once=false;embedVidiCapture("video_upload-entry-video",_("viditalk.sitecode"),null,null,false)}},hidden:true,items:[{xtype:"textfield",id:"video_upload-entry-value",allowBlank:false,hidden:true,disabled:true},{xtype:"box",id:"video_upload-entry-video",autoEl:{tag:"div",html:"",height:"320px"}}],autoEl:{tag:"div",id:"video_upload-container",html:""}},{xtype:"radio",value:"link",inputValue:"link",boxLabel:_("add.contributemenu.option.link"),listeners:{check:A.RadioSelect}},{xtype:"textfield",id:"link-entry-box",name:"link",emptyText:_("add.contributemenu.link.empty_msg"),disabled:true,allowBlank:false,hideMode:"display",hideLabel:true,hidden:true,vtype:"url"},{xtype:"radio",value:"repository",inputValue:"repository",boxLabel:_("add.contributemenu.option.repository"),hidden:true||!this.toFolder,hideLabel:true||!this.toFolder,hideParent:true},{xtype:"box",autoEl:{tag:"div",html:_("add.contributemenu.subtitle_make"),cls:"subtitle"}},{xtype:"radio",value:"template",inputValue:"template",checked:true,boxLabel:_("add.contributemenu.option.template")},{xtype:"radio",value:"scratch",inputValue:"scratch",boxLabel:_("add.contributemenu.option.scratch")},{xtype:"radio",value:"video_capture",inputValue:"video_capture",boxLabel:_("add.contributemenu.option.video_capture"),listeners:{check:A.RadioSelect}},{xtype:"container",id:"video_capture-entry-box",listeners:{show:function(){window.uploadComplete=function(B){Ext.getCmp("video_capture-entry-value").setValue(B);Ext.getCmp("nextbutton").events.click.fire()};window.capture_div="";window.flashLoaded=false;window.called_once=false;embedVidiCapture("video_capture-entry-video",_("viditalk.sitecode"),null,null,false)}},hidden:true,items:[{xtype:"textfield",id:"video_capture-entry-value",allowBlank:false,hidden:true,disabled:true},{xtype:"box",id:"video_capture-entry-video",autoEl:{tag:"div",html:"",height:"320px"}}],autoEl:{tag:"div",id:"video_capture-container",html:""}},{xtype:"radio",value:"folder",inputValue:"folder",boxLabel:_("add.contributemenu.option.folder"),hidden:!this.toFolder,hideParent:true}]}]});A.AddSource.superclass.initComponent.call(this)}});Ext.reg("apSource",A.AddSource);A.TemplateList=function(){var D=[];var C=1;while(_("add.selecttemplate.list"+C+".header")!=="add.selecttemplate.list"+C+".header"){var B=[];B.push({xtype:"radio",name:"templateName",value:"list"+C,boxLabel:_("add.selecttemplate.list"+C+".header"),listeners:{check:A.TemplateSelect}});B.push({xtype:"box",autoEl:{tag:"div",html:_("add.selecttemplate.list"+C+".description"),cls:"description"}});D.push({xtype:"container",id:"selecttemplate-list"+C,items:B,autoEl:{tag:"div",id:"selecttemplate-list"+C+"-box",html:""}});++C}return D};A.TemplateSelect=function(B,C){if(C){Ext.get("selecttemplate-thumbnail-header").dom.innerHTML=_("add.selecttemplate."+B.value+".header");Ext.get("selecttemplate-thumbnail-image").set({src:_("add.selecttemplate."+B.value+".thumbnail")});Curriki.current.submitToTemplate=_("add.selecttemplate."+B.value+".url");Ext.getCmp("nextbutton").enable()}};A.SelectTemplate=Ext.extend(Curriki.ui.dialog.Actions,{initComponent:function(){Ext.apply(this,{id:"SelectTemplateDialogueWindow",title:_("add.selecttemplate.title"),cls:"resource resource-add",items:[{xtype:"form",id:"SelectTemplateDialoguePanel",formId:"SelectTemplateDialogueForm",labelWidth:25,autoScroll:true,border:false,defaults:{labelSeparator:""},buttonAlign:"right",buttons:[{text:_("add.selecttemplate.cancel.button"),id:"cancelbutton",cls:"button cancel",listeners:{click:function(C,B){Ext.getCmp(C.id).ownerCt.ownerCt.close()}}},{text:_("add.selecttemplate.next.button"),id:"nextbutton",cls:"button next",disabled:true,listeners:{click:function(C,B){A.PostToTemplate(Curriki.current.submitToTemplate);Ext.getCmp(C.id).ownerCt.ownerCt.close()}}}],items:[{layout:"column",defaults:{border:false},items:[{columnWidth:0.6,items:[{xtype:"box",autoEl:{tag:"div",html:_("add.selecttemplate.guidingquestion"),cls:"guidingquestion"}},{xtype:"container",id:"selecttemplate-list",items:A.TemplateList(),autoEl:{tag:"div",id:"selecttemplate-list-box",html:""}}]},{columnWidth:0.4,items:[{xtype:"box",id:"selecttemplate-thumbnail-container",anchor:"",autoEl:{tag:"div",id:"selecttemplate-thumbnail",style:"margin:8px 0 8px 10px",children:[{tag:"div",id:"selecttemplate-thumbnail-header",style:"margin:0 0 4px 0",html:""},{tag:"img",id:"selecttemplate-thumbnail-image",src:Ext.BLANK_IMAGE_URL,onLoad:"Ext.getCmp('SelectTemplateDialogueWindow').syncShadow();"}]}}]}]}]}]});A.SelectTemplate.superclass.initComponent.call(this)}});Ext.reg("apSelectTemplate",A.SelectTemplate);A.Metadata1=Ext.extend(Curriki.ui.dialog.Actions,{initComponent:function(){Ext.apply(this,{title:_("add.setrequiredinfo.part1.title"),cls:"resource resource-add",items:[{xtype:"form",id:"MetadataDialoguePanel",formId:"MetadataDialogueForm",labelWidth:25,autoScroll:true,border:false,defaults:{labelSeparator:""},bbar:["->",{text:_("add.setrequiredinfo.part1.cancel.button"),id:"cancelbutton",cls:"button cancel",listeners:{click:{fn:function(){this.close()},scope:this}}},{text:_("add.setrequiredinfo.part1.next.button"),id:"nextbutton",cls:"button next",disabled:true,listeners:{click:{fn:function(){var B=this.findByType("form")[0].getForm();Curriki.current.sri1=B.getValues(false);Curriki.current.sri1.fw_items=this.findByType("treepanel")[0].getChecked("id");this.close();var C=Ext.ComponentMgr.create({xtype:"apSRI2"});C.show();Ext.ComponentMgr.register(C)},scope:this}}}],monitorValid:true,listeners:{clientvalidation:function(B,C){if(C){A.EnableNext()}else{A.DisableNext()}if(Ext.isEmpty(Curriki.current.sri1fillin)){if(!Ext.isEmpty(Curriki.current.metadata)){var D=Curriki.current.metadata;if(!Ext.isEmpty(D.fw_items)&&Ext.isArray(D.fw_items)){D.fw_items.each(function(E){Ext.getCmp("fw_items-tree").getNodeById(E).getUI().toggleCheck(true)})}if(!Ext.isEmpty(D.educational_level2)&&Ext.isArray(D.educational_level2)){D.educational_level2.each(function(E){Ext.getCmp(Ext.select('input[type="checkbox"][name="educational_level2"][value="'+E+'"]').first().dom.id).setValue(true)})}}Curriki.current.sri1fillin=true}}},items:[{xtype:"box",autoEl:{tag:"div",html:_("add.setrequiredinfo.part1.guidingquestion"),cls:"guidingquestion"}},{xtype:"box",autoEl:{tag:"div",html:_("form.required.fields.instruction"),cls:"instruction"}},{xtype:"box",autoEl:{tag:"div",id:"metadata-title",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-title-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-title-title",cls:"metadata-title",html:_("sri.title_title")},{tag:"img",id:"metadata-title-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.title_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.title_txt"),cls:"directions"}},{xtype:"textfield",id:"metadata-title-entry",name:"title",emptyText:_("sri.title_content"),allowBlank:false,hideLabel:true,width:"80%"},{xtype:"box",autoEl:{tag:"div",id:"metadata-description",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-description-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-description-title",cls:"metadata-title",html:_("sri.description_title")},{tag:"img",id:"metadata-description-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.description_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.description_txt"),cls:"directions"}},{xtype:"textarea",id:"metadata-description-entry",name:"description",emptyText:_("sri.description_content"),allowBlank:false,hideLabel:true,width:"80%"},{layout:"column",border:false,defaults:{border:false},items:[{columnWidth:0.5,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-fw_items",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-fw_items-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-fw_items-title",cls:"metadata-title",html:_("sri.fw_items_title")},{tag:"img",id:"metadata-fw_items-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.fw_items_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.fw_items_txt"),cls:"directions"}},{xtype:"numberfield",id:"fw_items-validation",allowBlank:false,minValue:1,invalidText:"TODO: TRANSLATE: This field is required",hidden:true,listeners:{valid:function(C){var B=Ext.getCmp("fw_items-tree");B.removeClass("x-form-invalid");B.el.dom.qtip=""},invalid:function(C,E){var B=Ext.getCmp("fw_items-tree");B.addClass("x-form-invalid");var D=C.invalidText;B.el.dom.qtip=D;B.el.dom.qclass="x-form-invalid-tip";if(Ext.QuickTips){Ext.QuickTips.enable()}}}},Curriki.ui.component.asset.fwTree]},{columnWidth:0.5,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-educational_level2",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-educational_level2-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-educational_level2-title",cls:"metadata-title",html:_("sri.educational_level2_title")},{tag:"img",id:"metadata-educational_level2-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.educational_level2_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.educational_level2_txt"),cls:"directions"}},{xtype:"numberfield",id:"educational_level2-validation",allowBlank:false,minValue:1,invalidText:"TRANSLATE: This field is required",hidden:true,listeners:{valid:function(C){var B=Ext.getCmp("educational_level2-set");B.removeClass("x-form-invalid");B.el.dom.qtip=""},invalid:function(C,E){var B=Ext.getCmp("educational_level2-set");B.addClass("x-form-invalid");var D=C.invalidText;B.el.dom.qtip=D;B.el.dom.qclass="x-form-invalid-tip";if(Ext.QuickTips){Ext.QuickTips.enable()}}}},{xtype:"fieldset",id:"educational_level2-set",border:false,autoHeight:true,defaults:{xtype:"checkbox",name:"educational_level2",hideLabel:true,labelSeparator:"",listeners:{check:function(D,C){var B=Ext.getCmp("educational_level2-validation");B.setValue(B.getValue()+(C?1:-1))}}},items:Curriki.data.el.data}]}]},{xtype:"box",autoEl:{tag:"div",id:"metadata-instructional_component2",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-instructional_component2-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-instructional_component2-title",cls:"metadata-title",html:_("sri.instructional_component2_title")},{tag:"img",id:"metadata-instructional_component2-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.instructional_component2_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.instructional_component2_txt"),cls:"directions"}},{xtype:"multiselect",name:"ict",hideLabel:true,enableToolbar:false,legend:" ",store:Curriki.data.ict.store,valueField:"id",displayField:"ict",width:250,height:100,allowBlank:false,minLength:1,isFormField:true}]}]});A.Metadata1.superclass.initComponent.call(this)}});Ext.reg("apSRI1",A.Metadata1);A.Metadata2=Ext.extend(Curriki.ui.dialog.Actions,{initComponent:function(){Ext.apply(this,{id:"MetadataDialogueWindow",title:_("add.setrequiredinfo.part2.title"),cls:"resource resource-add",items:[{xtype:"form",id:"MetadataDialoguePanel",formId:"MetadataDialogueForm",labelWidth:25,autoScroll:true,border:false,defaults:{labelSeparator:""},bbar:["->",{text:_("add.setrequiredinfo.part2.cancel.button"),id:"cancelbutton",cls:"button cancel",listeners:{click:function(C,B){Ext.WindowMgr.get("MetadataDialogueWindow").close()}}},{text:_("add.setrequiredinfo.part2.next.button"),id:"nextbutton",cls:"button next",disabled:true,listeners:{click:{fn:function(){var B=this.findByType("form")[0].getForm();Curriki.current.sri2=B.getValues(false);this.close();A.MetadataFinished()},scope:this}}}],monitorValid:true,listeners:{clientvalidation:function(B,C){if(C){A.EnableNext()}else{A.DisableNext()}if(Ext.isEmpty(Curriki.current.sri2fillin)){if(!Ext.isEmpty(Curriki.current.metadata)){var D=Curriki.current.metadata;if(!Ext.isEmpty(D.rights)){Ext.getCmp(Ext.select('input[type="radio"][name="rights"][value="'+D.rights+'"]').first().dom.id).setValue(true)}if(!Ext.isEmpty(D.keywords)){if(Ext.isArray(D.keywords)){D.keywords=D.keywords.join(" ")}Ext.getCmp("metadata-keywords-entry").setValue(D.keywords)}if(!Ext.isEmpty(D.licenseType2)){Ext.getCmp("metadata-license_type-entry").setValue(D.licenseType2)}if(!Ext.isEmpty(D.rightsHolder)){Ext.getCmp("metadata-right_holder-entry").setValue(D.rightsHolder)}}Curriki.current.sri2fillin=true}}},items:[{xtype:"box",autoEl:{tag:"div",html:_("add.setrequiredinfo.part2.guidingquestion"),cls:"guidingquestion"}},{xtype:"box",autoEl:{tag:"div",html:_("form.required.fields.instruction"),cls:"instruction"}},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-rights",cls:"information-header",children:[{tag:"span",id:"metadata-rights-title",cls:"metadata-title",html:_("sri.rights_title")},{tag:"img",id:"metadata-rights-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.rights_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.rights_txt"),cls:"directions"}},{border:false,defaults:{xtype:"radio",name:"rights"},items:Curriki.data.rights.data}]},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-hidden_from_search",cls:"information-header",children:[{tag:"span",id:"metadata-hidden_from_search-title",cls:"metadata-title",html:_("sri.hidden_from_search_title")},{tag:"img",id:"metadata-hidden_from_search-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.hidden_from_search_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.hidden_from_search_txt"),cls:"directions"}},{xtype:"checkbox",name:"hidden_from_search",boxLabel:_("sri.hidden_from_search_after")}]},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-keywords",cls:"information-header",children:[{tag:"span",id:"metadata-keywords-title",cls:"metadata-title",html:_("sri.keywords_title")},{tag:"img",id:"metadata-keywords-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.keywords_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.keywords_txt"),cls:"directions"}},{xtype:"textfield",id:"metadata-keywords-entry",name:"keywords",hideLabel:true,width:"60%"}]},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-language",cls:"information-header",children:[{tag:"span",id:"metadata-language-title",cls:"metadata-title",html:_("sri.language_title")},{tag:"img",id:"metadata-language-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.language_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.language_txt"),cls:"directions"}},{xtype:"combo",id:"metadata-language-entry",hiddenName:"language",hideLabel:true,width:"60%",mode:"local",store:Curriki.data.language.store,displayField:"language",valueField:"id",typeAhead:true,triggerAction:"all",emptyText:_("sri.language_empty_msg"),selectOnFocus:true,forceSelection:true,value:Curriki.data.language.initial?Curriki.data.language.initial:undefined}]},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-right_holder",cls:"information-header information-header-required",children:[{tag:"em",id:"metadata-title-required",cls:"required-indicator",html:_("form.required.fields.indicator")},{tag:"span",id:"metadata-right_holder-title",cls:"metadata-title",html:_("sri.right_holder_title")},{tag:"img",id:"metadata-right_holder-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.right_holder_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.right_holder_txt"),cls:"directions"}},{xtype:"textfield",id:"metadata-right_holder-entry",name:"right_holder",hideLabel:true,value:Curriki.data.user.me.fullname,allowBlank:false,width:"60%"}]},{border:false,items:[{xtype:"box",autoEl:{tag:"div",id:"metadata-license_type",cls:"information-header",children:[{tag:"span",id:"metadata-license_type-title",cls:"metadata-title",html:_("sri.license_type_title")},{tag:"img",id:"metadata-license_type-info",cls:"metadata-tooltip",src:Curriki.ui.InfoImg,qtip:_("sri.license_type_tooltip")}]}},{xtype:"box",autoEl:{tag:"div",html:_("sri.license_type_txt"),cls:"directions"}},{xtype:"box",autoEl:{tag:"div",html:_("sri.license_type_heading")}},{xtype:"combo",id:"metadata-license_type-entry",hiddenName:"license_type",hideLabel:true,width:"75%",mode:"local",store:Curriki.data.licence.store,displayField:"licence",valueField:"id",typeAhead:true,triggerAction:"all",emptyText:_("sri.license_type_empty_msg"),selectOnFocus:true,forceSelection:true,value:Curriki.data.licence.initial?Curriki.data.licence.initial:undefined}]}]}]});A.Metadata2.superclass.initComponent.call(this)}});Ext.reg("apSRI2",A.Metadata2);A.MetadataFinished=function(){if("string"===typeof Curriki.current.sri1.ict){Curriki.current.sri1.ict=Curriki.current.sri1.ict.split(",")}if("string"===typeof Curriki.current.sri1.educational_level2){Curriki.current.sri1.educational_level2=Curriki.current.sri1.educational_level2.split(",")}var B=Curriki.current.sri1;Ext.apply(B,Curriki.current.sri2);Curriki.assets.SetMetadata(Curriki.current.asset.assetPage,B,function(C){console.log("SetMD CB: ",C);Curriki.assets.Publish(Curriki.current.asset.assetPage,Curriki.current.publishSpace,function(D){console.log("Published CB: ",D);Curriki.current.assetName=D.assetPage;Curriki.current.asset.assetPage=D.assetPage;Curriki.current.asset.assetType=D.assetType;Curriki.current.asset.fullAssetType=D.fullAssetType;Curriki.current.asset.title=D.title;Curriki.current.asset.description=D.description;if(Curriki.current.parentAsset){Curriki.assets.CreateSubasset(Curriki.current.parentAsset,Curriki.current.assetName,-1,A.ShowDone())}else{A.ShowDone()}})})};A.FinalLink=function(G){var E,F,D,B,C;F=_("add.finalmessage."+G+".link");B=Curriki.current.asset.assetPage;C=false;switch(G){case"view":E="/xwiki/bin/view/"+B.replace(".","/");break;case"add":if(Curriki.data.user.collectionChildren.length>0||Curriki.data.user.groupChildren.length>0){D=function(I,H){Curriki.current.flow="E";Curriki.ui.show("apLocation");var J=Ext.getCmp("done-dialogue");if(J){J.close()}}}else{C=true}break;case"openbuilder":E="/xwiki/bin/view/GWT/Editor?xpage=plain&page="+B+"&mode=edit";break;case"viewtarget":E="/xwiki/bin/view/"+B.replace(".","/");F=_("add.finalmessage.viewtarget.link",Curriki.current.assetTitle||Curriki.current.sri1.title||"UNKNOWN");break;case"continue":E=Curriki.current.cameFrom;break;case"contributions":E="/xwiki/bin/view/MyCurriki/Contributions";break;case"collections":E="/xwiki/bin/view/MyCurriki/Collections";break;case"favorites":E="/xwiki/bin/view/MyCurriki/Favorites";break;case"close":E=Curriki.current.cameFrom;break}if(!D){D=function(I,H){window.location.href=E}}return{text:_("add.finalmessage."+G+".link"),cls:"button link",handler:D,hidden:C}};A.DoneMessage=function(B){var C;switch(Curriki.current.flow){case"E":case"H":case"J":case"P":case"F":case"N":case"L":case"FFolder":case"NFolder":case"LFolder":var D=[Curriki.current.assetTitle||Curriki.current.sri1.title||"UNKNOWN",Curriki.current.parentTitle];C="<p>"+_("add.finalmessage.text_"+B+"_success")+"</p>";break;default:C="<p>"+_("add.finalmessage.text_"+B+"_success")+"</p>";break}switch(Curriki.current.flow){case"K":case"M":C+="<p>"+_("add.finalmessage.text_"+B+"_tip1")+"</p>";C+="<p>"+_("add.finalmessage.text_"+B+"_tip2")+"</p>";break}return{xtype:"box",autoEl:{tag:"div",cls:"done-message",html:C}}};A.CloseDone=function(B){return{text:_("add.finalmessage.close.button"),id:"closebutton",cls:"button cancel",listeners:{click:{fn:function(D,C){this.close();if(!Ext.isEmpty(Curriki.current.cameFrom)){window.location.href=Curriki.current.cameFrom}},scope:B}}}};A.DoneA=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_resource"),cls:"resource resource-add",bbar:[A.FinalLink("view"),"-",A.FinalLink("add"),"-",A.FinalLink("contributions"),"->",A.CloseDone(this)],items:[A.DoneMessage("resource")]});A.DoneA.superclass.initComponent.call(this)}});Ext.reg("apDoneA",A.DoneA);Ext.reg("apDoneB",A.DoneA);Ext.reg("apDoneD",A.DoneA);A.DoneC=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_collection"),cls:"resource resource-add",bbar:[A.FinalLink("openbuilder"),"-",A.FinalLink("collections"),"->",A.CloseDone(this)],items:[A.DoneMessage("collection")]});A.DoneC.superclass.initComponent.call(this)}});Ext.reg("apDoneC",A.DoneC);A.DoneE=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_successful"),cls:"resource resource-add",bbar:[A.FinalLink("viewtarget"),"->",A.CloseDone(this)],items:[A.DoneMessage("addto")]});A.DoneE.superclass.initComponent.call(this)}});Ext.reg("apDoneE",A.DoneE);Ext.reg("apDoneH",A.DoneE);Ext.reg("apDoneJ",A.DoneE);Ext.reg("apDoneP",A.DoneE);A.DoneF=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_successful"),cls:"resource resource-add",bbar:["->",A.CloseDone(this)],items:[A.DoneMessage("addto")]});A.DoneF.superclass.initComponent.call(this)}});Ext.reg("apDoneF",A.DoneF);Ext.reg("apDoneN",A.DoneF);Ext.reg("apDoneL",A.DoneF);A.DoneFFolder=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_folder"),cls:"resource resource-add",bbar:[A.FinalLink("continue"),"-",A.FinalLink("openbuilder"),"->",A.CloseDone(this)],items:[A.DoneMessage("addto_folder")]});A.DoneFFolder.superclass.initComponent.call(this)}});Ext.reg("apDoneFFolder",A.DoneFFolder);Ext.reg("apDoneNFolder",A.DoneFFolder);Ext.reg("apDoneLFolder",A.DoneFFolder);A.DoneG=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_folder"),cls:"resource resource-add",bbar:[A.FinalLink("favorites"),"->",A.CloseDone(this)],items:[A.DoneMessage("favorites")]});A.DoneG.superclass.initComponent.call(this)}});Ext.reg("apDoneG",A.DoneG);A.DoneK=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_collection"),cls:"resource resource-add",bbar:["->",A.FinalLink("continue")],items:[A.DoneMessage("collection")]});A.DoneK.superclass.initComponent.call(this)}});Ext.reg("apDoneK",A.DoneK);A.DoneM=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_collection"),cls:"resource resource-add",bbar:["->",A.FinalLink("continue")],items:[A.DoneMessage("groupcollection")]});A.DoneM.superclass.initComponent.call(this)}});Ext.reg("apDoneM",A.DoneM);A.DoneI=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{title:_("add.finalmessage.title_resource"),cls:"resource resource-add",bbar:[A.FinalLink("view"),"-",A.FinalLink("add"),"->",A.CloseDone(this)],items:[A.DoneMessage("resource_simple")]});A.DoneI.superclass.initComponent.call(this)}});Ext.reg("apDoneI",A.DoneI);Ext.reg("apDoneO",A.DoneI);A.ShowDone=function(){var B=Ext.ComponentMgr.create({xtype:"apDone"+Curriki.current.flow+Curriki.current.flowFolder,id:"done-dialogue"});B.show();Ext.ComponentMgr.register(B)};A.ChooseLocation=Ext.extend(Curriki.ui.dialog.Messages,{initComponent:function(){Ext.apply(this,{id:"ChooseLocationDialogueWindow",title:_("add.chooselocation.title"),cls:"resource resource-add",items:[{xtype:"form",id:"ChooseLocationDialoguePanel",formId:"ChooseLocationDialogueForm",labelWidth:25,autoScroll:true,border:false,defaults:{labelSeparator:""},bbar:["->",{text:_("add.chooselocation.cancel.button"),id:"cancelbutton",cls:"button cancel",listeners:{click:{fn:function(){this.close()},scope:this}}},{text:_("add.chooselocation.next.button"),id:"nextbutton",cls:"button next",disabled:true,listeners:{click:{fn:function(){A.AddSubasset(function(){var B=Ext.getCmp("ChooseLocationDialogueWindow");if(B){B.close()}})},scope:this}}}],items:[{xtype:"box",autoEl:{tag:"div",html:_("add.chooselocation.guidingquestion"),cls:"guidingquestion"}},{xtype:"box",autoEl:{tag:"div",html:_("add.chooselocation.instruction"),cls:"instruction"}},{xtype:"container",id:"resource-pickup",items:[{xtype:"box",id:"resource-pickup-title",autoEl:{tag:"div",html:"TRANS: Click to drag this text"}},{xtype:"treepanel",loader:new Curriki.ui.treeLoader.Base(),id:"ctv-from-tree-cmp",useArrows:true,autoScroll:true,border:false,cls:"ctv-from-tree",animate:true,enableDrag:true,containerScroll:true,rootVisible:false,root:new Ext.tree.AsyncTreeNode({text:_("ROOT - Unshown"),id:"ctv-drag-tree-root",cls:"ctv-drag-root",leaf:false,allowDrag:false,allowDrop:false,loaded:true,expanded:true,children:[{text:(Curriki.current.asset&&Curriki.current.asset.title)||Curriki.current.assetTitle||"UNKNOWN",id:"ctv-target-node",assetName:(Curriki.current.asset&&Curriki.current.asset.assetPage)||Curriki.current.assetName,cls:"ctv-target ctv-resource resource-"+((Curriki.current.asset&&Curriki.current.asset.assetType)||Curriki.current.assetType||"UNKNOWN"),leaf:true,loaded:true}]})}],autoEl:{tag:"div",id:"resource-pickup-box",html:""}},{xtype:"container",id:"resource-drop",items:[{xtype:"treepanel",loader:new Curriki.ui.treeLoader.Base(),id:"ctv-to-tree-cmp",useArrows:true,autoScroll:true,border:false,cls:"ctv-to-tree",animate:true,enableDD:true,containerScroll:true,rootVisible:false,listeners:{nodedrop:{fn:function(E){var G=Ext.getCmp("ctv-to-tree-cmp").getNodeById("ctv-target-node");var B=G.parentNode;var D=B.id;var F=G.nextSibling;var C=-1;if(F){C=F.attributes.order||-1}Curriki.current.drop={parentPage:D,targetIndex:C};A.EnableNext()},scope:this}},root:new Ext.tree.AsyncTreeNode({text:_("ROOT - Unshown"),id:"ctv-drop-tree-root",cls:"ctv-drop-root",leaf:false,allowDrag:false,allowDrop:false,loaded:true,expanded:true,children:[Curriki.data.user.collectionChildren.length>0?{text:_("panels.myCurriki.myCollections"),id:"ctv-drop-tree-collection-root",cls:"ctv-top ctv-header ctv-collections",leaf:false,allowDrag:false,allowDrop:false,loaded:true,expanded:(Curriki.data.user.collectionChildren.length<4),children:Curriki.data.user.collectionChildren}:{},Curriki.data.user.groupChildren.length>0?{text:_("panels.myCurriki.myGroups"),id:"ctv-drop-tree-group-root",cls:"ctv-top ctv-header ctv-groups",leaf:false,allowDrag:false,allowDrop:false,loaded:true,expanded:(Curriki.data.user.groupChildren.length<4),children:Curriki.data.user.groupChildren}:{}]})}],autoEl:{tag:"div",id:"resource-drop-box",html:""}}]}]});A.ChooseLocation.superclass.initComponent.call(this)}});Ext.reg("apLocation",A.ChooseLocation);A.PostToTemplate=function(B){Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(C){Curriki.current.asset=C;var D=new Ext.FormPanel({standardSubmit:true,url:B,method:"POST",onSubmit:Ext.emptyFn,submit:function(){this.getForm().getEl().dom.action=this.getForm().url;this.getForm().getEl().dom.submit()},applyTo:Ext.getBody(),cls:"x-hide-display",items:[{xtype:"hidden",name:"pageName",value:C.assetPage},{xtype:"hidden",name:"cameFrom",value:Curriki.current.cameFrom},{xtype:"hidden",name:"flow",value:Curriki.current.flow},{xtype:"hidden",name:"parentPage",value:Curriki.current.asset.parentAsset}]});D.submit();var E=Ext.getCmp(A.AddSourceDialogueId);if(E){E.close()}})};A.PostFile=function(B){Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(C){Curriki.current.asset=C;Ext.Ajax.request({url:"/xwiki/bin/upload/"+C.assetPage.replace(".","/"),isUpload:true,form:"addDialogueForm",headers:{Accept:"application/json"},callback:function(E,F,D){console.log("upload CB:",E,F,D);B()}})})};A.AddSubasset=function(B){Curriki.assets.CreateSubasset(Curriki.current.drop.parentPage,Curriki.current.asset.assetPage,Curriki.current.drop.targetIndex,function(){if("function"===typeof B){B()}})};A.AddFavorite=function(B){Curriki.assets.CreateSubasset("Coll_"+Curriki.data.user.me.username.replace("XWiki.","")+".Favorites",Curriki.current.assetName,-1,function(){if("function"===typeof B){B()}})};A.ShowNextDialogue=function(C,E){var D=Ext.ComponentMgr.create({xtype:C});D.show();Ext.ComponentMgr.register(D);if(!Ext.isEmpty(E)){var B=Ext.getCmp(E);if(B){B.close()}}};A.SourceSelected=function(D,B){Curriki.current.selected=D;var C;switch(D){case"file":Curriki.current.fileName=B.filename;C="apSRI1";A.PostFile(function(){callback=function(){A.ShowNextDialogue(C,A.AddSourceDialogueId)};if(Curriki.current.parentAsset){Curriki.assets.GetMetadata(asset.assetPage,function(E){Curriki.current.metadata=E;callback()})}else{callback()}});return ;break;case"video_upload":case"video_capture":Curriki.current.videoId=B[D+"-entry-value"];C="apSRI1";Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(E){console.log("CreateAsset (video) CB: ",E);Curriki.current.asset=E;Curriki.assets.CreateVIDITalk(E.assetPage,Curriki.current.videoId,function(F){console.log("Created viditalk CB: ",F);callback=function(){A.ShowNextDialogue(C,A.AddSourceDialogueId)};if(Curriki.current.parentAsset){Curriki.assets.GetMetadata(E.assetPage,function(G){Curriki.current.metadata=G;callback()})}else{callback()}})});return ;break;case"link":Curriki.current.linkUrl=B.link;C="apSRI1";Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(E){console.log("CreateAsset (link) CB: ",E);Curriki.current.asset=E;Curriki.assets.CreateExternal(E.assetPage,Curriki.current.linkUrl,function(F){console.log("Created Link CB: ",F);callback=function(){A.ShowNextDialogue(C,A.AddSourceDialogueId)};if(Curriki.current.parentAsset){Curriki.assets.GetMetadata(E.assetPage,function(G){Curriki.current.metadata=G;callback()})}else{callback()}})});return ;break;case"repository":break;case"template":if(A.TemplateList().size()>1){C="apSelectTemplate"}else{A.PostToTemplate(_("add.selecttemplate.list1.url"));return }break;case"scratch":A.PostToTemplate(_("form.scratch.url"));return ;break;case"folder":C="apSRI1";Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(E){console.log("CreateAsset (folder) CB: ",E);Curriki.current.asset=E;Curriki.assets.CreateFolder(E.assetPage,function(F){console.log("Created Folder CB: ",F);Curriki.current.flowFolder="Folder";callback=function(){A.ShowNextDialogue(C,A.AddSourceDialogueId)};if(Curriki.current.parentAsset){Curriki.assets.GetMetadata(E.assetPage,function(G){Curriki.current.metadata=G;callback()})}else{callback()}})});return ;break;case"collection":C="apSRI1";Curriki.assets.CreateAsset(Curriki.current.parentAsset,function(E){console.log("CreateAsset (collection) CB: ",E);Curriki.current.asset=E;Curriki.assets.CreateCollection(E.assetPage,function(F){console.log("Created Collection CB: ",F);callback=function(){A.ShowNextDialogue(C)};callback()})});return ;break;case"toFavorites":A.AddFavorite(function(){A.ShowDone()});return ;break;default:C="apSRI1";break}if(!Ext.isEmpty(C)){A.ShowNextDialogue(C,A.AddSourceDialogueId)}};A.start=function(B){console.log("Starting path: ",B);if(Ext.isEmpty(Curriki.data.user.me)||"XWiki.XWikiGuest"===Curriki.data.user.me.username){console.log("Not signed in:");window.location.href="/xwiki/bin/login/XWiki/XWikiLogin?xredirect="+window.location.href;return }if(Ext.isEmpty(Curriki.current.cameFrom)){Curriki.current.cameFrom=window.location.href}if(Ext.isEmpty(Curriki.current.publishSpace)){Curriki.current.publishSpace="Coll_"+Curriki.data.user.me.username.replace(/XWiki\./,"")}if(!Ext.isEmpty(B)){Curriki.current.flow=B}switch(Curriki.current.flow){case"B":case"I":case"O":Curriki.ui.show("apSource");return ;break;case"D":Curriki.current.flow="B";Curriki.ui.show("apSource");return ;break;case"D1":Curriki.current.flow="D";A.SourceSelected("scratch",{});return ;break;case"D2":Curriki.current.flow="D";A.SourceSelected("template",{});return ;break;case"C":case"K":case"M":A.SourceSelected("collection",{});return ;break;case"E":case"H":case"J":case"P":console.log("Starting path:",Curriki.current.flow);Curriki.ui.show("apLocation");return ;break;case"G":A.SourceSelected("toFavorites",{});return ;break;case"F":case"L":case"N":Curriki.ui.show("apSource",{toFolder:true});return ;break}};Curriki.module.addpath.initialized=true};Curriki.module.addpath.startPath=function(C,A){var B=Curriki.current;if(!Ext.isEmpty(A)){B.assetName=A.assetName||null;B.parentAsset=A.parentAsset||null;B.publishSpace=A.publishSpace||null;B.cameFrom=A.cameFrom||null;B.assetTitle=A.assetTitle||null;B.assetType=A.assetType||null;B.parentTitle=A.parentTitle||null}Curriki.init(function(){if(Ext.isEmpty(Curriki.data.user.me)||"XWiki.XWikiGuest"===Curriki.data.user.me.username){window.location.href="/xwiki/bin/login/XWiki/XWikiLogin?xredirect="+window.location.href;return }if(Ext.isEmpty(Curriki.module.addpath.initialized)){Curriki.module.addpath.init()}var F=function(){Curriki.module.addpath.start(C)};var D;if(!Ext.isEmpty(B.parentAsset)&&Ext.isEmpty(B.parentTitle)){D=function(){Curriki.assets.GetAssetInfo(B.parentAsset,function(G){Curriki.current.parentTitle=G.title;F()})}}else{D=function(){F()}}var E;if(!Ext.isEmpty(B.assetName)&&(Ext.isEmpty(B.assetTitle)||Ext.isEmpty(B.assetType))){E=function(){Curriki.assets.GetAssetInfo(B.assetName,function(G){Curriki.current.assetTitle=G.title;Curriki.current.assetType=G.assetType;D()})}}else{E=function(){D()}}E()})};Curriki.module.addpath.loaded=true;Ext.ns("Curriki.current");Curriki.current={init:function(){Ext.apply(this,{assetName:null,parentAsset:null,publishSpace:null,cameFrom:null,flow:null,flowFolder:"",assetTitle:null,assetType:null,parentTitle:null,asset:null,metadata:null,selected:null,fileName:null,videoId:null,linkUrl:null,sri1:null,sri1fillin:null,sri2fillin:null,submitToTemplate:null,drop:null})}};Curriki.current.init();