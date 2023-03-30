export default function SubscribeToNews() {
  return (
    <aside
      class="card p-4 my-8 mt-20 bg-gradient-to-b from-white to-white/60	 grid lg:grid-cols-3 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 "
      aria-label="Subscribe to the Flowbite newsletter"
    >
      <div className="col-span-1">
        <h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">
          Keep yourself updated with Envirro
        </h3>
        <p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut aliquam lacinia, nunc sem lacinia tortor, nec
          ultrices nunc lorem eget massa. Sed euismod, nisl ut aliquam lacinia.
        </p>
      </div>
      <div className="col-span-2">
        <form className="grid grid-cols-6 items-center pt-5">
          <div class="col-span-6 pl-16 w-full">
            <input
              id="email"
              type="email"
              required
              class="block w-full max-w-2xl px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Your email"
            />
          </div>
          <div class="col-span-5 mt-4 px-16 items-end">
            By subscribing, you agree with our terms and conditions
            <a
              rel="nofollow"
              href="https://convertkit.com/terms"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              rel="nofollow"
              class="text-blue-600 hover:underline dark:text-blue-500"
              href="https://convertkit.com/privacy"
            >
              Privacy Policy
            </a>
            .
          </div>
          <div class="col-span-1 items-start justify-start">
            <button
              type="submit"
              class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}

// <form
//   action="https://app.convertkit.com/forms/4692392/subscriptions"
//   class="seva-form formkit-form"
//   method="post"
//   data-sv-form="4692392"
//   data-uid="344e3b5c48"
//   data-format="inline"
//   data-version="5"
//   data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
//   min-width="400 500 600 700"
// >
//   <div data-style="clean" class="flex items-end justify-end mb-3">
//     <ul
//       class="formkit-alert formkit-alert-error"
//       data-element="errors"
//       data-group="alert"
//     ></ul>
//     <div
//       data-element="fields"
//       data-stacked="false"
//       class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
//     >
//       <div class="relative w-full mr-3 formkit-field">
//         <label
//           for="member_email"
//           class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//         >
//           Email address
//         </label>
//         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg
//             class="w-4 h-4 text-gray-500 dark:text-gray-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//           </svg>
//         </div>
//         {/* <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></div> */}
//         <input
//           id="member_email"
//           class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           name="email_address"
//           aria-label="Email Address"
//           placeholder="Your email address..."
//           required=""
//           type="email"
//         />
//       </div>
//       <button data-element="submit" class="formkit-submit">
//         <div class="formkit-spinner">
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <span class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Subscribe
//         </span>
//       </button>
//     </div>
//   </div>
//   <div class="text-sm font-medium flex items-end text-gray-500 dark:text-gray-300">
//     By subscribing, you agree with our terms and conditions
//     <a
//       rel="nofollow"
//       href="https://convertkit.com/terms"
//       class="text-blue-600 hover:underline dark:text-blue-500"
//     >
//       Terms of Service
//     </a>{" "}
//     and{" "}
//     <a
//       rel="nofollow"
//       class="text-blue-600 hover:underline dark:text-blue-500"
//       href="https://convertkit.com/privacy"
//     >
//       Privacy Policy
//     </a>
//     .
//   </div>
// </form>
