import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";

const ResidentialPainting = () => {
    return (
        <>
            <div className="relative bg-black">
                <img
                    className="w-screen h-72 object-cover opacity-80"
                    src="https://get.pxhere.com/photo/abstract-abstract-expressionism-abstract-painting-acrylic-paint-art-canvas-contemporary-art-creative-creativity-design-expressionism-modern-art-painting-wall-art-1567285.jpg"
                    alt="Residential painting"
                />
                <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    RESIDENTIAL PAINTING
                </h1>
                <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
                    <Link to="/Form">Request a free estimate !!</Link>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
                <div className="m-auto py-7 px-16">
                    <h1 className="text-4xl font-bold">
                        Residential Painting Services:
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Transform your home with a fresh coat of paint! Our professional residential painting services
                        are designed to enhance the beauty of your space while ensuring a high-quality, lasting finish.
                        Whether you need interior or exterior painting, our skilled team at Advantage Painting will bring
                        your vision to life with precision and care.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Color Consultation and Preparation
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Choosing the right colors can be overwhelming, but our experts are here to help. We’ll guide you
                        through selecting colors that complement your home’s style and atmosphere. Proper preparation,
                        including surface cleaning and priming, is essential for a flawless finish, and we ensure every
                        step is meticulously handled for long-lasting results.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Professional Painting and Finishing
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        At Advantage Painting, we take pride in our detailed approach. Our experienced painters work with
                        precision to achieve smooth, even coats and sharp lines. Whether it’s your living room, kitchen,
                        or the exterior of your home, you’ll receive top-quality service that brings a refreshed look to
                        your home.
                    </p>
                </div>
                <div className="bg-gray-200 w-full h-full max-w-lg max-h-fit mr-3">
                    <InfoForm />
                </div>
            </div>
            <div className="h-[1px] bg-black"></div>
            <div className="flex items-center m-auto py-7 px-16">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-2xl font-bolder mb-2 font-semibold">
                        Beautify Your Home with Expert Residential Painting in Winnipeg, MB
                    </h1>
                    <p className="mb-4 text-lg py-5 text-slate-600">
                        A well-painted home can completely transform your living environment, adding value and style.
                        Our team is committed to delivering exceptional painting results, with a focus on quality, durability,
                        and attention to detail. From selecting the right paint finishes to expert application, we take care
                        of every aspect so you can enjoy a stunning, refreshed home.
                    </p>
                    <Link to="/Form" className="bg-black p-3 rounded-full w-full max-w-md text-white text-center block">
                        Request a free Estimate
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResidentialPainting;
