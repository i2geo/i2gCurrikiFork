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
package com.xpn.xwiki.objects.classes;

import org.xwiki.component.manager.ComponentManager;

import com.xpn.xwiki.XWikiConfig;
import com.xpn.xwiki.XWiki;
import com.xpn.xwiki.store.XWikiHibernateStore;
import com.xpn.xwiki.test.AbstractXWikiComponentTestCase;
import com.xpn.xwiki.web.Utils;
import com.xpn.xwiki.doc.XWikiDocument;

/**
 * Unit tests for {@link DBListClass}.
 * 
 * @version $Id$
 */
public class DBListClassTest extends AbstractXWikiComponentTestCase
{
    protected void setUp() throws Exception
    {
        super.setUp();
        
        getContext().setDoc(new XWikiDocument());

        XWikiHibernateStore store = new XWikiHibernateStore("dummy");
        XWiki xwiki = new XWiki();
        getContext().setWiki(xwiki);
        xwiki.setStore(store);
    }

    public void testGetDefaultQueryWhenNoSqlSCriptSpecified()
    {
        DBListClass dblc = new DBListClass();
        assertEquals("", dblc.getSql());
        assertEquals("select doc.name from XWikiDocument doc where 1 = 0", dblc.getQuery(getContext()));
    }

    public void testGetQueryWithSqlScriptSpecified()
    {
        DBListClass dblc = new DBListClass();
        assertEquals("", dblc.getSql());
        String sql = "select doc.creator from XWikiDocument as doc";
        dblc.setSql(sql);
        assertEquals(sql, dblc.getQuery(getContext()));
    }

    public void testGetQueryWithClassSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setClassname("XWiki.XWikiUsers");
        assertEquals("select distinct doc.fullName from XWikiDocument as doc, BaseObject as obj where "
            + "doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
    }

    public void testGetQueryWithIdSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setIdField("doc.name");
        assertEquals("select distinct doc.name from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setIdField("obj.className");
        assertEquals("select distinct obj.className from BaseObject as obj", dblc.getQuery(getContext()));
        dblc.setIdField("property");
        assertEquals("select distinct doc.property from XWikiDocument as doc", dblc.getQuery(getContext()));
    }

    public void testGetQueryWithValueSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setValueField("doc.name");
        assertEquals("select distinct doc.name from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct obj.className from BaseObject as obj", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct doc.property from XWikiDocument as doc", dblc.getQuery(getContext()));
    }

    public void testGetQueryWithIdAndClassnameSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setClassname("XWiki.XWikiUsers");
        dblc.setIdField("doc.name");
        assertEquals("select distinct doc.name from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setIdField("obj.className");
        assertEquals(
            "select distinct obj.className from BaseObject as obj" + " where obj.className='XWiki.XWikiUsers'", dblc
                .getQuery(getContext()));
        dblc.setIdField("property");
        assertEquals("select distinct idprop.value from BaseObject as obj, StringProperty as idprop"
            + " where obj.className='XWiki.XWikiUsers'" + " and obj.id=idprop.id.id and idprop.id.name='property'",
            dblc.getQuery(getContext()));
    }

    public void testGetQueryWithIdAndValueSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setIdField("doc.name");
        dblc.setValueField("doc.name");
        assertEquals("select distinct doc.name from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setValueField("doc.creator");
        assertEquals("select distinct doc.name, doc.creator from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct doc.name, obj.className from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct doc.name, doc.property from XWikiDocument as doc", dblc.getQuery(getContext()));

        dblc.setIdField("obj.className");
        dblc.setValueField("doc.name");
        assertEquals("select distinct obj.className, doc.name"
            + " from XWikiDocument as doc, BaseObject as obj where doc.fullName=obj.name", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct obj.className from BaseObject as obj", dblc.getQuery(getContext()));
        dblc.setValueField("obj.id");
        assertEquals("select distinct obj.className, obj.id from BaseObject as obj", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct obj.className, doc.property"
            + " from XWikiDocument as doc, BaseObject as obj where doc.fullName=obj.name", dblc.getQuery(getContext()));

        dblc.setIdField("property");
        dblc.setValueField("doc.name");
        assertEquals("select distinct doc.property, doc.name from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct doc.property, obj.className"
            + " from XWikiDocument as doc, BaseObject as obj where doc.fullName=obj.name", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct doc.property from XWikiDocument as doc", dblc.getQuery(getContext()));
        dblc.setValueField("otherProperty");
        assertEquals("select distinct doc.property, doc.otherProperty from XWikiDocument as doc", dblc
            .getQuery(getContext()));
    }

    public void testGetQueryWithIdValueAndClassSpecified()
    {
        DBListClass dblc = new DBListClass();
        dblc.setClassname("XWiki.XWikiUsers");
        dblc.setIdField("doc.name");
        dblc.setValueField("doc.name");
        assertEquals("select distinct doc.name from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setValueField("doc.creator");
        assertEquals("select distinct doc.name, doc.creator from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct doc.name, obj.className from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct doc.name, valueprop.value"
            + " from XWikiDocument as doc, BaseObject as obj, StringProperty as valueprop"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'"
            + " and obj.id=valueprop.id.id and valueprop.id.name='property'", dblc.getQuery(getContext()));

        dblc.setIdField("obj.className");
        dblc.setValueField("doc.name");
        assertEquals("select distinct obj.className, doc.name" + " from XWikiDocument as doc, BaseObject as obj"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals(
            "select distinct obj.className from BaseObject as obj" + " where obj.className='XWiki.XWikiUsers'", dblc
                .getQuery(getContext()));
        dblc.setValueField("obj.id");
        assertEquals("select distinct obj.className, obj.id from BaseObject as obj"
            + " where obj.className='XWiki.XWikiUsers'", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct obj.className, valueprop.value"
            + " from BaseObject as obj, StringProperty as valueprop" + " where obj.className='XWiki.XWikiUsers'"
            + " and obj.id=valueprop.id.id and valueprop.id.name='property'", dblc.getQuery(getContext()));

        dblc.setIdField("property");
        dblc.setValueField("doc.name");
        assertEquals("select distinct idprop.value, doc.name"
            + " from XWikiDocument as doc, BaseObject as obj, StringProperty as idprop"
            + " where doc.fullName=obj.name and obj.className='XWiki.XWikiUsers'"
            + " and obj.id=idprop.id.id and idprop.id.name='property'", dblc.getQuery(getContext()));
        dblc.setValueField("obj.className");
        assertEquals("select distinct idprop.value, obj.className"
            + " from BaseObject as obj, StringProperty as idprop" + " where obj.className='XWiki.XWikiUsers'"
            + " and obj.id=idprop.id.id and idprop.id.name='property'", dblc.getQuery(getContext()));
        dblc.setValueField("property");
        assertEquals("select distinct idprop.value" + " from BaseObject as obj, StringProperty as idprop"
            + " where obj.className='XWiki.XWikiUsers'" + " and obj.id=idprop.id.id and idprop.id.name='property'",
            dblc.getQuery(getContext()));
        dblc.setValueField("otherProperty");
        assertEquals("select distinct idprop.value, valueprop.value"
            + " from BaseObject as obj, StringProperty as idprop, StringProperty as valueprop"
            + " where obj.className='XWiki.XWikiUsers'" + " and obj.id=idprop.id.id and idprop.id.name='property'"
            + " and obj.id=valueprop.id.id and valueprop.id.name='otherProperty'", dblc.getQuery(getContext()));
    }
}