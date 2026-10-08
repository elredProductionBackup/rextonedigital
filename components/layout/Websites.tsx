'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Swap 'Playfair Display' for whatever serif you load via next/font
const SERIF = "'Playfair Display', 'Mencken Std', Georgia, 'Times New Roman', serif";

type NetworkCard = {
  id: string;
  label: string;
  href: string;
  /** Theme used while there is no photo (or before it loads). A loaded photo always switches to the dark look. */
  theme: 'light' | 'dark';
  /** Optional photo. The gradient shows until it finishes loading, then the photo fades in. */
  bgImage?: string;
  background: string;
  /** Laid over the photo once it has loaded */
  imageOverlay: string;
  hoverGlow: string;
  borderColor: string;
  dotColor?: string;
  logo: React.ReactNode;
  headline: string;
  tagline?: React.ReactNode;
};

const CARDS: NetworkCard[] = [
  {
    id: 'prive',
    label: 'Privé',
    href: 'https://theprive.network',
    theme: 'light',
    bgImage: '/asset/bg-prive.webp',
    background: [
      // pearl light pouring in from the top-left
      'radial-gradient(70% 85% at 0% 0%, rgba(255, 253, 246, 0.95) 0%, rgba(255, 253, 246, 0) 60%)',
      // silk sheen band running across the card
      'linear-gradient(115deg, rgba(255, 255, 255, 0) 34%, rgba(255, 255, 255, 0.38) 47%, rgba(255, 255, 255, 0) 60%)',
      // warm honey-gold pooling bottom-right
      'radial-gradient(80% 95% at 100% 100%, rgba(222, 172, 82, 0.55) 0%, rgba(222, 172, 82, 0) 65%)',
      // deeper gold core
      'radial-gradient(40% 50% at 92% 96%, rgba(196, 142, 52, 0.35) 0%, rgba(196, 142, 52, 0) 70%)',
      // champagne base
      'linear-gradient(160deg, #fcf7ea 0%, #f5e7c4 48%, #ebd29a 100%)',
    ].join(','),
    imageOverlay: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
    hoverGlow: 'radial-gradient(55% 65% at 85% 90%, rgba(255, 210, 120, 0.3) 0%, rgba(255, 210, 120, 0) 70%)',
    borderColor: 'rgba(205, 165, 85, 0.55)',
    dotColor: 'rgba(150, 108, 32, 0.14)',
    logo: (
      <Image
        src="/prive.svg"
        alt="Privé"
        width={500}
        height={500}
        className="object-contain object-left w-auto h-auto max-w-[100px] md:max-w-[220px]"
      />
    ),
    headline: 'Privé is an enterprise network designed to elevate good teams into great ones.',
  },
  {
    id: 'tpn',
    label: 'The Professionals Network',
    href: 'http://theprofessionals.network/',
    theme: 'dark',
    background: [
      'radial-gradient(75% 95% at 100% 100%, rgba(150, 18, 30, 0.6) 0%, rgba(150, 18, 30, 0) 65%)',
      'radial-gradient(45% 55% at 88% 96%, rgba(192, 24, 35, 0.35) 0%, rgba(192, 24, 35, 0) 70%)',
      'radial-gradient(60% 70% at 0% 0%, rgba(40, 38, 46, 0.6) 0%, rgba(40, 38, 46, 0) 70%)',
      'linear-gradient(160deg, #141317 0%, #17141a 48%, #22121a 100%)',
    ].join(','),
    imageOverlay: 'linear-gradient(160deg, rgba(20, 19, 23, 0.85), rgba(34, 18, 26, 0.8))',
    hoverGlow: 'radial-gradient(55% 65% at 85% 90%, rgba(192, 24, 35, 0.3) 0%, rgba(192, 24, 35, 0) 70%)',
    borderColor: 'rgba(120, 40, 48, 0.55)',
    dotColor: 'rgba(255, 255, 255, 0.09)',
    logo: (
      <Image
        src="/tpn-logo.svg"
        alt="The Professionals Network"
        width={500}
        height={500}
        className="object-contain object-left w-auto h-auto max-w-[170px] md:max-w-[220px]"
      />
    ),
    headline: 'a network for ambitious professionals who are keen to learn from the best academic minds of the world',
    tagline: (
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 font-inter text-[14px] md:text-[24px] leading-none tracking-[-0.4px]">
        <span className="whitespace-nowrap text-white/90">Learn. Stay ahead.</span>
        <span className="whitespace-nowrap bg-[#C01823] text-white font-semibold px-2 md:px-3 py-1 md:py-1.5">
          Actionable intelligence
        </span>
      </div>
    ),
  },
];

const NetworkCardView = ({ card }: { card: NetworkCard }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const showPhoto = Boolean(card.bgImage) && imgLoaded;
  // Light look only while the gradient is what you see
  const light = card.theme === 'light' && !showPhoto;

  return (
    <Link
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${card.label} in a new tab`}
      className={`nc-card ${light ? 'nc-card--light' : ''} group relative isolate block w-full overflow-hidden rounded-[24px] md:rounded-[28px] min-h-[340px] md:min-h-[420px] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${light ? 'focus-visible:ring-[#8f6420]' : 'focus-visible:ring-white/80'}`}
      style={{ border: `1px solid ${card.borderColor}` }}
    >
      {/* Background stack (bottom to top) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* 1. Gradient: always there, so it shows while the photo loads or if it fails */}
        <div className="absolute inset-0" style={{ backgroundImage: card.background }} />

        {/* 2. Photo, fades in once loaded */}
        {card.bgImage && (
          <Image
            src={card.bgImage}
            alt=""
            fill
            sizes="(max-width: 1300px) 100vw, 1300px"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(false)}
            className={`nc-photo object-cover ${showPhoto ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* 3. Overlay on the photo */}
        {card.bgImage && (
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: card.imageOverlay }}
          />
        )}

        {/* 4. Faint dot grid (gradient only) */}
        {card.dotColor && (
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${showPhoto ? 'opacity-0' : 'opacity-70'}`}
            style={{
              backgroundImage: `radial-gradient(${card.dotColor} 1px, transparent 1.2px)`,
              backgroundSize: '22px 22px',
              maskImage: 'radial-gradient(80% 90% at 70% 80%, #000 20%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(80% 90% at 70% 80%, #000 20%, transparent 85%)',
            }}
          />
        )}

        {/* 5. Hover bloom */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ backgroundImage: card.hoverGlow }}
        />

        {/* 6. Light sweep on hover */}
        <div className="nc-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/2" />
      </div>

      <div className="relative flex h-full min-h-[inherit] flex-col p-5 md:p-8">
        <div className="flex items-start justify-between gap-4">
          {card.logo}
          <span
            className={`flex h-[36px] w-[36px] md:h-[48px] md:w-[48px] shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300 ${
              light
                ? 'border border-[#b8862e]/30 bg-white/50 group-hover:bg-white/80'
                : 'border border-white/15 bg-white/10 group-hover:bg-white/20'
            }`}
          >
            <Image
              src="/asset/arrow.svg"
              alt=""
              width={18}
              height={18}
              className={`object-contain transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${light ? 'brightness-0 opacity-75' : ''}`}
            />
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 md:gap-12 py-8 md:py-10">
          <h3
            className={`max-w-[640px] text-center text-[22px] md:text-[34px] leading-[1.3] tracking-[-0.3px] transition-colors duration-700 ${light ? 'text-[#2e2210]' : 'text-white'}`}
            style={{
              fontFamily: SERIF,
              textShadow: light ? '0 1px 0 rgba(255, 255, 255, 0.6)' : '0 2px 24px rgba(0, 0, 0, 0.35)',
            }}
          >
            {card.headline}
          </h3>
          {card.tagline}
        </div>
      </div>
    </Link>
  );
};

const INTRO = (
  <div className="w-full max-w-[1200px] flex flex-col justify-center gap-6 text-[#333333] font-inter mb-16 text-center">
    <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
      There are thousands of networks today; social, professional, charitable and more. <br />
      Yet most underutilise their greatest asset:
      <span className="font-extrabold italic"> the intelligence and lived experience of their own members.</span>
    </p>
    <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
      While many networks focus heavily on events and programming, only few systematically unlock the
      <span className="font-extrabold italic"> compounding value that exists within the membership itself.</span>
    </p>
    <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
      Our belief is simple:
      <span className="font-extrabold italic"> The future of high value networks lies not in more activity, but in deeper, more intelligent member-to-member value creation.</span>
    </p>
    <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
      We are building the world’s most intelligent learning and collaboration ecosystem, one where insight, experience and access are intentionally activated so that
      <span className="font-extrabold italic"> member intelligence compounds over time.</span>
    </p>
    <p className="text-[14px] md:text-[22px] font-medium leading-[1.4]">
      Our approach focuses on carefully curated networks, each designed to deliver unique value to its members and critically, to each other through structured initiatives, high trust interactions and thoughtfully deployed AI tools.
    </p>
  </div>
);

const Websites = () => (
  <section className="relative w-full pt-0 pb-[100px] px-[20px] overflow-hidden flex flex-col items-center">
    <style>{`
      .nc-card { transition: transform 500ms cubic-bezier(.2,.7,.2,1), box-shadow 500ms ease; }
      .nc-card:hover { transform: translateY(-4px); box-shadow: 0 24px 60px -24px rgba(0, 0, 0, 0.55); }
      .nc-card--light:hover { box-shadow: 0 24px 60px -22px rgba(170, 120, 40, 0.45); }
      .nc-sheen {
        background: linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.14) 50%, transparent 100%);
        transform: skewX(-18deg) translateX(0);
        opacity: 0;
      }
      .nc-card--light .nc-sheen {
        background: linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%);
      }
      .nc-card:hover .nc-sheen { animation: nc-sweep 1.1s cubic-bezier(.4, 0, .2, 1) forwards; }
      @keyframes nc-sweep {
        0%   { transform: skewX(-18deg) translateX(0);    opacity: 0; }
        15%  { opacity: 1; }
        100% { transform: skewX(-18deg) translateX(350%); opacity: 0; }
      }
      .nc-photo {
        transform: scale(1) translateZ(0);
        backface-visibility: hidden;
        will-change: transform;
        transition:
          opacity 700ms ease-out,
          transform 1800ms cubic-bezier(0.22, 1, 0.36, 1);
      }
      .nc-card:hover .nc-photo { transform: scale(1.05) translateZ(0); }
      @media (prefers-reduced-motion: reduce) {
        .nc-card, .nc-card:hover { transform: none; transition: none; }
        .nc-card:hover .nc-sheen { animation: none; }
        .nc-photo, .nc-card:hover .nc-photo { transform: none; transition: opacity 700ms ease-out; }
      }
    `}</style>

    <div className="w-full flex flex-col items-center relative z-10">
      {INTRO}
      <div className="flex w-full max-w-[1300px] flex-col gap-5">
        {CARDS.map(card => (
          <NetworkCardView key={card.id} card={card} />
        ))}
      </div>
    </div>
  </section>
);

export default Websites;