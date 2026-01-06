"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className="mx-auto flex min-h-[300vh] w-screen flex-col items-center overflow-hidden bg-black px-4 text-white"
    >
      {/* Hero Section - Top */}
      <div className="relative flex w-fit flex-col items-center justify-center gap-5 text-center pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#0079bf]/10 via-[#2de2fa]/10 to-[#0079bf]/10 border border-[#2de2fa]/20"
        >
          <div className="w-2 h-2 rounded-full bg-[#2de2fa] animate-pulse" />
          <span className="text-sm font-medium text-[#2de2fa]">GET IN TOUCH</span>
        </motion.div>

        <h1 className="relative z-10 text-7xl font-bold tracking-tight leading-tight lg:text-9xl">
          Your Journey <br /> 
          To Innovation <br />
          <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
            Starts Here
          </span>
        </h1>
        
        <p className="relative z-10 max-w-2xl text-xl font-medium text-gray-400 mb-8">
          Scroll down to discover how to connect with Shaas
        </p>

        {/* Animated Path */}
        <AnimatedPath
          className="absolute -right-[40%] top-0 z-0 hidden lg:block"
          scrollYProgress={scrollYProgress}
        />
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl relative pb-20">
        
        {/* Background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(45, 226, 250, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 226, 250, 0.4) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-60">
          <motion.div
            className="absolute top-[10%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2de2fa] to-transparent shadow-[0_0_15px_rgba(45,226,250,0.8)]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#2de2fa]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-[#0079bf]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Binary rain */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <motion.div
            className="absolute top-0 left-[20%] text-[#2de2fa] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(45,226,250,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {`1\n0\n1\n1\n0\n1\n0\n1`}
          </motion.div>
          <motion.div
            className="absolute top-0 right-[25%] text-[#0079bf] font-mono text-sm font-bold whitespace-pre drop-shadow-[0_0_10px_rgba(0,121,191,1)]"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          >
            {`0\n1\n0\n1\n1\n0\n1\n0`}
          </motion.div>
        </div>

        {/* Robot decorations */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -left-32 top-[5%] w-72 h-72 pointer-events-none hidden xl:block"
        >
          <motion.img 
            src="/images/4.png" 
            alt=""
            className="w-full h-full object-contain"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.25 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -right-32 bottom-[5%] w-72 h-72 pointer-events-none hidden 2xl:block"
        >
          <motion.img 
            src="/images/4.png" 
            alt=""
            className="w-full h-full object-contain scale-x-[-1]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="relative z-10">
          
          {/* Contact Cards Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#2de2fa]/10 to-transparent backdrop-blur-xl rounded-full"
              >
                <span className="text-sm text-[#2de2fa] font-medium">WAYS TO REACH US</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="text-white">Get In</span>{' '}
                <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                  Touch
                </span>
              </motion.h2>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  primary: "info@shaas-consulting.ae",
                  
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  primary: "+971 568474217",
                  secondary: "Available 24/7"
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  primary: "United Arab Emirates",
                  secondary: "Dubai & Abu Dhabi"
                },
                {
                  icon: Clock,
                  label: "Business Hours",
                  primary: "Sunday - Thursday",
                  secondary: "9:00 AM - 6:00 PM GST"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.01] backdrop-blur-2xl rounded-3xl hover:from-white/[0.08] hover:to-white/[0.02] transition-all duration-500 border border-white/10 hover:border-[#2de2fa]/30">
                      <div className="flex items-start gap-5">
                        <div className="p-3 rounded-xl bg-[#2de2fa]/10 group-hover:bg-[#2de2fa]/20 transition-all duration-300">
                          <Icon className="w-7 h-7 text-[#2de2fa]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.label}</div>
                          <div className="text-lg font-bold text-white group-hover:text-[#2de2fa] transition-colors duration-300 mb-1">
                            {item.primary}
                          </div>
                          <div className="text-sm text-gray-400">{item.secondary}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SHAAS Branding */}
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-8xl lg:text-[12rem] font-bold mb-6 leading-none"
            >
              <span className="bg-gradient-to-r from-[#2de2fa] via-[#0079bf] to-[#2de2fa] bg-clip-text text-transparent">
                SHAAS
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400"
            >
              General Consulting • AI Solutions • Business Transformation
            </motion.p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2de2fa]/30 to-transparent mb-12" />

          {/* Social Links */}
          <div className="mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl font-bold text-white mb-10 text-center"
            >
              Connect With Us
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Linkedin, name: 'LinkedIn', handle: '@shaas-consulting' },
                { icon: Twitter, name: 'Twitter', handle: '@shaasconsult' },
                { icon: MessageSquare, name: 'WhatsApp', handle: '+971 568474217' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="px-8 py-5 bg-white/[0.03] backdrop-blur-xl rounded-2xl hover:bg-white/[0.06] transition-all duration-300 border border-white/10 hover:border-[#2de2fa]/30">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-[#2de2fa]/10">
                          <Icon className="w-6 h-6 text-[#2de2fa]" strokeWidth={2} />
                        </div>
                        <div className="text-left">
                          <div className="text-sm text-gray-500">{social.name}</div>
                          <div className="text-md font-semibold text-white group-hover:text-[#2de2fa] transition-colors duration-300">
                            {social.handle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2de2fa]/30 to-transparent mb-12" />

          {/* CTA Section */}
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Ready to Transform?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              The future is not waiting. Let us build something extraordinary together.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-[#0079bf] to-[#2de2fa] rounded-full text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(45,226,250,0.6)] transition-all duration-300"
              >
                Send us a Message
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white/[0.03] backdrop-blur-xl rounded-full text-white font-bold text-lg border border-[#2de2fa]/30 hover:bg-white/[0.06] hover:border-[#2de2fa]/60 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </div>

          {/* Footer info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Founded</div>
                <div>2025</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Industry</div>
                <div>AI Consulting</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Response Time</div>
                <div>Within 24 hours</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;

const AnimatedPath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2de2fa" />
          <stop offset="50%" stopColor="#0079bf" />
          <stop offset="100%" stopColor="#2de2fa" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="url(#pathGradient)"
        strokeWidth="20"
        filter="url(#glow)"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};