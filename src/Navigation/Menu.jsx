
import React from 'react';


const Menu = ({allCategories,handleCategoryChange}) => {
    const handleItemButton = (categoryId) => {
            return () => {
                handleCategoryChange(categoryId)
            }       
    }
    const categories = allCategories.map((category) => (
            <MenuItem
                handleItemButton={handleItemButton}
                key = {category.id}
                item = {category}
            />
    ))
    return (
        <div className='border-1'>
            {categories}
        </div>
    );
}


const MenuItem = ({item, handleItemButton}) => {
    return (

        <div onClick = {handleItemButton(item.id)} className='border-2 p-2 my-3 bg-white hover:bg-blue-200 rounded-md'>
        <div>
            {item.name}
        </div>
        </div>
    )
}
export default Menu;

