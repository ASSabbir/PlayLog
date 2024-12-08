import  { useEffect, useState } from 'react';
import Banner from './Swiper/Banner';
import TopGames from './TopGames';
import Turnament from './Turnament';
import Blog from './Blog';
import Type from './Type';

const Home = () => {
    const [datas,setdatas]=useState([])
    useEffect(()=>{
        fetch('https://server-alpha-blue.vercel.app/allgames')
        .then(res=>res.json())
        .then(data=>setdatas(data))

    },[])
    const topdatas=datas.filter(data=>data.topGame==true)
    // console.log(datas)
    return (
        <div>
            <Banner></Banner>
            <TopGames datas={topdatas}></TopGames>
            <Turnament></Turnament>
            <Blog></Blog>
            <Type></Type>
        </div>
    );
};

export default Home;