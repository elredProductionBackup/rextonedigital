"use client";

import React from "react";

const ClaudeContent: React.FC = () => (
  <div className="space-y-8">
    <div>
      <p className="text-[24px] md:text-[28px] font-semibold font-inter text-black tracking-[-1px] leading-tight mb-4">
        Key Insights from "Sapiens" on Human Tribal Nature
      </p>

      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-inter font-medium leading-relaxed tracking-[-0.5px]">
        <span className="font-medium text-black">
          Yuval Noah Harari
        </span>{" "}
        explores the deeply tribal nature of humans throughout "Sapiens." Here are some key concepts:
      </p>
    </div>

    <div className="space-y-4">
      {/* Section 1 */}
      <div className="space-y-2">
        <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">
          The Cognitive Revolution and Group Cooperation
        </h4>

        <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          Harari argues that human's ability to cooperate in large numbers stems from our capacity to believe in shared myths and stories. He discusses how:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          <li>Humans can only maintain stable social relationships with about 150 people (Dunbar's number)</li>
          <li>Larger cooperation requires shared beliefs in abstract concepts like nations or corporations</li>
          <li>These "imagined orders" allow strangers to work together effectively</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="space-y-2">
        <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">
          In-Group vs. Out-Group Dynamics
        </h4>

        <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          The book explores how humans naturally form tribal identities:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          <li>Historical conflicts often stem from competing tribal identities scaled up to larger societies</li>
          <li>Modern nationalism and political parties reflect ancient tribal instincts</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="space-y-2">
        <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">
          The Role of Gossip and Social Bonds
        </h4>

        <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          Harari emphasizes that:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          <li>Language evolved partly to enable social bonding through gossip</li>
          <li>Sharing information about group members helped maintain social cohesion</li>
          <li>This created the foundation for larger social cooperation</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="space-y-2">
        <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">
          Modern Implications
        </h4>

        <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          The book suggests that despite our technological advancement:
        </p>

        <ul className="list-disc ml-6 space-y-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
          <li>We still operate with tribal psychology designed for small hunter-gatherer groups</li>
          <li>Many contemporary problems stem from this mismatch between ancient instincts and modern realities</li>
          <li>Understanding our tribal nature is crucial for addressing global challenges</li>
        </ul>
      </div>
    </div>

    <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
      These themes run throughout the book as Harari examines how human cooperation evolved from small bands to global civilizations, while our underlying psychology remained fundamentally tribal.
    </p>
  </div>
);

export default ClaudeContent;