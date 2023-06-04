import React, { useState } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SortFuncs from '../services/SortHelpers'

const Navigation = ({productList, changeSelectedCategory,openCart}) => {
    const [isOpen, setIsOpen] = useState(false);
    //for the <Menu component/>
    
    const allCategories = SortFuncs.objectToArray(SortFuncs.getCategories(productList));
    
    const handleCategoryChange = (categoryId) => {
            changeSelectedCategory(categoryId)
    }

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

     return (
         <>
        <div className='fixed top-17 left-0'>
            <span 
                onClick = {openMenu}
            >
                <MenuButton
                    isOpen={isOpen}
                />
            </span>
            {isOpen?<Menu allCategories = {allCategories} handleCategoryChange = {handleCategoryChange}/>:false}
        </div>
        <div className='fixed top-17 right-0'>
            <button onClick = {openCart}>
            <ShoppingBagIcon fontSize = 'large' color = 'primary'/>
            </button>
        </div>
        </>
    );
}

export default Navigation;

