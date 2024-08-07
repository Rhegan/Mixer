import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function IndexDrink({ title, drinks, filteredIngredients, filteredMeasurments }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const {data, setData, get, processing} = useForm({
        search: title,
    })


    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);
    
        if (value.length > 0) {
          try {
            const response = await axios.get(route('search'), {
              params: {value},
            });
            setResults(response.data.drinks);
          } catch (error) {
            alert(error);
            console.error("Error fetching search results:", error);
          }
        } else {
          setResults([]);
        }
    };

    return (
        <>
            <Head title={title ? title : '' } />
            <div className="bg-gradient-to-br from-pink-500 to-yellow-500 flex flex-col items-center justify-center min-h-screen">
                <div className='w-9/12 my-3'>
                    <img src={logo} className='w-1/4 my-6'/>
                    <form className='w-full' autocomplete="off">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg 
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 20 20">
                                    <path 
                                        stroke="currentColor"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input 
                                type="search" 
                                id="default-search" 
                                className="block w-full p-4 ps-10 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Search your drink..." 
                                value={ query }
                                onChange={ handleInputChange }
                                required />
                            </div>
                    </form>
                </div>
                {drinks && <div className="w-9/12 flex flex-wrap justify-around">
                    {results.map((drink) => (
                        <div className="border-4 border-white rounded-lg my-10 mx-2 p-5 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-md">
                            <img className="" src={drink.strDrinkThumb} alt={drink.strImageAttribution} />
                            <div className="px-6 py-4 text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-xl">
                                <div className="font-bold mb-2">
                                    {drink.strDrink}
                                </div>
                                <p className="text-gray-700">
                                    {drink.strInstructions}
                                </p>
                            </div>
                            <div className="flex flex-wrap">
                                {drink.strIngredient1 && 
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">{drink.strIngredient1}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure1}</span>
                                    </div>}
                                    {drink.strIngredient2 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient2}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure2}</span>
                                    </div>}
                                    {drink.strIngredient3 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient3}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure3}</span>
                                    </div>}
                                    {drink.strIngredient4 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient4 }</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure4}</span>
                                    </div>}
                                    {drink.strIngredient5 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient5}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure5}</span>
                                    </div>}
                                    {drink.strIngredient6 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient6}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure6}</span>
                                    </div>}
                                    {drink.strIngredient7 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient7}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure7}</span>
                                    </div>}
                                    {drink.strIngredient8 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient8}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure8}</span>
                                    </div>}
                                    {drink.strIngredient9 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient9}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure9}</span>
                                    </div>}
                                    {drink.strIngredient10 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient10}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure10}</span>
                                    </div>}
                                    {drink.strIngredient11 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient11}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure11}</span>
                                    </div>}
                                    {drink.strIngredient12 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient12}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure12}</span>
                                    </div>}
                                    {drink.strIngredient13 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient13}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure13}</span>
                                    </div>}
                                    {drink.strIngredient14 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient14}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure14}</span>
                                    </div>}
                                    {drink.strIngredient15 && <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{drink.strIngredient15}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{drink.strMeasure15}</span>
                                    </div>}                               
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </>
    );
}
