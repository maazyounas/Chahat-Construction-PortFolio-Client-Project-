import React from "react";
import "./Portfolio.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  return (
    <div className="portFolioPage">
      <Nav />
      <div className="portFolioTophead">
        <h1>Welcome to the Appealing Portfolio of Chahat Construction</h1>
        <p>
          Chahat Construction's portfolio showcases its reputation as a renowned
          firm known for timely and satisfactory completion of construction
          projects across Pakistan.
        </p>
      </div>

      <div className="portFolioContent">
        <h2>What Have We Done So Far?</h2>
        <p>
          From our first project to the present, Chahat Construction has
          completed numerous residential, commercial, and industrial projects
          nationwide.
        </p>
        <ul>
          <li>
            Transformed living spaces in housing societies across Islamabad,
            Lahore, Karachi, and other metropolitan areas.
          </li>
          <li>
            Renovated kitchens, bathrooms, bedrooms, and living rooms to enhance
            functionality and aesthetics.
          </li>
          <li>
            Delivered customized structures with modern, mid-century, and
            classical designs.
          </li>
          <li>
            Expertly handled remodeling, renovation, and finishing of outdated
            homes into contemporary masterpieces.
          </li>
        </ul>

        <h2>Completed Construction Projects</h2>
        <ul>
          <li>
            Rehabilitation of sewerage system at TW OFF Mess PAF Base Nur Khan.
          </li>
          <li>
            Construction of attach Bath Room with Comm. Cell and provision of
            Gypsum Ceiling OPS Room and HQ CI Federal & Sewerage Line/ Disposal
            of Block No.36,86 & 88 at TW Mess Chaklala Garrison at PAD Base Nur
            Khan.
          </li>
          <li>
            Const of Bdry Wall Around Masjid at Transit Camp Rwp. Const of 6 x
            Watch
          </li>
          <li>
            Const of 6 x Watch Towers a/w Perimeter Wall of Camp and Masjid Area
            Transit Camp Rwp.
          </li>
          <li>
            Provision of alternate Entry / Exit Gate Near Tower No.07 at No.246
            SQN at PAF Base Nur Khan
          </li>
          <li>Rehabilitation of Fiber Glass Sheds at Delta Site at Deosai.</li>
          <li>
            Provision of Furniture for Multi story Residential Blocks or
            Officers for security Personal (Phase-I) and Provision of Furniture
            for Multy Storey (D’Type) Residential Block for Officers (Site-II)
            at PAF Base Nur Khan.
          </li>
          <li>
            Covering Drain with RCC Slab From Entrance Gate To MT Post and
            improvement of sewerage system of SM BK No.1 & 2, 13 EB at westridge
            Rwp
          </li>
          <li>
            Repair / Improvement of PCC Road & Hard Standing at HQ Log 10 Crops
            at Chaklala
          </li>
          <li>Re-carpeting of Road at Army ofcers Mess Rwp</li>
          <li>
            Improvement of Internal Bituminous Road near main Gate Area at 501
            Central Wksp EME Rwp.
          </li>
          <li>
            Repair / Improvement of Mettled Road From ORG to MT Washing Point &
            Comdt House 505 Wksp EME Rwp.
          </li>
        </ul>

        <h2>Our Proud Achievements</h2>
        <p>
          We take pride in the referrals from our satisfied clients, whose
          recommendations have helped us build lasting relationships with new
          customers. Our result-oriented approach and seamless project
          management make Chahat Construction a trusted name in the industry.
        </p>

        <p>
          Overseas clients rely on us for professional architecture, interior
          design, and real estate services. Our luxurious interiors captivate
          residents from the very first glance.
        </p>

        <h2>Chahat Construction’s Aspiration</h2>
        <p>
          Our mission is to turn your dream spaces into reality. We aim to be
          the top architectural firm in Pakistan, blending art with technology
          to deliver vibrant, aesthetic, and functional designs for every
          client.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
