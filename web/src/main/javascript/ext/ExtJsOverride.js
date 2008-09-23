// vim: ts=4:sw=4
/*global Ext */

Ext.override(Ext.layout.FormLayout, {
    adjustWidthAnchor : function(value, comp){
        return value - (comp.isFormField  ? (comp.hideLabel ? 0 : this.labelAdjust) : 0) - comp.el.getMargins('lr');
    }
});

Ext.override(Ext.layout.AnchorLayout, {
    getAnchorViewSize : function(ct, target){
        var el = ct.body||ct.el; 
        return {
        	width: el.dom.clientWidth - el.getPadding('lr'),
        	height: el.dom.clientHeight - el.getPadding('tb')
        };
    },
    // private
    adjustWidthAnchor : function(value, comp){
        return value - comp.el.getMargins('lr');
    },

    // private
    adjustHeightAnchor : function(value, comp){
        return value - comp.el.getMargins('tb');
    }
});

// Fix some state issues
// From: http://extjs.com/forum/showthread.php?t=34787&page=2
Ext.override(Ext.Component, {
    saveState : function(){
        if(Ext.state.Manager && this.stateful !== false){
            var state = this.getState();
            if(this.fireEvent('beforestatesave', this, state) !== false){
                Ext.state.Manager.set(this.stateId || this.id, state);
                this.fireEvent('statesave', this, state);
            }
        }
    },

    stateful : false
}); 


// Fix issues with combo boxes not hiding with correct method
// Default uses display CSS method with no thought to what hideMode is
Ext.override(Ext.form.TriggerField, {
    // private
    onShow : function(){
        if(this.wrap){
            this.wrap.show();
        }
    },

    // private
    onHide : function(){
        this.wrap.hide();
    }
});

// CURRIKI-2724
// Remove "Refresh" button from paging toolbar
Ext.override(Ext.PagingToolbar, {
	// private
    onRender : function(ct, position){
        Ext.PagingToolbar.superclass.onRender.call(this, ct, position);
        this.first = this.addButton({
            tooltip: this.firstText,
            iconCls: "x-tbar-page-first",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["first"])
        });
        this.prev = this.addButton({
            tooltip: this.prevText,
            iconCls: "x-tbar-page-prev",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["prev"])
        });
        this.addSeparator();
        this.add(this.beforePageText);
        this.field = Ext.get(this.addDom({
           tag: "input",
           type: "text",
           size: "3",
           value: "1",
           cls: "x-tbar-page-number"
        }).el);
        this.field.on("keydown", this.onPagingKeydown, this);
        this.field.on("focus", function(){this.dom.select();});
        this.afterTextEl = this.addText(String.format(this.afterPageText, 1));
        this.field.setHeight(18);
        this.addSeparator();
        this.next = this.addButton({
            tooltip: this.nextText,
            iconCls: "x-tbar-page-next",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["next"])
        });
        this.last = this.addButton({
            tooltip: this.lastText,
            iconCls: "x-tbar-page-last",
            disabled: true,
            handler: this.onClick.createDelegate(this, ["last"])
        });
/* Removed for CURRIKI-2724
        this.addSeparator();
*/
        this.loading = this.addButton({
            hidden: true, // Added for CURRIKI-2724 - We can't actually remove this item as it is referred to elsewhere
            tooltip: this.refreshText,
            iconCls: "x-tbar-loading",
            handler: this.onClick.createDelegate(this, ["refresh"])
        });

        if(this.displayInfo){
            this.displayEl = Ext.fly(this.el.dom).createChild({cls:'x-paging-info'});
        }
        if(this.dsLoaded){
            this.onLoad.apply(this, this.dsLoaded);
        }
    }
});

/*
Ext.override(Ext.Shadow.prototype, {
	realign: function(l, t, w, h){
		if(!this.el){
		    return;
		}
		var a = this.adjusts, d = this.el.dom, s = d.style;
		if (s.visibility === "hidden" || s.display === "none"){
			return;
		}
		var iea = 0;
		s.left = (l+a.l)+"px";
		s.top = (t+a.t)+"px";
		var sw = (w+a.w), sh = (h+a.h), sws = sw +"px", shs = sh + "px";
		if(s.width != sws || s.height != shs){
		    s.width = sws;
		    s.height = shs;
		    if(!Ext.isIE){
			var cn = d.childNodes;
			var sww = Math.max(0, (sw-12))+"px";
			cn[0].childNodes[1].style.width = sww;
			cn[1].childNodes[1].style.width = sww;
			cn[2].childNodes[1].style.width = sww;
			cn[1].style.height = Math.max(0, (sh-12))+"px";
		    }
		}
    }
});
*/