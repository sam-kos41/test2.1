export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
        {/* Column 1 - Image on the left */}
        <div className="flex items-center justify-center">
          <img 
            src="/path/to/image.jpg" 
            alt="Sam Koscelny" 
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Column 2 - Text on the right */}
        <div className="flex flex-col items-end">
          <h1 className="text-4xl font-bold mb-4 text-center w-full">Sam Koscelny</h1>
          <p className="text-base text-black leading-relaxed text-justify mb-4">
            As a passionate researcher and PhD student at Clemson University, I am committed to advancing healthcare education and literacy through AI technologies. My research focuses on improving user engagement with healthcare chatbots by using Bayesian statistical models to better understand human-AI interaction. My goal is to make healthcare information more accessible and equitable.
          </p>
          <p className="text-base text-black leading-relaxed text-justify mt-4">
            Beyond research, I&apos;m driven by a passion for learning through real-world experiences. Photography is my way of capturing moments, balancing intellectual curiosity with creative expression.
          </p>
        </div>
      </div>
    </div>
  );
}