import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Play, Pause, RotateCcw, CheckCircle, Flame, Droplet, HeartHandshake } from 'lucide-react';

export const HowToUseSection: React.FC = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, secondsLeft]);

  const toggleTimer = () => setTimerRunning(!timerRunning);
  const resetTimer = () => {
    setTimerRunning(false);
    setSecondsLeft(300);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const steps = [
    {
      step: '01',
      title: 'Warm & Activate',
      subtitle: 'Release Aromatic Phyto-terpenes',
      icon: Flame,
      instruction: 'Take 5 to 10 ml (1-2 dropperfuls) of Kesh Amruth. Rub gently between clean palms for 10 seconds. The gentle body heat activates the Wedelolactone and Rosemary oils.',
      proTip: 'Apply in the evening before bed or 2 hours prior to washing.'
    },
    {
      step: '02',
      title: 'Root Partitioning',
      subtitle: 'Target the Dermal Papilla',
      icon: Droplet,
      instruction: 'Part hair into 4 even sections. Place the glass dropper directly against your scalp skin and apply drops evenly across crown, hairline, and temples.',
      proTip: 'Focus especially on areas with visible shedding or receding hair follicles.'
    },
    {
      step: '03',
      title: 'Sacred Champi Massage',
      subtitle: 'Stimulate Microcirculation',
      icon: HeartHandshake,
      instruction: 'Using the pads of your fingertips (never fingernails), perform slow, firm circular motions for 5-10 minutes. This draws fresh oxygenated blood to the hair roots.',
      proTip: 'Leave on overnight for deep restoration, or wash after 2 hours with mild shampoo.'
    }
  ];

  return (
    <section id="ritual" className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EAE3D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE0CD] text-[#234E39] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" /> The Sacred Ayurvedic Champi Ritual
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D2E25] tracking-tight">
            How to Apply for 3x Faster Hair Density
          </h2>
          <p className="mt-2.5 text-base text-[#56685E] leading-relaxed">
            In Ayurvedic medicine, the application ritual (Shiro Abhyanga) is just as vital as the herbs themselves. Follow this 3-step ritual 2 to 3 times a week.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 sm:mb-10">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-2xs hover:border-[#234E39] transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-luxury font-bold text-2xl text-[#8C6D37]/40">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F3] text-[#234E39] flex items-center justify-center border border-[#D0E2D8]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E3F2F] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8C6D37] font-semibold mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#526458] leading-relaxed mb-4">
                    {item.instruction}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2ECE1] bg-[#FAF6EE] -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[11px] font-bold text-[#8C6D37] uppercase tracking-wider block mb-0.5">
                    Ayurvedic Pro Tip:
                  </span>
                  <p className="text-[11px] text-[#554630] leading-snug">
                    {item.proTip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Guided Champi Massage Timer Box */}
        <div className="bg-[#1E3F2F] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-md border border-[#2D5A43] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-lg">
            <div className="inline-flex items-center gap-1.5 bg-[#C5A880]/20 text-[#E7D6C1] text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <Clock className="w-3.5 h-3.5" /> Interactive Massage Companion
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5]">
              Practice the 5-Minute Scalp Awakening Champi
            </h3>
            <p className="text-xs sm:text-sm text-[#B3C7BD] leading-relaxed">
              Start the timer while applying Kesh Amruth. Close your eyes, breathe deeply, and massage in small circular motions to stimulate blood vessels.
            </p>
          </div>

          {/* Timer Display & Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#142B20] p-4 rounded-xl border border-[#2E5540] shrink-0">
            <div className="text-center px-3">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#E7D6C1] tracking-wider">
                {formatTime(secondsLeft)}
              </span>
              <span className="text-[10px] text-[#8EA69A] block uppercase tracking-widest mt-0.5">
                {secondsLeft === 0 ? 'Ritual Complete ✨' : timerRunning ? 'Massaging in progress...' : '5-Min Champi'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTimer}
                className="px-4 py-2.5 rounded-lg bg-[#C5A880] text-[#1E3F2F] font-bold text-xs hover:bg-[#D5BCA0] active:scale-95 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                {timerRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" /> {secondsLeft < 300 ? 'Resume' : 'Start Champi'}
                  </>
                )}
              </button>
              <button
                onClick={resetTimer}
                title="Reset timer"
                className="p-2.5 rounded-lg bg-[#234E39] text-[#E7D6C1] hover:bg-[#2E5F46] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
