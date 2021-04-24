// Main stuff
<div
        className="py-12 dark:bg-dark-surface"
        id="learn-more"
        ref={learnMoreRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              About This Guide
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
              Not Just Another Resource.
            </h3>
            <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 dark:text-gray-400 lg:mx-auto">
              This is more than "just another resource." This is a
              comprehensive, organized roadmap carefully designed and crafted
              for USACO contestants – available to everyone, for free.
            </p>

            <div className="inline-flex mx-auto rounded-md bg-yellow-50 dark:bg-yellow-700 dark:bg-opacity-25 p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400 dark:text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 text-yellow-700 dark:text-yellow-300 text-left">
                    This guide is not an official syllabus. Topics on this guide
                    reflect <i>past</i> problems, not future problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Experienced Authors
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      This guide is written by top USACO contestants, including
                      two-time IOI winner and USACO Problemsetter{' '}
                      <a
                        href="https://github.com/bqi343"
                        className="underline text-blue-500 dark:text-blue-400"
                      >
                        Benjamin Qi
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Calibrated Difficulty
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      This guide is targeted towards all contestants, regardless
                      of their division. You'll find problems suitable for you.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Improve Faster
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      Stop wasting time learning topics you already know. Skip
                      over easy topics or delve deeper into difficult ones; the
                      choice is yours.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Stay Motivated
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      Use our progress-tracking tools to track your progress in
                      the Guide and stay motivated.
                    </p>
                  </div>
                  {/*<div className="ml-4">*/}
                  {/*  <h4 className="text-lg leading-6 font-medium text-gray-900">*/}
                  {/*    Officially Recognized*/}
                  {/*  </h4>*/}
                  {/*  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">*/}
                  {/*    This guide is developed in collaboration with USACO Staff*/}
                  {/*    and USACO Director Dr. Brian Dean.*/}
                  {/*  </p>*/}
                  {/*</div>*/}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-900 to-purple-900 dark:from-dark-surface dark:to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:text-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-200 dark:text-blue-300 space-y-2 sm:space-y-0">
            <p>Unsure how to get started?</p>
            <p>Overwhelmed by too many resources?</p>
            <p>Looking to take your CP skills to the next level?</p>
          </div>

          <p className="leading-9 sm:leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-gray-100 mt-8">
            This is the guide for you.
          </p>

          <div className="mt-8 flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link
                to="/dashboard/"
                className="w-full flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 md:py-4 md:text-lg md:px-10 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:border-blue-700 dark:focus:border-blue-800 focus:shadow-outline-blue transition"
              >
                View Guide
              </Link>
            </div>
          </div>
        </div>
      </div>