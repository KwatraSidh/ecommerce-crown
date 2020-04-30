import React from 'react';
import CollectionOverview from '../collection-overview/collection-overview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category-page/category.component'

const ShopPage = ({match})=>{
      console.log(match)
    return (
        <div>
         <Route exact path={`${match.path}`} component = {CollectionOverview}/>
         <Route  path ={`${match.path}/:categoryId`} component={CategoryPage}/>
         </div>
        )   }
export default ShopPage;