export default function GoogleVerification() {
  return (
    <>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-verification-code-here" />
      
      {/* Additional meta tags for better image indexing */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Image-specific meta tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
    </>
  );
} 