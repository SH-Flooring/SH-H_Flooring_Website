import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";

const LaminateInstallation = () => {
    return (
        <>
            <div className="relative bg-black">
                <img
                    className="w-screen h-72 object-cover opacity-80"
                    src="https://ak.picdn.net/shutterstock/videos/1025655920/thumb/1.jpg"
                    alt="Laminate flooring"
                />
                <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    LAMINATE INSTALLATION
                </h1>
                <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
                    <Link to="/Form">Request a free estimate !!</Link>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
                <div className="m-auto py-7 px-16">
                    <h1 className="text-4xl font-bold">
                        Laminate Supply & Installation:
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Looking to enhance your home with the modern appeal of laminate flooring? Whether you're installing laminate
                        for the first time or upgrading your current floors, we’re here to help you achieve the perfect result. Our
                        team at Advantage Flooring specializes in delivering top-quality laminate flooring solutions tailored to your
                        specific needs, ensuring a durable and stylish finish for any space.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Laminate Selection and Preparation
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Proper preparation is essential to achieving the best results with your new laminate flooring. From selecting
                        the right style and finish to ensuring your subfloor is primed and ready, our team will guide you every step
                        of the way. We offer a range of laminate options to match your design vision and lifestyle needs, setting the
                        stage for a floor that’s both beautiful and resilient.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Professional Installation
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        At Advantage Flooring, we understand the importance of precision. Our expert installers handle each step of the
                        laminate installation process with care, ensuring smooth transitions, precise measurements, and attention to every
                        detail. Enjoy the comfort and style of professionally installed laminate flooring that’s crafted to last.
                    </p>
                </div>
                <div className='bg-gray-200 w-full h-full max-w-lg max-h-fit mr-3'>
                    <InfoForm />
                </div>
            </div>
            <div className="h-[1px] bg-black"></div>
            <div className="flex items-center m-auto py-7 px-16">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-2xl font-bolder mb-2 font-semibold">
                        Beautiful Laminate Flooring Installation in Winnipeg, MB
                    </h1>
                    <p className="mb-4 text-lg py-5 text-slate-600">
                        Laminate flooring is a versatile, affordable option for transforming any room. With the look of natural wood and
                        the durability of modern materials, laminate provides a perfect balance of style and practicality. Our skilled
                        team is dedicated to helping you choose and install laminate flooring that enhances your home’s aesthetics while
                        meeting your budget. From selection to final installation, experience the convenience and expertise of working with
                        a trusted team in your community.
                    </p>
                    <Link to="/Form" className="bg-black p-3 rounded-full w-full max-w-md text-white text-center block">
                        Request a free Estimate
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LaminateInstallation;
