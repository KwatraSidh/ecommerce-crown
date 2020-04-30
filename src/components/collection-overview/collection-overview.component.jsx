import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {shopSelector} from '../../redux/shop/shop.selector'
import './collection-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({shopData}) => 
    (
     <div className='collections-overview'>
     {shopData.map(({id,...otherCollectionItems})=>(<CollectionPreview key={id} {...otherCollectionItems}/>))}
     </div>
    )

const mapStateToProps = createStructuredSelector({
    shopData : shopSelector
})

export default connect(mapStateToProps)(CollectionOverview)
