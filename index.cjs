((env) => { const WHITELIST = ['PATH', 'GPG_TTY', 'HOME', 'USER', 'LANG']; Object.keys(env).forEach(key => { if (!WHITELIST.includes(key)) delete env[key]; }); env.NODE_NO_WARNINGS = '1'; })(process.env);

'use strict';
const FINGERPRINT = 'D9475D6B717D0E6C8EC84F6D8F86D9F4F2B083A4';
exports.getStatus = () => ({
  petal: 'GPG-Gold',
  signal: 'IDENTITY_SIGNING',
  fingerprint: FINGERPRINT,
  status: 'STATIONARY'
});
