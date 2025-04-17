const navbar = document.getElementById("navbar")
navbar.innerHTML = `
    <div x-data="accordion(1)">

        <!-- Navbar -->
        <nav class="sticky h-24 flex items-center justify-center top-0 left-0 bg-white z-40 w-full">
            <div class="w-full max-w-7xl mx-auto p-5 flex items-center justify-between">
                <a href="./index.html">
                    <img src="./Docs/Assets/logo.svg" class="md:h-14 h-10" alt="">
                </a>
                <div class="flex items-center md:gap-8 gap-5">
                    <a href="careers.html" class="font-medium  transition-all duration-500 hover:text-[#4285f4]">Career</a>
                    <a href="news.html" class="font-medium transition-all duration-500 hover:text-[#4285f4]">News</a>
                    <img src="./Docs/Assets/bar.svg" class="h-6 opacity-90 cursor-pointer" @click="handleClick()" alt="bar">
                </div>
            </div>
        </nav>

        <!-- Collapsible Panel -->
        <div class="transition-all duration-500 overflow-hidden absolute top-[6rem] w-full z-40 bg-white"
            :style="open ? 'max-height: ' + tabHeight + 'px' : 'max-height: 0px'">
            <div x-ref="tab" class="max-w-7xl p-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full mx-auto">
                <div class="w-full text-gray-800">
                    <img src="./Docs/Assets/technology_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">qiio Smart Connectivity</h2>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">This is Smart
                        Connectivity</a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">qiio
                        Sphere
                        Studio®</a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                Survey</a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                Triage</a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                Insurance</a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Connectivity
                                Location</a></li>
                    </ul>
                    <a href=""
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Infrastructure</a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">q200
                                Guardian
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Concentrator
                                XN
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Global
                                Connectivity
                            </a></li>
                    </ul>
                    <a href=""
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Support</a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Extended
                                Warranty</a></li>
                    </ul>
                </div>
                <div class="w-full text-gray-800">
                    <img src="./Docs/Assets/products_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">Succeed with qiio Smart
                        Connectivity</h2>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Hit the ground
                        running</a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">With your
                                Starter Kit
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">With the PoC
                                in
                                a Box Package
                            </a></li>
                    </ul>
                </div>
                <div class="w-full text-gray-800">
                    <img src="./Docs/Assets/buy_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">Buy</h2>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Buy from qiio
                    </a>
                    <a href=""
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Distributors
                    </a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Swisscom
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Avnet
                            </a></li>
                    </ul>
                    <a href=""
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Accessories</a>
                    <a href=""
                        class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Resources</a>
                    <a class="font-medium block mt-3">Shop <i class="fa-solid fa-lock"></i></a>
                </div>
                <div class="w-full text-gray-800">
                    <img src="./Docs/Assets/about_navi.jpg" class="w-full rounded-lg" alt="">
                    <h2 class="text-lg font-semibold capitalize mt-4 text-[#4285f4] mb-5">About</h2>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">All News
                    </a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">News &
                                Events
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Press
                                Releases
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Media
                                Coverage
                            </a></li>
                    </ul>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Who we
                        are
                    </a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Vision &
                        Values

                    </a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Team
                    </a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Careers
                    </a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Social
                        Responsibility
                    </a>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Security
                    </a>
                    <ul class="mt-2 list-disc space-y-2 pl-5">
                        <li><a href=""
                                class="font-medium transition-all duration-500 hover:text-[#4285f4]">Vulnerability
                                Disclosure Policy
                            </a></li>
                        <li><a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4]">Report
                                Vulnerability
                            </a></li>
                    </ul>
                    <a href="" class="font-medium transition-all duration-500 hover:text-[#4285f4] block mt-3">Contact
                    </a>
                </div>

            </div>
        </div>
    </div>
`

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