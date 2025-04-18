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
        image: "./Docs/Assets/news/polymesse-eth-zurich.webp",
        date: "October 6, 2021",
        description: "POLYMESSE ZURICH 2021 – On the look-out for great talent!",
        link: "/News/polymesse-eth-zurich.html"
    },
    {
        image: "./Docs/Assets/news/asut-bulletin.webp",
        date: "October 4, 2021",
        description: "Die Digitalisierung der physischen Welt",
        link: "/News/asut-bulletin.html"
    },
    {
        image: "./Docs/Assets/news/5g-ambassador-switzerland.webp",
        date: "May 5, 2021",
        description: "5G Ambassador of Switzerland",
        link: "/News/5g-ambassador-switzerland.html"
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
        image: "./Docs/Assets/news/qiio-and-avnet-enter-strategic-solution-and-distribution-partnership.webp",
        date: "March 3, 2021",
        description: "qiio and Avnet Enter Strategic Solution and Distribution Partnership",
        link: "/News/qiio-and-avnet-enter-strategic-solution-and-distribution-partnership.html"
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
        image: "./Docs/Assets/news/qiio-wins-swisscom-5g-startup-challenge-2020.webp",
        date: "December 17, 2020",
        description: "qiio wins Swisscom 5G StartUp Challenge 2020",
        link: "/News/qiio-wins-swisscom-5g-startup-challenge-2020.html"
    },
    {
        image: "./Docs/Assets/news/swisscom-startup-challenge-2020.webp",
        date: "December 15, 2020",
        description: "Swisscom StartUp Challenge 2020",
        link: "/News/swisscom-startup-challenge-2020.html"
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
        image: "./Docs/Assets/news/was-macht-denn-qiios-q200-guardian-im-buchergestell.webp",
        date: "September 23, 2020",
        description: "Was macht denn qiios q200 Guardian im Büchergestell von Microsoft CEO Satya Nadella?",
        link: "/News/was-macht-denn-qiios-q200-guardian-im-buchergestell.html"
    },
    {
        image: "./Docs/Assets/news/was-macht-denn-qiios-q200-guardian-im-buchergestell.webp",
        date: "September 23, 2020",
        description: "q200 Guardian showcased at Microsoft Ignite 2020",
        link: "/News/q200-guardian-showcased-at-microsoft-ignite-2020.html"
    },
    {
        image: "./Docs/Assets/news/qiio-presents-poc-in-a-box.webp",
        date: "August 27, 2020",
        description: "qiio presents PoC in a Box",
        link: "/News/qiio-presents-poc-in-a-box.html"
    },
    {
        image: "./Docs/Assets/news/qiio-ceo-one-of-the-100-successful-rich-people-under-40.webp",
        date: "June 9, 2020",
        description: "qiio CEO, one of the 100 successful rich people under 40",
        link: "/News/qiio-ceo-one-of-the-100-successful-rich-people-under-40.html"
    },
    {
        image: "./Docs/Assets/news/qiio-in-the-2020-swiss-energy-startup-map.webp",
        date: "May 13, 2020",
        description: "qiio in the 2020 Swiss Energy Startup Map",
        link: "/News/qiio-in-the-2020-swiss-energy-startup-map.html"
    },
    {
        image: "./Docs/Assets/news/qiio-and-sigma-it-consulting-in-strategic-partnership.webp",
        date: "April 21, 2020",
        description: "qiio and Sigma IT Consulting in strategic partnership",
        link: "/News/qiio-and-sigma-it-consulting-in-strategic-partnership.html"
    },
    {
        image: "./Docs/Assets/news/3-fragen-an-felix-adamczyk.webp",
        date: "March 23, 2020",
        description: "3 Fragen an Felix Adamczyk",
        link: "/News/3-fragen-an-felix-adamczyk.html"
    },
    {
        image: "./Docs/Assets/news/qiio-secures-chf-5-million-in-the-first-financing-round.webp",
        date: "March 17, 2020",
        description: "qiio secures CHF 5 million in the first financing round",
        link: "/News/qiio-secures-chf-5-million-in-the-first-financing-round.html"
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
    {
        image: "./Docs/Assets/news/qiio-prasentiert-die-erste-sichere-mobilfunklosung.webp",
        date: "February 24, 2020",
        description: "qiio präsentiert die erste sichere Mobilfunklösung auf Basis von Microsoft Azure Sphere",
        link: "/News/qiio-prasentiert-die-erste-sichere-mobilfunklosung.html"
    },
    {
        image: "./Docs/Assets/news/qiio-prasentiert-die-erste-sichere-mobilfunklosung.webp",
        date: "February 24, 2020",
        description: "qiio launches first secured mobile solution based on Microsoft Azure Sphere",
        link: "/News/qiio-launches-first-secured-mobile-solution-based.html"
    },
    {
        image: "./Docs/Assets/news/qiio-at-iot-in-action-nuremberg.webp",
        date: "February 23, 2020",
        description: "qiio at IoT in Action Nuremberg",
        link: "/News/qiio-at-iot-in-action-nuremberg.html"
    },
    {
        image: "./Docs/Assets/news/qiio-highlight-of-swisscom-iot-day-2020.webp",
        date: "January 24, 2020",
        description: "qiio highlight of Swisscom IoT Day 2020",
        link: "/News/qiio-highlight-of-swisscom-iot-day-2020.html"
    },
    {
        image: "./Docs/Assets/news/winner-interview-be-4-0-exhibition.webp",
        date: "November 7, 2019",
        description: "Winner interview & BE 4.0 exhibition",
        link: "/News/winner-interview-be-4-0-exhibition.html"
    },
    {
        image: "./Docs/Assets/news/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.webp",
        date: "October 8, 2019",
        description: "Thermoplan und qiio entwickeln IoT-Lösung für Kaffeemaschinen",
        link: "/News/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.html"
    },
    {
        image: "./Docs/Assets/news/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.webp",
        date: "October 8, 2019",
        description: "Thermoplan Partners with qiio for IoT Coffee Machine Solution",
        link: "/News/thermoplan-partners-with-qiio-for-iot-coffee-machine-solution.html"
    },
    {
        image: "./Docs/Assets/news/qiio-receives-top-award-at-the-2019-baselarea-swiss-industry-4-0-challenge.webp",
        date: "October 3, 2019",
        description: "qiio receives top award at the 2019 BaselArea.swiss Industry 4.0 Challenge",
        link: "/News/qiio-receives-top-award-at-the-2019-baselarea-swiss-industry-4-0-challenge.html"
    },
    {
        image: "./Docs/Assets/news/qiio-ltd-incorporates.webp",
        date: "September 26, 2019",
        description: "qiio Ltd Incorporates",
        link: "/News/qiio-ltd-incorporates.html"
    },
    {
        image: "./Docs/Assets/news/azure-sphere-training-in-munich.png",
        date: "July 4, 2019",
        description: "Azure Sphere Training in Munich",
        link: "/News/azure-sphere-training-in-munich.html"
    },
    {
        image: "./Docs/Assets/news/qiio-exhibition-swiss-mechatronics-day-2019.webp",
        date: "June 25, 2019",
        description: "qiio exhibition: Swiss Mechatronics Day 2019",
        link: "/News/qiio-exhibition-swiss-mechatronics-day-2019.html"
    },
    {
        image: "./Docs/Assets/news/qiio-highlights-of-bosch-connectedworld-2019.webp",
        date: "May 20, 2019",
        description: "qiio highlights of Bosch ConnectedWorld 2019",
        link: "/News/qiio-highlights-of-bosch-connectedworld-2019.html"
    },
    {
        image: "./Docs/Assets/news/gfm-startup-challenge-2019-winner-is-qiio.webp",
        date: "April 4, 2019",
        description: "GfM Startup Challenge 2019 winner is qiio",
        link: "/News/gfm-startup-challenge-2019-winner-is-qiio.html"
    },
    {
        image: "./Docs/Assets/news/qiio-exhibition-bosch-connectedworld-2019.png",
        date: "April 1, 2019",
        description: "qiio exhibition: Bosch ConnectedWorld 2019",
        link: "/News/qiio-exhibition-bosch-connectedworld-2019.html"
    },
    {
        image: "./Docs/Assets/news/how-iot-reduces-costs-for-coffee-machines.webp",
        date: "March 21, 2019",
        description: "How IoT reduces costs for coffee machines",
        link: "/News/how-iot-reduces-costs-for-coffee-machines.html"
    },
    {
        image: "./Docs/Assets/news/tips-on-iot-security.webp",
        date: "March 15, 2019",
        description: "Tips on IoT security",
        link: "/News/tips-on-iot-security.html"
    },
    {
        image: "./Docs/Assets/news/qiio-highlights-of-mobile-world-congress-and-embedded-world.webp",
        date: "March 12, 2019",
        description: "qiio highlights of Mobile World Congress and embedded world",
        link: "/News/qiio-highlights-of-mobile-world-congress-and-embedded-world.html"
    },
    {
        image: "./Docs/Assets/news/iot-webcast-security-and-microsoft-azure-sphere.webp",
        date: "March 11, 2019",
        description: "IoT Webcast: Security and Microsoft Azure Sphere",
        link: "/News/iot-webcast-security-and-microsoft-azure-sphere.html"
    },
    {
        image: "./Docs/Assets/news/how-iot-optimizes-sales-prediction-and-logistics.webp",
        date: "February 20, 2019",
        description: "How IoT optimizes sales prediction and logistics",
        link: "/News/how-iot-optimizes-sales-prediction-and-logistics.html"
    },
    {
        image: "./Docs/Assets/news/end-to-end-iot-solution.jpg",
        date: "February 20, 2019",
        description: "End-to-end IoT solution",
        link: "/News/end-to-end-iot-solution.html"
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
