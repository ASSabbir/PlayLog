import React from 'react';
import TopgamesCard from './TopgamesCard';

const TopGames = ({ datas }) => {

    return (
        <div className='min-h-screen mx-[10vw] '>
            <h1 className='text-6xl font-bold font-title text-center pb-[5vw] pt-[5vw]'>Trending Games</h1>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2 ]'>
                {
                    datas.map(data => <TopgamesCard key={data._id} data={data}></TopgamesCard>)
                }
            </div>

        </div>
    );
};

export default TopGames;