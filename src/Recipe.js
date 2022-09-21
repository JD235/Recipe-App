import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <div className="justify-center flex md:flex-row flex-col">
                <img className="md:w-2/4 object-fill md:rounded-l-3xl md:rounded-t-none rounded-t-3xl shadow-lg" src={image}/>
                <div className="px-6 py-4 md:w-5/6 card md:rounded-r-3xl md:rounded-b-none rounded-b-3xl shadow-lg">
                    <h1 className='text-4xl text-center font-bold mb-2'>{title}</h1>
                    <h2 className='mt-4 text-2xl font-bold ml-2'>Ingredients</h2>
                    <ul className='text-xl ml-2 md:ml-8 mt-4'>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                    <h2 className='mt-4 text-2xl ml-2 font-bold'>Calories</h2>
                    <h3 className="text-xl ml-2 mt-1">{(calories).toFixed(1)}</h3>
                </div> 
            </div> 
        </div>
        
    );
};

export default Recipe;