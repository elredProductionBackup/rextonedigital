import type { Metadata } from "next";
import {
  LegalLayout,
  Section,
  Clause,
  SubHeading,
  LegalList,
  Term,
  LegalLink,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use | The Network",
  description:
    "Terms of Use of Rex Tone Digital Pvt. Ltd. governing your access to and use of the Platform & Network and our Services.",
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="4 Aug 2026">
      <Section heading="1. PRELIMINARY">
        <Clause n="1.1">
          These terms and conditions (<Term>“Terms of Use”</Term>) along with our Privacy Policy (available
          here), Community Guidelines (available here), and other policies (<Term>“Platform &amp; Network
          Policies”</Term>) available on Privacy policy (our <Term>“Platform &amp; Network”</Term>) form a
          legally binding agreement between You (<Term>“User”</Term> or <Term>“Member”</Term> or{" "}
          <Term>“You”</Term> or <Term>“Your”</Term>) and Rex Tone Digital Pvt Ltd. (<Term>“The Network”</Term>{" "}
          or <Term>“Company”</Term> or <Term>“Us”</Term> or <Term>“We”</Term> or <Term>“Our”</Term>). They
          apply to Your use of the Platform &amp; Network and for availing any Services from Us.
        </Clause>
        <Clause n="1.2">
          YOU MUST READ, UNDERSTAND, AND AGREE WITH THESE TERMS OF USE CAREFULLY BEFORE ENGAGING OR/AND
          PARTICIPATING ON THE PLATFORM &amp; NETWORK.
        </Clause>
        <Clause n="1.3">
          If you do not agree or understand any part of these Terms of Use, please reach out to{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink> and
          refrain from using Our Platform &amp; Network or/and availing Our Services in the meantime.
        </Clause>
        <Clause n="1.4">
          We retain an unconditional right to modify or amend these Terms of Use. You can refer to the “Last
          Updated” header above to understand when these Terms of Use were amended last. If We make material
          changes to the Terms of Use, We may notify You and give You an opportunity to review the changes
          before they become effective for You. Such changes would not be retrospective, and it would be
          within Your prerogative to close Your User Account or Member Account if You object to any of the
          changes incorporated in Our Terms of Use. However, Your continued use of the Services subsequent to
          Our notification of the changes would mean that You consent to the updated Terms of Service as of
          their date of inclusion.
        </Clause>
        <Clause n="1.5">
          These Terms of Use do not apply to any browsing, accessing, or transacting by You on any
          third-party platform or service that You may access or interact with through the Platform &amp;
          Network, in connection with the Services or otherwise. You agree that Your access and use of a
          third-party platform or service forms a separate and independent relationship which shall be
          governed by the terms and conditions provided by such third-party, without any liability or
          obligation towards Us. Mere provision of the interface of the third-party platform or service onto
          the Platform &amp; Network does not amount to Us being responsible to You for any actions or
          inactions vis-à-vis the services offered by such third-party platform or service to You.
        </Clause>
        <Clause n="1.6">
          All terms and expressions when used with capitalized first letter but not defined shall have the
          meaning ascribed to them in the Annexure.
        </Clause>
      </Section>

      <Section heading="2. ABOUT THE PLATFORM & NETWORK">
        <Clause n="2.1">
          The Platform &amp; Network is built to allow You the opportunity to communicate, network, interact,
          collaborate and transact with the diverse community of Users registered on the Platform or Network.
          We are predominantly a technology service provider (a) facilitating transactions in goods and
          services between 2 (two) or more Users or members on the Platform &amp; Network, (b) providing Our
          Users or members a medium where they can communicate, network, interact, collaborate and exchange
          ideas whilst connecting with a variety of service professionals; and (c) suggesting potential events
          where Users or members can collaborate and network.
        </Clause>
        <Clause n="2.2">
          The Network may introduce other functionalities and features on its Platform &amp; The Network, from
          time to time, which shall be deemed to be covered under these Terms of Use, in addition to any
          specific terms provided separately.
        </Clause>
        <Clause n="2.3">
          Our Services give Users or members the ability to send messages and share information with other
          Users or members in connection with any proposed transaction that such Users or members want to
          engage in. We may, at our sole discretion, provide additional support services to the Users or
          members such as payment processing, logistics and delivery support to help them transact seamlessly
          on the Platform &amp; The Network. It is hereby clarified that The Network merely introduces the
          Users or members to such Service Providers on the Platform &amp; Network and is not actively involved
          in any aspect of the payment or delivery process that the User or members may be engaging with.
        </Clause>
        <Clause n="2.4">
          Users or members remain solely liable and responsible for the effective delivery of goods and
          services to other transacting Users or members on the Platform &amp; Network, for aspects including
          delivery timelines for goods and services, terms of payment, warranties and support services related
          to the goods and services. At no point would The Network hold any right, title, or interest over any
          such good or service for which Users or members are transacting on the Platform &amp; Network. Users
          &amp; members on the Platform &amp; Network are not agents, contractors, or partners of The Network
          or any of Our affiliates, licensors, associates, or group companies. Users or members do not have
          the authority to bind or represent The Network vis-à-vis the transactions undertaken by them on the
          Platform &amp; Network.
        </Clause>
        <Clause n="2.5">
          The Platform &amp; Network merely intends to provide a medium for Users or members to reach,
          interact, collaborate and transact with a wider user or members base. The Network does not control
          and would not be responsible for any professional service listings/information, messages sent
          between Users or members, e-mails sent from outside The Network&apos;s domain, or any other means of
          electronic communication, whether undertaken through the Platform &amp; Network or via other
          websites.
        </Clause>
      </Section>

      <Section heading="3. ACCESS TO THE PLATFORM & NETWORK">
        <Clause n="3.1">
          You may use the Platform &amp; Network and/or our Services if You are competent to contract under
          Applicable Laws. In the event you are not competent to contract under Applicable Laws, you may only
          use the Platform &amp; Network under the supervision of a parent or legal guardian.
        </Clause>
        <Clause n="3.2">
          For availing the full extent of our Services, You must duly register with the Platform &amp; Network
          as a User or members and have a valid and subsisting User Account or Member Account (
          <Term>“Registered Users”</Term>) in accordance with these Terms of Use.
        </Clause>
        <Clause n="3.3">
          Apart from Registered Users or members, the Platform &amp; Network may also provide a limited extent
          of its Services to <Term>“Non-Registered”</Term> Users or members who access the Platform &amp;
          Network to merely view the User Card or Profiles of Registered Users or members.
        </Clause>
        <Clause n="3.4">
          We may, at our sole discretion, block Your access to the Platform &amp; Network (or any part
          thereof), restrict the provision of Our Services to You, or temporarily/permanently delete Your User
          Account or Member Account if We find Your conduct and participation to the Platform &amp; Network in
          violation of these Terms of Use.
        </Clause>
      </Section>

      <Section heading="4. REGISTRATION PROCESS">
        <Clause n="4.1">
          You can register with Us by agreeing to these Terms of Use and by providing Us with accurate and
          complete information that We seek at the time of registration, which may, at our sole discretion,
          include one or all of the following particulars – (a) Your mobile number; (b) first name; (c) last
          name; and (d) email-ID. You are also asked to choose a username for your The Network account, after
          which a one-time password (<Term>“OTP”</Term>) is sent to confirm your e-mail ID.
        </Clause>
        <Clause n="4.2">
          Upon successful verification of the OTP, Your personal details including gender, date of birth, place
          of residence, profession, industry and employer would be required for creating Your User Account or
          Member Account. We recognize that these particulars qualify as Your personal data and accordingly
          assure that they would be collected and processed by Us in strict compliance with Our Privacy Policy,
          and other Applicable Laws.
        </Clause>
        <Clause n="4.3">
          Once the aforementioned particulars are submitted, You would be able to access Our Services as a User
          or members of the Platform &amp; Network. After the completion of the registration process, You will
          have access to Your User or members Account which will carry Your display picture, name, profession,
          city, linkedin url, organisation url, resume, skills, and other details such as user or members
          ratings in relation to Your use of the Platform &amp; Network. In addition, Your User or members
          Account will carry other relevant information such as Leads/Offers, your hobbies, details required for
          event registration - spouse name, children name and dob, diet preference, diet restriction. Some of
          these information(s) may not be mandatory for Users or members to provide and You will always have an
          option to customize Your User or members Account as per Your preferences.
        </Clause>
        <Clause n="4.4">
          The app may generate AI-created summaries based on information users provide. The summaries are for
          informational purposes. Users are responsible for reviewing and ensuring the accuracy of their
          profiles. You reserve the right to modify or regenerate AI-generated content by making changes on the
          information on your user profile. Users remain responsible for any claims or representations made on
          their profiles, even if AI assisted in generating them.
        </Clause>
        <Clause n="4.5">
          By creating the User or members Account with Us, You agree that You have read these Terms of Use, all
          Your information is accurate and complete, and You promise to update this information as necessary.
        </Clause>
        <Clause n="4.6">
          You are responsible for the security of Your User or members Account and any information that You
          upload or share through Your User or members Account. Please keep your login, password, and account
          details private and confidential and avoid sharing the same with any other person. If You become
          aware of any unauthorized use of Your User or members Account, it is Your duty to notify Us
          immediately and furnish all relevant information that We seek, and You may write to Us at{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink> in this
          regard.
        </Clause>
        <Clause n="4.7">
          We shall provide You access to the Platform &amp; Network, information provided by other Users or
          members, and standard support for the Services, which would be limited to The Network&apos;s role as
          an intermediary involved in the facilitation of Services to its Users or members on a
          principal-to-principal basis.
        </Clause>
        <Clause n="4.8">
          We will be responsible for providing You with accurate and updated information about Our Services.
          However, please note that We may rely on Our Service Providers to source some information, and
          obligation for ensuring the accuracy and completeness of such information is imposed on them.
        </Clause>
        <Clause n="4.9">
          You become a User or member of the Platform &amp; Network by registering yourself based on the
          procedure outlined above. However, non-users or members may still be able to access some
          functionalities of the Platform &amp; Network such as viewing the User profiles. Please note that the
          terms of this Terms of Use will unequivocally apply to such non-users or non members as well to the
          extent applicable and relevant to them.
        </Clause>
      </Section>

      <Section heading="5. CREATING A LEAD: INTERACTING WITH THE PLATFORM & NETWORK AS A SELLER">
        <SubHeading>5.1 Background:</SubHeading>
        <div className="pl-[16px] md:pl-[20px] flex flex-col gap-[14px]">
          <p>
            <Term>(A)</Term> In our endeavour to allow Users or members to reach out to the diverse community
            of Users or members registered on the Platform &amp; Network, We allow every User or members to
            create specific ‘Leads’/Offers outlining the services that can be offered by them. These
            ‘Leads’/Offers are also made accessible on the User&apos;s or members respective User or members
            Account to allow all other Users or members to identify with such Users or members who intend to
            offer services matching the latter&apos;s specific requirements.
          </p>
          <p>
            <Term>(B)</Term> Whilst creating a Lead/Offer, Users or members would have to fill in specific
            particulars comprising (a) the title of the Lead/Offer, (b) a description of the good or service
            sought to be offered, (c) location from which the relevant good or service is to be offered, (d)
            selection of tags specific to the service or good, (e) a price range for the service or good, and
            (f) addition of up to five images relevant to the good or service being offered. All these
            particulars are crucial since they allow Us to connect the creators of such ‘Leads’/Offers with
            other Users or members on Our Platform &amp; Network who may be interested in availing the services
            or goods outlined therein.
          </p>
          <p>
            <Term>(C)</Term> Additionally based on the onboarding inputs by the user, the platform will
            generate an AI generated portfolio depicting possibilities of collaboration with other users.
          </p>
        </div>

        <SubHeading>5.2 Obligations on Users or members as sellers (creators of Leads/Offers):</SubHeading>
        <div className="pl-[16px] md:pl-[20px]">
          <LegalList
            variant="alpha"
            items={[
              "The relationship between the Platform/Network and You is strictly limited to the extent it has been delimited in these Terms of Use, and accordingly, You agree and acknowledge that You would be the seller on record for all goods and services sold by You on Our Platform & Network.",
              "The responsibility to comply with the relevant legal compliances including all aspects of a transaction such as purchases, returns, fraudulent transactions, required legal disclosures, and other requirements would be met and complied with solely by You in Your capacity as a seller of such goods and service. You also acknowledge Your sole responsibility for determining, collecting, and remitting all applicable taxes, duties, fees, surcharges, and other additional charges that may accrue from the sale of any good on The Network.",
              "You warrant that (a) the goods and services sold by You on The Network will remain true to their description and would not violate any of the Applicable Laws that regulate the sale and purchase transactions in the concerned goods/services, and (b) You will be responsible for any breach of the Platform & Network Policies or other Applicable Laws by Your affiliates, agents or sub-contractors.",
              "You agree to undertake all reasonable precautions in the handling of goods for the purpose of their timely delivery and/or returns, and also affirm to ensure that Your affiliates, agents or sub-contractors also employ similar precautionary measures for the timely fulfilment of all orders facilitated via The Network.",
              "You hereby acknowledge that while facilitating the Services under these Terms of Use, You may get access to certain end-customer information and documents that may also qualify as personal data of the concerned User(s) or members. You hereby undertake to not only refrain from tampering, altering or manipulating the information contained in such documents in any form, but also ensure that the details provided in such documents are complete, up-to-date and reflect the buyer's true and accurate information, if such information is needed to finalize the transaction undertaken on The Network.",
              "You undertake to ensure compliance with all the Applicable Laws that prescribe specific obligations concerning the sale of some specified goods. For instance, You must (a) not sell cigarettes and tobacco goods on The Network to minors, (b) sell medicines only if You have the requisite license under the Drugs and Cosmetics Act, 1940 and if You comply with the ancillary obligations levied on licensees under the Rules framed thereunder, (c) not sell surgical dressings, sutures and other medical devices in the absence of a registration certificate procured from the designated state licensing authority, (d) refrain from selling beauty and wellness goods of Indian-origin unless they have been manufactured by a licensed manufacturer and packaged as per the Cosmetic Rules, 2020, and (e) not sell/offer to sell goods such as antiques, art treasures, firecrackers and related explosives, food products or agricultural produce in violation of Applicable Laws, etc.",
              "You must also refrain from undertaking sale and purchase transactions in goods that are expressly barred by the provisions of any Applicable Laws, such as (a) cannabis, opium and other narcotic drugs, (b) e-cigarettes, and (c) weapons such as guns, artillery and hand-grenades etc., or any such goods or service under Applicable Law.",
              "You shall ensure that (a) the goods sought to be sold by You on the Platform & Network do not infringe upon the intellectual property, trade secret, or any other proprietary or publicity rights of third parties, (b) the ‘Leads’/Offers for the goods do not exaggerate the latter's attributes to mislead the consumers, and (c) the ‘Leads’/Offers remain true to the actual nature, appearance, quality, and condition of the good(s) sought to be sold via The Network.",
              "You are obligated under Applicable Laws to (a) appoint a grievance officer to address consumer grievances, (b) ensure that the grievance officer acknowledges the receipt of a consumer complaint within 48 (forty-eight) hours and redresses the complaint within 1 (one) month from the date of receipt of the complaint, and (c) share all the relevant particulars with Us concerning Your address, customer care number, price break-up including taxes and other charges levied on the goods/services, details pertaining to the goods/services offered including their country of origin, and other pertinent details concerning delivery, shipment, and terms of exchange and refunds, inter alia.",
              "You agree and acknowledge that The Network is merely a technology Platform & Network helping You connect with a wider user or members base and is not a party to the transactions facilitated via the Platform & Network as a buyer or a seller. Accordingly, The Network will not be responsible either to You or any other transacting party with respect to any default, deficiency, delay, fraudulent, or misrepresentative act that is committed by You or Your transacting party with respect to any transaction on the Platform & Network.",
              "You agree to operate on the Platform & Network in compliance with Applicable Laws, transact with respect to only such goods that are permitted under Applicable Laws, and provide relevant disclosures and information to Your transacting Users or members based on the nature of good.",
            ]}
          />
        </div>

        <SubHeading>5.3 Obligations on Users or members as providers of professional services:</SubHeading>
        <div className="pl-[16px] md:pl-[20px]">
          <LegalList
            variant="alpha"
            items={[
              "Users or members intending to offer professional services on The Network must undertake to comply with the Applicable Laws that prescribe a code of conduct and other due diligence obligations on the professional service provider, that may include restrictions/prohibitions on: (a) sub-commissioning their work, (b) soliciting and advertising their professional services or clients, (c) accepting gifts and other inducements, (d) accepting a fee based on the percentage of profits, (e) engaging in part-time work without the prior approval from the relevant authorities. Additionally, Users or members are prohibited from misrepresenting their skills, services or professional achievements to induce or procure prospective clients and offering telemedicine services via text, video, audio or any other functionalities offered on the Platform & Network, etc.",
              "You agree and acknowledge that The Network is merely a technology Platform & Network helping You connect with a wider user or members base and is not a party to the service transactions facilitated via the Platform & Network as a buyer of a seller. Accordingly, The Network will not be responsible either to You or any other transacting party with respect to any default, deficiency, delay, fraudulent, or misrepresentative act that is committed by You or Your transacting party with respect to any professional service transaction undertaken via the Platform & Network.",
              "You agree to operate on the Platform & Network in compliance with Applicable Laws, transact with respect to only such services that are permitted under Applicable Laws, and provide relevant disclosures and information to Your transacting Users or members based on the nature of service.",
            ]}
          />
        </div>
      </Section>

      <Section heading="6. STATING A PROBLEM: INTERACTING WITH THE PLATFORM & NETWORK AS A BUYER">
        <SubHeading>6.1 Background:</SubHeading>
        <div className="pl-[16px] md:pl-[20px] flex flex-col gap-[14px]">
          <p>
            <Term>(A)</Term> Users or members will have the option of “stating their problem” outlining the
            goods or services that they are searching for, from other Users or members on the Platform &amp;
            Network or on other third-party platforms. To state a problem on the Platform &amp; Network, the
            respective User or members has the option to highlight the specific good or service that they are
            looking for. Once created, the specific problem would feature relevant information which may include
            the date of creation, the User&apos;s or members name, profession, the name of their employer,
            etc., which would also be followed by an option to view the User or members Account and Platform
            &amp; Network profile of the relevant User or member.
          </p>
          <p>
            <Term>(B)</Term> We request You to review the services offered by other Users or members on the
            Platform &amp; Network either in pursuance of their response to Your Problems or Your response to
            Products, the Leads/Offers posted by them. You are solely responsible for verifying the authenticity
            and genuineness of the goods and services that You transact with on the Platform &amp; Network,
            without any liability or responsibility on Us.
          </p>
        </div>

        <SubHeading>6.2 Obligations on Users or members as buyers:</SubHeading>
        <div className="pl-[16px] md:pl-[20px]">
          <LegalList
            variant="alpha"
            items={[
              "You hereby agree to refrain from providing false, inaccurate, or misleading information in Your reviews and ratings for other Users or members intending to offer their services on the Platform & Network. We retain the right to monitor such reviews for quality control purposes and in determining whether Users or members (in their capacity as service professionals) are appropriate and genuine Users or members of the Platform & Network. We also reserve the right to cancel Your User or members Account, at Our sole discretion, if We believe that You do not comply with the Terms of Use.",
              "You acknowledge that soliciting or receiving services from any service professional or seller of goods registered as a User or members on the Platform & Network is solely at Your own risk, and in case any liability accrues to You in connection with You availing such services, You would be precluded from initiating any action against Us, for recovery of losses or otherwise.",
              "You agree to refrain from working around, bypassing, or circumventing any of the technical limitations of Our Services, especially when such act(s) are done to process orders outside the Platform & Network. As You would be individually and independently dealing and transacting with the seller of goods and/or services, You would be responsible for ensuring that the seller/service provider does not flout any of the Applicable Laws whilst offering their goods and/or services to You.",
            ]}
          />
        </div>
      </Section>

      <Section heading="7. REGISTERING FOR EVENT">
        <Clause n="7.1">
          Users can register for events listed. Users must provide accurate registration information. Users are
          responsible for information submitted on behalf of additional attendees. Events may be modified,
          postponed, or canceled. Users are to read event policies carefully before registering for the same.
        </Clause>
      </Section>

      <Section heading="8. PAYMENTS AND REFUNDS">
        <Clause n="8.1">
          We may, at our sole discretion, introduce Users or members with certain payment service providers for
          enabling payments from 2 (two) or more transacting Users or members. In the event we enable Users or
          members to receive services from a payment service provider, we clarify that we will merely be a
          facility provider and the same would not render Us liable for non-receipt or non-payment of any funds.
          Any breach of representations and warranties by the User or members to another User or members, or any
          deficiency in after-sales or warranty services, or fraud, inter alia, pertaining to transactions in
          goods or services facilitated via Our Platform &amp; Network, are completely the responsibility of the
          relevant Users or members undergoing the transaction.
        </Clause>
        <Clause n="8.2">
          Your relationship with The Network is on a principal-to-principal basis and You hereby acknowledge
          vide the acceptance of the Platform &amp; Network Policies that We do not have control over the goods
          and services listed by Users or members on the Platform &amp; Network. Further, You specifically
          authorise the relevant Service Providers to process, facilitate, and remit payments, and the Platform
          &amp; Network is not to be construed as a banking or financial service, since it merely facilitates
          automated online electronic payment.
        </Clause>
        <Clause n="8.3">
          We may, at our sole discretion, charge a certain platform &amp; Network fee from the Users or members
          for availing the Services on the Platform &amp; Network. Such fee shall solely be for the utilisation
          of Our technology services on the Platform &amp; Network by a User or members. The User or member
          acknowledges and agrees that payment of a platform &amp; Network fee to The Network does not, in any
          way, suggest that The Network is providing any good or service on the Platform &amp; Network to the
          Users or member. We shall not be liable for defaults, delays, or deficiency by the Service Providers
          assisting the Users or members to make payments to one another.
        </Clause>
      </Section>

      <Section heading="9. GENERAL USER OR MEMBER OBLIGATIONS">
        <Clause n="9.1">
          You agree to abide by the Platform &amp; Network Policies. In the event You do not abide, the Platform
          &amp; Network may at its sole discretion, take necessary remedial action, which could include
          termination of Your User or member Account. You are also solely responsible for maintaining the
          security and confidentiality of Your User or member Account and You hereby affirm to notify Us about
          any unauthorized use, or any other breach of security concerning the same.
        </Clause>
        <Clause n="9.2">
          You agree to provide true, accurate, current, and complete information at the time of registration and
          at all other times as required by Us. You further agree to update and keep all information You share
          with Us up-to-date. Passwords must not be revealed to anyone. Further, You are prohibited from using
          another User&apos;s or members password or login credentials to access the Platform &amp; Network, and
          You claim all responsibility for any violation of Applicable Laws or contravention of Platform &amp;
          Network Policies effected via Your User or members Account.
        </Clause>
        <Clause n="9.3">
          You allow Us to communicate with You on the particulars provided by You while registering on the
          Platform &amp; Network, including Your e-mail ID and mobile number, for marketing and other purposes
          in relation to Your use of Our Services. We would not be liable if any email or other communication
          remains unread by You because of such communication being delivered to Your junk or spam folder, or if
          You have blocked Us from sending such communications.
        </Clause>
        <Clause n="9.4">
          You affirm to refrain from buying, selling, or transferring any aspect of Your User or members
          Account, including attempts to misappropriate the achievements or any other aspect of another
          User&apos;s or members User Account. You also undertake to refrain from manipulating the system or
          gaining access to Our Platform &amp; Network or other User or members Accounts by hacking or any other
          unauthorized manner.
        </Clause>
        <Clause n="9.5">
          You shall not and You agree not to enable others to modify, arrange, reverse engineer, decrypt,
          reverse compile, decompile or disassemble Our Services or attempt to derive the source code of Our
          Services. Further, You agree not to use cheats, exploits, automation, software, bots, hacks, or any
          unauthorised third-party software designed to modify or interfere with the Platform &amp; Network
          and/or Our Services.
        </Clause>
        <Clause n="9.6">
          You will refrain from (a) publishing any content that is patently false and untrue, and is written or
          published in any form, with the intent to mislead or harass a person, entity, or agency for financial
          gain or to cause any injury to any person, (b) organizing contests or any other advertising or pyramid
          schemes on the Platform &amp; Network, and (c) interfering with another User&apos;s or member&apos;s
          use and enjoyment of the Platform &amp; Network and/or Our Services.
        </Clause>
        <Clause n="9.7">
          Without limiting the foregoing, You agree not to host, upload, modify, store, update, distribute,
          transmit, publish, share, display, or post any content through the Platform &amp; Network or through
          any service or facility including any communication feature provided on the Platform &amp; Network
          which:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <LegalList
            items={[
              "belongs to another person and to which a User or members does not have any right;",
              "is defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering, or otherwise inconsistent with or contrary to the Applicable Laws;",
              "is harmful to a child;",
              "infringes any patent, trademark, copyright or other intellectual proprietary rights;",
              "deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact;",
              "impersonates another person;",
              "threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation;",
              "contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource;",
              "is otherwise objectionable or undesirable (whether or not unlawful);",
              "is aimed at soliciting donations, or other forms of help;",
              "disparages Us or any of Our subsidiaries, affiliates, licensors, associates, partners, sponsors, goods, Services, or websites, in any manner;",
              "is an illegal activity, including under any Applicable Law;",
              "violates any Applicable Law for the time being in force.",
            ]}
          />
        </div>
        <Clause n="9.8">
          Use of Our Platform &amp; Network and/or Our Services is subject to existing laws and legal processes.
          Nothing contained in the Platform &amp; Network Policies shall limit Our rights to comply with
          governmental, court, and law-enforcement requests or requirements relating to Your use of the Platform
          &amp; Network.
        </Clause>
        <Clause n="9.9">
          You shall be responsible for all representations, facts, and opinions You make whether in respect to
          You, Your relationships, Your affiliates, Your goods/services, Your actions/omissions and/or Your
          business. You shall assume all financial and legal liability for the quality, reliability,
          merchantability and/or accuracy of all such representations and You fully understand that the outcome
          of the Services rendered by Us is contingent on the same.
        </Clause>
      </Section>

      <Section heading="10. INTELLECTUAL PROPERTY">
        <Clause n="10.1">
          The Platform &amp; Network includes a combination of content created by the Company, its service
          providers, affiliates, licensors, associates, group companies, and/or You. The intellectual property
          rights (<Term>“Intellectual Property Rights”</Term>) in all software underlying our Services and all
          materials published by Us on the Platform &amp; Network, including but not limited to software,
          advertisements, written content, photographs, graphics, images, illustrations, logos, audio or video
          clippings, and marks including the wordmark “The Network” (<Term>“The Network Content”</Term>),
          whether registered or unregistered, are owned by the Company, its service providers, affiliates,
          licensors, associates, and group companies.
        </Clause>
        <Clause n="10.2">
          You shall not modify, publish, transmit, participate in the transfer or sale of, reproduce, create
          derivative works of, distribute, publicly perform, publicly display, or in any way exploit the The
          Network Content on the Platform &amp; Network either in whole or in part without Our express written
          license. However, You may request permission to use any of our Intellectual Property Rights by writing
          to <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink>
        </Clause>
        <Clause n="10.3">
          You warrant that You are the legal and undisputed owner of the intellectual property provided by You or
          uploaded by You on the Platform &amp; Network (<Term>“User Content”</Term>) and that it does not
          infringe any third-party rights. Further, You warrant and represent that You not only have the right to
          share such User Content but have also obtained all necessary consents and approvals before sharing the
          same and shall hold Us harmless from any third-party claims made against Us for breach of privacy and
          confidentiality. You would be individually liable for any claim arising out of Your sharing of User
          Content subsequently found to be misleading, infringing, deceptive, insulting, obscene, defamatory,
          false, or violative of any of the Applicable Laws or the Platform &amp; Network Policies.
        </Clause>
        <Clause n="10.4">
          You grant to the Company and its affiliates, partners, licensors and associates a worldwide,
          irrevocable, royalty-free, non-exclusive, sub-licensable license to use, reproduce, create derivative
          works of, distribute, publicly perform, publicly display, transfer, transmit, and/or publish User
          Content for any of the following purposes: (a) displaying User Content on the Platform &amp; Network,
          (b) distributing User Content, either electronically or via other media, to other Users seeking to
          download or otherwise acquire it, and/or (c) storing User Content in any form, medium, or technology in
          a remote database accessible by other Users. As part of this license, You hereby waive any claims
          arising out of moral rights or any other ancillary rights concerning Your User Content.
        </Clause>
        <Clause n="10.5">
          You may terminate this license by either removing the specific User Content from the Platform &amp;
          Network or by closing Your The Network account, except to the extent of Your sharing it with other
          Users or members and non-users or non members on the Platform &amp; Network whilst making use of the
          Services offered by Us. We would not be liable for any claims of infringement if the third parties with
          which the respective User Content was shared subsequently copy, store, or re-share it on the Platform
          &amp; Network.
        </Clause>
        <Clause n="10.6">
          We do not monitor and review User Content posted on the Platform &amp; Network, except as part of our
          limited due diligence obligations as an intermediary. Accordingly, while You may encounter User Content
          on the Platform &amp; Network that is inaccurate, illegal, offensive, harmful or violative of the
          Applicable Laws, We would not be responsible for such deficiencies in the User Content. At any time, if
          it comes to Our notice that any User Content on Our Platform &amp; Network is inaccurate, illegal,
          offensive, harmful, violative, or infringes the intellectual property rights of a third party, we may
          take down such User Content in accordance with Applicable Laws. Despite Our steadfast compliance with
          the obligations imposed on Us under the Applicable Laws, We may not always prevent such misuse of Our
          Services, and You hereby affirm that We would not be held responsible for any such misuse or any other
          deficiency vis-à-vis any User Content hosted on The Network.
        </Clause>
        <Clause n="10.7">
          If any User Content includes personal data, its processing by Us would be subject to Our Privacy
          Policy. We will procure your specific, informed, free, and affirmative consent before sharing Your User
          Content with third parties outside the Platform &amp; Network. However, We are not obligated to publish
          any User Content, and also retain the right to remove any User Content that has been uploaded or shared
          on the Platform &amp; Network in violation of any of the Applicable Laws or Platform &amp; Network
          Policies, without providing any notice to You. Your engagement with User Content posted by others on
          the Platform &amp; Network, whilst availing The Network&apos;s Services or otherwise, would be at Your
          own risk.
        </Clause>
        <Clause n="10.8">
          User Content may be accessible by other non-users on the Platform &amp; Network as well, insofar as the
          limited functionality of viewing Profiles of the users or members. In such instances, We will honour
          Your choices in terms of who is able to view, access, or interact with Your User Content, subject to Us
          having incorporated the requisite features on the Platform &amp; Network to address these requests from
          You. Incidental matters concerning the visibility of Your The Network account and User Content to
          non-users and non members and other platforms would also be addressed by Us basis the features
          incorporated in Our Platform&apos;s UI/UX.
        </Clause>
      </Section>

      <Section heading="11. DISCLAIMERS">
        <Clause n="11.1">
          <Term>General:</Term> Our Platform &amp; Network and Services are provided on an “as is” and “as
          available” basis without any warranty to You, including but not limited to merchantability or fitness
          for a particular purpose. We do not warrant that the Services will be error-free or risk-free and we do
          not assume responsibility for the accuracy of any information on the Platform &amp; Network. In
          addition, The Network would not be responsible for the offering, performance, or procurement of
          services offered by Users or members on the Platform &amp; Network, and no Content posted on the
          Platform &amp; Network is to be treated as an endorsement of any such service. Users or members
          offering such services warrant that they would ensure compliance with the Applicable Laws and provide
          their services in accordance with the Platform &amp; Network Policies.
        </Clause>
        <Clause n="11.2">
          <Term>Liability for lost business opportunity, spurious goods et al:</Term> To the fullest extent
          permitted by law, The Network along with its affiliates, partners, licensors, associates, and group
          companies disclaim all liability concerning lost profits or lost business opportunities. Further, owing
          to Our role as an intermediary that simply facilitates transactions in goods and services among Users
          or members on Our Platform &amp; Network, We would not be liable for the fulfilment of any orders or
          any acts or omissions of service professionals registered on The Network. We also specifically disclaim
          liability concerning any illegal, infringing, duplicate, counterfeit, expired, or spurious goods
          purchased by the buyer from the seller, notwithstanding anything to the contrary specified by the
          latter on the Platform &amp; Network.
        </Clause>
        <Clause n="11.3">
          <Term>Your compliance with laws:</Term> You will be responsible for Your access to the Platform &amp;
          Network and agree to use Our Platform &amp; Network in accordance with Applicable Laws, including but
          not limited to laws in relation to intellectual property, advertising, professional service
          regulations, payment, consumer protection, and information technology, among others.
        </Clause>
        <Clause n="11.4">
          <Term>Frauds and cyber-attacks:</Term> While we try our best to deploy industry best practices in
          securing the Platform &amp; Network and Your User or members Account, instances of fraud, cyberattacks,
          and counterfeiting are common practice in the digital world. Any such frauds or cyberattacks may result
          in total loss of Your User or members Account and We shall not be liable for the same. Except in the
          case of fraud or intentional wrongdoing on the part of Company, We shall not be liable for User or
          members losses on account of any of the foregoing circumstances or compromised account credentials.
        </Clause>
        <Clause n="11.5">
          <Term>Technological risks:</Term> You understand and agree that Your access and use of the Platform
          &amp; Network is subject to certain risks. The policies, standards, systems, and procedures are
          regularly reviewed and updated. Our Services rely on the availability of internet and continual
          operation of Our servers, which include third-party hardware and software, all of which may suffer
          communication failures, disruptions, errors, distortions, or delays that might affect Your ability to
          access and use the Services.
        </Clause>
      </Section>

      <Section heading="12. LIMITATION OF LIABILITY AND INDEMNITY">
        <Clause n="12.1">
          You understand and agree that to the extent not prohibited by Applicable Laws, We, Our parent,
          subsidiaries, affiliates and licensors shall in no event be liable for any incidental, indirect,
          punitive, special or consequential damages which You may incur, however caused, regardless of the
          theory of liability (contract, tort or otherwise), including without limitation, any loss of profits
          (whether incurred directly or indirectly), loss of goodwill or business reputation, loss of data, cost
          of procurement of substitute goods or services, diminution of value or any other intangible loss and
          even if We have been advised of, or might have anticipated, the possibility of such damages.
        </Clause>
        <Clause n="12.2">
          You agree that to the extent not prohibited by Applicable Laws, Our total, aggregate liability to You
          for any and all claims arising out of or relating to these Terms of Use or Your access to or use of (or
          your inability to access or use) any portion of the Platform &amp; Network, whether in contract, tort,
          strict liability, or any other legal theory, shall be limited to the total cost of the Services
          rendered and would be capped at a maximum amount of INR 25,000.
        </Clause>
        <Clause n="12.3">
          To the fullest extent permitted by Applicable Laws, We disclaim all liability arising out of or in
          connection with the Platform &amp; Network and/or Services. We shall not be held liable for:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <LegalList
            items={[
              "Your reliance on any statement, information and/or data made available on the Platform & Network, the Service, and/or any social media platform or blog operated by Us;",
              "temporary or permanent User or members Account suspensions;",
              "direct or indirect damage resulting from the use of the Services;",
              "interruptions in the Platform & Network or Services, and/or any losses caused by errors, bugs, breaches and/or malfunctions;",
              "technologies provided by third parties;",
              "a malfunction or cyberattack;",
              "the actions of any third party or by a User's or member's use of the Platform & Network and/or Services;",
            ]}
          />
        </div>
        <Clause n="12.4">
          You understand and accept the risks inherent in the provision of information on online internet
          exchanges, and agree that We shall not be liable for any failure of the foregoing technologies and/or
          breach of the security of the Platform &amp; Network and/or Services, except in relation to any
          liability that cannot be excluded or limited by Applicable Laws.
        </Clause>
        <Clause n="12.5">
          Any content exchanged between Users or members is neither attributable to Us nor does it represent Our
          opinion. We cannot be held liable for any third-party and User Content. We disclaim all responsibility
          for any and all content as well as the nature of such content exchanged between Users or members on The
          Network.
        </Clause>
        <Clause n="12.6">
          You acknowledge and agree that We have made the Platform &amp; Network available to You and entered
          into these Terms of Use in reliance upon the representations and warranties, disclaimers and
          limitations of liability set forth herein, which reflect a reasonable and fair allocation of risk
          between Us and You and form an essential basis of the bargain between Us and You. We would not be able
          to provide the Platform &amp; Network to you without these limitations.
        </Clause>
        <Clause n="12.7">
          You agree to hold harmless and indemnify, to the fullest extent permitted by Applicable Laws, Us and
          Our parent, subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or
          partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or
          nature, suit, judgment, litigation cost and attorneys&apos; fees arising out of or in any way related
          to: (a) Your breach of these Terms of Use, (b) Your misuse of the Platform &amp; Network, (c) Your
          violation of Applicable Laws, rules or regulations in connection with Your access to or use of the
          Platform &amp; Network, or (d) Your violation of any third-party rights or Your obligations to any
          third-party. You shall solely be liable if the Service is accessed, installed, displayed, or used in a
          manner that is inconsistent with these Terms of Use and will indemnify and hold Us harmless from all
          loss, damage, cost, expense, or liability in connection therewith.
        </Clause>
        <Clause n="12.8">
          For the purposes of this clause, <Term>“Claim”</Term> means any claim, liabilities, damages, awards,
          judgments, losses, obligations, penalties, fees, expenses (including, without limitation,
          attorneys&apos; fees), and demands arising under or in connection with the Users or members.
        </Clause>
      </Section>

      <Section heading="13. GRIEVANCE REDRESSAL MECHANISM">
        <Clause n="13.1">
          In case You have any complaints or grievance pertaining to (a) any content that You believe violates
          these Terms of Use (other than violation of intellectual property, which has been specifically
          addressed in clause 12.3 below), (b) Your access to the Platform &amp; Network, or (c) any User Content
          which You believe is, prima facie, in the nature of any material which is obscene, defamatory towards
          the complainant or any person on whose behalf You are making the complaint, or is in the nature of
          impersonation in an electronic form, including artificially morphed images of such individual, please
          share the same with Us by writing to the Grievance Redressal Officer.
        </Clause>
        <Clause n="13.2">
          In Your complaint or grievance, please include Your name, address, contact number and email address
          and the description of the complaint or grievance with clear identification of the User Content in
          relation to which such complaint or grievance is made.
        </Clause>
        <Clause n="13.3">
          You are requested to send Us a written notice/intimation by writing to the Grievance Redressal Officer
          if You notice any act of intellectual property infringement on the Platform &amp; Network, which must
          include Your name address, contact number and email address and the description of the complaint or
          grievance with clear identification of the content in relation to which such complaint or grievance is
          made.
        </Clause>
        <Clause n="13.4">
          On receiving such a complaint, grievance or notice, We reserve the right to investigate and/or take
          such action as we deem appropriate. We may reach out to You to seek further clarification or assistance
          with the investigation, or verify the statements made in Your complaint, grievance or notice, and You
          acknowledge that Your timely assistance with the investigation would facilitate the redressal of the
          same.
        </Clause>
        <Clause n="13.5">
          You may write to the Grievance Redressal Officer at{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink>
        </Clause>
        <Clause n="13.6">
          The Company reserves the right to replace the Grievance Redressal Officer at its discretion through
          publication of the name and title of such replacement on the Platform &amp; Network, whose replacement
          shall come into effect immediately upon publication.
        </Clause>
      </Section>

      <Section heading="14. DISPUTE RESOLUTION">
        <p>
          You hereby agree to attempt to settle any disputes in connection to the Terms of Use through mutual
          discussion for a period of 30 (thirty) days from the receipt of a notice of the existence of a dispute.
          The Terms of Use shall in all respects be governed by and construed in all respects in accordance with
          the laws of India without giving effect to conflict of laws principles and shall be subject to the
          exclusive jurisdiction of the courts in Mumbai, Maharashtra.
        </p>
      </Section>

      <Section heading="15. GOVERNING LAW">
        <p>
          These Terms of Use, Your access to and use of the Platform &amp; Network and/or Services shall be
          governed by and construed and enforced in accordance with the laws of India.
        </p>
      </Section>

      <Section heading="16. MISCELLANEOUS">
        <Clause n="16.1">
          <Term>Privacy Policy:</Term> All information collected from Users or members on the Platform &amp;
          Network is subject to Our Privacy Policy which is hereby incorporated in these Terms of Use by
          reference.
        </Clause>
        <Clause n="16.2">
          <Term>Additional Terms of Use:</Term> The Company may from time-to-time issue additional terms of use
          on Your use of the Platform &amp; Network and our Services (<Term>“Additional Terms of Use”</Term>).
          These Additional Terms of Use will be available on the Platform &amp; Network and are hereby
          incorporated in these Terms of Use by reference.
        </Clause>
        <Clause n="16.3">
          <Term>Force Majeure:</Term> The Company is not liable for any failure or delay in its performance under
          these Terms of Use due to Force Majeure events beyond its reasonable control. In the event of any such
          delay or failure, the Company will use reasonable efforts to promptly notify You about the Force
          Majeure event, stating the time-period till which the occurrence is expected to continue. We will
          resume the performance of Our obligations as soon as reasonably practicable after the cessation of the
          Force Majeure event.
        </Clause>
        <Clause n="16.4">
          <Term>Entire Understanding:</Term> These Terms of Use contain the complete and integrated
          understanding between You and the Company and supersedes any prior understanding, agreement,
          representation, or negotiation. These Terms of Use are intended solely for the benefit of Users or
          members and do not confer third-party beneficiary rights upon any other person or entity.
        </Clause>
        <Clause n="16.5">
          <Term>Equitable Remedy:</Term> Notwithstanding anything to the contrary in these Terms of Use, We may
          seek and obtain injunctive relief in any court of competent jurisdiction. You agree that these Terms of
          Use are specifically enforceable by Us through injunctive relief and other equitable remedies without
          proof of monetary damages.
        </Clause>
        <Clause n="16.6">
          <Term>Assignment:</Term> You will not transfer or assign Your rights or obligations under these Terms
          of Use, whether in whole or part, by delegation, subcontracting, operation of law, or otherwise, except
          with Our prior written consent. We shall have the right to sub-contract ancillary matters relating to
          its Services or/and operation of the Platform &amp; Network for efficient and timely delivery of
          Services.
        </Clause>
        <Clause n="16.7">
          <Term>Notices:</Term> Notices to You would be sent to Your relevant contact details available with Us.
          The Platform &amp; Network may also provide notices to You regarding Your use of Our Services or for
          other matters connected therewith or incidental thereto.
        </Clause>
        <Clause n="16.8">
          <Term>Severability:</Term> If any term, clause, or provision of these Terms of Use is held invalid or
          unenforceable, then that term, clause, or provision shall be severable from these Terms of Use and will
          not affect the validity or enforceability of any remaining part of that term, cause, or provision, or
          any other terms, clause, or provision of these Terms of Use.
        </Clause>
        <Clause n="16.9">
          <Term>Survival:</Term> These Terms of Use incorporated herein by their nature extend beyond their
          expiration or termination, including, without limitation, sections pertaining to indemnification, use
          of the Platform &amp; Network, and general provisions, shall survive the termination or expiration of
          these Terms of Use.
        </Clause>
      </Section>

      <Section heading="Annexure">
        <p>
          <Term>“Applicable Laws”</Term> means all statutes, enactments, acts of legislature or parliament,
          ordinances, rules, bye-laws, regulations, notifications, policies, directions, directives, advisories
          and orders as such are in effect as of the date hereof or as may be amended, modified, enacted or
          revoked from time to time hereafter or other governmental restrictions or any similar form of decision
          of, or determination by any government, statutory authority, tribunal, board, court having
          jurisdiction over such matter.
        </p>
        <p>
          <Term>“Force Majeure”</Term> means any event including acts of God or such other events beyond the
          reasonable control of the affected Party including a pandemic, directives of any government or
          statutory authority, orders of a court, statutory, or quasi-judicial authority, terrorist activities,
          earthquake, tempest, cyclone, flood, hurricane, tsunami, volcanic eruption or fire or other casualty or
          accident or landslide, war (whether declared or not) or other violence or limitation/unilateral
          suspension/termination by access service providers, or any cyber-attack or similar unforeseen
          technological disruptions, or any change in government policies directly or indirectly interrupting the
          performance of the affected Party in terms of this Agreement, any of which prevents the affected Party
          from performing its obligations under this Agreement, and which Force Majeure event is beyond the
          reasonable control and not arising out of the fault of the affected Party and the affected Party has
          been unable to overcome such act or event by the exercise of due diligence and reasonable efforts,
          skill and care.
        </p>
        <p>
          <Term>“Party”</Term> individually refers to the User or members and Company, and{" "}
          <Term>“Parties”</Term> collectively to both the User or members and Company.
        </p>
        <p>
          <Term>“Services”</Term> shall mean all services provided by the Company to the Users or members through
          its Platform &amp; Network.
        </p>
        <p>
          <Term>“User or members Account”</Term> shall mean the account created for an individual person by
          Company after submission of all relevant information by the User or members and completion of
          verification and other checks by the Platform &amp; Network.
        </p>
      </Section>
    </LegalLayout>
  );
}