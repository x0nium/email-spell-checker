// Default configuration options

import sift3Distance from '../fuzzy-detection/sift3-distance';

/***
 * Default list of popular emails for 2022 and onwards.
 * https://www.mailmunch.com/blog/best-email-service-providers
 *
 * If you find a domain you want to add, please submit a PR.
 * Also, notice that this list is not exhaustive.
 * You can always pass your own list of domains.
 */
const POPULAR_DOMAINS = [
  'msn.com',
  'bellsouth.net',
  'telus.net',
  'comcast.net',
  'optusnet.com.au',
  'earthlink.net',
  'qq.com',
  'sky.com',
  'icloud.com',
  'sympatico.ca',
  'googlemail.com',
  'att.net',
  'xtra.co.nz',
  'web.de',
  'cox.net',
  'gmail.com',
  'ymail.com',
  'aim.com',
  'rogers.com',
  'verizon.net',
  'rocketmail.com',
  'optonline.net',
  'sbcglobal.net',
  // aol
  'aol.com',
  'aim.com',
  'me.com',
  'mailw.com',
  'btinternet.com',
  'charter.net',
  'shaw.ca',
  'hey.com',
  // Proton
  'proton.me',
  'pm.com',
  'protonmail.com',
  'zoho.com',
  'yandex.com',
  'titan.email',
];

const POPULAR_TLDS = [
  'com',
  'co.uk',
  'org',
  'edu',
  'gov'
];

const DEFAULT_CONFIG = {
  domainThreshold: 3,
  domains: POPULAR_DOMAINS,

  secondLevelThreshold: 3,
  secondLevelDomains: ['yahoo', 'hotmail', 'mail', 'live', 'outlook'],

  topLevelThreshold: 3,
  topLevelDomains: POPULAR_TLDS,

  distanceFunction: sift3Distance,
};

export { DEFAULT_CONFIG, POPULAR_DOMAINS, POPULAR_TLDS };
