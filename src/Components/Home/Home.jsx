import  { useEffect, useState } from 'react';
import Banner from './Swiper/Banner';
import TopGames from './TopGames';
import Turnament from './Turnament';
import Blog from './Blog';

const Home = () => {
    const [datas,setdatas]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allgames')
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
        </div>
    );
};

export default Home;