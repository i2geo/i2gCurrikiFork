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
 */
package com.xpn.xwiki.web;

import com.xpn.xwiki.XWikiContext;
import com.xpn.xwiki.XWikiException;
import com.xpn.xwiki.doc.XWikiAttachment;
import com.xpn.xwiki.doc.XWikiDocument;
import com.xpn.xwiki.util.Util;

import java.util.ArrayList;

public class DeleteAttachmentAction extends XWikiAction
{
    public boolean action(XWikiContext context) throws XWikiException
    {
        XWikiRequest request = context.getRequest();
        XWikiResponse response = context.getResponse();
        XWikiDocument doc = context.getDoc();
        XWikiAttachment attachment = null;
        String filename;
        if (context.getMode() == XWikiContext.MODE_PORTLET) {
            filename = request.getParameter("filename");
        } else {
            // Note: We use getRequestURI() because the spec says the server doesn't decode it, as
            // we want to use our own decoding.
            String requestUri = request.getRequestURI();
            filename =
                Util.decodeURI(requestUri.substring(requestUri.lastIndexOf("/") + 1), context);
        }

        XWikiDocument newdoc = (XWikiDocument) doc.clone();

        // An attachment can be indicated either using an id, or using the filename.
        if (request.getParameter("id") != null) {
            int id = Integer.parseInt(request.getParameter("id"));
            attachment = (XWikiAttachment) newdoc.getAttachmentList().get(id);
        } else {
            attachment = newdoc.getAttachment(filename);
        }

        newdoc.setAuthor(context.getUser());

        // Set "deleted attachment" as the version comment.
        ArrayList params = new ArrayList();
        params.add(filename);
        if (attachment.isImage(context)) {
            newdoc.setComment(context.getMessageTool().get("core.comment.deleteImageComment",
                params));
        } else {
            newdoc.setComment(context.getMessageTool().get(
                "core.comment.deleteAttachmentComment", params));
        }

        newdoc.deleteAttachment(attachment, context);
        // forward to attach page
        String redirect = Utils.getRedirect("attach", context);
        sendRedirect(response, redirect);
        return false;
    }
}