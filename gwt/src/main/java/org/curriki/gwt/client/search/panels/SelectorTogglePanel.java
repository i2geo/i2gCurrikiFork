/*
 * Copyright 2007, The Global Education and Learning Community,
 * and individual contributors as indicated by the contributors.txt.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 * @author dward
 *
 */
package org.curriki.gwt.client.search.panels;

import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.ScrollPanel;
import org.curriki.gwt.client.Main;
import org.curriki.gwt.client.Constants;
import org.curriki.gwt.client.search.history.KeepsState;
import org.curriki.gwt.client.search.history.ClientState;

public class SelectorTogglePanel extends VerticalPanel implements ClickListener, KeepsState
{
    protected SelectorFilterPanel filters;
    protected ScrollPanel scroller;
    protected HTML toggleWidget;

    public SelectorTogglePanel()
    {
        toggleWidget = new HTML();
        toggleWidget.addClickListener(this);

        add(toggleWidget);
    }

    public void setTogglePanel(SelectorFilterPanel filters)
    {
        this.filters = filters;
        doSetToggleWidget();
    }

    public void doToggle()
    {
        if (filters == null){
            return;
        }

        if (filters.isVisible()){
            filters.setVisible(false);
        } else {
            filters.setVisible(true);
        }

        doSetToggleWidget();
    }

    public void doSetToggleWidget()
    {
        if (filters == null){
            return;
        }
        
        if (filters.isVisible()){
            toggleWidget.setHTML(Main.getTranslation("search.instruction.adv.close"));
            if (scroller != null){
                scroller.removeStyleName("find-results-scroller-simple");
                scroller.addStyleName("find-results-scroller-advanced");
            }
        } else {
            toggleWidget.setHTML(Main.getTranslation("search.instruction.adv.open"));
            if (scroller != null){
                scroller.removeStyleName("find-results-scroller-advanced");
                scroller.addStyleName("find-results-scroller-simple");
            }
        }
    }

    public void setToggleValue(boolean show){
        if (filters == null){
            return;
        }

        filters.setVisible(show);
        doSetToggleWidget();
    }

    public void onClick(Widget widget)
    {
        doToggle();
    }

    public void loadState(ClientState state){
        if (state.getValue(Constants.HISTORY_FIELD_ADV_TOGGLE).length() > 0){
            setToggleValue(state.getValue(Constants.HISTORY_FIELD_ADV_TOGGLE).equals("1"));
        }
    }

    public void saveState(ClientState state){
        state.setValue(Constants.HISTORY_FIELD_ADV_TOGGLE, (filters.isVisible()?"1":"0"));
    }

    public void addResultsScrollPanel(ScrollPanel scrollPanel)
    {
        scroller = scrollPanel;
    }
}
