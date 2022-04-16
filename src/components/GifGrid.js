import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>LOADING...</p>}
            < div className='card_grid' >
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>

        </>
    )
}
