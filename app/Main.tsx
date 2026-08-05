import siteMetadata from '@/data/siteMetadata'

const videos = [
  {
    id: 'c0Tlu89tNqs',
    title: 'Short-form Video Edit',
    description: 'Edited with a focus on pacing, structure, captions, and visual flow.',
  },
  {
    id: 'PrVnKfmuVv0',
    title: 'Video Edit',
    description: 'A polished edit focused on storytelling, timing, and engaging visuals.',
  },
]

const tools = [
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'CapCut',
  'Adobe Photoshop',
  'Canva',
]

const services = [
  'Video Editing',
  'Short-form Content',
  'Long-form Content',
  'Social Media Videos',
  'Voiceover Integration',
  'Captions & Subtitles',
  'Sound & Audio Editing',
  'Basic Graphic Design',
]

const languages = ['English', 'Arabic', 'Amharic', 'Afaan Oromo', 'Turkish']

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col justify-center py-16 sm:py-24">
        <p className="mb-5 text-sm font-semibold tracking-widest text-primary-500 uppercase">
          Video Editor & Content Creator
        </p>

        <h1 className="max-w-4xl text-5xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-gray-100">
          I turn raw footage into videos people want to watch.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500 sm:text-xl dark:text-gray-400">
          I edit short-form and long-form content with clean cuts, strong
          pacing, engaging visuals, and storytelling that fits the purpose of
          every project.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-gray-900"
          >
            View my work ↓
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            Let's work together
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-500 uppercase">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Selected Work
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
            A selection of my video editing work. More projects will be added
            as I continue building my portfolio.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video) => (
            <article key={video.id}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm dark:border-gray-800">
                <div className="aspect-[9/16] w-full">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-gray-100">
                {video.title}
              </h3>

              <p className="mt-2 leading-7 text-gray-500 dark:text-gray-400">
                {video.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-500 uppercase">
            What I do
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Editing & Content
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-gray-200 px-4 py-5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-500 uppercase">
            Tools
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Software I Work With
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-gray-200 py-20 dark:border-gray-800">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary-500 uppercase">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Abdrezak Zeynu
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-gray-500 dark:text-gray-400">
            <p>
              I'm a video editor and content creator who enjoys turning ideas
              and raw footage into polished visual stories.
            </p>

            <p>
              I work across different formats, from short-form social content
              to longer videos, adapting the editing style to the purpose,
              platform, and audience.
            </p>

            <p>
              I also work comfortably with multilingual content and voiceover,
              which helps me work on projects for different audiences and
              markets.
            </p>

            <div className="pt-3">
              <p className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
                Languages
              </p>

              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-gray-200 py-20 dark:border-gray-800"
      >
        <div className="rounded-3xl border border-gray-200 p-8 sm:p-12 dark:border-gray-800">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-500 uppercase">
            Contact
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Have a project in mind?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-500 dark:text-gray-400">
            Whether you need a short social media edit, a long-form video, or
            help turning your footage into engaging content, I'd love to hear
            about it.
          </p>

          <a
            href={`mailto:${siteMetadata.email}`}
            className="mt-7 inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-gray-900"
          >
            Get in touch →
          </a>
        </div>
      </section>
    </main>
  )
}