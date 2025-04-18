const cardsData = [
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "August 25, 2023",
        description: "qiio CEO Felix Adamczyk recognized with the “Digital Shaper 2023” award in the “The Smarties” category",
        link: "/News/qiio-ceo-felix-adamczyk-recognized-digital-shaper-2023-in-the-smarties-category.html"
    },
    {
        image: "./Docs/Assets/news/meet-qiio-at-mobile-world-congress-2023-in-barcelona.webp",
        date: "February 11, 2023",
        description: "Meet qiio at Mobile World Congress 2023 in Barcelona",
        link: "/News/meet-qiio-at-mobile-world-congress-2023-in-barcelona.html"
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
        image: "./Docs/Assets/news/a-whole-lot-of-swissness-miromico-and-qiio-announce-the-new-microsoft-azure-sphere-secured-miro-edge-sphere-lorawan-gateway.webp",
        date: "February 16, 2022",
        description: "“A whole lot of Swissness”: Miromico and qiio announce the new Microsoft® Azure Sphere-secured miro Edge Sphere LoRaWAN Gateway",
        link: "/News/a-whole-lot-of-swissness-miromico-and-qiio-announce-the-new-microsoft-azure-sphere-secured-miro-edge-sphere-lorawan-gateway.html"
    },
    {
        image: "./Docs/Assets/news/qiio-going-to-silicon-valley.webp",
        date: "February 15, 2022",
        description: "qiio is going to Silicon Valley!",
        link: "/News/qiio-going-to-silicon-valley.html"
    },
    {
        image: "./Docs/Assets/news/3214.webp",
        date: "February 11, 2022",
        description: "Meet qiio at Mobile World Congress 2022 in Barcelona",
        link: "/News/3214.html"
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
        image: "./Docs/Assets/news/.webp",
        date: "January 12, 2022",
        description: "qiio becomes the first company in the world to receive the AT&T Network Optimized certification for its secure cellular IoT solution based on Microsoft Azure Sphere®",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "November 15, 2021",
        description: "November edition of BILANZ",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "October 6, 2021",
        description: "POLYMESSE ZURICH 2021 – On the look-out for great talent!",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "October 4, 2021",
        description: "Die Digitalisierung der physischen Welt",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "May 5, 2021",
        description: "5G Ambassador of Switzerland",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "April 20, 2021",
        description: "CHANCE5G",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "April 20, 2021",
        description: "Media Coverage on the qiio-Avnet Partnership",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 3, 2021",
        description: "qiio and Avnet Enter Strategic Solution and Distribution Partnership",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "January 25, 2021",
        description: "10 Swiss 5G startups to watch",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "December 21, 2020",
        description: "qiio einer der Gewinner der Swisscom Start-up Challenge",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "December 17, 2020",
        description: "qiio wins Swisscom 5G StartUp Challenge 2020",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "December 15, 2020",
        description: "Swisscom StartUp Challenge 2020",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "December 15, 2020",
        description: "qiio’s Concentrator XN nominated as “Product Of the Year” by the renowned German ELEKTRONIK magazine, of the WEKA publishing house.",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "November 10, 2020",
        description: "Security article in Elektronik magazine",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "September 23, 2020",
        description: "Was macht denn qiios q200 Guardian im Büchergestell von Microsoft CEO Satya Nadella?",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "September 23, 2020",
        description: "q200 Guardian showcased at Microsoft Ignite 2020",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "August 27, 2020",
        description: "qiio presents PoC in a Box",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "June 9, 2020",
        description: "qiio CEO, one of the 100 successful rich people under 40",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "May 13, 2020",
        description: "qiio in the 2020 Swiss Energy Startup Map",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "April 21, 2020",
        description: "qiio and Sigma IT Consulting in strategic partnership",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 23, 2020",
        description: "3 Fragen an Felix Adamczyk",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 17, 2020",
        description: "qiio secures CHF 5 million in the first financing round",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 4, 2020",
        description: "q200 product launch media coverage",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 25, 2020",
        description: "Interview mit Felix Adamczyk, CEO qiio: Weltweit erste Mobilfunkanwendung für Azure Sphere – Embedded/Hardware – Elektroniknet",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 24, 2020",
        description: "qiio präsentiert die erste sichere Mobilfunklösung auf Basis von Microsoft Azure Sphere",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 24, 2020",
        description: "qiio launches first secured mobile solution based on Microsoft Azure Sphere",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 23, 2020",
        description: "qiio at IoT in Action Nuremberg",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "January 24, 2020",
        description: "qiio highlight of Swisscom IoT Day 2020",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "November 7, 2019",
        description: "Winner interview & BE 4.0 exhibition",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "October 8, 2019",
        description: "Thermoplan und qiio entwickeln IoT-Lösung für Kaffeemaschinen",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "October 8, 2019",
        description: "Thermoplan Partners with qiio for IoT Coffee Machine Solution",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "October 3, 2019",
        description: "qiio receives top award at the 2019 BaselArea.swiss Industry 4.0 Challenge",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "September 26, 2019",
        description: "qiio Ltd Incorporates",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "July 4, 2019",
        description: "Azure Sphere Training in Munich",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "June 25, 2019",
        description: "qiio exhibition: Swiss Mechatronics Day 2019",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "May 20, 2019",
        description: "qiio highlights of Bosch ConnectedWorld 2019",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "April 4, 2019",
        description: "GfM Startup Challenge 2019 winner is qiio",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "April 1, 2019",
        description: "qiio exhibition: Bosch ConnectedWorld 2019",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 21, 2019",
        description: "How IoT reduces costs for coffee machines",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 15, 2019",
        description: "Tips on IoT security",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 12, 2019",
        description: "qiio highlights of Mobile World Congress and embedded world",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "March 11, 2019",
        description: "IoT Webcast: Security and Microsoft Azure Sphere",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 20, 2019",
        description: "How IoT optimizes sales prediction and logistics",
        link: "/News/.html"
    },
    {
        image: "./Docs/Assets/news/.webp",
        date: "February 20, 2019",
        description: "End-to-end IoT solution",
        link: "/News/.html"
    },
];

const container = document.getElementById("cardContainer");

cardsData.forEach(card => {
    const cardElement = document.createElement("a");
    cardElement.href = card.link;
    cardElement.className = "flex flex-col w-full hover:-translate-y-2 transition-all duration-500";

    cardElement.innerHTML = `
    <div class="flex items-center justify-center w-full bg-gray-50 p-2 rounded-lg">
        <img src="${card.image}" class="object-cover h-68 mx-auto rounded-lg" alt="">
    </div>
      <h2 class="text-[#4285f4] text-xl font-medium mt-2">${card.date}</h2>
      <p class="text-gray-800 mt-1">${card.description}</p>
    `;

    container.appendChild(cardElement);
});
