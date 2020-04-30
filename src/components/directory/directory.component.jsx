import React from "react";
import "./directory.styles.scss"
import {connect} from 'react-redux'
 import directorySelector from '../../redux/directory/directory.selector'
 import {createStructuredSelector} from 'reselect'
import MenuItem from "../menu-items/menu-item.component";

 const Directory=({sections})=> (
        <div className="directory-menu">
            {sections.map(({id, ...otherAttributes}) => (<MenuItem  key={id} {...otherAttributes}/>))}
        </div>
    )


const mapStateToProps = createStructuredSelector({
  sections:directorySelector
})

export default connect(mapStateToProps)(Directory);