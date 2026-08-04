import type { Metadata } from "next";
import {
  LegalLayout,
  Section,
  SubHeading,
  LegalList,
  LegalLink,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Community Guidelines | The Network",
  description:
    "Community Guidelines for The Network — the rules that keep the Platform safe, respectful and professional for all users.",
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalLayout
      title="Community Guidelines"
      lastUpdated="4 Aug 2026"
      intro={
        <div className="flex flex-col gap-[16px]">
          <p>
            These community guidelines are designed to ensure a safe, respectful, and professional
            environment for all our users on the Platform. You must read, understand, and agree with these
            community guidelines carefully before engaging or/and participating on the Platform.
          </p>
          <p>
            By using our Platform, you agree to abide by these guidelines. We reserve the right to take
            action if these rules are violated. Any term that is used and not defined under these Community
            Guidelines will have the meaning ascribed to it under the Terms of Use available on{" "}
            <LegalLink href="https://www.rextonedigital.com/terms-of-use/">
              https://www.rextonedigital.com/terms-of-use/
            </LegalLink>
            .
          </p>
          <p>
            On this platform, we welcome discussions about each other&apos;s professions, work, workplace and
            we encourage our users to communicate with fellow users in a cordial manner. To maintain a
            positive and productive community, we request that all users adhere to these guidelines while
            accessing the Platform.
          </p>
        </div>
      }
    >
      <Section heading="Professional Conduct">
        <p>
          Be respectful and professional in your interactions. Do not behave in an offensive, rude,
          disrespectful, harassing, or discriminatory manner. Harassment includes but is not limited to spam
          messages, bullying, or hate speech, etc.
        </p>
        <p>
          Do not engage in deceptive, fraudulent, or malicious activities and avoid discriminatory language
          and behaviour, and respect the diversity of our community.
        </p>
      </Section>

      <Section heading="Abusive and Harassing Content">
        <p>
          Do not post any harassing or bullying content. We do not allow personal attacks, intimidation,
          shaming, disparagement, usage of abusive language in any form or manner. As a platform, we promote
          a space for safe, civil and professional conversations and we prohibit any actions and behaviour
          associated with harassment, bullying, or other abusive conduct.
        </p>
        <p>
          Any content, actions, behaviour associated with harassment, bullying, or other abusive conduct will
          be removed from the Platform.
        </p>
      </Section>

      <Section heading="Adult Nudity and Sexual Content">
        <p>
          We aim to keep the Platform free from any obscene, pornographic or sexually explicit content. This
          will even include any kind of content which may be either partially or fully animated.
        </p>
        <p>
          We do not allow any content that has any full or partial nudity, including, but not limited to
          depictions of genitalia, uncovered buttocks or partial or complete exposed breasts or any content
          that in any way depicts sexual activities for the purpose of sexual gratification.
        </p>
        <p>
          We do not allow any sexual solicitation (for e.g., offering or asking for sexual favours or any
          attempts thereto, or nude photos/videos/imagery).
        </p>
        <p>Please refrain from use of coarse language with explicit sexual connotations on the Platform.</p>
        <p>
          Please note, revealing the identity of an accused or a victim in cases involving sexual offence is
          a criminal offense. Therefore, ensure that you do not reveal the identity of victims or accused
          persons (including alleged victims and alleged accused persons) of sexual exploitation by name or
          image or otherwise.
        </p>
        <p>
          Avoid sharing links to third-party websites hosting sexually explicit content or content that
          violates applicable laws or this community guideline.
        </p>
      </Section>

      <Section heading="Safety of children below the age of 18, child pornography, nudity">
        <p>
          We are deeply committed to the safety of children, and we do not allow any content that is (i)
          harmful for, or (ii) endangers children, or (iii) amounts to child pornography.
        </p>
        <p>
          Do not post or share any sexually explicit content involving minors (those under the age of 18 or
          as defined under applicable laws). This includes full or partial nudity of minors including, but
          not limited to depictions of genitalia, uncovered buttocks or exposed breasts. Additionally, do not
          post any content depicting a person in power inflicting physical and/or psychological trauma /abuse
          of minors.
        </p>
        <p>
          We have zero tolerance for content that depicts the sexual exploitation of minors. Do not share,
          post, transmit, or solicit any exploitation material depicting minors.
        </p>
        <div className="rounded-[10px] border border-[#E5E5E5] bg-[#FAFAFA] p-[16px] md:p-[20px]">
          <p className="font-semibold text-[#1A1A1A] mb-[8px]">
            Tips for Parents / Caregivers / Guardians of minors:
          </p>
          <LegalList
            variant="roman"
            items={[
              "Do not post information (either in a post or via comments) that reveals personal information, or the location of your children online. This would include full names / birth date / home address / uniforms that would identify a particular school or schedules of your children;",
              "Always check with the parents/caregivers/guardians before sharing information about other children.",
            ]}
          />
        </div>
      </Section>

      <Section heading="Prohibited Activities">
        <SubHeading>Violence</SubHeading>
        <p>
          Do not upload or share content that is gratuitously shocking, sadistic, or excessively graphic, or
          content that glorifies violence or celebrates the suffering or humiliation of others, including but
          not limited to:
        </p>
        <LegalList
          items={[
            "Depictions or enactment of or threats of violence or cruelty against people or animals, or of dying or wounded people, or animals.",
            "Depictions of dismembered, mutilated, charred, or burned human or animal remains.",
            "Depictions of gore in which an open wound or injury is the core focus or otherwise.",
            "Depictions of severe physical violence, including beating, kicking, strangling, drowning, biting, poisoning, burning, or forcible restraint of a human or animal.",
          ]}
        />
        <p>
          However, content that aims to bring attention to specific societal issues may be allowed to be
          posted with restricted distribution terms.
        </p>

        <SubHeading>Harmful organizations or individuals</SubHeading>
        <p>
          We don&apos;t allow any terrorist organizations or violent extremist groups on our Platform.
          Individuals and groups that commit crimes or inflict significant damage are considered harmful.
          These may include but are not restricted to those involved in the following activities: hate
          groups, cults, terrorist or violent extremist groups, murder, organized crime, trafficking in
          persons or organs, trafficking in weapons or drugs, kidnapping, extortion, fraud, blackmail, money
          laundering or cybercrime.
        </p>
        <p>
          Do not share or engage with any content which expresses support, or praises the above harmful
          individuals and organizations, or their leaders or members. We prohibit any content containing
          names, symbols, uniforms, gestures, or other objects that represent the above harmful individuals
          and/or organizations.
        </p>

        <SubHeading>Dangerous goods</SubHeading>
        <p>
          Sharing any content that involves the buying, selling, trading, or use of illegally obtained
          products, weapons (including ammunition and firearms), narcotic drugs, or other restricted
          substances is prohibited.
        </p>

        <SubHeading>Human and animal exploitation</SubHeading>
        <p>
          Please refrain from sharing anything that encourages bestiality, human or animal trafficking, or
          human exploitation, including but not limited to:
        </p>
        <LegalList
          items={[
            "Shows people mistreating animals for fun or other purposes.",
            "Shows animals in an unfamiliar environment, like a circus;",
            "Solicits for escort services and/or prostitution;",
            "May encourage or support the exploitation of people. For instance, forced marriages, sex trafficking, etc.",
          ]}
        />
        <p>
          However, subject to use of appropriate disclaimers and with limited distribution terms, content may
          be shared for the sole purpose of raising awareness on social issues like animal welfare, human
          trafficking, etc.
        </p>

        <SubHeading>Frauds, scams and misleading profiles or content</SubHeading>
        <LegalList
          items={[
            "Do not share any content or information that encourages phishing, ponzi schemes, or other fraudulent schemes to trick people into giving money or anything of value.",
            "Do not make any false, inaccurate, deceptive, or disparaging statements on or through the Platform.",
            "Do not encourage or share any content or information on pyramid schemes, romance scams, or any other kind of fraud activities on the Platform.",
            "Do not share any malicious software that endangers the Platform, or its users.",
            "Creating or sharing fake entities or profiles on the Platform are not permitted. Posting false or misleading information about your credentials, employment history, affiliations, or accomplishments is prohibited.",
            "It is recommended that you use your own photo as your user profile picture, ensuring it accurately represents you. Do not claim affiliation with a business or organization if you have no genuine connection to it.",
          ]}
        />

        <SubHeading>Intellectual Property Rights</SubHeading>
        <p>
          Sharing content that violates another person&apos;s trademark, copyright, or other intellectual
          property rights is prohibited. Before sharing any content or information, please make sure you have
          all the requisite rights or licenses in and to the intellectual property rights of the content that
          you are sharing.
        </p>
      </Section>

      <Section heading="Armed Forces and Government Personnels">
        <p>
          Do not share anything that features members of the armed forces or other government personnel which
          may not be permitted under applicable laws. Any person featured in the content or profile should
          specifically refrain from wearing uniforms or identifiable objects (such as badges) of the armed
          services or government personnel (including the military, police, navy, or air force) unless
          permitted under applicable laws.
        </p>
      </Section>

      <Section heading="National Flag, Emblem and currency">
        <p>
          When displaying a nation&apos;s flag, emblem, or currency in content or a profile, it should always
          be done with respect and without belittling the nation&apos;s honor. Any content or profile that
          intentionally misrepresents or disrespects the national flag, emblem, symbols, currency, and
          similar elements is prohibited and may be subject to removal from the Platform.
        </p>
      </Section>

      <Section heading="Hateful, derogatory and defamatory content">
        <p>
          We strictly prohibit any and all content or information that targets or incites hatred, violence, or
          discriminatory action against individuals or groups based on attributes such as race, ethnicity,
          national origin, caste, gender, gender identity, sexual orientation, religious affiliation, or
          disability status. Offensive content may be subject to removal from the Platform.
        </p>
        <p>
          Do not share, support, promote or propagate any fake news or information that could cause harm,
          insult, demean, or defame any individual or entity. Additionally, spreading fake news can create
          public fear and jeopardize a nation&apos;s safety and security.
        </p>
      </Section>

      <Section heading="Protection of privacy">
        <p>
          We are committed to safeguarding every individual&apos;s right to privacy, and any content or
          information that infringes upon this right will be subject to removal from the Platform.
        </p>
        <p>
          Avoid sharing content or information that includes private or sensitive information of another
          person, including minors.
        </p>
        <p>
          If another person appears in the content you share on the Platform, it is presumed that you have
          obtained adequate consent from the individual in question or the legal guardian of a minor featured
          in your posted content. The Platform will not be responsible for the inclusion of any such content.
        </p>
      </Section>

      <Section heading="Religious places or private property">
        <p>
          Avoid sharing content in locations where you don&apos;t have permission to, such as private property
          or places of worship, etc.
        </p>
      </Section>

      <Section heading="Sexual innuendos unsolicited advances">
        <p>
          Our Platform is a networking platform. Any unlawful displays of attraction, desire, requests for
          romantic relationships, innuendo, or lewd remarks are not permitted.
        </p>
        <p>
          Refrain from making unwelcome advances through comments, posts, or messages, and do not share
          sexually explicit images with anyone on or through the Platform.
        </p>
        <p>
          Engaging in activities seeking romantic relationships, requesting romantic dates, or making sexual
          remarks about the appearance or perceived attractiveness of others is strictly prohibited on the
          Platform.
        </p>
      </Section>

      <Section heading="Spamming">
        <p>
          Untargeted, irrelevant, clearly undesired, unsanctioned, overly commercial or promotional, or
          excessively repetitive messages or similar content are not permitted.
        </p>
        <p>
          Refrain from sending unsolicited commercial messages or engaging in other forms of spamming others
          by using our invitation feature.
        </p>
        <p>
          Content intended with the intent to artificially boost engagement through the misuse or
          misrepresentation of the Platform&apos;s features may be subject to removal.
        </p>
      </Section>

      <Section heading="Generating Artificial Intelligence (AI) Content">
        <LegalList
          items={[
            "Review any AI-generated summary, description, or other AI-assisted content before you publish it on the Platform. You remain responsible for everything posted from your account, whether you drafted it yourself or generated it with the assistance of artificial intelligence tools.",
            "Do not use AI-generated content to impersonate any other person or entity, or to make false, inaccurate, or unverifiable claims about yourself or any other person.",
            "Publishing AI-generated portfolio, profile, credential, or work history information that is misleading, exaggerated, or fraudulent is prohibited.",
            "If you become aware that an AI-generated summary or description relating to you, your work, or your credentials is inaccurate, please correct it promptly.",
          ]}
        />
      </Section>

      <Section heading="Event Participation">
        <LegalList
          items={[
            "Register for events only with accurate and complete information about yourself.",
            "Do not impersonate other attendees, speakers, organizers, or event staff.",
            "Treat event staff, organizers, speakers, and fellow participants with respect and professional courtesy.",
            "Follow all venue rules and applicable laws while attending any event hosted or listed on the Platform.",
            "Do not misuse attendee information. Any contact details or other information obtained through an event must not be used for spamming, unsolicited marketing, or any unlawful purpose.",
            "Harassment, disruptive behaviour, or any other conduct prohibited under these community guidelines is equally prohibited at events, whether held online or in person.",
          ]}
        />
      </Section>

      <Section heading="Reporting Violations">
        <p>
          If you encounter content or behaviour that violates these guidelines, please report it to our
          community moderators at{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink>. The
          Platform takes these guidelines seriously and may take action against users who violate them. This
          could include suspending or banning their account. The Platform is committed to maintaining a safe
          and respectful environment for all users.
        </p>
      </Section>

      <Section heading="Compliance with Legal Regulations">
        <p>
          Users are expected to comply with all applicable laws and regulations when using the Platform.
        </p>
      </Section>

      <Section heading="Moderation and Consequences">
        <p>
          Our Platform may moderate content and take action against users who violate these guidelines.
          Repeated violations may lead to warnings, temporary suspension, or permanent removal from the
          Platform.
        </p>
      </Section>

      <Section heading="Continuous Improvement">
        <p>We value feedback from our community to improve the Platform. Feel free to share your suggestions and concerns with us.</p>
        <p>
          Remember, the success of our Platform relies on the participation and cooperation of our community
          members. By following these guidelines, you contribute to a professional and supportive network for
          all users. Thank you for being a part of our community!
        </p>
      </Section>
    </LegalLayout>
  );
}