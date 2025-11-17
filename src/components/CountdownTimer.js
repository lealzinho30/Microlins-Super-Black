import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define a data final como o último dia do mês às 23:59:59
    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center my-8">
      {[
        { value: timeLeft.days, label: 'DIAS' },
        { value: timeLeft.hours, label: 'HORAS' },
        { value: timeLeft.minutes, label: 'MIN' },
        { value: timeLeft.seconds, label: 'SEG' }
      ].map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f3115d] to-[#ff1a6d] rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-white to-gray-100 text-[#0e0677] font-black text-3xl md:text-5xl lg:text-6xl px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl shadow-2xl min-w-[70px] md:min-w-[100px] text-center border-2 border-white/50 transform group-hover:scale-105 transition-all duration-300">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-white font-bold text-xs md:text-sm mt-3 uppercase tracking-wider">{item.label}</div>
          </div>
          {index < 3 && (
            <div className="text-[#f3115d] font-black text-2xl md:text-4xl animate-pulse">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;
