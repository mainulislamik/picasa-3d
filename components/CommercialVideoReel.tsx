"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

interface CommercialVideoReelProps {
  onOpenUpload?: (serviceId?: string) => void;
}

export default function CommercialVideoReel({ onOpenUpload }: CommercialVideoReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="commercial-video" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rose-500/10 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono mb-4 shadow-sm">
            <Video className="w-3.5 h-3.5 text-rose-600" />
            <span>COMMERCIAL MOTION & VIDEO DESK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            High-Velocity Video Editing & Motion Graphics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From e-commerce social reels and Amazon product video listings to high-energy commercial sports and broadcast cuts. Precision frame-by-frame post-production at scale.
          </p>
        </div>

        {/* Video Player & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Video Player Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-2xl group hover:border-rose-400 hover:shadow-rose-500/10 transition-all duration-300">
              
              {/* Running Video Element */}
              <video
                ref={videoRef}
                src="/videos/nba.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-auto aspect-video object-cover"
                poster="/images/services/video-editing.png"
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-14 left-0 right-0 h-1 bg-white/20">
                <div 
                  className="h-full bg-rose-500 transition-all duration-100" 
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Overlay Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-center justify-between text-white text-xs backdrop-blur-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-300 hidden sm:inline-block">
                    Picasa Commercial Reel • 1080p 60fps
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-400/30">
                    Live Stream
                  </span>
                  <button
                    onClick={toggleFullscreen}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Video Specs & Production Capabilities (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Specialist Commercial Video Post-Production
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our in-house video editing department handles high-volume e-commerce assets, social campaigns, broadcast commercials, and sports highlight reels with fast turnaround.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {[
                { title: "Dynamic Color Grading & LUTs", desc: "Precision tone mapping & skin-tone calibration" },
                { title: "Multi-Cam Fast Sequencing", desc: "Fast cuts, pacing & commercial rhythm adjustments" },
                { title: "Audio Sweetening & Clean-up", desc: "Noise reduction, balanced mixing & sound design" },
                { title: "Object Removal & Screen Replacement", desc: "Frame-by-frame rotoscoping & motion tracking" },
                { title: "Fast Cloud Proxy Delivery", desc: "Private high-speed FTP & direct cloud folder sync" },
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 hover:shadow-sm transition-all">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-[11px] text-slate-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenUpload && onOpenUpload("video-editing")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-700 text-white font-bold text-xs shadow-md hover:shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Upload Sample Video for Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs hover:scale-105 active:scale-95 transition-all"
              >
                Inquire Video Desk
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
