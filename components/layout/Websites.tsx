'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TitlePart {
  text: string;
  color: string;
}

interface CardData {
  id: string;
  bgImage: string;
  title: TitlePart[];
  titleMultiline?: boolean;
  titleSize?: string;
  description: string;
  descriptionColor?: string;
  overlayGradient: string;
  alignment: 'justify-start' | 'justify-end';
  border?: string;
  innerImage?: string;
  hasArrow?: boolean;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const CARDS_DATA: CardData[] = [
  {
    id: 'prive',
    bgImage: '/asset/card1bg.png',
    logo: '/asset/logo/prive.svg',
    title: [{ text: 'Privé', color: 'text-[#C01823]' }],
    titleSize: 'text-[52px]',
    description: 'a private ecosystem for UHNI owners and individuals with disproportionate future impact',
    overlayGradient: 'linear-gradient(218.56deg, rgba(0, 0, 0, 0.5) 2.02%, rgba(63, 63, 63, 0.5) 29.07%, rgba(222, 222, 222, 0.5) 97.2%)',
    alignment: 'justify-end',
    hasArrow: true,
    logoWidth: 126,
    logoHeight: 40,
  },
  {
    id: 'csuite',
    bgImage: '/asset/card2bg.png',
    logo: '/asset/logo/csuite.svg',
    title: [
      { text: 'CSuite', color: 'text-[#C01823]' },
      { text: 'Network', color: 'text-[#656A6B]' }
    ],
    titleMultiline: true,
    titleSize: 'text-[35px]',
    description: 'a network for ambitious professionals who are coming together to learn & solve problems',
    overlayGradient: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
    alignment: 'justify-end',
    hasArrow: true,
    logoWidth: 144,
    logoHeight: 60,
  },
  {
    id: 'smart-network',
    bgImage: '/asset/card3bg.png',
    logo: '/asset/logo/smart-networks.svg',
    title: [
      { text: 'Smart', color: 'text-[#C01823]' },
      { text: 'Networks', color: 'text-[#656A6B]' }
    ],
    titleMultiline: true,
    titleSize: 'text-[35px]',
    description: 'a smart tool built for network leadership and management, it simplifies everything a network  requires',
    overlayGradient: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
    alignment: 'justify-start',
    border: '0.5px solid rgba(182, 182, 182, 1)',
    innerImage: '/images/smart-networks.png',
    logoWidth: 160,
    logoHeight: 63,
  },
  {
    id: 'thenetwork',
    bgImage: '/asset/thenetworkscard.png',
    logo: '/asset/theNetwork.svg',
    logoWidth: 220,
    logoHeight: 31,
    description: 'an app for all network members',
    overlayGradient: 'linear-gradient(111.12deg, rgba(0, 0, 0, 0.7) 41.4%, rgba(66, 64, 64, 0.7) 98.48%)',
    alignment: 'justify-start',
    title: []
  }
];

const WebsiteCard = ({
  card,
  onClick
}: {
  card: CardData;
  onClick: (id: string) => void;
}) => {

  return (
    <div className={`relative overflow-hidden max-w-[1300px] h-[360px] md:h-full p-[20px] md:p-[40px] rounded-[32px] flex flex-col ${card.alignment} cursor-pointer max-h-[550px]`}
      style={{
        backgroundImage: `${card.overlayGradient ? `${card.overlayGradient},` : ''
          } url('${card.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: card.border
      }} onClick={() => onClick(card.id)}
    >
      {/* <div
        className="absolute inset-0"
        style={{ background: card.overlayGradient }}
      /> */}

      {card.hasArrow && (
        <div className="absolute top-[30px] right-[30px] z-20 w-[36px] h-[36px] rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <Image
            src="/asset/arrow.svg"
            alt="Link Arrow"
            width={14}
            height={14}
            className="object-contain"
          />
        </div>
      )}

      <div className={`relative z-10 flex flex-col gap-[20px] h-full ${card.alignment}`}>
        <div className="flex flex-col gap-[16px]">
          {card.logo ? (
            <div className="relative w-fit">
              <Image
                src={card.logo}
                alt="Card Logo"
                width={card.logoWidth || 180}
                height={card.logoHeight || 30}
                className="object-contain object-left"
              />
            </div>
          ) : (
            <h2 className={`font-extrabold leading-[110%] tracking-[-0.46px] font-['Mencken_Std'] ${card.titleSize || 'text-[35px]'}`}>
              {card.title.map((part, index) => (
                <React.Fragment key={index}>
                  <span className={part.color}>{part.text}</span>
                  {card.titleMultiline && index < card.title.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          )}

          <p className={`font-inter font-[600] text-[16px] md:text-[24px] leading-[1.4] md:leading-[1.2] tracking-[-0.5px] md:tracking-[-1.46px] whitespace-pre-line ${card.descriptionColor || 'text-white'} ${card?.id === "prive" ? "w-full md:w-[65%]" : ""}`}>
            {card.description}
          </p>
        </div>

        {card.innerImage && (
          <div className="mt-[20px] flex-1 relative min-h-[392px] h-[551px]">
            <div className="absolute inset-0 rounded-[11px] overflow-hidden">

              <Image
                src={card.innerImage}
                alt="Card Internal Content"
                fill
                className="object-contain object-top -translate-y-[5px]"
              />

              {/* ✅ Linear gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1))]" />

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Websites = () => {
  const upperCards = CARDS_DATA.slice(0, 1);
  const lowerCards = CARDS_DATA.slice(2, 4);
  const [showPopup, setShowPopup] = useState(false);
  const [showSmartPopup, setShowSmartPopup] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === "prive") {
      window.open("https://theprive.network", "_blank");
    } else if (id === "csuite") {
      window.open("https://thecsuite.network", "_blank");
    } else if (id === "thenetwork") {
      setShowPopup(true);
    }
  };

  return (
    <section className="relative w-full pt-0 pb-[100px] px-[20px] overflow-hidden flex flex-col items-center">

      {/* Background */}
      {/* <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          background: 'radial-gradient(225.8% 51.27% at 50% 50%, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0) 70%)' 
        }}
      /> */}

      <div className=" w-full flex flex-col items-center gap-[20px] relative z-10">
        <div className=" w-[100%] max-w-[1200px] flex flex-col justify-center gap-6 text-[#333333] font-inter mb-16 text-center flex-wrap">

          <p className="w-[100%] text-[14px] md:text-[22px] font-medium leading-[1.4]">
            There are thousands of networks today; social, professional, charitable and more. <br/>
            Yet most underutilise their greatest asset: <span className="font-extrabold italic"> the intelligence and lived experience of their own members.</span>
          </p>

          <p className="w-[100%] text-[14px] md:text-[22px] font-medium leading-[1.4]">
            While many networks focus heavily on events and programming, only few systematically unlock the
            <span className="font-extrabold italic"> compounding value that exists within the membership itself.</span>
          </p>

          <p className="w-[100%] text-[14px] md:text-[22px] font-medium leading-[1.4]">
            Our belief is simple:
            <span className="font-extrabold italic"> The future of high value networks lies not in more activity, but in deeper, more intelligent member-to-member value creation.</span>
          </p>

          <p className="w-[100%] text-[14px] md:text-[22px] font-medium leading-[1.4]">
            We are building the world’s most intelligent learning and collaboration ecosystem, one where insight, experience and access are intentionally activated so that
            <span className="font-extrabold italic"> member intelligence compounds over time.</span>
          </p>

          <p className="w-[100%] text-[14px] md:text-[22px] font-medium leading-[1.4]">
            Our approach focuses on carefully curated networks, each designed to deliver unique value to its members and critically, to each other through structured initiatives, high trust interactions and thoughtfully deployed AI tools.
          </p>

        </div>
        {/* <div className="grid grid-cols-[4fr_5fr] gap-[30px] h-[460px]">
          {upperCards.map(card => (
            <WebsiteCard
              key={card.id}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </div> */}
        <div className='flex flex-col items-center gap-[20px] max-w-[1300px] w-[100%]'>
            {/* <div className="w-full grid grid-cols-1 md:grid-cols-[1fr] gap-[20px] min-h-[360px] md:min-h-[460px]">
              <div className={`relative overflow-hidden max-w-[1300px] h-[460px] md:h-full p-[20px] md:p-[30px] rounded-[32px] flex flex-col  cursor-pointer max-h-[550px]`}
                style={{
                  backgroundImage: ` url('/asset/tpn.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '0.5px solid rgba(182, 182, 182, 1)'
                }} // onClick={() => onClick(card.id)}
                >
                    
                    <div className='w-full flex justify-between'>
                      <Image src={'/asset/logo/tpn.svg'} alt='Smart Services' width={500} height={500} className='object-contain max-w-[180px] md:max-w-[238.07px]'/>

                  <Link
                    href="http://theprofessionals.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='min-h-[55px] max-h-[55px] w-[55px] rounded-[35px] bg-[#fff1] backdrop-blur-[50px] flex items-center justify-center cursor-pointer'>
                      <Image
                        src="/asset/arrow.svg"
                        alt="Link Arrow"
                        width={25}
                        height={25}
                        className="object-contain"
                      />
                    </div>
                  </Link>
                    </div>
                    <div className='w-full h-auto text-[white] flex flex-col items-center gap-[70px] pt-[60px] md:pt-[47px]'>
                    <div className="w-full md:w-[65%] max-w-[1350px]">
                      <h2
                        className="font-inter font-[700] text-[26px] md:text-[39px] leading-[120%] tracking-[-0.97px] md:tracking-[-1.46px] text-center"
                      >a network for ambitious professionals who are keen to learn from the best academic minds of the world
                      </h2>
                    </div>

                    <div
                      className="mt-auto md:mt-0 font-[family-name:var(--font-inter-display)] text-center tracking-[-0.5px] font-[400] text-[14px] md:text-[33px] leading-[100%] flex items-center justify-center gap-2 md:gap-4 w-full md:max-w-none"
                    >
                      <span className="whitespace-nowrap">Learn. Stay ahead.</span>
                      <span className="bg-[#C01823] font-bold px-1 md:px-3 py-1 inline-block whitespace-nowrap">
                        Actionable intelligence
                      </span>
                    </div>
                    </div>

                </div>
                </div> */}
            {/* {upperCards.map(card => (
              <WebsiteCard
                key={card.id}
                card={card}
                onClick={handleCardClick}
              />
            ))} */}

          {/* <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[20px] min-h-[360px] md:min-h-[550px] ">
            {lowerCards.map(card => (
              <WebsiteCard
                key={card.id}
                card={card}
                onClick={handleCardClick}
              />
            ))}
          </div> */}

                  {/* <div
          className="w-full h-[310px] mx-auto rounded-[30px] relative overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer"
          style={{
            backgroundImage: "url('/asset/card5bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
            onClick={() => setShowSmartPopup(true)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full max-w-[1080px] flex flex-col items-center justify-center">
            <div className="text-left flex flex-col gap-4 items-center px-[20px]">
              <h2 className="text-[32px] leading-[1.1] w-fit font-['Mencken_Std'] font-extrabold">
                <Image src={'/asset/logo/smart-services.svg'} alt='Smart Services' width={500} height={500} className='object-contain max-w-[140px]'/>
              </h2>
              <p className="text-white font-inter text-[16px] md:text-[24px] font-semibold leading-[140%] md:leading-[120%] tracking-[-0.5px] md:tracking-[-1.46px] text-center ">
                a dedicated backend team to support networks
              </p>
            </div>
          </div>
        </div> */}
        </div>



      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2 text-black">
              Website Redesign is Underway
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              We’re currently improving the experience. Please check back soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSmartPopup && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">
      <h2 className="text-lg font-semibold mb-2 text-black">
        Smart Services – Coming Soon
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        We're building something powerful to support networks behind the scenes. Stay tuned.
      </p>
      <button
        onClick={() => setShowSmartPopup(false)}
        className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default Websites;