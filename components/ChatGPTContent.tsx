import React from "react";

const ChatGPTContent = () => (
  <div className="space-y-10">
    <div className="space-y-4">
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-inter font-medium leading-relaxed tracking-[-0.5px]">
        <span className="font-medium text-black">Yuval Noah Harari's core thesis in Sapiens</span> is often simplified as "humans are tribal," but his argument is more precise and more powerful:
      </p>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-inter font-medium leading-relaxed tracking-[-0.5px]">
        Humans are uniquely capable of forming <span className="font-medium text-black">large-scale, flexible tribes of strangers</span> through shared beliefs.
      </p>
      <p className="font-semibold text-black pt-2">Here are the key insights that matter.</p>
    </div>

    {/* Point 1 */}
    <div className="space-y-3">
      <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">1. Humans didn't outcompete others through strength — but through cooperation</h4>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">For most of history, Homo sapiens were physically unremarkable. What changed the game was:</p>
      <ul className="space-y-2 ml-4">
        {['Ability to cooperate in large numbers', 'Ability to coordinate with non-kin', 'Ability to reorganize groups quickly'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] pt-2"><span className="font-bold text-black">Implication:</span> Human success is fundamentally a <span className="font-bold text-black">network effect</span>, not an individual trait.</p>
    </div>

    {/* Point 2 */}
    <div className="space-y-3">
      <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">2. The "tribe" is built on shared stories (Harari's big idea)</h4>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">Harari argues that large human groups function because of <span className="font-bold text-gray-700">shared imagined realities</span> — what he calls "common myths."</p>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">Examples he gives:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Nations', 'Corporations', 'Money', 'Religions', 'Legal systems'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] pt-2"><span className="font-bold text-black">Implication:</span> Trust at scale is manufactured through narrative.</p>
    </div>

    {/* Point 3 */}
    <div className="space-y-3">
      <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">3. Trust among strangers is the true superpower</h4>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">In modern societies, trust comes from systems and symbols, such as:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Brands', 'Credentials', 'Institutions', 'Reputation signals'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] pt-2"><span className="font-bold text-black">Implication:</span> Elite networks are essentially <span className="font-bold text-black">high-trust micro-tribes</span>.</p>
    </div>

    {/* Point 4 */}
    <div className="space-y-3">
      <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">4. Human identity is inherently group-based</h4>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] ">Harari emphasizes that humans instinctively think in terms of:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Us vs. them', 'In-group vs. out-group', 'Shared identity markers'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">This tribal wiring is ancient and persistent.<br /> Even in modern, globalized contexts, people seek:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Belonging', 'Status within a group', 'Recognition by peers'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] pt-2"><span className="font-bold text-black">Implication:</span> High-end communities succeed when they create <span className="font-bold text-black">clear identity and belonging signals</span>.</p>
    </div>

    {/* Point 5 */}
    <div className="space-y-3">
      <h4 className="text-[24px] md:text-[28px] font-medium font-inter text-black tracking-[-1px]">5. Tribes scale through symbols and rituals</h4>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">As groups grow, personal familiarity declines. To compensate, societies create:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Rituals', 'Badges of belonging', 'Exclusive language', 'Shared experiences'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">This tribal wiring is ancient and persistent.<br /> Even in modern, globalized contexts, people seek:</p>
      <ul className="grid grid-cols-1 gap-2 ml-4">
        {['Belonging', 'Status within a group', 'Recognition by peers'].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px]">
            <span className="w-1.5 h-1.5 bg-[#8A8A91] rounded-full"></span> {item}
          </li>
        ))}
      </ul>
      <p className="text-[#8A8A91] text-[15px] md:text-[18px] font-medium font-inter tracking-[-0.5px] pt-2"><span className="font-bold text-black">Implication:</span> High-end communities succeed when they create <span className="font-bold text-black">clear identity and belonging signals</span>.</p>
    </div>


  </div>
);

export default ChatGPTContent;