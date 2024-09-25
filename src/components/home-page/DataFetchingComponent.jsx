import React from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const DataFetchingComponent = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const { data, loading, error } = useFetch(url);

    if (loading) return (
        <div className='min-h-screen bg-black flex justify-center items-center'>
            <p className='text-white text-2xl'>Loading...</p>
        </div>
    );
    if (error) return (
        <div className='min-h-screen bg-black flex justify-center items-center'>
            <p className='text-white text-2xl'>{error.message}</p>
        </div>
    );
    if (!Array.isArray(data)) {
        return (
            <div className='min-h-screen bg-black flex justify-center items-center'>
                <p className='text-white text-2xl'>No data available.</p>
            </div>
        );
    }

    return (
        <div className='bg-black min-h-screen py-3'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <Link to={"https://github.com/sandeep-luhaniwal/upskill-react/tree/gallery"} className='text-center py-6 text-2xl text-white font-bold'>Github Link</Link>
                <h1 className='text-center py-6 text-2xl text-white font-bold'>Photos</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {data.slice(0, 80).map((item) => (
                        <div key={item.id} className='border border-white p-3'>
                            <div className='flex justify-center'>
                                <img src={item.thumbnailUrl} alt={item.title} />
                            </div>
                            <p className='text-white pt-3 text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataFetchingComponent;
