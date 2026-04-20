import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-[330px] bg-[#F2F2F2] px-[20px] md:px-[60px] py-[30px] md:py-[80px] flex flex-col gap-[30px] md:gap-[50px] items-center justify-center">

  <div className="w-full max-w-[1536px] flex items-center justify-between">
    
    <Link href="/" className="flex items-center justify-center w-[100px] h-[14px] md:w-[220px] md:h-[42px] overflow-hidden">
      <Image
        src="/asset/theNetwork.svg"
        alt="The Network Logo"
        width={210}
        height={42}
        className="object-contain w-[100px] md:w-[210px] h-auto"
      />
    </Link>

    <div className="flex items-center gap-6 md:gap-12 text-[#333333] font-inter font-medium text-[10px] md:text-[20px]">
  <a href="/why" className="hover:text-[#C01823] transition-colors">Why</a>

  <a 
    href="mailto:info@rextonedigital.com" 
    className="hover:text-[#C01823] transition-colors"
  >
    Contact
  </a>
</div>

  </div>

  <hr className="border-t border-[#333333] w-full opacity-20" />

  <div className="w-full max-w-[1536px] flex items-center justify-between text-[#333333] font-inter font-medium text-[10px] md:text-[20px] leading-[14px] md:leading-[28px]">

    <p>© 2026 Rex-Tone Digital Private Limited. All Rights Reserved</p>

    <div className="flex items-center gap-4">
      {/* future links */}
    </div>

  </div>

</footer>
  );
};

export default Footer;
