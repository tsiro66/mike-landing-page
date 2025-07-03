import React, { useEffect, useRef, useState } from 'react';

export default function VideoHeroSection() {
  const playerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showMobileVideo, setShowMobileVideo] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only load video on desktop
    if (!isMobile) {
      // Load YouTube IFrame API
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Initialize player when API is ready
      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: 'Da1XEUPexRM',
          playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'Da1XEUPexRM',
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
            mute: 1,
            rel: 0,
            disablekb: 1,
            enablejsapi: 1,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
              setVideoLoaded(true);
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                playerRef.current.playVideo();
              }
            }
          }
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [isMobile]);

  // Fallback image for mobile - This variable is no longer directly used for the background image.
  const fallbackImage = "https://img.youtube.com/vi/Da1XEUPexRM/maxresdefault.jpg";

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out both;
          }

          .animation-delay-200 {
            animation-delay: 200ms;
          }

          .animation-delay-400 {
            animation-delay: 400ms;
          }

          /* Custom styles for YouTube iframe positioning */
          .youtube-container {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200%;
            height: 200%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .youtube-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          /* Responsive video sizing */
          @media (min-aspect-ratio: 16/9) {
            .youtube-container {
              width: 200%;
              height: 112.5%; /* 200% * 9/16 */
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .youtube-container {
              width: 177.78%; /* 200% * 16/9 */
              height: 200%;
            }
          }

          /* Mobile video modal */
          .mobile-video-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-video-container {
            position: relative;
            width: 90%;
            max-width: 600px;
            aspect-ratio: 16/9;
          }

          .mobile-video-container iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          .close-button {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 30px;
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>

      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        {/* Video/Image Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10"></div>
          
          {/* Mobile Background - Now just a dark background on mobile */}
          {isMobile ? (
            // Removed the style prop and background classes, relying on parent bg-black
            <div className="absolute inset-0 w-full h-full" /> 
          ) : (
            <>
              {/* Loading placeholder */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-black">
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: `url(${fallbackImage})` }}
                  />
                </div>
              )}
              
              {/* YouTube Player Container - Desktop only */}
              <div className="youtube-container">
                <div id="youtube-player" className="w-full h-full" />
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in-up">
            <span className="text-orange-500 block sm:inline">Αν σε ενδιαφέρει</span>
            <br className="hidden sm:block" />
            <span className="text-white block mt-2 sm:mt-0 sm:inline">η επιχείρησή σου να εμφανίζεται</span>
            <br className="hidden sm:block" />
            <span className="text-orange-500 block mt-2">στην πρώτη σελίδα της Google</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 animate-fade-in-up animation-delay-200 px-4">
            Δες αυτό το 
            <a 
              href={isMobile ? "#" : "https://www.youtube.com/watch?v=Da1XEUPexRM"}
              onClick={isMobile ? (e) => { e.preventDefault(); setShowMobileVideo(true); } : undefined}
              target={isMobile ? undefined : "_blank"}
              rel={isMobile ? undefined : "noopener noreferrer"}
              className="text-orange-500 font-bold hover:underline mx-1 cursor-pointer"
            >
              βίντεο
            </a> 
            και διάβασε το σύντομο μήνυμα που ακολουθεί.
          </p>
          
          {/* Mobile-optimized CTA button with play icon */}
          {isMobile && (
            <button
              onClick={() => setShowMobileVideo(true)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold 
                        hover:bg-orange-600 transition-colors animate-fade-in-up animation-delay-400 mb-8
                        shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Παρακολουθήστε το Βίντεο
            </button>
          )}
          
          {/* Scroll indicator */}
          <div className="animate-bounce mt-8 sm:mt-12">
            <div className="w-8 h-12 border-2 border-orange-500/30 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-4 bg-orange-500/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Mobile Video Modal */}
        {showMobileVideo && isMobile && (
          <div className="mobile-video-modal" onClick={() => setShowMobileVideo(false)}>
            <div className="mobile-video-container" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setShowMobileVideo(false)}>
                ×
              </button>
              <iframe
                src="https://www.youtube.com/embed/Da1XEUPexRM?autoplay=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}