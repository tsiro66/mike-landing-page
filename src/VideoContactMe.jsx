import { useState } from "react";

/**
 * A Tailwind-styled reusable component to embed a YouTube video with a custom placeholder.
 * @param {object} props - The component props.
 * @param {string} props.videoId - The unique ID of the YouTube video (e.g., 'dQw4w9WgXcQ').
 * @param {string} [props.title='Embedded YouTube Video'] - An accessible title for the iframe.
 */
function VideoContactMe({ videoId, title = "Embedded YouTube Video" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. URLs
  // High-quality thumbnail for the placeholder (hqdefault is usually a good size)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Embed URL with cleanup parameters and autoplay enabled after click
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  // 2. Click Handler
  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Δυνάμωσε ήχο και δες το
        <span className="text-orange-500"> σύντομο βίντεο</span>
      </h2>
      <div className="mx-auto my-6 w-full max-w-4xl rounded-4xl shadow-2xl overflow-hidden bg-gray-900">
        {/* Aspect Ratio Container (16:9) - This is Tailwind's way of doing responsive video */}
        <div className="aspect-video relative w-full overflow-hidden bg-black">
          {" "}
          {/* pt-[56.25%] = 9/16 for 16:9 ratio */}
          {/* If the video is NOT loaded, show the custom placeholder */}
          {!isLoaded && (
            <div
              className="absolute inset-0 cursor-pointer bg-cover bg-center flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
              onClick={handlePlayClick}
              aria-label={`Play video: ${title}`}
            >
              {/* Custom Play Button (Tailwind Styling) */}
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-full shadow-lg transition-all duration-200 hover:bg-red-600 hover:text-white group">
                <svg
                  className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 3.5l14 8.5L6 20V3.5z" />
                </svg>
              </div>
            </div>
          )}
          {/* If the video IS loaded, show the iframe */}
          {isLoaded && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default VideoContactMe;
