import React from "react";
import { Link } from "react-router-dom";
import InfoForm from "./InfoForm";

const VinylInstallation = () => {
    return (
        <>
            <div className="relative bg-black">
                <img
                    className="w-screen h-72 object-cover opacity-80"
                    src="https://fthmb.tqn.com/glya-VMQpnG177hOhw26ALU6oJw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/worker-installing-recycled-rubber-floor-185226874-59fd1fdaec2f64003774c6e8.jpg"
                    alt="Vinyl flooring"
                />
                <h1 className="absolute text-3xl text-slate-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold">
                    VINYL INSTALLATION
                </h1>
                <h2 className="absolute rounded-full w-full max-w-md text-center cursor-pointer text-xl bg-black p-3 m-auto text-white bottom-4 left-1/2 -translate-x-1/2 font-bold">
                    <Link to="/Form">Request a free estimate !!</Link>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-items-end">
                <div className="m-auto py-7 px-16">
                    <h1 className="text-4xl font-bold">
                        Vinyl Supply & Installation:
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Ready to add style and resilience to your home with premium vinyl flooring? Whether you’re
                        installing vinyl for the first time or upgrading your existing floors, our team at Advantage
                        Flooring provides top-notch vinyl flooring solutions tailored to meet your needs. With its water
                        resistance and easy maintenance, vinyl is an excellent choice for high-traffic areas, kitchens,
                        and bathrooms, offering durability and a modern look that suits any space.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Vinyl Flooring Selection and Preparation
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        Choosing the right vinyl flooring involves selecting from a variety of textures, colors, and patterns.
                        Our experts will help you navigate through these options, ensuring you find the perfect match for your
                        home’s decor and lifestyle. Proper preparation, including subfloor leveling, is critical for a smooth
                        and long-lasting vinyl installation. Let our team ensure that every detail is taken care of from start
                        to finish.
                    </p>
                    <h1 className="text-4xl font-semibold">
                        Professional Installation
                    </h1>
                    <p className="text-lg py-5 text-slate-600">
                        At Advantage Flooring, precision is our priority. Our skilled installers handle each step of the vinyl
                        installation process with accuracy, from measuring and cutting to adhesive application and finishing
                        touches. Enjoy the peace of mind that comes with a professionally installed vinyl floor that’s built
                        to last and easy to maintain.
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
                        Quality Vinyl Flooring Installation in Winnipeg, MB
                    </h1>
                    <p className="mb-4 text-lg py-5 text-slate-600">
                        Vinyl flooring combines style with resilience, providing a cost-effective solution for any room.
                        With a range of designs that mimic the look of hardwood, tile, and stone, vinyl allows you to achieve
                        the aesthetic you desire without compromising durability. Our experienced team is committed to bringing
                        your vinyl flooring vision to life, providing meticulous installation and personalized service.
                        Discover the difference that professionally installed vinyl flooring can make in enhancing the beauty
                        and functionality of your home.
                    </p>
                    <Link to="/Form" className="bg-black p-3 rounded-full w-full max-w-md text-white text-center block">
                        Request a free Estimate
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VinylInstallation;
