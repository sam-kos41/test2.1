import React from 'react'; // Import React to use JSX

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-11/12 mx-auto"> {/* Increased gap for better spacing */}
        {/* Column 1 - Image on the left */}
        <div className="flex items-center justify-center">
          <img 
            src="/SK_Headshot_professional.png" 
            alt="Sam Koscelny" 
            className="w-80 h-auto object-cover shadow-lg"  // Removed 'rounded-full'
          />
        </div>

        {/* Column 2 - Text on the right */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-center w-full">Sam Koscelny</h1> {/* Made the name larger */}
          <p className="text-base text-black leading-relaxed text-justify mb-4">
            I am a PhD student in Industrial Engineering at Clemson University, specializing in Human Factors. My research focuses on advancing healthcare education and literacy through AI technologies, with a particular emphasis on Human-AI interactions. I utilize both quantitative and qualitative methods to evaluate and enhance the usability and effectiveness of AI-driven systems, aiming to create technology that is both user-friendly and efficient.
          </p>
          <p className="text-base text-black leading-relaxed text-justify mt-4">
            In addition to my work in Human Factors, I conduct healthcare research, applying advanced statistical models such as ordinal, binomial, and linear regression, as well as time series models. My healthcare research primarily centers on analyzing pediatric emergency department visits, with a particular focus on mental and behavioral health-related cases. I aim to uncover underlying population characteristics that can improve care delivery and inform new procedures to alleviate the strain on emergency departments.
          </p>
          <p className="text-base text-black leading-relaxed text-justify mt-4">
            As I continue my PhD journey, I am eager to further develop my expertise in advanced research methods and drive innovation in both technology and healthcare systems.
          </p>
        </div>
      </div>
    </div>
  );
}
