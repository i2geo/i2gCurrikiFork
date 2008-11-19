package org.curriki.gwt.client.widgets.browseasset;

import com.google.gwt.user.client.ui.TreeItem;
import org.curriki.gwt.client.Main;
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

public class InsertHereTreeItem extends TreeItem {

    public InsertHereTreeItem(int newposition){
        super("<b>" + Main.getTranslation("browseasset.insert_here") + "</b>");
        addStyleName("asset-tree-item");
        addStyleName("asset-tree-item-insert-here");
        setUserObject(new Integer(newposition));
    }

    public int getPosition() {
        return ((Integer) getUserObject()).intValue();
    }


}