package org.wescheme.dropbox;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import org.jdom.Element;
import org.wescheme.util.XML;

@PersistenceCapable()
public class Entry extends XML {

        @PrimaryKey
        @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
        private Long id;
        @Persistent
        private Long project_;

		@Persistent
        private Long dbID_;
		@Persistent
        private String binID_;

        // @Persistent
        //String comments_;


        public void setDBid(Long dbID_) {
			this.dbID_ = dbID_;
		}

		public Long getDBid() {
			return dbID_;
		}

		public void setBinID(String binID_) {
			this.binID_ = binID_;
		}

		public String getBinID() {
			return binID_;
		}

		public Entry(Long db, String binID, Long pid){
              
                project_ = pid;
                setDBid(db);
                setBinID(binID);

                //comments_ = comments;
        }
        
        public String toString(){
        	return project_.toString();
        }
        
        public Element toXML(){
        	Element root = new Element("entry");
        	root.addContent(XML.makeElement("eid", id));
        	root.addContent(XML.makeElement("pid", project_));
        	root.addContent(XML.makeElement("dbid", getDBid()));
        	root.addContent(XML.makeElement("bid", getBinID()));
        	
        	return root;
        }
}