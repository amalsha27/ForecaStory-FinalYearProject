import React from 'react';
import './Home.css';
import News1 from '../img/News1.jpeg';
import News2 from '../img/News2.webp';
import News3 from '../img/News3.jpeg';
import News4 from '../img/News4.jpeg';
import News5 from '../img/News5.jpeg';
import News6 from '../img/News6.jpeg';
import logo from '../img/Logo5.png';

function Home() {

  const newsData = [
    {
      title: 'APPAREL MANUFACTURERS: ARE COMPANIES REALLY MOVING OUT OF SRI LANKA?',
      image: News1,
      description: "Apparel manufacturers in Sri Lanka are considering relocation or expanding their operations to other countries due to electricity tariff hikes, increased taxes, and an impending VAT hike in January 2024. National Chamber of Exporters of Sri Lanka (NCE) Chairman Jayantha Karunaratne stated that most companies are opening branches or subsidiary companies overseas to keep costs down, which could reduce business to Sri Lanka. However, Joint Apparel Association Forum (JAAF) Secretary General Yohan Lawrence stated that it is incorrect to say that apparel companies are moving out of Sri Lanka. Sri Lanka has lost its competitive edge in the global apparel market, particularly in the EU and the UK. The country's drop in exports to the EU is around 18%, and for Sri Lanka to compete with Bangladesh, it would need to be 11% cheaper. State Minister of Investment Promotion Dilum Amunugama denied that apparel manufacturing companies were moving out of the country due to the Ukraine-Russia war, the rest of the world, and European economic conditions."
    },
    {
      title: 'SRI LANKA’S APPAREL SECTOR FOCUSES ON ESG FOLLOWING ECONOMIC CRISIS',
      image: News2,
      description: "Sri Lanka's apparel industry, the Joint Apparel Association Forum (JAAF), has highlighted the success of several companies in its North and East region in implementing sustainable practices and lean manufacturing principles. These companies have increased employment, innovation, and sustainable growth following the country's economic crisis. Hirdaramani Apparel Vavuniya has integrated green building standards, treated and reused 100% of wastewater, and used rooftop solar installations. Omega Line Vavuniya has transitioned to 100% renewable energy for production by 2030, aligning with Sri Lanka's renewable energy targets. Eskimo Fashion Knitwear (Pvt) Ltd is incorporating energy-efficient equipment, in-house solar, water management strategies, waste reduction programs, eco-friendly materials, and fair labor practices. Brandix Batticaloa is adopting low-energy consumption technologies, recycling discarded materials, and implementing efficient wastewater management. These companies have gained global recognition, including the world's first manufacturing facility to achieve Net-Zero Carbon status."
    },
    {
      title: 'APPAREL EXPORTS HIT ALL-TIME HIGH',
      image: News3,
      description: "Apparel exports in June reached an all-time high of $537 million, reaffirming the resilience of the private sector-driven industry. The Joint Apparel Association Forum (JAAF) reported that June 2022 performance surpassed the previous highest for a month of $504 million in March 2019. This growth is a strong 39.45% from the previous year, and YoY growth was 30% in May. The first half figure of $2.8 billion is above the $2.6 billion achieved in the first half of 2019, the industry's best year so far, with $5.6 billion in exports for the full year. In 2021, apparel exports rose by 23% to $5.43 billion. Exports to the USA increased by 67.6% to $231.38 million, while shipments to the EU and UK increased by 24% and 16% respectively. Exports to other countries also increased by 31.52% to $77.27 million in June 2022. The Board of Investment (BOI) in Sri Lanka has signed agreements worth $76 million for new investments and expansions in the sector for 2022."
    },
    {
      title: 'FROM RESILIENCE TO REVIVAL IN SRI LANKA',
      image: News4,
      description: "The International Monetary Fund (IMF) has approved a four-year Extended Fund Facility (EFF) arrangement for Sri Lanka, amounting to USD 2.9 billion. However, the Joint Apparel Association Forum argues that external financial support and debt restructuring alone will not be sufficient. Sri Lanka must regain access to the Generalised System of Preference Plus (GSP+), an EU trade regime that gives Sri Lankan exports duty concessions, and reestablish the GSP+ regime. The EU delegation commended Sri Lanka's resilience and progress in stabilizing the economy. The new EU GSP+ Regulation is expected to enter into force on 1 January 2024. As Sri Lanka works its way out of the crisis, reforms and restructuring of sectors and the entire economy will be necessary. Countries like Germany, which have long-standing relationships with Sri Lanka, will step in to support this transformation process. In 2019, trade with Germany crossed USD one billion, growing at around 8-10% per year. Apparel comprises about 44% of total exports and 33% of direct and indirect employment."
    },
    {
      title: 'SME APPAREL EXPORTERS CALL FOR SUPPORT TO SECURE RESILIENT RECOVERY',
      image: News5,
      description: "The Sri Lanka Chamber of Garment Exporters (SLCGE) has praised the resilience of its apparel SME membership for adapting to global market conditions and ending the year with zero closures. The SLCGE, comprising 76 members, has been hit hard by a 20% reduction in orders over the past year. However, SLCGE Chairman Bandula Fernando emphasized the importance of collaboration between the industry, the government, and all stakeholders to support a rapid recovery in the SME apparel sector. The industry's priority is to double-down on trade facilitation to strengthen market access for these SMEs, allowing them to compete in new and emerging markets. The majority of Sri Lankan apparel SMEs primarily export to the United States, United Kingdom, EU, and India, reflecting the industry's regional partnerships. To address these challenges, the SLCGE has taken proactive measures, engaging in direct market access initiatives through buyer and consumer engagement. The Chamber is focused on strategic exploration of untapped markets in East Europe, the Middle East, and East Asia. Fernando urged Sri Lanka to improve ease of doing business and invest in technology and R&D to strengthen productivity and competitiveness."
    },
    {
      title: 'APPAREL SECTOR TO INTRODUCE INDUSTRY ADVISORS TO STRENGTHEN OCCUPATION SAFETY AND HEALTH MEASURES THROUGH THE BETTER WORK INITIATIVE',
      image: News6,
      description: "The Better Work Sri Lanka programme of the International Labour Organization (ILO) and the International Finance Corporation (IFC) has completed a series of Master Trainer workshops on Occupational Safety and Health (OSH) in the apparel sector. The workshops focused on facilitation skills, communication, and technical aspects of OSH, including management systems. The next phase of the Better Work Programme will equip master trainers with the necessary tools to become 'Industry Advisors' and establish bipartite committees within the apparel industry. The initiative is carried out in partnership with The Joint Apparel Association Forum (JAAF), the Employees Federation of Ceylon (EFC), Ministry of Labour, and representatives from Trade Unions. The seventy participants will implement a common guideline on OSH with the guidance of ILO and relevant stakeholders to improve current practices at their workplace. The Better Work Sri Lanka Programme, along with JAAF, aims to promote a culture of safety among its membership and promote EU's Due Diligence requirements among apparel factories."
    },
  ];

  return (
    <div className="home">
      <div className="project-title-section">
        <h1>ForecaStory: REVOLUTIONIZING APPAREL SUPPLY CHAINS</h1>
        <img src={logo} alt="Project Logo" />
        <p>Welcome to ForecaStory, where artificial intelligence meets the dynamic world of apparel supply chains. Join us on a journey to optimize demand forecasting, minimize inefficiencies, and foster a more responsive and agile future for the Sri Lankan apparel industry.</p>
      </div>
      <div className="introduction">
        <div className="topic">
          WHAT IS SUPPLY CHAIN MANAGEMENT IN APPAREL INDUSTRY?
        </div>
        <div className="paragraph">
          Supply chain management in the apparel industry involves the coordination and optimization of various processes, from raw material sourcing to production, distribution, and retail. It aims to enhance efficiency, reduce costs, and ensure timely delivery of products to meet consumer demands. Demand forecasting plays a crucial role by enabling businesses to anticipate market needs, align production accordingly, minimize excess inventory, and enhance overall responsiveness to fluctuations in consumer preferences, contributing to a more agile and profitable supply chain in the apparel sector.
        </div>
      </div>
      <div className="news-section">
        <h1>Latest News</h1>
        <div className="news-items">
          {newsData.map((newsItem, index) => (
            <div key={index} className="news-item">
              <img src={newsItem.image} alt={newsItem.title} />
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;