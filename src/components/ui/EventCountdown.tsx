import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EventCountdownProps {
  targetDate: string | Date;
  title?: string;
  subtitle?: string;
  onComplete?: () => void;
  variant?: 'primary' | 'dark' | 'light' | 'gradient';
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const EventCountdown = ({
  targetDate,
  title = "Registration Closing Soon",
  subtitle = "Secure your place before enrollment ends",
  onComplete,
  variant = 'primary'
}: EventCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);

  // Variant styles
  const variantStyles = {
    primary: 'bg-darkblue text-white',
    dark: 'bg-gray-900 text-white',
    light: 'bg-white text-gray-800 border border-gray-200',
    gradient: 'bg-gradient-to-r from-darkblue to-indigo-800 text-white'
  };

  // Unit card styles based on variant
  const unitCardStyles = {
    primary: 'bg-white/10 backdrop-blur-sm',
    dark: 'bg-gray-800',
    light: 'bg-gray-100',
    gradient: 'bg-white/10 backdrop-blur-sm'
  };

  // Text colors based on variant
  const textColors = {
    primary: 'text-white',
    dark: 'text-white',
    light: 'text-darkblue',
    gradient: 'text-white'
  };

  // Calculate time left
  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsComplete(true);
        if (onComplete) onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  // Animation variants for number changes
  const numberVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };

  // Render countdown unit (days, hours, etc.)
  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className={`${unitCardStyles[variant]} rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] text-center`}>
        <motion.div
          key={value}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={numberVariants}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-4xl font-bold"
        >
          {value.toString().padStart(2, '0')}
        </motion.div>
      </div>
      <span className="text-xs md:text-sm mt-2 opacity-80">{label}</span>
    </div>
  );

  // Render separators between units
  const Separator = () => (
    <div className="flex items-center justify-center mx-1 md:mx-2">
      <div className="w-1 h-1 bg-current rounded-full mb-8 mx-0.5 opacity-70"></div>
      <div className="w-1 h-1 bg-current rounded-full mb-8 mx-0.5 opacity-70"></div>
    </div>
  );

  return (
    <div className={`${variantStyles[variant]} rounded-xl p-6 md:p-8 shadow-lg`}>
      <div className="text-center mb-6">
        <h3 className={`text-xl md:text-2xl font-bold ${textColors[variant]}`}>{title}</h3>
        <p className={`mt-2 opacity-80 ${textColors[variant]}`}>{subtitle}</p>
      </div>

      {isComplete ? (
        <div className="text-center py-8">
          <p className="text-xl font-medium">Event has started!</p>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <Separator />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <Separator />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      )}

      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-medium ${
            variant === 'light'
              ? 'bg-darkblue text-white hover:bg-darkblue/90'
              : 'bg-white text-darkblue hover:bg-white/90'
          } transition-colors`}
        >
          Register Now
        </motion.button>
      </div>
    </div>
  );
}; 