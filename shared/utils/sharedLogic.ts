// ============================================================
// KnowingPath.ai — Shared Utilities
// Platform-agnostic logic shared between web and mobile
// ============================================================

// ── Site map nav items (top-level routes) ─────────────────────
export interface NavItem {
  id:     string;
  label:  string;
  href:   string;   // web route or anchor
  screen: string;   // React Navigation screen name
  isRoute?: boolean; // true = page route, false = anchor on home
}

// Top-level site navigation (matches site map)
export const NAV_ITEMS: NavItem[] = [
  { id: 'home',    label: 'Home',    href: '/',         screen: 'HomeScreen',    isRoute: true  },
  { id: 'learn',   label: 'Learn',   href: '/learn',    screen: 'LearnScreen',   isRoute: true  },
  { id: 'about',   label: 'About',   href: '/about',    screen: 'AboutScreen',   isRoute: true  },
  { id: 'contact', label: 'Contact', href: '/contact',  screen: 'ContactScreen', isRoute: true  },
];

// Home page anchor sections (used for in-page smooth scroll)
export const HOME_SECTIONS: NavItem[] = [
  { id: 'home',    label: 'Home',         href: '#home',    screen: 'HomeScreen'    },
  { id: 'mission', label: 'Mission',      href: '#mission', screen: 'MissionScreen' },
  { id: 'ethos',   label: 'Ethos',        href: '#ethos',   screen: 'EthosScreen'   },
  { id: 'motto',   label: 'Motto',        href: '#motto',   screen: 'MottoScreen'   },
  { id: 'learn',   label: 'Learn',        href: '#learn',   screen: 'LearnScreen'   },
  { id: 'path',    label: 'Path Forward', href: '#path',    screen: 'PathScreen'    },
  { id: 'cta',     label: 'Begin',        href: '#cta',     screen: 'CTAScreen'     },
];

// ── Content ────────────────────────────────────────────────
export const CONTENT = {
  brand: {
    name:     'KnowingPath.ai',
    tagline:  'Clarity. Compassion. Elevation.',
    copyright:'© 2026 KnowingPath.ai — All Rights Reserved.',
  },

  hero: {
    headline:    'From Not Knowing to Knowing — With Compassion.',
    subheadline: [
      'KnowingPath.ai guides you from uncertainty to clarity with calm, wisdom, and structure.',
      "You're not behind. You're not lost.",
      "You're simply on the path.",
    ],
    cta: 'Begin Your Path',
  },

  mission: {
    title: 'Our Mission',
    body: [
      'KnowingPath.ai exists to help people rise from "I don\'t know" to "I understand" without shame, overwhelm, or fear.',
      'We believe no one is "not technical enough."',
      'You are intelligent, capable, and worthy of clarity — and we walk with you step by step.',
    ],
  },

  ethos: {
    title: 'The Ascending Bridge Ethos',
    pillars: [
      {
        title: 'Clarity With Compassion',
        body:  'We remove shame from learning and replace it with understanding.',
      },
      {
        title: 'Guided Elevation',
        body:  'We help you rise gently, with structure and confidence.',
      },
      {
        title: 'Technical Wisdom, Human Voice',
        body:  'We translate complex systems into calm, grounded guidance.',
      },
      {
        title: 'Safety Through Knowledge',
        body:  'We empower you to protect yourself in a digital world.',
      },
      {
        title: 'The Bridge Forward',
        body:  'We meet you where you are and help you cross into mastery.',
      },
    ],
  },

  motto: {
    title:    "You Are Not Dumb — You Just Don't Know.",
    body: [
      'Everyone starts somewhere.',
      'KnowingPath.ai is the place where your intelligence meets clarity, and where learning becomes a path — not a test.',
    ],
  },

  learn: {
    title: "What You'll Learn",
    items: [
      'AI literacy for everyday people',
      'Cybersecurity basics',
      'Home network hardening',
      'Digital self-protection',
      'How to spot scams, phishing, and malware',
      'How to feel confident in a technical world',
    ],
  },

  path: {
    title: 'The Path Forward',
    steps: [
      {
        number: '1',
        title:  'Start Where You Are',
        body:   'No judgment. No jargon. Just clarity.',
      },
      {
        number: '2',
        title:  'Learn With Guidance',
        body:   'Calm explanations, visual structure, and step-by-step support.',
      },
      {
        number: '3',
        title:  'Rise With Confidence',
        body:   'Knowledge becomes empowerment. Empowerment becomes safety. Safety becomes freedom.',
      },
    ],
  },

  cta: {
    title:    'Ready to Begin Your Path?',
    subtitle: "Let's walk it together.",
    button:   'Start Learning',
  },

  // ── /learn page ───────────────────────────────────────────
  learnPage: {
    title:    'Learn',
    subtitle: 'Every lesson is a step forward. Start wherever you are.',

    courses: {
      eyebrow: 'Courses',
      title:   'Guided Learning Paths',
      items: [
        {
          id:       'ai-literacy',
          icon:     '◈',
          title:    'AI Literacy for Everyday People',
          desc:     'Understand what AI is, how it works, and how to use it safely — no technical background required.',
          level:    'Beginner',
          lessons:  6,
        },
        {
          id:       'cybersecurity-basics',
          icon:     '◉',
          title:    'Cybersecurity Basics',
          desc:     'Learn how to protect your accounts, devices, and identity from the most common digital threats.',
          level:    'Beginner',
          lessons:  8,
        },
        {
          id:       'network-hardening',
          icon:     '◇',
          title:    'Home Network Hardening',
          desc:     'Step-by-step guidance to secure your home Wi-Fi, router, and connected devices.',
          level:    'Intermediate',
          lessons:  5,
        },
      ],
    },

    guides: {
      eyebrow: 'Guides',
      title:   'Step-by-Step Written Guides',
      items: [
        {
          icon:  '→',
          title: 'How to Spot a Phishing Email',
          desc:  'A calm, clear walkthrough of the red flags scammers use — and what to do when you see them.',
          time:  '5 min read',
        },
        {
          icon:  '→',
          title: 'Setting Up Two-Factor Authentication',
          desc:  'Protect your accounts with one extra layer — here\'s exactly how to do it on every major platform.',
          time:  '8 min read',
        },
        {
          icon:  '→',
          title: 'Understanding Password Managers',
          desc:  'Why one strong password isn\'t enough, and how a password manager makes you safer with less effort.',
          time:  '6 min read',
        },
        {
          icon:  '→',
          title: 'Recognizing Malware and Scam Software',
          desc:  'Learn how malicious software disguises itself and how to stay protected without fear.',
          time:  '7 min read',
        },
      ],
    },

    tools: {
      eyebrow: 'Tools',
      title:   'Recommended Digital Safety Tools',
      items: [
        {
          name:  'Password Manager',
          desc:  'Bitwarden (free) or 1Password — store all your passwords securely in one place.',
          tag:   'Free option available',
        },
        {
          name:  'Two-Factor Auth App',
          desc:  'Authy or Google Authenticator — add a second lock to every account that matters.',
          tag:   'Free',
        },
        {
          name:  'VPN',
          desc:  'ProtonVPN or Mullvad — protect your internet traffic on public networks.',
          tag:   'Paid / Free tier',
        },
        {
          name:  'Antivirus',
          desc:  'Malwarebytes or Windows Defender — keep your devices clean without slowing them down.',
          tag:   'Free option available',
        },
      ],
    },
  },

  // ── /about page ───────────────────────────────────────────
  aboutPage: {
    title:    'About',
    subtitle: 'The story behind KnowingPath.ai — and why it was built for you.',

    story: {
      eyebrow: 'Your Story',
      title:   'Why KnowingPath.ai Exists',
      body: [
        'KnowingPath.ai was built for everyone who has ever felt left behind in a world that moves too fast and explains too little.',
        'The internet changed everything — and not everyone got the manual. Scams became sophisticated. AI arrived overnight. Passwords weren\'t enough. And for most people, no one explained any of it in a way that felt safe to hear.',
        'We believe that gap isn\'t your fault. It\'s a failure of how technology has been taught.',
        'KnowingPath.ai is the answer to that failure — built with patience, structure, and deep respect for where you are right now.',
      ],
    },

    philosophy: {
      eyebrow: 'Your Philosophy',
      title:   'How We Teach',
      pillars: [
        {
          title: 'Start With Compassion',
          body:  'We never assume you should already know. Every lesson begins from where you are, not where we wish you were.',
        },
        {
          title: 'Clarity Over Complexity',
          body:  'Technical concepts become simple with the right words. We translate — we never condescend.',
        },
        {
          title: 'Structure You Can Feel',
          body:  'Learning shouldn\'t feel like chaos. Each path is calm, ordered, and built so you always know where you are.',
        },
        {
          title: 'Shame Has No Place Here',
          body:  'You are not dumb. You just haven\'t been taught yet. That changes today.',
        },
      ],
    },

    ethos: {
      eyebrow: 'Your Ethos',
      title:   'The Ascending Bridge',
      body:    'The Ascending Bridge is more than a metaphor — it\'s our commitment. Every lesson is one more plank on the bridge between where you are and where you\'re going. We walk it with you.',
      quote:   '"We meet you where you are and help you cross into mastery."',
    },
  },

  // ── /contact page ─────────────────────────────────────────
  contactPage: {
    title:    'Contact',
    subtitle: 'We\'re here. Reach out however feels right.',

    email: {
      eyebrow: 'Email',
      title:   'Send Us a Message',
      address: 'support@knowingpath.ai',
      desc:    'Questions, feedback, or just want to say hello — we read every message and respond with care.',
    },

    social: {
      eyebrow: 'Social',
      title:   'Find Us Online',
      platforms: [
        { name: 'X / Twitter',  handle: '@KnowingPath',    icon: '◆' },
        { name: 'LinkedIn',     handle: 'KnowingPath.ai',  icon: '◈' },
        { name: 'YouTube',      handle: '@KnowingPathAI',  icon: '◉' },
      ],
    },

    support: {
      eyebrow: 'Support',
      title:   'How to Get Help',
      options: [
        {
          title: 'FAQ',
          desc:  'Common questions answered clearly — check here first.',
          cta:   'Browse FAQ',
        },
        {
          title: 'Community',
          desc:  'Join others on the path. Ask questions, share progress, find support.',
          cta:   'Join Community',
        },
        {
          title: 'Direct Support',
          desc:  'Stuck on something specific? Email us and we\'ll walk you through it.',
          cta:   'Email Support',
        },
      ],
    },
  },
} as const;

// ── Easing curves ─────────────────────────────────────────
export const EASING = {
  gentle:     'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  ascend:     'cubic-bezier(0.22, 1, 0.36, 1)',
  smooth:     'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ── Utility: clamp a value ────────────────────────────────
export const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

// ── Utility: platform detection ───────────────────────────
export const isWeb    = typeof window !== 'undefined';
export const isMobile = !isWeb;
