export interface Project {
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  color: string
}

export const projects: Project[] = [
  {
    slug: '4shared',
    name: '4shared.com',
    shortDescription: 'File Sharing and Storage',
    fullDescription:
      'A large-scale file hosting and sharing platform serving millions of users worldwide. Built responsive web interfaces for file management, upload workflows, and user dashboards with focus on performance and cross-browser compatibility.',
    techStack: ['JavaScript', 'TypeScript', 'React', 'jQuery', 'HTML5', 'CSS3', 'REST API', 'AMP', 'Lighthouse', 'JSP', 'mySQL', 'Figma', 'Google Analytics', 'Payments', 'Ads integration'],
    color: '#1a5276',
  },
  {
    slug: 'track-me-fast',
    name: 'Track Me Fast',
    shortDescription: 'Worldwide Parcel Tracking Service',
    fullDescription:
      'Cross-platform mobile application for real-time parcels tracking. Features include live location tracking on interactive maps, geofencing alerts, push notifications, route history playback, and offline data synchronization for areas with poor connectivity.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST API', 'React', 'RevenueCat', 'Xcode', 'Android Studio', 'Payments', 'AdMob', 'Crashlytics'],
    color: '#1e8449',
  },
  {
    slug: 'adplayer-pro',
    name: 'AdPlayer.Pro',
    shortDescription: 'Rich Web Advertising Platform',
    fullDescription:
      'A comprehensive video advertising platform with advanced ad-serving logic, real-time analytics dashboards, and embeddable video player widgets. Built complex reporting interfaces for campaign performance tracking and revenue analytics.',
    techStack: ['JavaScript', 'Angular', 'HTML5', 'CSS3', 'Webpack', 'REST API', 'VAST/VPAID', 'gRPC', 'C3.js charts'],
    color: '#7d3c98',
  },
  {
    slug: 'teamy',
    name: 'Teamy',
    shortDescription: 'Enterprise instant messaging app',
    fullDescription:
        'A team collaboration platform for project management and task tracking. Built interactive kanban boards, real-time chat integration, file sharing capabilities, and team activity dashboards.',
    techStack: ['Angular', 'gRPC', 'REST API', 'HTML5', 'CSS3'],
    color: '#d4ac0d',
  },
  {
    slug: 'ringtone-maker-wiz',
    name: 'Ringtone Maker Wiz',
    shortDescription: 'Audio editing web app for custom ringtones',
    fullDescription:
      'Mobile application for creating custom ringtones from audio files. Features include waveform visualization, precise audio trimming with drag handles, fade in/out effects, and direct ringtone assignment to contacts.',
    techStack: ['JavaScript', 'Audio API', 'HTML5', 'CSS3', 'REST API'],
    color: '#c0392b',
  },
  {
    slug: '4sync',
    name: '4Sync',
    shortDescription: 'Cloud file hosting service',
    fullDescription:
        'Cloud storage and file synchronization service with native mobile apps and web client. Developed Android applications for file management, automatic photo backup, and cross-device sync. Built responsive web interfaces for file browsing and sharing.',
    techStack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST API', 'Java', 'Bootstrap', 'Photoshop'],
    color: '#2e86c1',
  },
  {
    slug: 'hw4-checker',
    name: 'HW4 Checker',
    shortDescription: 'Service for Tesla VIN decoding',
    fullDescription:
      'An automated system for verifying and grading homework submissions. Features include code analysis, automated test execution, plagiarism detection, and detailed feedback generation for students and instructors.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'GitHub Actions'],
    color: '#17a589',
  },
]
