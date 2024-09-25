import React from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const DataFetchingComponent = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Make sure `data` is an array before attempting to map it
    if (!Array.isArray(data)) {
        return <p>No data available.</p>;
    }

    return (
        <div className='bg-black'>
            <div className='max-w-[1200px] mx-auto px-4'>
                <Link to={"https://github.com/sandeep-luhaniwal/upskill-react"} className='text-center py-6 text-2xl text-white font-bold'>Github Link</Link>
                <h1 className='text-center py-6 text-2xl text-white font-bold'>Photo Gallery</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {data.slice(0, 30).map((item) => (
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
