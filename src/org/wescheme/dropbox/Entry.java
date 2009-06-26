package org.wescheme.dropbox;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import org.jdom.Element;
import org.wescheme.util.XML;

@PersistenceCapable()
public class Entry extends XML {

        @SuppressWarnings("unused")
        @PrimaryKey
        @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
        private Long id;
        @Persistent
        private Long project_;

        // kludgey back pointers.
        @SuppressWarnings("unused")
		@Persistent
        private Long dbID_;
        @SuppressWarnings("unused")
		@Persistent
        private String binID_;

        // @Persistent
        //String comments_;


        public Entry(Long db, String binID, Long pid){
              
                project_ = pid;
                dbID_ = db;
                binID_ = binID;

                //comments_ = comments;
        }
        
        public String toString(){
        	return project_.toString();
        }
        
        public Element toXML(){
        	Element root = new Element("entry");
        	root.addContent(XML.makeElement("eid", id));
        	root.addContent(XML.makeElement("pid", project_));
        	root.addContent(XML.makeElement("dbid", dbID_));
        	root.addContent(XML.makeElement("bid", binID_));
        	
        	return root;
        }
}