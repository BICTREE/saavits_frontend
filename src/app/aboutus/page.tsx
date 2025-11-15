import AboutDescription from "@/components/aboutinner/AboutDescription";
import AboutBanner from "@/components/banner/AboutBanner";
import CorporateSustainability from "@/components/corporate/CorporateSustainability";
import CorporateGoals from "@/components/goals/CorporateGoals";
import VisionValues from "@/components/vision/VisionValues";



export default function Aboutpage() {
  return (
    <>
      <AboutBanner />
      <AboutDescription/>
      <VisionValues/>
      <CorporateSustainability/>
      <CorporateGoals/>
    
    </>
  );
}
