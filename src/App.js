import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories,setCategories] = useState(allCategories);

    const filterItems = (category) => {
        let newItems = items;
        if (category === 'all')
            setMenuItems(newItems);
        else 
            newItems =  items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return <main>
        <section className='menu section'>
            <div className='title'>
                <h3> Our Menu</h3>
                <div className='underline'></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu menuItems = {menuItems}/>
        </section>
    </main>;
}

export default App;
