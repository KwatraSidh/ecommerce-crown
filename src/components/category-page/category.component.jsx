import React from 'react'
import './category-page.styles.scss'
import {connect} from 'react-redux'
import {selectCategory} from '../../redux/shop/shop.selector'
import CollectionItem from '../collection-item/collection-item.components'

const CategoryPage =({category})=>{
    const {title,items} = category;
    console.log(category)
    return (
        <div className='category-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item=><CollectionItem key ={item.id} item={item}/>)}
            <br/>
    
        </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => ({
    category : selectCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);