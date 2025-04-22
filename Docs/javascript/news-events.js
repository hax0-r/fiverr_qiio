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
        image: "./Docs/Assets/news/polymesse-eth-zurich.webp",
        date: "October 6, 2021",
        description: "POLYMESSE ZURICH 2021 – On the look-out for great talent!",
        link: "/News/polymesse-eth-zurich.html"
    },
    {
        image: "./Docs/Assets/news/5g-ambassador-switzerland.webp",
        date: "May 5, 2021",
        description: "5G Ambassador of Switzerland",
        link: "/News/5g-ambassador-switzerland.html"
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
        image: "./Docs/Assets/news/qiio-in-the-2020-swiss-energy-startup-map.webp",
        date: "May 13, 2020",
        description: "qiio in the 2020 Swiss Energy Startup Map",
        link: "/News/qiio-in-the-2020-swiss-energy-startup-map.html"
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
