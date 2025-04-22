const cardsData = [
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "August 25, 2023",
        description: "qiio CEO Felix Adamczyk recognized with the “Digital Shaper 2023” award in the “The Smarties” category",
        link: "/News/qiio-ceo-felix-adamczyk-recognized-digital-shaper-2023-in-the-smarties-category.html"
    },
    {
        image: "./Docs/Assets/news/ten-startups-to-explore-silicon-valley-2.webp",
        date: "August 26, 2022",
        description: "qiio CEO Felix Adamczyk awarded “Digital Shaper 2022” in the “Unicorn Breeders” category",
        link: "/News/ten-startups-to-explore-silicon-valley-2.html"
    },
    {
        image: "./Docs/Assets/news/gateway-fur-azure-sphere-erhaltlich.webp",
        date: "February 21, 2022",
        description: "Gateway für Azure Sphere basierend auf qiio IoT-Technologie erhältlich",
        link: "/News/gateway-fur-azure-sphere-erhaltlich.html"
    },
    {
        image: "./Docs/Assets/news/ten-startups-to-explore-silicon-valley.webp",
        date: "February 21, 2022",
        description: "Ten Startups to explore Silicon Valley",
        link: "/News/ten-startups-to-explore-silicon-valley.html"
    },
    {
        image: "./Docs/Assets/news/qiio-on-course-for-growth-in-the-us.webp",
        date: "January 25, 2022",
        description: "qiio on course for growth in the US",
        link: "/News/qiio-on-course-for-growth-in-the-us.html"
    },
    {
        image: "./Docs/Assets/news/gateway-fur-azure-sphere-erhaltlich.webp",
        date: "January 20, 2022",
        description: "Qiio erhält AT&T-Zertifizierung für IoT-Modul (German)",
        link: "/News/qiio-erhalt-att-zertifizierung.html"
    },
    {
        image: "./Docs/Assets/news/qiio-becomes-the-first-company-in-the-world-to-receive-the-att-network-optimized-certification.webp",
        date: "January 12, 2022",
        description: "qiio becomes the first company in the world to receive the AT&T Network Optimized certification for its secure cellular IoT solution based on Microsoft Azure Sphere®",
        link: "/News/qiio-becomes-the-first-company-in-the-world-to-receive-the-att-network-optimized-certification.html"
    },
    {
        image: "./Docs/Assets/news/november-edition-of-bilanz.webp",
        date: "November 15, 2021",
        description: "November edition of BILANZ",
        link: "/News/november-edition-of-bilanz.html"
    },
    {
        image: "./Docs/Assets/news/asut-bulletin.webp",
        date: "October 4, 2021",
        description: "Die Digitalisierung der physischen Welt",
        link: "/News/asut-bulletin.html"
    },
    {
        image: "./Docs/Assets/news/smart-connectivity.webp",
        date: "April 20, 2021",
        description: "CHANCE5G",
        link: "/News/smart-connectivity.html"
    },
    {
        image: "./Docs/Assets/news/media-coverage-on-the-qiio-avnet-partnership.webp",
        date: "April 20, 2021",
        description: "Media Coverage on the qiio-Avnet Partnership",
        link: "/News/media-coverage-on-the-qiio-avnet-partnership.html"
    },
    {
        image: "./Docs/Assets/news/10-swiss-5g-startups-to-watch.webp",
        date: "January 25, 2021",
        description: "10 Swiss 5G startups to watch",
        link: "/News/10-swiss-5g-startups-to-watch.html"
    },
    {
        image: "./Docs/Assets/news/qiio-einer-der-gewinner-der-swisscom-start-up-challenge.webp",
        date: "December 21, 2020",
        description: "qiio einer der Gewinner der Swisscom Start-up Challenge",
        link: "/News/qiio-einer-der-gewinner-der-swisscom-start-up-challenge.html"
    },
    {
        image: "./Docs/Assets/news/qiios-concentrator-xn-nominated-as-product-of-the-year-by-the-renowned.webp",
        date: "December 15, 2020",
        description: "qiio’s Concentrator XN nominated as “Product Of the Year” by the renowned German ELEKTRONIK magazine, of the WEKA publishing house.",
        link: "/News/qiios-concentrator-xn-nominated-as-product-of-the-year-by-the-renowned.html"
    },
    {
        image: "./Docs/Assets/news/security-article-in-elektronik-magazine.webp",
        date: "November 10, 2020",
        description: "Security article in Elektronik magazine",
        link: "/News/security-article-in-elektronik-magazine.html"
    },
    {
        image: "./Docs/Assets/news/qiio-ceo-one-of-the-100-successful-rich-people-under-40.webp",
        date: "June 9, 2020",
        description: "qiio CEO, one of the 100 successful rich people under 40",
        link: "/News/qiio-ceo-one-of-the-100-successful-rich-people-under-40.html"
    },
    {
        image: "./Docs/Assets/news/3-fragen-an-felix-adamczyk.webp",
        date: "March 23, 2020",
        description: "3 Fragen an Felix Adamczyk",
        link: "/News/3-fragen-an-felix-adamczyk.html"
    },
    {
        image: "./Docs/Assets/news/q200-product-launch-media-coverage.webp",
        date: "March 4, 2020",
        description: "q200 product launch media coverage",
        link: "/News/q200-product-launch-media-coverage.html"
    },
    {
        image: "./Docs/Assets/news/3-fragen-an-felix-adamczyk.webp",
        date: "February 25, 2020",
        description: "Interview mit Felix Adamczyk, CEO qiio: Weltweit erste Mobilfunkanwendung für Azure Sphere – Embedded/Hardware – Elektroniknet",
        link: "/News/interview-mit-felix-adamczyk-ceo-qiio-weltweit-erste.html"
    },
];

const container = document.getElementById("cardContainer");

cardsData.forEach(card => {
    const cardElement = document.createElement("a");
    cardElement.href = card.link;
    cardElement.className = "flex cursor-pointer flex-col w-full hover:-translate-y-2 transition-all duration-500";

    cardElement.innerHTML = `
    <div class="flex items-center justify-center w-full bg-gray-50 p-2 rounded-lg">
        <img src="${card.image}" class="object-cover h-68 mx-auto rounded-lg" alt="">
    </div>
      <h2 class="text-[#4285f4] text-xl font-medium mt-2">${card.date}</h2>
      <p class="text-gray-800 mt-1">${card.description}</p>
    `;

    container.appendChild(cardElement);
});
