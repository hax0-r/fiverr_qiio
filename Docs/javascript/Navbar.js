const navbar = document.getElementById("navbar")
navbar.innerHTML = `
   <div x-data="accordion(1)" id="nav" class="fixed top-0 left-0 z-50 w-full overflow-auto ">

        <!-- Navbar -->
        <nav class=" h-24 flex items-center justify-center top-0 left-0 bg-white z-40 w-full">
            <div class="w-full max-w-7xl mx-auto p-5 flex items-center justify-between">
                <a @click="handleClick()" href="/index.html">
                    <img src="/Docs/Assets/logo.svg" class="md:h-14 h-10" alt="">
                </a>
                <div class="flex items-center md:gap-8 gap-5">
                    <a @click="handleClick()" href="/careers.html"
                        class="font-medium  transition-all duration-500 hover:text-[#4285f4]">Career</a>
                    <a @click="handleClick()" href="/news.html" class="font-medium transition-all duration-500 hover:text-[#4285f4]">News</a>
                    <img src="/Docs/Assets/bar.svg" id="bar" class="h-6 opacity-90 cursor-pointer"
                        @click="handleClick()" alt="bar">
                </div>
            </div>
        </nav>

        <!-- Collapsible Panel -->
        <div class="transition-all duration-500 overflow-auto absolute top-[6rem] w-full z-40 bg-white"
            :style="open ? 'max-height: ' + tabHeight + 'px' : 'max-height: 0px'">
            <div x-ref="tab"
                class="max-w-7xl overflow-auto p-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full mx-auto">
                <div class="w-full text-gray-800">
                    <img src="/Docs/Assets/technology_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold  mt-4 text-[#4285f4] mb-5">qiio Smart Connectivity</h2>
                    <a @click="handleClick()" href="Smart-Connectivity.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4]">This is Smart
                        Connectivity</a>

                    <div class="md:hidden block">
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(1)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio" >qiio Sphere Studio®</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Survey</a></li>
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Triage</a></li>
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Insurance</a></li>
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(2)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a  @click="handleClick()" href="/Smart-Connectivity.html#infrastructure">Infrastructure</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#infrastructure"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">q200
                                                Guardian
                                            </a></li>
                                        <li><a  @click="handleClick()" href="/concentrator-xn.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Concentrator
                                                XN
                                            </a></li>
                                        <li><a  @click="handleClick()" href="/Smart-Connectivity.html#global-connectivity"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Global
                                                Connectivity
                                            </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(3)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/Smart-Connectivity.html#support">Support</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a @click="handleClick()" href="/Smart-Connectivity.html#support"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Extended
                                                Warranty</a></li>
                                        <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Triage</a></li>
                                        <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Insurance</a></li>
                                        <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                                Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:block hidden">
                        <a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">qiio
                            Sphere
                            Studio®</a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                    Survey</a></li>
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                    Triage</a></li>
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                    Insurance</a></li>
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#qiio-sphere-studio"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                    Location</a></li>
                        </ul>

                        <a @click="handleClick()" href="/Smart-Connectivity.html#infrastructure"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Infrastructure</a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#infrastructure"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">q200
                                    Guardian
                                </a></li>
                            <li><a @click="handleClick()" href="/concentrator-xn.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Concentrator
                                    XN
                                </a></li>
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#global-connectivity"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Global
                                    Connectivity
                                </a></li>
                        </ul>
                        <a @click="handleClick()" href="/Smart-Connectivity.html#support"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Support</a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/Smart-Connectivity.html#support"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Extended
                                    Warranty</a></li>
                        </ul>
                    </div>
                </div>
                <div class="w-full text-gray-800">
                    <img src="/Docs/Assets/products_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold  mt-4 text-[#4285f4] mb-5">Succeed with qiio Smart
                        Connectivity</h2>
                    <div class="md:hidden block">
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(4)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/hit-the-ground-running.html">Hit the ground
                                    running</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-4" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a @click="handleClick()" href="/starter-kit.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">With
                                                your
                                                Starter Kit</a></li>
                                        <li><a @click="handleClick()" href="/poc-in-a-box-package.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">With
                                                the PoC
                                                in
                                                a Box Package</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:block hidden">
                        <a @click="handleClick()" href="/hit-the-ground-running.html"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4]">Hit the ground
                            running</a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/starter-kit.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">With your
                                    Starter Kit
                                </a></li>
                            <li><a @click="handleClick()" href="/poc-in-a-box-package.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">With the PoC
                                    in
                                    a Box Package
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div class="w-full text-gray-800">
                    <img src="/Docs/Assets/buy_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">Buy</h2>
                    <a @click="handleClick()" href="/buy-from-qiio.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4]">Buy from qiio
                    </a>

                    <div class="md:hidden block">
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(5)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/buy-from-qiio.html#Distributors">Distributors</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-5" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a @click="handleClick()" href="/buy-from-qiio.html#Distributors"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Swisscom</a>
                                        </li>
                                        <li><a @click="handleClick()" href="/buy-from-qiio.html#Distributors"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Avnet</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:block hidden ">

                        <a @click="handleClick()" href="/buy-from-qiio.html#Distributors"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Distributors
                        </a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/buy-from-qiio.html#Distributors"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Swisscom
                                </a></li>
                            <li><a @click="handleClick()" href="/buy-from-qiio.html#Distributors"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Avnet
                                </a></li>
                        </ul>
                    </div>
                    <a @click="handleClick()" href="/accessories.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Accessories</a>
                    <a @click="handleClick()" href="/resources.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Resources</a>
                    <a class="/font-medium block mt-3">Shop <i class="fa-solid fa-lock"></i></a>
                </div>
                <div class="w-full text-gray-800">
                    <img src="/Docs/Assets/about_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">About</h2>

                    <div class="md:hidden block">
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(6)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/news.html">All News</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-6" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a @click="handleClick()" href="/news-events.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">News
                                                &
                                                Events</a>
                                        </li>
                                        <li><a @click="handleClick()" href="/press-releases.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Press
                                                Releases</a>
                                        </li>
                                        <li><a @click="handleClick()" href="/media-coverage.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Media
                                                Coverage</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:block hidden">
                        <a @click="handleClick()" href="/news.html" class="font-medium transition-all duration-500 hover:text-[#4285f4]">All
                            News
                        </a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/news-events.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">News &
                                    Events
                                </a></li>
                            <li><a @click="handleClick()" href="/press-releases.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Press
                                    Releases
                                </a></li>
                            <li><a @click="handleClick()" href="/media-coverage.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Media
                                    Coverage
                                </a></li>
                        </ul>
                    </div>
                    <a @click="handleClick()" href="/who-we-are.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Who we
                        are
                    </a>
                    <a @click="handleClick()" href="/vision-values.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Vision &
                        Values

                    </a>
                    <a @click="handleClick()" href="/team.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Team
                    </a>
                    <a @click="handleClick()" href="/careers.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Careers
                    </a>
                    <a @click="handleClick()" href="/social-responsibility.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Social
                        Responsibility
                    </a>

                    <div class="md:hidden block">
                        <div class="border-b border-slate-200">
                            <button onclick="toggleAccordion(7)"
                                class="w-full flex justify-between items-center py-5 text-slate-800">
                                <a @click="handleClick()" href="/security.html">Security</a>
                                <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </button>
                            <div id="content-7" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div class="pb-5">
                                    <ul class="list-disc space-y-2 pl-5">
                                        <li><a @click="handleClick()" href="/vulnerability-disclosure-policy.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Vulnerability
                                                Disclosure Policy</a>
                                        </li>
                                        <li><a @click="handleClick()" href="/vulnerability-report.html"
                                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Report
                                                Vulnerability</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:block hidden">
                        <a @click="handleClick()" href="/security.html"
                            class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Security
                        </a>
                        <ul class="mt-2 list-disc space-y-2 pl-5">
                            <li><a @click="handleClick()" href="/vulnerability-disclosure-policy.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Vulnerability
                                    Disclosure Policy
                                </a></li>
                            <li><a @click="handleClick()" href="/vulnerability-report.html"
                                    class="font-medium transition-all duration-500 hover:text-[#4285f4]">Report
                                    Vulnerability
                                </a></li>
                        </ul>
                    </div>
                    <a @click="handleClick()" href="/contact.html"
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="h-[6rem]"></div>
`

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}


document.addEventListener('alpine:init', () => {
    Alpine.data('accordion', (idx) => ({
        idx: idx,
        open: false,
        tabHeight: 0,
        handleClick() {
            this.open = !this.open;
            this.$nextTick(() => {
                this.tabHeight = this.$refs.tab.scrollHeight;
            });
        }
    }));
});

const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.addEventListener('click', () => {
    if (nav.classList.contains("h-screen")) {
        setTimeout(() => {
            nav.classList.remove("h-screen");
        }, 1000);
    } else {
        nav.classList.add("h-screen");
    }
});

