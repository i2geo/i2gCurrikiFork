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
 */

package com.xpn.xwiki.api;

import com.xpn.xwiki.XWikiContext;

public class PropertyClass extends Collection
{

    public PropertyClass(com.xpn.xwiki.objects.classes.PropertyClass property,
        XWikiContext context)
    {
        super(property, context);
    }

    protected com.xpn.xwiki.objects.classes.PropertyClass getBasePropertyClass()
    {
        return (com.xpn.xwiki.objects.classes.PropertyClass) getCollection();
    }

    public String getClassType()
    {
        return getBasePropertyClass().getClassType();
    }

    public String getType()
    {
        String result = getBasePropertyClass().getClassType();
        return result.substring(result.lastIndexOf(".") + 1);
    }

    public String getClassName()
    {
        return getCollection().getClassName();
    }

    public com.xpn.xwiki.objects.classes.PropertyClass getPropertyClass()
    {
        if (hasProgrammingRights()) {
            return (com.xpn.xwiki.objects.classes.PropertyClass) getCollection();
        }
        return null;
    }

    public String getPrettyName()
    {
        return getBasePropertyClass().getPrettyName();
    }

    public String getValidationMessage()
    {
        return getBasePropertyClass().getValidationMessage();
    }

    public String getValidationRegExp()
    {
        return getBasePropertyClass().getValidationRegExp();
    }

    public String getTooltip()
    {
        return getBasePropertyClass().getTooltip();
    }

}