const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#f7f7f7] md:p-10 p-5 py-10 md:py-20">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">

            <div class="w-full">
                <a href="/index.html">
                    <img src="/Docs/Assets/logo.svg" class="md:h-20 h-14" alt="">
                </a>
            </div>

            <div class="w-full text-gray-700">
                <h2 class="font-medium text-xl mb-3 text-gray-800">Contact Us</h2>
                <p> <span class="font-semibold">qiio Switzerland AG</span> <br>
                    Chamerstrasse 42a <br>
                    6331 Hünenberg <br>
                    Switzerland <br>
                    <a href="mailto:info@qiio.com" class="hover:underline">info@qiio.com</a>
                </p>
                <div class="flex gap-3 items-center md:mt-1.5">
                    <div class="md:w-60 w-48 bg-[#4285f4] p-0.5 mt-4"></div>
                    <span class="dots mt-4"></span>
                </div>                
            </div>

            <div class="w-full text-gray-700">
                <a href="https://www.linkedin.com/company/qiio">
                    <img src="/Docs/Assets/home/linkedin.svg" alt="">
                </a>
                <ul class="space-y-2 md:mt-5 mt-3">
                    <li><a href="/Cookie-Policy.html" class="hover:underline"> Cookie Policy</a></li>
                    <li><a href="/Privacy-Policy.html" class="hover:underline"> Privacy Policy</a></li>
                    <li><a href="/Imprint.html" class="hover:underline"> Imprint</a></li>
                    <li><a class="md:block hidden select-none" >&nbsp;</a></li>
                </ul>
                <div class="flex gap-3 items-center">
                    <div class="md:w-60 w-48 bg-[#4285f4] p-0.5 mt-4"></div>
                    <span class="dots mt-4"></span>
                </div>
            </div>

        </div>
    </footer>
    <div class="w-full mx-auto max-w-7xl p-5 flex items-center md:justify-start justify-center md:gap-20 gap-4 md:text-start text-center md:flex-row flex-col text-gray-700 ">
        <p class="text-sm">© 2025 All rights reserved.</p>
        <p class="text-sm">qiio® is a registered trademark.</p>
    </div>
`