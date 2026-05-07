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
    shortDescription: 'File sharing platform with millions of users',
    fullDescription:
      'A large-scale file hosting and sharing platform serving millions of users worldwide. Built responsive web interfaces for file management, upload workflows, and user dashboards with focus on performance and cross-browser compatibility.',
    techStack: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    color: '#1a5276',
  },
  {
    slug: 'track-me-fast',
    name: 'Track Me Fast',
    shortDescription: 'GPS tracking and fleet management mobile app',
    fullDescription:
      'Cross-platform mobile application for real-time GPS tracking and fleet management. Features include live location tracking on interactive maps, geofencing alerts, push notifications, route history playback, and offline data synchronization for areas with poor connectivity.',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API', 'REST API'],
    color: '#1e8449',
  },
  {
    slug: 'adplayer-pro',
    name: 'AdPlayer.Pro',
    shortDescription: 'Video advertising platform and analytics',
    fullDescription:
      'A comprehensive video advertising platform with advanced ad-serving logic, real-time analytics dashboards, and embeddable video player widgets. Built complex reporting interfaces for campaign performance tracking and revenue analytics.',
    techStack: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Video.js', 'Webpack', 'REST API'],
    color: '#7d3c98',
  },
  {
    slug: '4sync',
    name: '4Sync',
    shortDescription: 'Cloud storage and file sync service',
    fullDescription:
      'Cloud storage and file synchronization service with native mobile apps and web client. Developed Android applications for file management, automatic photo backup, and cross-device sync. Built responsive web interfaces for file browsing and sharing.',
    techStack: ['Android', 'Java', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST API'],
    color: '#2e86c1',
  },
  {
    slug: 'ringtone-maker-wiz',
    name: 'Ringtone Maker Wiz',
    shortDescription: 'Audio editing mobile app for custom ringtones',
    fullDescription:
      'Mobile application for creating custom ringtones from audio files. Features include waveform visualization, precise audio trimming with drag handles, fade in/out effects, and direct ringtone assignment to contacts.',
    techStack: ['Android', 'Java', 'Audio API', 'Material Design'],
    color: '#c0392b',
  },
  {
    slug: 'teamy',
    name: 'Teamy',
    shortDescription: 'Team collaboration and project management tool',
    fullDescription:
      'A team collaboration platform for project management and task tracking. Built interactive kanban boards, real-time chat integration, file sharing capabilities, and team activity dashboards.',
    techStack: ['JavaScript', 'React', 'Node.js', 'WebSocket', 'REST API'],
    color: '#d4ac0d',
  },
  {
    slug: 'hw4-checker',
    name: 'HW4 Checker',
    shortDescription: 'Automated homework verification system',
    fullDescription:
      'An automated system for verifying and grading homework submissions. Features include code analysis, automated test execution, plagiarism detection, and detailed feedback generation for students and instructors.',
    techStack: ['JavaScript', 'Node.js', 'REST API'],
    color: '#17a589',
  },
]
