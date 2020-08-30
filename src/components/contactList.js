import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';


// rendering of lists with some icons and texts in contact us page
const ContactList = (props) => {
    return(
        props.contactlist.map((element) => {
            const { id, type, icon } = element
            return(
                <List key={id}>
                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className={icon} aria-hidden="true"/>
                            {type}
                        </ListItemContent>
                    </ListItem>
                  </List>
            );
        })
    );
}

export default ContactList;