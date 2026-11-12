import config from '../portfolio.config.json';

// Backend features (contact storage, comments, testimonials, blog admin) need Upstash Redis.
export const BACKEND = !!(config.modules && config.modules.backend);

// Blog is shown when the backend is on (posts from admin) or when the user wrote posts in the wizard.
export const SHOW_BLOG = BACKEND || !!(config.modules && config.modules.blog);
