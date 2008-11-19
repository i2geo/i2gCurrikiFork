package org.curriki.gwt.client.widgets.design;

import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.Window;
import org.curriki.gwt.client.Main;
import org.curriki.gwt.client.Constants;
/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
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
 * @author jeremi
 */

public class Header extends Composite {

    public Header(){
        DockPanel panel = new DockPanel();
        // panel.setWidth("100%");
        panel.addStyleName("header-block");
        
        Image img = new Image(Constants.CURRIKI_LOGO);
        img.addStyleName("header-block-img");
        panel.add(img, DockPanel.WEST);
        // panel.setCellWidth(img, "220px");

        VerticalPanel vPanel = new VerticalPanel();
        vPanel.addStyleName("header-block-title");
        panel.add(vPanel, DockPanel.CENTER);

        HTML label = new HTML(Main.getTranslation("header.editor_title"));
        label.addStyleName("editor-title");
        vPanel.add(label);
        label = new HTML(Main.getTranslation("header.editor_subtitle"));
        label.addStyleName("editor-subtitle");
        vPanel.add(label);

        Button button = new Button(Main.getTranslation("header.close"), new ClickListener(){
            public void onClick(Widget sender) {
                if (!Main.getSingleton().getEditor().isInEditMode())
                    close();
                else {
                    Window.alert(Main.getTranslation("editor.youareeditinganassetsaveyourworkfirst"));
                }
            }
        });
        button.addStyleName("close-btt");

        panel.add(button, DockPanel.EAST);
        initWidget(panel);
    }


    public native void close() /*-{
       //var currLocation = $wnd.location.toString().split("/");
       $wnd.close();
       //$wnd.location.replace(currLocation[0] + currLocale);
    }-*/;

}
