import React from 'react';
import { motion } from 'framer-motion';
import { HeroBannerType } from '../utils/types';
import DOMPurify from 'dompurify';


interface Props {
  data: HeroBannerType;
}

const HeroBanner: React.FC<Props> = ({ data }) => {
  const image = data.imageConnection.edges[0]?.node;

  return (
    <section className="relative bg-primary text-white overflow-hidden rounded-2xl">
      <img
        src={image?.url}
        alt={image?.title}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 px-s py-xl text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl mt-s"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.description),
            }}
          />
        </motion.p>

        {data.link?.href && (
          <motion.a
            href={data.link.href}
            className="inline-block mt-m bg-button text-white px-m py-s rounded-full text-s hover:bg-yellow-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            {data.link.title}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;


