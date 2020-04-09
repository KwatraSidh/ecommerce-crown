import React, { Component } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../collection-preview/collection-preview.component'

class ShopPage extends Component
{
    constructor(props){
        super(props);
        this.state={
            collections : ShopData
        }
    }
    

    render(){
        return (
            <div>
                {this.state.collections.map(({id,...otherCollectionItems})=>(<CollectionPreview key={id} {...otherCollectionItems}/>))}
            </div>
        )    }
}

export default ShopPage;