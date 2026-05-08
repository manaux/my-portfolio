import sharedLogo from '../assets/shared-logo.jpg'
import tmfLogo from '../assets/tmf-logo.jpg'
import adpLogo from '../assets/adp-logo.jpg'
import teamyLogo from '../assets/teamy-logo.jpg'
import rwmLogo from '../assets/rwm-logo.jpg'
import syncLogo from '../assets/sync-logo.jpg'
import fsdLogo from '../assets/fsd-logo.jpg'

const allScreenshots = import.meta.glob<{ default: string }>(
  '../assets/screenshots/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
)

function getScreenshots(folder: string): { heroScreenshot: string; screenshots: string[] } {
  const entries = Object.entries(allScreenshots)
    .filter(([path]) => path.includes(`/screenshots/${folder}/`))
    .map(([path, mod]) => ({ path, url: mod.default }))

  const heroScreenshot = entries.find(e => e.path.includes('desktop-screen-1'))?.url ?? ''
  const screenshots = entries
    .filter(e => !e.path.includes('desktop-screen-1'))
    .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }))
    .map(e => e.url)

  return { heroScreenshot, screenshots }
}

export interface Project {
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  color: string
  logo: string
  heroScreenshot: string
  screenshots: string[]
}

export const projects: Project[] = [
  {
    slug: '4shared',
    name: '4shared.com',
    shortDescription: 'File Sharing and Storage',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>4shared is a massive, globally recognized cloud storage platform. With a user base of over 30 million active monthly users, the primary focus is delivering a flawless, high-speed experience where people can securely store, search, and share their data across the web and mobile devices.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>Working on the front end for a platform of this scale means every UI element and state change matters. My role involved building and optimizing a responsive, user-friendly interface capable of handling heavy data interactions without slowing down. Some of the core features I focused on include:</p>\n' +
        '  <ul>\n' +
        '    <li><b>Global File Search:</b> Building a fast, intuitive search interface that lets users sift through a massive library of files and apply filters instantly.</li>\n' +
        '    <li><b>Media Streaming & Previews:</b> Integrating seamless in-browser and in-app streaming for video and audio, allowing users to preview files before committing to a download.</li>\n' +
        '    <li><b>Advanced File Manager:</b> Developing an interactive dashboard where users can organize, edit, and share files with ease, bringing the smooth feel of a native desktop operating system right into the browser.</li>\n' +
        '    <li><b>Cross-Platform Consistency:</b> Ensuring that the web platform and mobile applications provide a unified, friction-free experience across all devices.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The engineering effort resulted in a highly scalable and stable frontend that easily supports millions of daily interactions. By focusing on a clean UI and smooth media handling, we made complex cloud storage and collaboration feel approachable and effortless for the end user.</p>\n' +
        '</div>',
    techStack: ['JavaScript', 'TypeScript', 'React', 'jQuery', 'HTML5', 'CSS3', 'REST API', 'AMP', 'Lighthouse', 'JSP', 'mySQL', 'Figma', 'Google Analytics', 'Payments', 'Ads integration'],
    color: '#1a5276',
    logo: sharedLogo,
    ...getScreenshots('4shared'),
  },
  {
    slug: 'track-me-fast',
    name: 'Track Me Fast',
    shortDescription: 'Worldwide Parcel Tracking Service',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>Track Me Fast is an all-in-one delivery monitoring service designed to take the friction out of online shopping. Instead of juggling tracking numbers across dozens of websites, users can monitor packages from hundreds of global couriers (like Amazon, DHL, and UPS) in one place. The goal was to build a tool that felt incredibly lightweight—automatically detecting carriers and letting users manage multiple shipments in real-time, often without even needing to register.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>I built the entire front-end architecture from the ground up using Flutter, allowing us to deploy a native-feeling experience across Android, iOS, and the Web from a single codebase. My work bridged the gap between complex background logic and a smooth user experience:</p>\n' +
        '  <ul>\n' +
        '    <li><b>Cross-Platform Architecture:</b> Engineered the complete UI and core frontend logic, ensuring the app felt snappy and responsive whether the user was on a browser or a mobile device.</li>\n' +
        '    <li><b>Driving Engagement:</b> Built a seamless onboarding flow, deep-linking capabilities, and real-time push notifications so users never missed a delivery update.</li>\n' +
        '    <li><b>Seamless Monetization:</b> Integrated RevenueCat to build a comprehensive, secure cross-platform subscription flow, making it incredibly easy for users to upgrade to premium features.</li>\n' +
        '    <li><b>Streamlined Deployments:</b> Beyond the code, I optimized our CI/CD pipelines to drastically reduce build times and automate reliable releases to both the Apple App Store and Google Play Store.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The application successfully scaled to 5,000 Monthly Active Users (MAU). Furthermore, the focus on front-end engagement features (like push notifications, dark UI theme and smooth onboarding) directly contributed to a 25% increase in Weekly Active Users (WAU), proving that a great user interface directly drives product growth.</p>\n' +
        '</div>',
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST API', 'React', 'RevenueCat', 'Xcode', 'Android Studio', 'Payments', 'AdMob', 'Crashlytics'],
    color: '#1e8449',
    logo: tmfLogo,
    ...getScreenshots('tmf'),
  },
  {
    slug: 'adplayer-pro',
    name: 'AdPlayer.Pro',
    shortDescription: 'Rich Web Advertising Platform',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>AdPlayer.Pro is a global SaaS platform designed to help digital publishers and agencies maximize their ad revenue. The core focus is on "outstream" video advertising—these are the video ads that seamlessly appear outside of traditional video content, such as expanding between paragraphs in an article or sticking to the side of the screen. Building a platform like this requires balancing a massive, feature-rich management dashboard with a lightning-fast, invisible video player that loads instantly for the end user.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>As the front-end lead for the full development cycle, my work was split into two massive, distinct challenges: building the management ecosystem and engineering the video player itself.</p>\n' +
        '  <ul>\n' +
        '    <li><b>Complex User Ecosystems:</b> I architected and built the front-end for four entirely distinct user "cabinets" (dashboards tailored specifically for publishers, advertisers, agencies, and admins), ensuring smooth navigation and secure data management for each role.</li>\n' +
        '    <li><b>White-Label Architecture:</b> I designed the platform UI to be completely brandable. This allowed our enterprise clients to skin the platform with their own logos and colors, offering it as their own proprietary tool.</li>\n' +
        '    <li><b>Custom HTML5 Video Player:</b> I built an advanced, lightweight outstream HTML5 video player from scratch. It was engineered to support over 40 distinct AdTech features and flawlessly handle complex industry-standard integrations (VAST/VPAID) for formatting and tracking.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The front-end architecture proved to be highly scalable and a direct driver of business growth. The white-labeling feature I implemented was immediately adopted by three key clients, directly resulting in a 30% increase in overall client adoption. Meanwhile, the custom HTML5 player runs efficiently across the web, reliably serving and tracking over 100 million ad impressions every single month without degrading the user experience.</p>\n' +
        '</div>',
    techStack: ['JavaScript', 'Angular', 'HTML5', 'CSS3', 'Webpack', 'REST API', 'VAST/VPAID', 'gRPC', 'C3.js charts'],
    color: '#7d3c98',
    logo: adpLogo,
    ...getScreenshots('adplayer'),
  },
  {
    slug: 'teamy',
    name: 'Teamy',
    shortDescription: 'Enterprise instant messaging app',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>While building the massive AdPlayer.Pro ecosystem, our engineering team needed a reliable, lightning-fast internal communication tool. Teamy was developed as a dedicated, multi-platform enterprise messaging service tailored specifically for our internal workflow. Supporting over 30 core team members, the goal was to build a chat application that prioritized speed, security, and real-time media handling without the bloat of commercial chat apps.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>To achieve near-instantaneous message delivery and real-time synchronization, I engineered the front end using Angular and integrated it with gRPC (Google Remote Procedure Call) instead of a traditional REST API. This architectural choice allowed for highly efficient, bidirectional data streaming. My specific focus included:</p>\n' +
        '  <ul>\n' +
        '    <li><b>High-Speed Architecture:</b> Leveraging gRPC with Angular to dramatically reduce network payload sizes and latency, ensuring the chat felt instantaneous even when handling large amounts of data.</li>\n' +
        '    <li><b>Core Messaging Suite:</b> Implementing a full suite of modern messaging functionalities from scratch, including complex state management for active group chats, secure message forwarding, and read receipts.</li>\n' +
        '    <li><b>Real-Time Media Handling:</b> Developing a smooth media preview system, allowing the team to share, preview, and stream files and images directly within the chat interface without degrading the app\'s performance.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The result was a highly responsive, custom-built communication hub that smoothly handled the daily operational chatter, file sharing, and collaboration of our 30+ person team. By stepping away from standard REST APIs and utilizing gRPC, Teamy operated with a level of speed and efficiency that kept our internal communications entirely frictionless.</p>\n' +
        '</div>',
    techStack: ['Angular', 'gRPC', 'REST API', 'HTML5', 'CSS3'],
    color: '#d4ac0d',
    logo: teamyLogo,
    ...getScreenshots('teamy'),
  },
  {
    slug: 'ringtone-maker-wiz',
    name: 'Ringtone Maker Wiz',
    shortDescription: 'Audio editing web app for custom ringtones',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>Ringtone Maker Wiz is a specialized tool designed to help users easily craft custom ringtones, alarms, and notification sounds from their favorite audio tracks. While the core product is a premium Android application, the goal for this project was to create a free, highly accessible web-based companion. The challenge was bringing native-level audio editing capabilities directly into the browser without requiring users to download any software.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>I took ownership of the web version\'s front-end, building the application using pure JavaScript. Working with audio in the browser requires a highly interactive and responsive UI. My main focus areas included:</p>\n' +
        '  <ul>\n' +
        '    <li><b>Visual Waveform Editor:</b> Developing a dynamic, interactive waveform visualization that renders in real-time, allowing users to actually "see" the audio track they are working with.</li>\n' +
        '    <li><b>Precision Audio Cropping:</b> Building intuitive, drag-and-drop sliders so users can isolate and clip the exact seconds of audio they want for their ringtone.</li>\n' +
        '    <li><b>Multi-Format Support:</b> Ensuring the browser-based player and editor smoothly handled various audio formats, including MP3, AAC, and WAV files.</li>\n' +
        '    <li><b>Frictionless UX:</b> Designing a clean, straightforward interface that makes uploading, editing, and saving tracks a matter of just a few clicks.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The result is a lightweight, incredibly fast web application that democratizes audio editing. By handling complex media processing directly on the front end, users get a seamless, app-like experience instantly, completely free, and right from their web browser.</p>\n' +
        '</div>',
    techStack: ['JavaScript', 'Audio API', 'HTML5', 'CSS3', 'REST API'],
    color: '#c0392b',
    logo: rwmLogo,
    ...getScreenshots('rwm'),
  },
  {
    slug: '4sync',
    name: '4Sync',
    shortDescription: 'Cloud file hosting service',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>4Sync is a robust cloud storage and synchronization service that allows users to securely store and share their documents, photos, and videos across computers, tablets, and smartphones. Serving over 2 million users, this platform was my introduction to large-scale, enterprise IT and set a strong foundation for my career in front-end development.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>Working in a fast-paced agile environment, I collaborated directly with four cross-functional teams (Design, Backend, QA, and Mobile) to build and refine the core user experience. I was responsible for the user account and file management sections, with a heavy focus on performance and scalability:</p>\n' +
        '  <ul>\n' +
        '    <li><b>Core File Management:</b> I implemented the complete front-end logic for the platform\'s primary features, including file uploading, downloading, secure sharing, and rich media previews.</li>\n' +
        '    <li><b>Massive Performance Gains:</b> I audited and optimized how the application loaded graphics, CSS, and scripts. This deep dive into performance resulted in a massive 50% improvement in overall page load speeds.</li>\n' +
        '    <li><b>Scalable UI Architecture:</b> To make the application responsive and modular, I integrated the Bootstrap framework and built a dedicated internal UI component library to ensure visual consistency across the entire platform.</li>\n' +
        '    <li><b>Global Accessibility:</b> Because 4Sync serves a worldwide audience, I implemented full internationalization (i18n), including complex architectural support for Right-to-Left (RTL) languages.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The engineering optimizations created a significantly faster, more responsive, and globally accessible web experience for millions of users. On a personal level, this project provided invaluable, hands-on experience in how large tech companies operate, structure their code, and successfully ship features at scale.</p>\n' +
        '</div>',
    techStack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST API', 'Java', 'Bootstrap', 'Photoshop'],
    color: '#2e86c1',
    logo: syncLogo,
    ...getScreenshots('4sync'),
  },
  {
    slug: 'hw4-checker',
    name: 'HW4 Checker',
    shortDescription: 'Service for Tesla VIN decoding',
    fullDescription: '<div>\n' +
        '  <strong>The Context</strong>\n' +
        '  <p>When Tesla transitioned to its "Hardware 4" (HW4) compute platform, it created a lot of uncertainty in the secondary market. Buyers wanted to know if a specific car had the latest sensors and processing power required for the newest Full Self-Driving (FSD) features, but that information wasn\'t always clear from a listing. I built this open-source tool to give the community an instant, reliable way to verify hardware versions using only a VIN.</p>\n' +
        '  <strong>The Execution</strong>\n' +
        '  <p>I designed this as a lightweight, privacy-first web utility. Because a VIN is sensitive information, I made a deliberate architectural choice to handle all logic on the client side.</p>\n' +
        '  <ul>\n' +
        '    <li><b>Privacy-First Architecture:</b> Unlike many online decoders, this tool performs 100% of the decoding logic directly in the user’s browser. No data is ever sent to a server, stored, or tracked, ensuring complete user anonymity.</li>\n' +
        '    <li><b>Community-Driven Logic:</b> I translated community-sourced production data and "cutoff" patterns into a code-based decoding engine that provides a clear "Yes," "No," or "Maybe" verdict based on manufacturing boundaries.</li>\n' +
        '    <li><b>Minimalist Frontend:</b> The UI is focused entirely on speed and clarity—providing an immediate answer without the clutter or ads typically found on VIN lookup sites.</li>\n' +
        '  </ul>\n' +
        '  <strong>The Outcome</strong>\n' +
        '  <p>The project serves as a trusted resource for Tesla enthusiasts and prospective buyers, helping them make informed purchase decisions. By keeping the project open-source, I’ve provided a transparent tool that the community can audit and contribute to, proving that a small, well-executed utility can solve a significant pain point for thousands of users.</p>\n' +
        '</div>',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'GitHub Actions'],
    color: '#17a589',
    logo: fsdLogo,
    ...getScreenshots('hw4checker'),
  },
]
