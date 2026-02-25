import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FiUsers, FiCalendar, FiShield } from 'react-icons/fi';


const StatCounter = ({ targetValue, label, icon: Icon, color }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (value) =>
        Math.floor(value).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(targetValue);
        }
    }, [isInView, springValue, targetValue]);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center p-8 rounded-3xl bg-black border border-gray-800 shadow-xl"
        >
            {/* Icon */}
            <div
                className="mb-4 p-4 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${color}20`, color: color }}
            >
                <Icon />
            </div>

            {/* Counter */}
            <div className="text-4xl md:text-5xl font-black mb-2 flex items-center">
                <motion.span style={{ color: color }}>
                    {displayValue}
                </motion.span>
                <span style={{ color: color }}>+</span>
            </div>

            {/* Label */}
            <p
                className="font-medium uppercase tracking-widest text-xs mt-2"
                style={{ color: color }}
            >
                {label}
            </p>
        </div>
    );
};

export default function CountdownSection() {
    const stats = [
        {
            id: 1,
            label: "Community Members",
            value: 1250,
            icon: FiUsers,
            color: "#4285F4" // Google Blue
        },
        {
            id: 2,
            label: "Successful Events",
            value: 45,
            icon: FiCalendar,
            color: "#EA4335" // Google Red
        },
        {
            id: 3,
            label: "Core Team Members",
            value: 15,
            icon: FiShield,
            color: "#34A853" // Google Green
        }
    ];

    return (
        <section className="relative py-24 from-gray-50 to-white overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                        Our Growing <span className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] to-[#4285F4] bg-clip-text text-transparent">
                            Impact
                        </span>
                    </h2>

                    <div className="h-1 w-20 bg-gradient-to-r from-[#4285F4] to-[#FBBC05] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <StatCounter
                            key={stat.id}
                            targetValue={stat.value}
                            label={stat.label}
                            icon={stat.icon}
                            color={stat.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}