import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.components'

const CollectionPreview = ({title,items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
            {items.filter((item,index)=>index<4).map((item)=>{
                return (
                    <CollectionItem key={item.id} item={item}/> // we have to pass the whole item to the cartdropdown menu
                )
            })}
            </div>
        </div>
    )
}

export default CollectionPreview;