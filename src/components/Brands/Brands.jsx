import axios from 'axios';
import {useState, useEffect} from 'react';
import Brand from './Brand';
const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(()=> {
        axios.get('https://tech-titan-server.vercel.app/brands')
        .then(res => setBrands(res.data))
        .catch(error => console.log(error))
    },[])
    return (
        <div data-aos="fade-down" className="py-12 px-2 md:p x-0 bg-background dark:bg-text ">
            <div className='text-center'>
                <h3 className='font-bold text-4xl mb-4 drop-shadow-md text-primary'>Explore Leading Brands</h3>
                <p className='max-w-3xl mx-auto font-medium'>Discover a world of technology and innovation with renowned brands. Explore our curated collection of top-tier electronics and gadgets.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
                {
                    brands.map(brand=> <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;