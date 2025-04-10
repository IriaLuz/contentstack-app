import React, { useState } from 'react';
import { AccordionType } from '../utils/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Props {
    data: AccordionType;
}

const Accordion: React.FC<Props> = ({ data }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-background py-xl px-s">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-header mb-m">{data.title}</h2>

                <div className="space-y-s">
                    {data.group.map((item, idx) => (
                        <div key={idx} className="border border-gray-300 rounded-xl bg-white shadow">
                            <button
                                onClick={() => toggle(idx)}
                                className="flex items-center justify-between w-full px-m py-s text-left text-header font-medium"
                            >
                                {item.title}
                                <motion.div
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-m pb-s text-text text-s"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accordion;
