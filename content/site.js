/* All text, images and links come from portfolio.config.json.
   Edit that file (or use the Build Free Portfolio wizard) to change the site. */
import config from '../portfolio.config.json';

if (!config.profile) {
  throw new Error(
    'portfolio.config.json is in an old format (no "profile" section). ' +
    'Create a new site with the Build Free Portfolio wizard, or copy the current template config.'
  );
}

export const profile = config.profile;
export const socials = config.socials;
export const hero = config.hero;
export const stats = config.stats;
export const sections = config.sections;
export const about = config.about;
export const skills = config.skills;
export const projects = config.projects;
export const experience = config.experience;
export const earlier = config.earlier;
export const certs = config.certs;
export const training = config.training;
export const education = config.education;
export const mentoring = config.mentoring;
export const linkedinBanner = config.linkedinBanner;
export const testimonialCta = config.testimonialCta;
export const modules = config.modules;
