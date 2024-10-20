export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40">
      <div className="text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
          hello and welcome to my portfolio website
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
          My name is Obiora Sopuluchukwu, I build awsome websites and web apps
          like this one you are on right now, feel free to take a look around
          and see how awsome I am &#128521;.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/projects"
            className="rounded-md bg-indigo-600 dark:bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            view projects
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
          >
            get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
