import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import Container from '@/components/UI/Container';
import { AppConfig, locales } from '@/utils/AppConfig';

import cs from './style.module.scss';

export const metadata: Metadata = {
  referrer: 'origin-when-cross-origin',
  category: 'booking',
  title: 'Privacy Policy',
  description: 'Privacy Policy of Astay',
  alternates: {
    canonical: './',
    languages: {},
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy Policy of Astay',
    url: './',
    siteName: AppConfig.name,
    images: [
      {
        url: './open-graph/astaya.jpg',
        width: 1024,
        height: 682,
        type: 'image/jpg',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    images: [
      {
        url: './open-graph/astaya.jpg',
        width: 1024,
        height: 682,
        type: 'image/jpg',
      },
    ],
    description: 'Privacy Policy of Astay',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function PrivacyPolicy(props: PageProps) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <Container>
      <main className={`${cs.privatePolicyPage} mx-auto my-10 max-w-4xl`}>
        <h1>Privacy Policy</h1>
        <p>
          At Astay, available at{' '}
          <a href="https://astayhome.com/">https://astayhome.com/</a>,
          safeguarding the privacy of our visitors is paramount to us. This
          Privacy Policy outlines the types of information Astay collects and
          records, as well as how we utilize it.
        </p>
        <p>
          Should you have further inquiries or need additional details about our
          Privacy Policy, feel free to reach out to us.
        </p>
        <p>
          This Privacy Policy is specifically for our online activities and
          pertains to the information shared and/or collected by visitors to our
          website, Astay. It does not extend to information gathered offline or
          through channels other than this website.
        </p>
        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <h2>Information we collect</h2>
        <p>
          We will transparently outline the personal information requested from
          you and the purposes behind such requests at the moment of
          solicitation.
        </p>
        <p>
          Should you choose to contact us directly, we may acquire supplementary
          details about you, such as your name, email address, phone number, the
          message&apos;s contents, any attachments you send, and any other
          information you opt to disclose.
        </p>
        <p>
          Upon registration for an Account, we may request your contact details,
          encompassing particulars like your name, company name, address, email
          address, and telephone number.
        </p>
        <h2>How we use your information</h2>
        <p>
          We utilize the gathered information for diverse purposes, which
          include:
        </p>
        <ul>
          <li>
            Facilitating the provision, operation, and maintenance of our
            website
          </li>
          <li>
            Enhancing, customizing, and broadening the scope of our website
          </li>
          <li>
            Gaining insights into and analyzing your usage patterns on our
            website
          </li>
          <li>
            Innovating new products, services, features, and functionalities
          </li>
          <li>
            Engaging with you directly or through our partners, for customer
            support, to furnish updates and other pertinent information about
            the website, and for marketing and promotional endeavors
          </li>
          <li>Dispatching emails</li>
          <li>Identifying and thwarting fraudulent activities</li>
        </ul>
        <h2>Log Files</h2>
        <p>
          At Astay, we adhere to a standard protocol regarding the utilization
          of log files. These files record visitor activity upon accessing
          websites. This practice is common among hosting companies and
          constitutes a component of hosting services&apos; analytics. The data
          gathered by log files typically comprises internet protocol (IP)
          addresses, browser types, Internet Service Providers (ISPs),
          timestamps, referring/exit pages, and potentially the number of
          clicks. Importantly, this information is not associated with any
          personally identifiable data. The primary objectives of collecting
          this data include trend analysis, website administration, user
          movement tracking, and demographic insights.
        </p>
        <h2>Cookies and Web Beacons</h2>
        <p>
          Similar to many other websites, Astay employs &apos;cookies&apos;.
          These cookies serve to retain information such as visitors&apos;
          preferences and the specific pages they accessed or visited on the
          website. This information aids in enhancing users&apos; experiences by
          tailoring our webpage content according to factors like visitors&apos;
          browser types and other relevant data.
        </p>
        <p>
          Detailed information regarding our utilization of such technologies
          and instructions on how you can decline certain cookies are provided
          in our Cookie Policy.
        </p>
        <h2>Advertising Partners Privacy Policies:</h2>
        <p>
          You can refer to this list to access the Privacy Policy of each
          advertising partner affiliated with Astay.
        </p>
        <p>
          Third-party ad servers or ad networks utilize technologies such as
          cookies, JavaScript, or Web Beacons within their respective
          advertisements and links featured on Astay. These elements are
          directly transmitted to users&apos; browsers. Your IP address is
          automatically received in this process. These technologies are
          employed to gauge the efficiency of advertising campaigns and/or
          tailor advertising content displayed on websites you visit.
        </p>
        <p>
          Please note that Astay lacks access to or authority over the cookies
          utilized by third-party advertisers.
        </p>
        <h3>Third Party Privacy Policies:</h3>
        <p>
          Astay&apos;s Privacy Policy does not extend to other advertisers or
          websites. Therefore, we recommend consulting the respective Privacy
          Policies of these third-party ad servers for comprehensive
          information. These may include their practices and guidance on opting
          out of certain options.
        </p>
        <p>
          You have the option to disable cookies through your individual browser
          settings. For more detailed information on cookie management with
          specific web browsers, refer to the respective websites of the
          browsers.
        </p>
        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information):</h2>
        <p>
          Under the CCPA, California consumers possess certain rights,
          including:
        </p>
        <ul>
          <li>
            The right to request that a business collecting personal data
            disclose the categories and specific pieces of personal data
            collected about consumers.
          </li>
          <li>
            The right to request the deletion of any personal data collected
            about the consumer by a business.
          </li>
          <li>
            The right to opt out of the sale of personal data by a business.
          </li>
        </ul>
        <p>
          Upon making a request, we have one month to respond. If you wish to
          exercise any of these rights, please contact us.
        </p>
        <h2>GDPR Data Protection Rights:</h2>
        <p>
          At Astay, we aim to ensure that you are fully informed about your data
          protection rights. Each user is entitled to the following:
        </p>

        <ul>
          <li>
            The right to access – You have the right to request copies of your
            personal data. A small fee may be charged for this service.
          </li>
          <li>
            The right to rectification – You have the right to request
            correction of any information you deem inaccurate. You also have the
            right to request completion of incomplete information.
          </li>
          <li>
            The right to erasure – You have the right to request deletion of
            your personal data, under certain conditions.
          </li>
          <li>
            The right to restrict processing – You have the right to request
            restriction of processing your personal data, under certain
            conditions.
          </li>
          <li>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </li>
          <li>
            The right to data portability – You have the right to request
            transfer of the data we have collected to another organization or
            directly to you, under certain conditions.
          </li>
        </ul>
        <p>
          Upon making a request, we have one month to respond. If you wish to
          exercise any of these rights, please contact us.
        </p>
        <h2>Children&apos;s Information:</h2>
        <p>
          We also prioritize safeguarding children&apos;s online activities. We
          encourage parents and guardians to observe, participate in, and/or
          monitor and guide their children&apos;s online activities.
        </p>
        <p>
          Astay does not knowingly collect any Personal Identifiable Information
          from children under the age of 13. If you believe that your child has
          provided such information on our website, please contact us
          immediately, and we will make every effort to promptly remove such
          information from our records.
        </p>
      </main>
    </Container>
  );
}

export default PrivacyPolicy;
