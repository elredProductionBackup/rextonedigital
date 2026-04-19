import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="px-2.5  md:px-10 md:pt-16 pb-[30px] md:pb-30  ">

      <div className=" bg-[#F8F6F2] p-5 md:p-12 lg:p-16 lg:pr-40">

        <div className="space-y-6 text-[#1D1D1D] tracking-[-0.2px] leading-relaxed font-inter text-[14px] md:text-[22px] font-medium">

          <p>
            There are thousands of networks today; social, professional, charitable,
            and more.Yet most underutilise their greatest asset:
            <span className="italic font-semibold">
              {" "}the intelligence and lived experience of their own members.
            </span>
          </p>

          <p>
            While many networks focus heavily on events and programming, few
            systematically unlock the
            <span className="italic font-semibold">
              {" "}compounding value that exists within the membership itself.
            </span>
          </p>

          <p>
            Our belief is simple:
            <span className="italic font-semibold">
              {" "}The future of high value networks lies not in more activity,
              but in deeper, more intelligent member-to-member value creation.
            </span>
          </p>

          <p>
            We are building the world’s most intelligent learning and collaboration
            ecosystem, one where insight, experience, and access are intentionally
            activated so that
            <span className="italic font-semibold">
              {" "}member intelligence compounds over time.
            </span>
          </p>

          <p>
            Our approach focuses on carefully curated networks, each designed to
            deliver unique value to its members and, critically, to each other
            through structured initiatives, high trust interactions, and
            thoughtfully deployed AI tools.
          </p>

        </div>

        {/* Signature */}
        <div className="mt-12">

          <Image
            src="/saurabhgoswamy.svg"
            alt="Saurabh Goswamy"
            width={220}
            height={80}
            className="mb-4"
          />

          <p className="text-[15px] md:text-[17px] font-inter tracking-[-1px] text-[#333333] font-medium">
            Saurabh Goswamy
          </p>

          <p className="text-[12px] md:text-[14px] text-[#333333] font-inter tracking-[-1px] font-medium">
            Founder & CEO
          </p>

        </div>

      </div>

    </section>
  );
}