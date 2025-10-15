// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Landing() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>CodeGen</h1>
//       <button onClick={() => navigate('/signup')} style={{ margin: '10px' }}>
//         Signup
//       </button>
//       <button onClick={() => navigate('/login')} style={{ margin: '10px' }}>
//         Login
//       </button>
//     </div>
//   );
// }
import React from "react";
import HeroSection from "./LandingPage/HeroSection";
function LandingPage() {
  return (
    <div>
      <HeroSection />
      {/* <VideoSection /> */}
      {/* <FeaturesSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;


