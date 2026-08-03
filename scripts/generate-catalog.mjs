#!/usr/bin/env node
/**
 * Scans course folders and writes data/catalog.json + data/courses/*.json
 * for the PHPKINGDOM local dashboard.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data');
const COURSES_DIR = path.join(OUT_DIR, 'courses');

const SKIP_DIRS = new Set([
  'node_modules',
  'data',
  'scripts',
  'assets',
  '.git',
  '.vscode',
  '.idea',
  'dist',
  'coverage',
]);

const COURSE_META = {
  angular: { label: 'Angular', icon: 'devicon-angularjs-plain colored' },
  'apache-kafka-node': {
    label: 'Apache Kafka + Node',
    icon: 'devicon-apachekafka-original colored',
  },
  authentication: { label: 'Authentication', icon: 'bi bi-shield-lock-fill text-brand' },
  'aws-lamda-node': {
    label: 'AWS Lambda + Node',
    icon: 'devicon-amazonwebservices-plain-wordmark colored',
  },
  bootstrap: { label: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  css: { label: 'CSS', icon: 'devicon-css3-plain colored' },
  cypress: { label: 'Cypress', icon: 'devicon-cypressio-plain colored' },
  'design-systems': { label: 'Design Systems', icon: 'devicon-figma-plain colored' },
  dynamodb: { label: 'DynamoDB + Node', icon: 'devicon-dynamodb-original colored' },
  es6: { label: 'ES6', icon: 'devicon-javascript-plain colored' },
  express: { label: 'Express.js', icon: 'devicon-express-original colored' },
  git: { label: 'Git', icon: 'devicon-git-plain colored' },
  graphql: { label: 'GraphQL + Node', icon: 'devicon-graphql-plain colored' },
  html: { label: 'HTML', icon: 'devicon-html5-plain colored' },
  'html5-apis': { label: 'HTML5 APIs', icon: 'devicon-html5-plain colored' },
  javascript: { label: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  jest: { label: 'Jest', icon: 'devicon-jest-plain colored' },
  karma: { label: 'Karma', icon: 'devicon-karma-plain colored' },
  less: { label: 'LESS', icon: 'devicon-less-plain-wordmark colored' },
  lit: { label: 'Lit', icon: 'devicon-lit-plain colored' },
  'module-federation': {
    label: 'Module Federation',
    icon: 'devicon-webpack-plain colored',
  },
  nestjs: { label: 'NestJS', icon: 'devicon-nestjs-plain colored' },
  nextjs: { label: 'Next.js', icon: 'devicon-nextjs-original colored' },
  nodejs: { label: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  playwright: { label: 'Playwright', icon: 'devicon-playwright-plain colored' },
  react: { label: 'React', icon: 'devicon-react-original colored' },
  sass: { label: 'Sass / SCSS', icon: 'devicon-sass-original colored' },
  'single-spa': { label: 'Single-SPA', icon: 'devicon-javascript-plain colored' },
  tailwind: { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  typescript: { label: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  'ui-libraries': {
    label: 'UI Libraries',
    icon: 'devicon-materialui-plain colored',
  },
  vue: { label: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  webaccessibility: {
    label: 'Web Accessibility',
    icon: 'bi bi-universal-access-circle text-brand',
  },
  webcomponents: {
    label: 'Web Components',
    icon: 'devicon-javascript-plain colored',
  },
  webpack: { label: 'Webpack', icon: 'devicon-webpack-plain colored' },
};

function humanize(slug) {
  return slug
    .replace(/^\d+-/, '')
    .replace(/\.html$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function sortKey(name) {
  const m = name.match(/^(\d+)/);
  return m ? [Number(m[1]), name] : [9999, name];
}

function compareNames(a, b) {
  const [na, sa] = sortKey(a);
  const [nb, sb] = sortKey(b);
  return na - nb || sa.localeCompare(sb);
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !SKIP_DIRS.has(d.name))
    .map((d) => d.name)
    .sort(compareNames);
}

function listHtml(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith('.html') && d.name !== 'index.html')
    .map((d) => d.name)
    .sort(compareNames);
}

function collectExamples(topicPath, courseId, sectionName, topicName) {
  const buckets = [];
  const nested = ['examples', 'exercises', 'templates'];
  let foundNested = false;

  for (const bucket of nested) {
    const bucketPath = path.join(topicPath, bucket);
    const files = listHtml(bucketPath);
    if (!files.length) continue;
    foundNested = true;
    buckets.push({
      kind: bucket,
      label: humanize(bucket),
      examples: files.map((file) => ({
        title: humanize(file),
        href: `${courseId}/${sectionName}/${topicName}/${bucket}/${file}`,
      })),
    });
  }

  if (!foundNested) {
    const files = listHtml(topicPath);
    if (files.length) {
      buckets.push({
        kind: 'examples',
        label: 'Examples',
        examples: files.map((file) => ({
          title: humanize(file),
          href: `${courseId}/${sectionName}/${topicName}/${file}`,
        })),
      });
    }
  }

  // Pack-style folders: topic itself is an exercise/template with Problem/Solution or index
  const indexHtml = path.join(topicPath, 'index.html');
  if (!buckets.length && fs.existsSync(indexHtml)) {
    buckets.push({
      kind: 'index',
      label: 'Open',
      examples: [
        {
          title: humanize(topicName) + ' Index',
          href: `${courseId}/${sectionName}/${topicName}/index.html`,
        },
      ],
    });
  }

  const problem = path.join(topicPath, 'Problem', 'index.html');
  const solution = path.join(topicPath, 'Solution', 'index.html');
  if (fs.existsSync(problem) || fs.existsSync(solution)) {
    const examples = [];
    if (fs.existsSync(problem)) {
      examples.push({
        title: 'Problem',
        href: `${courseId}/${sectionName}/${topicName}/Problem/index.html`,
      });
    }
    if (fs.existsSync(solution)) {
      examples.push({
        title: 'Solution',
        href: `${courseId}/${sectionName}/${topicName}/Solution/index.html`,
      });
    }
    buckets.push({ kind: 'practice', label: 'Practice', examples });
  }

  return buckets;
}

function scanCourse(courseId) {
  const coursePath = path.join(ROOT, courseId);
  const sections = [];
  let exampleCount = 0;
  let topicCount = 0;

  for (const sectionName of listDirs(coursePath)) {
    const sectionPath = path.join(coursePath, sectionName);
    const topics = [];

    // Some pack sections only have index.html at section root
    const sectionIndex = path.join(sectionPath, 'index.html');
    const topicDirs = listDirs(sectionPath);

    if (!topicDirs.length && fs.existsSync(sectionIndex)) {
      topics.push({
        id: sectionName,
        title: humanize(sectionName),
        buckets: [
          {
            kind: 'index',
            label: 'Open',
            examples: [
              {
                title: humanize(sectionName) + ' Index',
                href: `${courseId}/${sectionName}/index.html`,
              },
            ],
          },
        ],
      });
      exampleCount += 1;
      topicCount += 1;
    }

    for (const topicName of topicDirs) {
      const topicPath = path.join(sectionPath, topicName);
      const buckets = collectExamples(topicPath, courseId, sectionName, topicName);
      if (!buckets.length) continue;
      const count = buckets.reduce((n, b) => n + b.examples.length, 0);
      exampleCount += count;
      topicCount += 1;
      topics.push({
        id: topicName,
        title: humanize(topicName),
        buckets,
      });
    }

    if (!topics.length) continue;
    sections.push({
      id: sectionName,
      title: humanize(sectionName),
      topics,
    });
  }

  const meta = COURSE_META[courseId] || {
    label: humanize(courseId),
    icon: 'devicon-javascript-plain colored',
  };

  return {
    id: courseId,
    label: meta.label,
    icon: meta.icon,
    sections,
    topicCount,
    exampleCount,
  };
}

function main() {
  const started = Date.now();
  fs.mkdirSync(COURSES_DIR, { recursive: true });

  const courseIds = listDirs(ROOT).filter((name) => {
    const p = path.join(ROOT, name);
    return (
      fs.existsSync(path.join(p, 'README.md')) ||
      fs.existsSync(path.join(p, 'course-index.json'))
    );
  });

  const courses = [];
  let totalExamples = 0;
  let totalTopics = 0;

  for (const id of courseIds) {
    process.stdout.write(`Scanning ${id}… `);
    const course = scanCourse(id);
    fs.writeFileSync(
      path.join(COURSES_DIR, `${id}.json`),
      JSON.stringify(course),
    );
    courses.push({
      id: course.id,
      label: course.label,
      icon: course.icon,
      topicCount: course.topicCount,
      exampleCount: course.exampleCount,
      sectionCount: course.sections.length,
    });
    totalExamples += course.exampleCount;
    totalTopics += course.topicCount;
    console.log(
      `${course.sections.length} sections · ${course.topicCount} topics · ${course.exampleCount} examples`,
    );
  }

  const catalog = {
    generatedAt: new Date().toISOString(),
    brand: 'PHPKINGDOM',
    brandColor: '#DA0037',
    courseCount: courses.length,
    topicCount: totalTopics,
    exampleCount: totalExamples,
    courses,
  };

  fs.writeFileSync(path.join(OUT_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2));
  console.log(
    `\nWrote data/catalog.json + ${courses.length} course files · ${totalTopics} topics · ${totalExamples} examples · ${((Date.now() - started) / 1000).toFixed(1)}s`,
  );
}

main();
