import AboutHero from "@/components/AboutHero"
import FounderMessage from "@/components/FounderMessage"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import OperatingPhilosophy from "@/components/OperatingPhilosophy"
import SummaryPlatforms from "@/components/SummaryPlatforms"

const Why = () => {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden bg-white pt-[90px]">
      <Navbar/>
      <AboutHero/>
      <SummaryPlatforms/>
      {/* <FounderMessage/> */}
      <OperatingPhilosophy/>
      <Footer/>
    </div>
  )
}

export default Why