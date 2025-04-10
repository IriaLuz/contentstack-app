import React, { useState } from 'react';
import { CarouselType } from '../utils/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
    data: CarouselType;
}

const Carousel: React.FC<Props> = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const totalSlides = data.slides.length;

    const handleNext = () => setCurrent((prev) => (prev + 1) % totalSlides);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

    const currentSlide = data.slides[current];
    const image = currentSlide.slideimageConnection.edges[0]?.node;

    return (
        <section className="w-full bg-background py-xl">
            <div className="max-w-4xl mx-auto px-s">
                <h2 className="text-2xl font-bold text-header text-center mb-m">{data.title}</h2>

                <div className="relative flex items-center justify-between overflow-hidden rounded-2xl shadow-lg">
                    <div className="flex-shrink-0 w-1/2">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={image?.url}
                                src={image?.url}
                                alt={image?.title}
                                className="w-full h-auto object-cover rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>
                    </div>

                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <p className="text-xl sm:text-2xl font-semibold text-header leading-relaxed mb-4 text-center">
                            {currentSlide.caption}
                        </p>

                        {currentSlide.slidelink?.href && (
                            <a
                                href={currentSlide.slidelink.href}
                                className="inline-block bg-button text-white px-m py-s rounded-full text-s hover:bg-yellow-600 transition"
                            >
                                {currentSlide.slidelink.title}
                            </a>
                        )}
                    </div>


                    <div className="absolute inset-0 flex items-center justify-between px-s">
                        <button
                            onClick={handlePrev}
                            className="bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;

