import React from 'react';
import bannerImg from '../../../assets/banner-main.png';
import bannerBg from '../../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div
                className="hero min-h-[60vh] bg-blue-950 rounded-2xl"
                style={{
                    backgroundImage:
                        `url(${bannerBg})`,
                }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <div>
                            <img className='mx-auto' src={bannerImg} alt="" />
                        </div>
                        <h1 className="my-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div className=' border border-[#E7FE29] rounded-lg mx-auto py-1 w-37.5'>
                            <button className="btn bg-[#E7FE29]">Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;