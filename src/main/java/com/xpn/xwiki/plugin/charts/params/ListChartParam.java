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
package com.xpn.xwiki.plugin.charts.params;

import com.xpn.xwiki.plugin.charts.exceptions.ParamException;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ListChartParam extends AbstractChartParam {
	private ChartParam param;

	public ListChartParam(ChartParam param) {
		this(param, true);
	}

	public ListChartParam(ChartParam param, boolean optional) {
		super(param.getName(), optional);
		this.param = param;
	}
	
	public Class getType() {
		return List.class;
	}

	public Object convert(String value) throws ParamException {
		List list = parseList(value);
		List result = new ArrayList(list.size());
		Iterator it = list.iterator();
		while (it.hasNext()) {
			String s = (String)it.next();
			result.add(param.convert(s));
		}
		return result;
	}
}
