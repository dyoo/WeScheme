package org.wescheme.dropbox;

import java.util.Calendar;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import javax.jdo.identity.LongIdentity;

import org.wescheme.project.Program;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Entry {

        @SuppressWarnings("unused")
        @PrimaryKey
        @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
        private Long id;
        @Persistent
        private Long project_;

        // kludgey back pointers.
        @Persistent
        private Long dbID_;
        @Persistent
        private String binID_;

        // @Persistent
        //String comments_; //TODO Do we want a string that is guaranteed by its type to be web safe?


        public Entry(Long db, String binID, Long pid){
              
                project_ = pid;
                dbID_ = db;
                binID_ = binID;

                //comments_ = comments;
        }
        
        public String toString(){
        	return project_.toString();
        }
}