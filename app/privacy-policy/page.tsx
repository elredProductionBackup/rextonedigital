import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  LegalLayout,
  Section,
  Clause,
  Term,
  LegalLink,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | The Network",
  description:
    "Privacy Policy of Rex Tone Digital Pvt. Ltd. describing how we collect, use, store and share your personal data.",
};

/* ------------------------------------------------------------------ */
/*  Data-collection table (section 3.4)                                */
/* ------------------------------------------------------------------ */

type CollectEntry = { label?: string; text: string };
type TableRow = { collect: CollectEntry[]; why: string[] };

const dataTable: TableRow[] = [
  {
    collect: [
      {
        label: "Registration and onboarding of Users:",
        text:
          "Your first and last name, mobile number, email-ID, username, gender, date of birth, location, current profession, industry, name of the employer, skills or any information We ask You on the Platform during on-boarding.",
      },
      {
        text:
          "Alternatively, You can also register on the Platform via your existing social media handles including Instagram and LinkedIn and fetch certain information from such accounts. We collect only public profile information, depending on the social media account used by You to log in while registering on the Platform. However, We do not collect/store any account passwords.",
      },
    ],
    why: [
      "To set-up Your User Account on the Platform and facilitate login.",
      "To notify You about products and services being offered by other Users on the Platform.",
      "To notify You about changes to the Platform, including the Terms of Use and this Privacy Policy.",
      "To help you network and connect with users.",
      "To provide you information regarding products, services, events, and opportunities.",
      "To facilitate communication with You and give customer support.",
      "To verify Your identity and pre-populate relevant fields in Our application’s UI/UX.",
      "To register you for events hosted on or through the platform and to make the necessary arrangements for your attendance.",
    ],
  },
  {
    collect: [
      {
        label: "Other particulars submitted by Users:",
        text:
          "These are the particulars that are accessible on Your User Account but are not mandated to be provided during the onboarding/registration process, such as (a) Leads/Offers, (b) Your LinkedIn profile URL, Your organisation’s URL and Your Resume, (c) Website and social media links, (d) Address, (e) Hobbies and favourite subjects.",
      },
      {
        label: "Event registration details:",
        text:
          "Where You choose to register for an event on or through the Platform, We may additionally collect (a) the name of Your spouse, (b) the name and date of birth of Your children, and (c) Your dietary preferences and dietary restrictions of You. These particulars are not displayed to other Users and are used solely for the event registration purposes.",
      },
    ],
    why: [],
  },
  {
    collect: [
      {
        label: "Log Data:",
        text:
          "Information We automatically collect when You use the Platform, whether through the use of cookies, web beacons, log files, scripts, or any other information of similar kind.",
      },
    ],
    why: [],
  },
  {
    collect: [
      {
        label: "Creating Leads/Offers on the Platform:",
        text:
          "The following particulars are to be populated/uploaded by Users who intend to post Leads/Offers with other users on the Platform – (a) location, (b) images from the Users’ device that fits the description of the Lead/Offer, and (c) title and description of the services sought to be offered along with its price range and industry. The Leads/Offers outline the specific services that can be offered by their respective Users.",
      },
      {
        label: "Creating Problems on the Platform:",
        text:
          "Users are also allowed to state their problems on the Platform highlighting their specific requirements.",
      },
      {
        label: "Collaboration data:",
        text:
          "Records of the Leads/Offers and Problems You create, respond to or interact with on the Platform, and the identity of the Users with whom You collaborate in relation to them.",
      },
    ],
    why: [
      "To allow other Users to assess if You would be a relevant fit for the specific Problem of the former basis your skills and other professional achievements, insofar as transacting in products and/or services is concerned.",
      "To allow Us to match a User with a specific Problem with such other Users that best match the requirements of the former.",
      "To allow Our Users to reach out to a wider user base, and to introduce other potential Users to the Platform.",
      "To allow us to incorporate automated measures to expedite the process of matching The Network Users with complementary requirements.",
    ],
  },
  {
    collect: [
      {
        label: "Surveys:",
        text:
          "We may ask You to undertake surveys or fill questionnaires from time to time. Some of these will require You to give Us additional Personal Data or other information. These surveys or questionnaires may also be conducted by Our Partners, Our Service Providers, or any other third-party.",
      },
      {
        label: "Device data:",
        text:
          "Information We collect from the devices You use to access or operate the Platform. This includes, without limitation, information about Your device attributes and identifiers, plugins, name of Your mobile operator or ISP, SMS sent by The Network, device language, time zone, IP address, connection speed, device applications, contact list, or any information available on such device.",
      },
    ],
    why: [
      "To develop new services, improve existing services on the Platform, and integrate User preferences, feedback, and requests.",
      "To administer the Platform and facilitate internal operations, including but not limited to, troubleshooting, data analysis, testing, research, security, and fraud-detection.",
      "To enable You and other users on the Platform from gaining access to your network.",
      "To better understand how You use and access the Platform and to improve Your User experience.",
      "To assess effectiveness of and improve advertising and other marketing and promotional activities.",
      "To keep the Platform compatible with the supported device(s).",
      "To provide You with automatic updates and security measures so that Your User Account is not used in other User’s devices.",
      "To provide Us feedback on Your device behaviour, which helps Us to improve Our quality of Services but also provide an enhanced and customized User experience.",
    ],
  },
  {
    collect: [
      {
        label: "Customer support data:",
        text:
          "Any information that You provide to Our customer support team or Our Grievance Redressal Officer periodically.",
      },
    ],
    why: [
      "To investigate Your support issue and assist You in resolving your query.",
      "To internally help Us in improving and developing Our User support systems.",
      "To pass on relevant queries from Users to Our Partners or Service Providers.",
    ],
  },
  {
    collect: [
      {
        label: "Phonebook and contact data:",
        text:
          "We will seek your consent to access your phonebook data, specifically (a) the numbers you have saved, along with (b) the names by which you have saved each of the respective contacts on your device. We will be securely storing only the contact numbers (and not names) on our server.",
      },
    ],
    why: [
      "To give Users the ability to interact and connect with a ‘network of networks’ in its truest sense, by showing them profiles of people already added on the phonebooks of their respective contacts and unlock those contacts for access by other users on the Platform.",
      "To allow Users to connect with people from varying backgrounds in an expedited manner, driven by the ease of identifying accounts that have been saved as contacts by the Users’ connections.",
    ],
  },
  {
    collect: [
      {
        label: "Location data:",
        text:
          "Information that We derive from Your device or from the location/address details You provide Us while using the Platform.",
      },
    ],
    why: [
      "For security and account management.",
      "To provide You with location customization.",
    ],
  },
];

function CollectCell({ entries }: { entries: CollectEntry[] }) {
  return (
    <div className="flex flex-col gap-[10px]">
      {entries.map((e, i) => (
        <p key={i}>
          {e.label ? <span className="font-semibold text-[#333333]">{e.label} </span> : null}
          {e.text}
        </p>
      ))}
    </div>
  );
}

function WhyCell({ why }: { why: string[] }) {
  if (why.length === 0) return null;
  return (
    <ul className="list-disc pl-[20px] flex flex-col gap-[8px] marker:text-[#C01522]">
      {why.map((w, i) => (
        <li key={i} className="pl-[2px]">
          {w}
        </li>
      ))}
    </ul>
  );
}

function DataCollectionTable() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#E5E5E5]">
      {/* Header row (desktop only) */}
      <div className="hidden md:grid md:grid-cols-2 bg-[#FAFAFA] border-b border-[#E5E5E5] text-[#1A1A1A] font-semibold">
        <div className="px-[22px] py-[16px] border-r border-[#E5E5E5]">What we collect</div>
        <div className="px-[22px] py-[16px]">Why we collect it</div>
      </div>

      {dataTable.map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-1 md:grid-cols-2 text-[13px] md:text-[15px] leading-[22px] md:leading-[25px] ${
            i !== dataTable.length - 1 ? "border-b border-[#E5E5E5]" : ""
          }`}
        >
          {/* What we collect */}
          <div className="px-[18px] md:px-[22px] py-[16px] md:py-[20px] border-b md:border-b-0 md:border-r border-[#E5E5E5] bg-white">
            <p className="md:hidden mb-[8px] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#C01522]">
              What we collect
            </p>
            <CollectCell entries={row.collect} />
          </div>

          {/* Why we collect it */}
          <div className="px-[18px] md:px-[22px] py-[16px] md:py-[20px] bg-white">
            {row.why.length > 0 && (
              <p className="md:hidden mb-[8px] text-[11px] font-semibold uppercase tracking-[0.1em] text-[#C01522]">
                Why we collect it
              </p>
            )}
            <WhyCell why={row.why} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* small helper for lettered sub-points used in a few clauses */
function Lettered({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-[4px] flex flex-col gap-[8px] pl-[22px] list-[lower-alpha] marker:text-[#C01522]">
      {items.map((it, i) => (
        <li key={i} className="pl-[4px]">
          {it}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="4th Aug 2026">
      <Section heading="1. PRELIMINARY">
        <Clause n="1.1">
          This privacy policy (<Term>“Privacy Policy”</Term>) is issued by Rex Tone Digital Pvt. Ltd.
          (<Term>“The Network”</Term> or <Term>“Us”</Term> or <Term>“We”</Term> or <Term>“Our”</Term>)
          and forms a legally binding agreement between You (<Term>“User”</Term> or <Term>“You”</Term>{" "}
          or <Term>“Your”</Term>) and The Network. It applies to Your use of the Platform and Our
          Services and governs the manner in which any data, whether true or not, from which You can be
          identified (<Term>“Personal Data”</Term>) under Applicable Laws (collectively{" "}
          <Term>“Data Protection Laws”</Term>). We understand the value of Your privacy and accordingly,
          maintain the highest security standards for securing Your information.
        </Clause>
        <Clause n="1.2">
          THIS PRIVACY POLICY IS PART OF OUR TERMS OF USE AND SHALL BE SUBJECT TO AND READ ALONG WITH
          OUR TERMS OF USE, AVAILABLE AT{" "}
          <LegalLink href="https://www.rextonedigital.com/terms-of-use/">
            https://www.rextonedigital.com/terms-of-use/
          </LegalLink>
          . ALL CAPITALIZED TERMS USED AND NOT DEFINED HEREIN SHALL HAVE THE MEANING ASCRIBED TO THEM
          UNDER THE TERMS OF USE.
        </Clause>
        <Clause n="1.3">
          This Privacy Policy does not apply to any information that You provide to a third-party,
          whether or not You access the services of the third-party from Our Platform. This may include,
          inter alia, photographs/scanned copies of Your government issued identity cards and/or identity
          card numbers, which You may provide to a third-party while using Our Platform. We are not
          responsible for the privacy practices of such third parties, and You must read and understand
          the privacy practices of such third parties before availing their service. Additionally, this
          Privacy Policy does not apply to any information about You that is made publicly available.
        </Clause>
        <Clause n="1.4">
          We retain an unconditional right to modify or amend the Privacy Policy. You can refer to the
          “Last Updated” header above to understand when the Privacy Policy was amended last. Please read
          this Privacy Policy carefully before using the Platform for availing Our Services. By visiting
          the Platform or setting up an account with Us, You accept and agree to be bound by this Privacy
          Policy. IF YOU DO NOT CONSENT TO THE COLLECTION AND USE OF YOUR PERSONAL DATA AS DESCRIBED IN
          THIS PRIVACY POLICY, PLEASE DO NOT USE OUR SERVICES OR ACCESS OUR PLATFORM.
        </Clause>
      </Section>

      <Section heading="2. CONSENT">
        <Clause n="2.1">
          You hereby expressly consent to providing Your Personal Data to The Network for the purposes
          specified under this Privacy Policy, which is required in relation to the Services being
          rendered on the Platform by Us. You acknowledge that We shall collect Your Personal Data
          detailed under this Privacy Policy to facilitate Our Services including the transactions
          undertaken by Users on The Network, either by ourselves or by partnering with the relevant
          third-party service providers.
        </Clause>
        <Clause n="2.2">
          Please note that The Network will only be using Your Personal Data for the purposes specified
          under this Privacy Policy in providing the Services to You.
        </Clause>
        <Clause n="2.3">
          In order to avail any Services being provided by The Network by itself or in partnership with
          other third parties, it is important that YOU READ, UNDERSTAND, ACKNOWLEDGE AND UNCONDITIONALLY
          AGREE TO BE BOUND BY THIS PRIVACY POLICY.
        </Clause>
        <Clause n="2.4">
          IF YOU DO NOT AGREE TO THIS PRIVACY POLICY OR ANY PART THEREOF, PLEASE DO NOT USE OR ACCESS THE
          PLATFORM OR ANY PART OF OUR SERVICES.
        </Clause>
        <Clause n="2.5">
          For the Users consenting to continue accessing the Platform and availing the Services, this
          Privacy Policy explains our policies and practices regarding the collection, use, processing,
          storing, sharing and disclosure of Your Personal Data (as recorded below).
        </Clause>
      </Section>

      <Section heading="3. THE INFORMATION WE COLLECT AND HOW WE USE IT">
        <Clause n="3.1">
          By accessing or using the Platform, You consent to providing Us Your Personal Data and agree to
          Our Privacy Policy.
        </Clause>
        <Clause n="3.2">
          We may collect and receive Personal Data from You when You access Our Platform, register for a
          User Account with Us, or when You connect your User Account with an external third-party.
        </Clause>
        <Clause n="3.3">
          We may monitor the use of the Platform through the use of cookies and similar tracking devices.
          To illustrate, We may monitor the number of times You visit the Platform or which pages You
          viewed. This information helps Us to build Your User Account and render better Services to You.
          Some of this data will be aggregated or statistical, which means that we will not be able to
          identify You individually.
        </Clause>
        <Clause n="3.4">
          The following table lists the information We may collect from You and how We will use it.
        </Clause>

        <DataCollectionTable />

        <Clause n="3.5">
          You are required to submit such Personal Data and other information to Us that helps Us enable
          Our Services on the Platform for You. We use such information to create Your User Account on the
          Platform and provide You with the best available Services. This data helps Us create Your User
          Account, facilitate transactions undertaken by You on the Platform, and provide You with
          customized support in case of issues.
        </Clause>
        <Clause n="3.6">
          While We are responsible under the Data Protection Laws to ensure completeness, accuracy and
          consistency of Your Personal Data and other information (except Non-Personal Data), We cannot
          comply with this obligation without Your due co-operation. You acknowledge and agree that You
          shall be responsible for ensuring that the Personal Data and other information (except
          Non-Personal Data) that You provide to Us is accurate, complete and current, and that You will
          co-operate with Us to ensure that such Personal Data and other information (except Non-Personal
          Data) is complete, accurate and consistent till such time it is being processed by Us.
        </Clause>
        <Clause n="3.7">
          All the information collected by Us shall be stored on servers, log files and any other storage
          systems owned by Us or by other third parties, and will be stored only within the territory of
          India. Such storage will be need-based and to the extent required to render Our Services.
        </Clause>
        <Clause n="3.8">
          Our goal is to provide You with a safe, efficient, smooth, and customized experience on the
          Platform. Your Personal Data, other information and Non-Personal Data allows Us to provide the
          Services and features on the Platform that are likely to meet Your specific requirements, and
          is used to customize the Platform to make Your experience safer and easier.
        </Clause>
        <Clause n="3.9">
          You also specifically agree and consent to Us collecting, storing, processing, transferring,
          and sharing information related to You (including Your Personal Data) with Our Partners or
          Service Providers to customize and provide better services to You.
        </Clause>
        <Clause n="3.10">
          Wherever possible, while providing information to Us, We indicate which fields are mandatory and
          which fields are optional for You. You always have the option to not provide the Personal Data
          or other information to Us through the Platform by choosing to not use a particular service or
          feature being provided by Us on the Platform, which requires You to provide such information.
        </Clause>
        <Clause n="3.11">
          For availing the full extent of our Services, You must duly register with the Platform as a User
          and have a valid and subsisting User Account (<Term>“Registered Users”</Term>) in accordance
          with Our Terms of Use. Apart from Registered Users, the Platform may also provide a limited
          extent of its Services to Users who access the Platform to view the Profiles or Personal cards
          of Registered Users (<Term>“Non-Registered Users”</Term>).
        </Clause>
        <Clause n="3.12">
          The Platform allows only Users who are competent to contract under Applicable Laws to access its
          Services, in accordance with Our Terms of Use.
        </Clause>
        <Clause n="3.13">
          You also agree that all the information furnished by You is lawful, true and correct and does
          not violate or infringe any Applicable Laws. In case of any violations, infringement, furnishing
          of wrongful or unauthorized information, The Network shall not be liable to You or to any third
          party for the same.
        </Clause>
        <Clause n="3.14">
          You acknowledge that if We determine that any information You have provided or uploaded violates
          the terms of this Privacy Policy, We have the right, in our absolute discretion, to delete or
          destroy such information without incurring any liability to You.
        </Clause>

        <Clause n="3.15">Events on the Platform:</Clause>
        <p className="pl-[24px] md:pl-[30px]">
          The Platform allows Users to discover and register for events, including events organised by Us,
          by other Users, or by third-party organisers. The following additional terms apply to Your use
          of this feature:
        </p>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              <>
                <Term>Data We collect:</Term> when You register for an event, We collect (i) Your name and
                contact details; (ii) the event registration details described in the table above,
                including, where You provide them, the name of Your spouse, the name and date of birth of
                Your children, and the dietary preferences and dietary restrictions of You and Your
                accompanying guests; (iii) Your travel details, namely mode of transport, flight/train/bus
                number, date and estimated time of arrival, travel insurance details, and visa or travel
                authorisation details; (iv) any additional remarks You choose to provide in relation to
                Your attendance; and (v) Your registration, attendance and check-in records for that event.
              </>,
              <>
                <Term>Why We collect it:</Term> to process and confirm Your registration, to manage entry
                and attendance, to make catering, seating, accessibility and guest arrangements, to
                communicate with You in relation to the event, and to comply with any applicable venue or
                statutory requirements.
              </>,
              <>
                <Term>Who We share it with:</Term> We share event registration details with the organiser
                of the relevant event and with Our Service Providers engaged in connection with that event
                (such as venue operators, caterers, and ticketing or check-in providers), in each case
                strictly to the extent required for the purposes set out above. We do not display Your
                event registration details to other Users, and We do not share them for any marketing or
                advertising purpose without Your explicit consent.
              </>,
              <>
                <Term>How long We retain it:</Term> We retain event registration details for so long as
                Your User Account remains active. When Your User Account is deleted, such details are
                deleted or anonymised, unless a longer retention period is required under Applicable Laws.
                You may also request deletion of Your event registration details at any time, without
                deleting Your User Account.
              </>,
              <>
                <Term>Your rights:</Term> You may access, correct or request the deletion of Your event
                registration details, and withdraw Your consent to their processing, at any time.
                Withdrawal of consent may prevent Us from completing Your registration for, or admitting
                You to, the relevant event.
              </>,
              <>
                <Term>Details of other individuals:</Term> where any event registration details relate to
                another individual (including Your spouse or Your child), You confirm that You are
                authorised to provide those details to Us for the purposes set out above, and that You have
                informed that individual of this Privacy Policy.
              </>,
            ]}
          />
        </div>

        <Clause n="3.16">AI-generated profile summary and portfolio:</Clause>
        <p className="pl-[24px] md:pl-[30px]">
          The Platform offers a feature that generates a summary of Your professional profile and
          portfolio using automated and artificial intelligence based techniques. The following additional
          terms apply to Your use of this feature:
        </p>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              <>
                <Term>Data used to generate the summary:</Term> the summary is generated using information
                already available on Your User Account, namely Your current profession, industry, skills,
                employer and role, and the Leads/Offers, Skills and other content You have published on the
                Platform. We do not use Your phonebook or contact data, Your event registration details, or
                the contents of Your communications with other Users to generate the summary.
              </>,
              <>
                <Term>Purpose of the summary:</Term> to present Your profile and portfolio to other Users in
                a concise and readable form, and to improve the quality of matching between Users with
                complementary requirements.
              </>,
              <>
                <Term>Third-party processing:</Term> to generate the summary, the relevant profile data is
                transmitted to and processed by a third-party artificial intelligence service provider
                acting on Our behalf under a written agreement that restricts its use of that data to the
                generation of the summary.
              </>,
              <>
                <Term>Storage and retention:</Term> the summary is stored on Your User Account and is
                refreshed when the underlying profile data changes. Where the summary is stored, it is
                retained for so long as Your User Account remains active and is deleted along with Your
                other Personal Data when Your User Account is deleted.
              </>,
              <>
                <Term>Your controls:</Term> You may review the generated summary and may edit the profile
                details to regenerate it, at any time from Your User Account. The summary is produced by
                automated means on the basis of information You have provided, and We do not represent that
                it is free from error or omission; You remain responsible for the accuracy of the
                information on Your Profile.
              </>,
            ]}
          />
        </div>
      </Section>

      <Section heading="4. PURPOSE OF COLLECTION">
        <Clause n="4.1">
          We use Your Personal Data to send You promotional emails and messages. However, We will provide
          You the ability to opt-out of receiving such emails and messages from Us. If You opt out, The
          Network may still send You non-promotional emails and messages, such as emails and messages about
          the Services and Your User Account on the Platform. Unless and until You explicitly give Your
          consent to Us to do so, We will not share Your Personal Data with any other entity.
        </Clause>
        <Clause n="4.2">
          In connection with the activities above, We may conduct profiling based on Your interactions with
          Us, Your profile information and other content You submit, and information obtained from third
          parties. In limited cases, automated processes may restrict or suspend access to the Platform, if
          such processes detect an activity that We think poses a safety or other risk to The Network, other
          Users, or third parties.
        </Clause>
        <Clause n="4.3">
          Notwithstanding anything contained herein, The Network may, in compliance with Applicable Laws in
          India, process Your Personal Data without obtaining Your consent in the event:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "You have voluntarily provided Your Personal Data to Us, and have not indicated that You do not consent to the use of such Personal Data by Us;",
              "the purpose is for the State and any of its instrumentalities to provide or issue any subsidy, benefit, service, certificate, license, or permit to You, as may be prescribed by the Central Government;",
              "the purpose is for the performance by the State or any of its instrumentalities of any function under any law for the time being in force in India or in the interest of sovereignty and integrity of India or security of the State;",
              "the purpose is for fulfilling any obligation under any law for the time being in force in India on any person to disclose any information to the State or any of its instrumentalities, subject to such processing being in accordance with the provisions regarding disclosure of such information in any other law for the time being in force;",
              "the purpose is for compliance with any judgment or decree or order issued under any law for the time being in force in India, or any judgment or order relating to claims of a contractual or civil nature under any law for the time being in force outside India;",
              "the purpose is for responding to a medical emergency involving a threat to the life or immediate threat to the health of the User or any other individual;",
              "the purpose is for taking measures to provide medical treatment or health services to any individual during an epidemic, outbreak of disease, or any other threat to public health; or",
              "the purpose is for taking measures to ensure safety of, or provide assistance or services to, any individual during any disaster, or any breakdown of public order.",
            ]}
          />
        </div>
      </Section>

      <Section heading="5. DISCLOSURE TO THIRD PARTIES">
        <Clause n="5.1">
          We will disclose or share Your Personal Data with other third parties only after intimating You
          about the same by a notice, which shall also specify the exact purpose for which the Personal
          Data is purported to be shared.
        </Clause>
        <Clause n="5.2">We will share the information only in such manner as described below:</Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "We share Your Personal Data within The Rextone Digitals group companies and with certain of Our employees on a strictly need-to-know basis;",
              "We also use a variety of third-party service providers and vendors which assist Us to: (i) verify Your identity or authenticate Your identification documents; (ii) verify information against that which is available on public databases; (iii) conduct background checks, fraud prevention, and risk assessment exercises; (iv) perform product development, software and website maintenance and debugging; (v) provide customer service or advertising services; (vi) process payments; (vii) facilitate and assist our marketing and advertising activities/initiatives; (viii) prevent, detect, mitigate, and investigate fraudulent or illegal activities related to Our Services. These third party service providers have access to Your Personal Data to the extent required to perform these tasks on Our behalf and are contractually bound to protect and use it only for the purposes for which it was disclosed and consistent with this Privacy Policy;",
              "We may disclose Your information, in order to enforce or apply Our Terms of Use or assign such information in the course of corporate divestitures, mergers, or to protect the rights, property, or safety of Us, Our Users, or others;",
              "We will disclose the data/information provided by a User with other technology partners to track how the User interacts with the Platform on Our behalf;",
              "We and Our affiliates may share Your information with another business entity should We (or our assets) merge with, or be acquired by that business entity, or during re-organization, amalgamation, restructuring of business for the continuity of business. Should such a transaction occur, then any business entity (or the new combined entity) receiving any such information from Us shall be bound by this Privacy Policy with respect to Your information;",
              "We will share Your information under a confidentiality agreement with the third parties and restrict use of the said information by third parties only for the purposes detailed herein. We warrant that there will be no unauthorised disclosure of Your information shared with any such third parties;",
              "We may share Your Personal Data with the governmental authorities, quasi-governmental authorities, judicial authorities and quasi-judicial authorities if We are acting under any duty, request or order as part of our legal obligations and in accordance with the Applicable Laws.",
            ]}
          />
          <p className="mt-[12px]">
            However, please note that We do not disclose Your Personal Data to third parties for their
            marketing and advertising purposes without Your explicit consent.
          </p>
        </div>
        <Clause n="5.3">Any disclosure to third parties is subject to the following:</Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "We may be under a duty to disclose or share Your Personal Data in order to comply with any legal or regulatory obligation or request and in such case(s), We shall not seek Your explicit consent. However, We shall reasonably endeavour to notify the same to You accordingly, as the case may be. By clicking on the “I accept” button below, You hereby provide Your consent to disclose Your Personal Data for such regulatory disclosure;",
              "We shall take Your express consent in the event We share Your Personal Data with third parties;",
              "We shall share Your Personal Data with a third-party only on a need basis and only for the purpose stated thereunder;",
              "We shall additionally seek express consent through a separate request for consent at appropriate stages of the User journey on the Platform, where Your information is collected, as required under the Data Protection Laws;",
              "usage of Your Personal Data by such third parties is subject to their privacy policies. We share limited information with them, strictly to the extent required.",
            ]}
          />
        </div>
      </Section>

      <Section heading="6. SECURITY OF YOUR INFORMATION">
        <Clause n="6.1">
          We strive to maintain the security and safety of Your Personal Data in line with industry
          standards. Once We have received your information, We use strict procedures and security features
          as per industry standards and the Data Protection Laws to try to prevent unauthorised access,
          loss, misuse, unauthorized disclosure and dissemination, destruction and alteration of Your
          Personal Data.
        </Clause>
        <Clause n="6.2">
          You are responsible to keep Your credentials for accessing the Platform personal and
          confidential. You should not share your password or login details with anyone. We will not be
          responsible for any liability or obligation You might face due to Your sharing of Your User
          Account details with anyone.
        </Clause>
        <Clause n="6.3">
          The security controls and practices implemented by The Network to protect Your Personal Data
          under this Privacy Policy shall be in accordance with the reasonable security practices and
          procedures under Section 43A of the Information Technology Act, 2000.
        </Clause>
        <Clause n="6.4">
          We aim to protect from unauthorized access, alteration, disclosure or destruction of Your Personal
          Data or other information that We hold. The security measures we adopt to protect your Personal
          Data or other information include the following:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "We use encryption to keep Your Personal Data or other information private while in transit;",
              "We offer security features like an OTP verification to help You protect Your User Account on the Platform;",
              "We review Our information collection, storage, and processing practices, including physical security measures, to prevent unauthorized access to Our systems;",
              "We restrict access to Your Personal Data or other information to Our employees, contractors, and agents who need that information in order to process it. Anyone with this access is subject to strict contractual confidentiality obligations and may be subject to disciplinary action if they fail to meet these obligations;",
              "We ensure compliance with the Data Protection Laws as well as other Applicable Laws;",
              "We regularly review this Privacy Policy and make sure that We process Your Personal Data or other information in ways that comply with it;",
            ]}
          />
        </div>
        <Clause n="6.5">
          While we sincerely strive to protect your Personal Data, We cannot guarantee its security, or
          warrant that no harmful code will enter the Platform (including but not limited to viruses, bugs,
          trojan horses, spyware, malware or adware). Transmission of information through the internet is
          not completely secure. You should be aware of the risks associated with disclosing any information
          or transacting over the internet or when using online portals. We urge you to take every
          precaution when using the internet to disclose Your Personal Data to Us, including using strong
          passwords, changing Your password regularly and using a secure browser. ANY INFORMATION YOU
          PROVIDE US IS AT YOUR OWN RISK AND DISCRETION.
        </Clause>
        <Clause n="6.6">
          In the event of any actual or suspected security incident, including any data breach, We will take
          all measures required to be undertaken under Applicable Laws. It is further clarified that so long
          as You access and/or use the Platform (directly or indirectly), You have the obligation to ensure
          that You shall, at all times, take adequate physical, managerial, and technical safeguards, at
          Your end, to preserve the integrity and security of Your Personal Data and other information.
        </Clause>
        <Clause n="6.7">
          Additionally, We work with the appropriate regulatory authorities, including local data protection
          authorities, to resolve any complaints regarding the transfer of Your Personal Data or other
          information data that We cannot resolve with You directly.
        </Clause>
      </Section>

      <Section heading="7. OUR COOKIE POLICY">
        <Clause n="7.1">
          Please note that we use “cookies” to help personalize your online experience.
        </Clause>
        <Clause n="7.2">
          A cookie is a text file that is placed on your hard drive by a web page server. Cookies cannot be
          used to run programs or deliver viruses to Your device. Cookies are uniquely assigned to You and
          can only be read by a web server in the domain that issued the cookie to You.
        </Clause>
        <Clause n="7.3">
          We place cookies on certain pages of the Platform, in order to help and analyze Our webpage flow,
          track User trends, measure promotional effectiveness, and promote trust and safety. We offer
          certain additional features on the Platform that are only available through the use of a “cookie”.
          We place both permanent and temporary cookies in Your device’s hard drive.
        </Clause>
        <Clause n="7.4">
          Cookies on the Platform may be used to ensure a smooth User experience, perform analytics, and for
          showing relevant advertisements. Please note that third parties (such as Our Partners, Service
          Providers etc.) may also use cookies, over which We have no control.
        </Clause>
        <Clause n="7.5">
          Most web browsers automatically accept cookies, but you can usually modify your browser settings
          to disable, block or deactivate cookies if you so prefer. If You choose to decline cookies, You
          may not be able to access all or parts of Our Platform or to fully experience the interactive
          features of the Services or the websites You visit through Us.
        </Clause>
      </Section>

      <Section heading="8. STORAGE, PROCESSING AND RETENTION OF PERSONAL DATA">
        <Clause n="8.1">
          We will store Your Personal Data and other information only to the extent required by Us to carry
          out the Services as provided herein, and if there is a legal requirement to retain the same. We
          shall not retain any of Your Personal Data and other information if the purpose for which We
          collected it has been fulfilled, and there is no legal requirement for Us to retain the same.
        </Clause>
        <Clause n="8.2">
          The Personal Data collected by Us would be stored and/or processed on servers located in India,
          and such storage shall be in compliance with the Data Protection Laws. The Network will also be
          entitled to use third-party service providers such as MongoDB to store Your Personal Data. The
          storage location(s) are chosen to operate efficiently, improve performance, and reduce probability
          of errors while protecting Your Personal Data in the event of an outage or other problems.
        </Clause>
        <Clause n="8.3">
          We take steps to ensure that the Personal Data We collect is processed according to the provisions
          of this Privacy Policy and the requirements of the Data Protection Laws.
        </Clause>
        <Clause n="8.4">
          Your Personal Data may be transferred to other countries for processing, and by using any part of
          the Services and/or the Platform, You consent to the transfer, use and processing of Your Personal
          Data to countries outside of India which may have different laws governing Your Personal Data.
          However, the level of protection that will be applied to the transferred Personal Data will be at
          least comparable to the protection provided under this Privacy Policy and the Data Protection Laws.
        </Clause>
        <Clause n="8.5">
          We may retain Your Personal Data for as long as it is necessary to fulfil the purpose for which it
          was collected, or as required or permitted under the Data Protection Laws.
        </Clause>
        <Clause n="8.6">
          We will cease to retain Your Personal Data or remove how the data can be associated with You as
          soon as it is reasonable to assume that such retention no longer serves the purpose for which the
          Personal Data was collected and is no longer necessary for legal or business purposes.
        </Clause>
        <Clause n="8.7">
          We promise to protect Your Personal Data from unauthorized access, misuse, and disclosure using
          the appropriate security measures based on the type of data and how We process the same. We never
          read or intercept chats or any other forms of communication between Users on the Platform, except
          in line with Applicable Laws, and all User communications are end-to-end encrypted. We retain
          information about You to provide a seamless experience, to contact You in case of support, and
          about Your User Account, to detect, mitigate, prevent, and investigate fraudulent or illegal
          activities during the course of providing You with Our Services. We also retain Your Personal Data
          to enable Us to exercise Our legal rights and/or defend against legal claims, or if required by
          law, or for other legitimate purposes.
        </Clause>
        <Clause n="8.8">
          We retain Your Personal Data for as long as necessary to provide You with Our Services. Subject to
          this section, We may delete Your Personal Data if (i) the purpose for which such Personal Data is
          collected has been fulfilled, (ii) there is no legal obligation on Us to retain such Personal Data,
          and (iii) upon reasonable written request by You for the same, at any stage. However, You may not
          be able to use Our Services after requesting Us to delete Your Personal Data.
        </Clause>
        <Clause n="8.9">
          We will comply with the following procedure for destruction and disposal of Your Personal Data and
          other information:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "The Network’s Information Technology department is responsible for deleting or destroying electronic records. This includes ensuring that the Personal Data and other information is permanently removed from Our servers;",
              "No Personal Data and other information that is currently involved in, or has open investigations, audits, or litigation pending shall be destroyed or otherwise discarded;",
              "When retention requirements have been met, Personal Data and other information shall be immediately destroyed;",
              "The authorized method of destruction for non-electronic Personal Data and other information is shredding.",
            ]}
          />
          <p className="mt-[12px]">
            We may, however, continue to retain Your Personal Data in an anonymized form for analytical and
            research purposes.
          </p>
        </div>
      </Section>

      <Section heading="9. YOUR RIGHTS AND DUTIES">
        <Clause n="9.1">
          <Term>Modifying or rectifying Your Personal Data:</Term> In the event that any Personal Data
          already provided by You is inaccurate, incomplete or outdated, then You shall have the right as
          well as an obligation to provide Us with the accurate, complete and up-to-date version of the
          same, and We shall accordingly rectify such Personal Data at Our end. You must provide Us with
          accurate and correct information/data to ensure that Your use of Our Services is uninterrupted. In
          case of any such modification of Personal Data, Users may be required to furnish supporting
          documents relating to change in Personal Data for the purpose of verification by Us.
        </Clause>
        <Clause n="9.2">
          <Term>Your Privacy Controls:</Term> You have certain choices regarding the Personal Data We collect
          and how it is used:
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "Your device may have controls that determine what information we collect. For example, You can modify permissions on Your Android/iOS or other OS device or Web Browser to remove any permissions that may have been given. However, We do not provide a guarantee of the continuation of Our Services if any such controls are exercised;",
              "You can also request to delete or erase the Personal Data processed and stored by Us on Our servers, in the manner provided herein.",
            ]}
          />
        </div>
        <Clause n="9.3">
          <Term>Withdrawal/Denial of consent:</Term> You acknowledge that the Platform has duly collected
          Your Personal Data and other information with Your free, specific, informed, unconditional,
          unambiguous and explicit consent and that You have the option to deny the request to provide
          consent or revoke the consent already given. You shall have the following rights pertaining to Your
          Personal Data or other information collected by Us.
        </Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              <>
                <Term>Deny Consent:</Term> You shall have the right to deny a request for consent for (i)
                collection and processing of specific information, (ii) disclosure of such information to any
                third parties, and (iii) retention of such information (except when the same is required to be
                retained under Applicable Laws). However, any such denial will not prejudice Our rights to
                retain any information that You have provided in relation to the Services already availed by
                You through the Platform. Further, in case of denial of a request for consent, the Platform
                does not provide a guarantee for the continued facilitation of all Our Services.
              </>,
              <>
                <Term>Withdraw Consent:</Term> You may also choose to withdraw Your consent (including consent
                provided for processing of Your Personal Data or other information by Us or by any third party
                on Our behalf, or Your consent provided for data retention purposes) provided to the Platform
                at any point of time. In order to withdraw Your consent for the use, processing, disclosure,
                sharing or transferring of any Personal Data, You may raise a request on the Platform or by
                mailing Us at{" "}
                <LegalLink href="mailto:withdrawconsent@rextonedigital.com">
                  withdrawconsent@rextonedigital.com
                </LegalLink>
              </>,
              "In case You do not provide Your consent or later withdraw Your consent, We request You not to access the Platform and use the Services and We also reserve the right to not provide You any particular Service or functionality on the Platform. In such a scenario, The Network may delete Your Personal Data or other information it had earlier collected and stored, or de-identify it so that it is anonymous and not attributable to You.",
            ]}
          />
        </div>
        <Clause n="9.4">
          <Term>Report an issue:</Term> You have a right to report a security incident. You are entitled to
          prevent unauthorised usage of Your Personal Data or other information by Our personnel/agents by
          informing Us immediately upon being informed of the proposed use, that You do not wish such
          personnel/agents to gain access to Your information. You can also exercise the right at any time by
          contacting Us at{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink>.
        </Clause>
        <Clause n="9.6">
          <Term>Right to erasure:</Term> You may request the deletion or removal of Your Personal Data at any
          time. Such right of erasure can be exercised in a manner prescribed by the Central Government, by
          writing to Us at{" "}
          <LegalLink href="mailto:withdrawconsent@rextonedigital.com">
            withdrawconsent@rextonedigital.com
          </LegalLink>
          . On such a request for erasure, We shall delete all Your Personal Data stored by Us, as well as
          ensure that any third party Service Providers processing Your Personal Data on behalf of Us deletes
          the same as well, unless its retention is necessary for ensuring compliance with Applicable Laws.
          You acknowledge that Your right to erasure may impact how You interact and engage with Our Services
          and that certain functionalities may be disabled for You on the Platform pursuant to You exercising
          Your right to erasure.
        </Clause>
        <Clause n="9.7">You shall at all times ensure that:</Clause>
        <div className="pl-[24px] md:pl-[30px]">
          <Lettered
            items={[
              "while exercising Your rights under the Data Protection Laws, you must comply with the provisions of all Applicable Laws;",
              "You do not impersonate another person while providing Your Personal Data for a purpose specified to You at the time of collecting such Personal Data;",
              "You do not suppress any material information while providing Your Personal Data for any document, unique identifier, proof of identity or proof of address issued by the Central Government or any of its instrumentalities;",
              "You do not to register a false or frivolous grievance or complaint with the relevant authorities under the Data Protection Laws; and",
              "You furnish only such information as is verifiably authentic, while exercising Your right to modification, correction, updation, or erasure under the Data Protection Laws.",
            ]}
          />
        </div>
      </Section>

      <Section heading="10. THIRD PARTY LINKS AND SITES">
        <Clause n="10.1">
          The Services and/or the Platform may contain links to or information about third-party websites
          that are not within Our control. We are not responsible for the privacy practices of any external
          website or mobile application.
        </Clause>
        <Clause n="10.2">
          You agree that We are not liable in any manner, whatsoever, for any content as may be displayed on
          such third-party websites.
        </Clause>
        <Clause n="10.3">
          If you follow a link to any third-party websites or application, please note that We do not accept
          any responsibility or liability for the same. Please check the relevant policies before You submit
          any information to these websites, mobile applications, or their affiliates.
        </Clause>
      </Section>

      <Section heading="11. GRIEVANCE REDRESSAL OFFICER">
        <Clause n="11.1">
          You may contact Our Grievance Redressal Officer if you have any enquiries or feedback on Our
          Personal Data protection policies and procedures, or if You wish to make any request, in the
          following manner:
        </Clause>
        <div className="pl-[24px] md:pl-[30px] flex flex-col gap-[6px]">
          <p>
            <Term>Grievance Redressal Officer:</Term> Ms. Ananya Palav
          </p>
          <p>
            <Term>Email Address:</Term>{" "}
            <LegalLink href="mailto:grievance@rextonedigital.com">grievance@rextonedigital.com</LegalLink>
          </p>
        </div>
        <Clause n="11.2">
          For any other questions relating to this Privacy Policy, or if you believe that the Platform has
          not adhered to this Privacy Policy, You can write to us at:{" "}
          <LegalLink href="mailto:feedback@rextonedigital.com">feedback@rextonedigital.com</LegalLink>
        </Clause>
      </Section>

      <Section heading="12. CHANGES TO THIS PRIVACY POLICY">
        <Clause n="12.1">
          We reserve the right to update, modify, delete, or otherwise make changes to this Privacy Policy at
          any time. Any changes to this Privacy Policy will be posted to the Platform. A notification may
          also be sent to Your registered email address.
        </Clause>
        <Clause n="12.2">
          Any changes to this Privacy Policy will take effect and be binding on You from the time of posting
          the changes to the Platform. If You continue to use any Services following any changes to this
          Privacy Policy, You will be deemed to have accepted the changes and the updated version of this
          Privacy Policy.
        </Clause>
        <Clause n="12.3">
          If You do not agree with the changes, please refrain from using the Platform. It is your
          responsibility to review this Privacy Policy (and the applicable conditions) from time to time.
        </Clause>
        <Clause n="12.4">
          If any provision of this Privacy Policy shall be held to be invalid, illegal, or unenforceable for
          any reason whatsoever, the validity, illegality, and enforceability of the remaining provision of
          this Privacy Policy shall not in any way be affected or impaired thereby.
        </Clause>
        <Clause n="12.5">
          In the event You have exhausted Your opportunity of redressing your grievances with respect to Your
          Personal Data, You may approach the relevant authorities under the Data Protection Laws, in a
          manner as may be prescribed by the Central Government.
        </Clause>
      </Section>
    </LegalLayout>
  );
}