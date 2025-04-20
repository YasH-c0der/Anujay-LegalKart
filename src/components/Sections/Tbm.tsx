import React from "react";
import ola from "../../assets/logos/ola.png";
import zoomcar from "../../assets/logos/zoomcar.png";
import rivigo from "../../assets/logos/rivigo.png";
import shadowfax from "../../assets/logos/shadowfax.png";
import basic from "../../assets/logos/basic.png";
import moduleInnovations from "../../assets/logos/moduleinnovation.png";
import vekariaHealthcare from "../../assets/logos/vekaria.png";
import jodo from "../../assets/logos/jodo.png";
import springRole from "../../assets/logos/springrole.png";

function Tbm() {
  return (
    <div>
      <style>
        {`
        body {
      margin: 0;
      padding: 0;
      background: #fff;
      font-family: Arial, Helvetica, sans-serif;
    }
    .trusted-logos-section {
      margin: 60px auto 0 auto;
      max-width: 1400px;
      text-align: center;
      padding: 0 30px 30px 30px;
    }
    .trusted-logos-heading {
      color: #292b51;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-bottom: 38px;
      margin-top: 0;
    }
    /* ------ DESKTOP LOGO ROW ------ */
    .trusted-logos-row {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 50px;
      flex-wrap: wrap;
      margin-bottom: 34px;
      overflow: visible;
      width: 100%;
    }
    .trusted-logo {
      max-height: 35px;
      max-width: 130px;
      filter: grayscale(100%) brightness(0.98) opacity(0.5);
      opacity: 0.53;
      background: #fff;
      border-radius: 6px;
      transition: filter 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s cubic-bezier(.4,0,.2,1), 
        transform 0.24s cubic-bezier(.4,0,.2,1), box-shadow 0.24s cubic-bezier(.4,0,.2,1);
      cursor: pointer;
      will-change: filter, opacity, transform, box-shadow;
    }
    .trusted-logo:hover,
    .trusted-logo:focus {
      filter: grayscale(0%) brightness(1) opacity(1);
      opacity: 1;
      transform: scale(1.09);
      box-shadow: 0 6px 20px 0 rgba(50, 90, 140, 0.07);
      z-index: 2;
    }
    .trusted-divider {
      border: none;
      border-top: 1px solid #c6c7d8;
      width: 99%;
      margin: 0 auto;
    }

    /* ------ MOBILE MARQUEE ------ */
    .trusted-logos-marquee-container {
      display: none; /* Don't show on desktop! */
      width: 100%;
      overflow: hidden;
      margin-bottom: 24px;
      position: relative;
    }
    .trusted-logos-marquee {
      display: flex;
      width: max-content;
      /* Duplicate content creates seamless loop */
      animation: scroll-logos 16s linear infinite;
      gap: 18px;
    }
    @keyframes scroll-logos {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* -------- MEDIA QUERIES -------- */
    @media (max-width: 600px) {
      .trusted-logos-section {
        padding: 0 6px 16px 6px;
      }
      .trusted-logos-heading {
        font-size: 14px;
        margin-bottom: 28px;
      }
      /* HIDE DESKTOP FLEX ROW ON MOBILE */
      .trusted-logos-row {
        display: none !important;
      }
      /* SHOW MARQUEE ON MOBILE */
      .trusted-logos-marquee-container {
        display: block;
      }
      .trusted-logo {
        max-width: 54px;
        max-height: 22px;
        margin: 0 3px;
      }
    }
                `}
      </style>
      <section className="trusted-logos-section">
    <div className="trusted-logos-heading">TRUSTED BY OVER MILLION USERS</div>

    {/* <!-- DESKTOP: Logos in single row (not repeated) --> */}
    <div className="trusted-logos-row">
      <img className="trusted-logo" src={ola} alt="OLA" />
      <img className="trusted-logo" src={zoomcar} alt="Zoomcar" />
      <img className="trusted-logo" src={rivigo} alt="RIVIGO" />
      <img className="trusted-logo" src={shadowfax} alt="Shadowfax" />
      <img className="trusted-logo" src={basic} alt="BASIC" />
      <img className="trusted-logo" src={moduleInnovations} alt="Module Innovations" />
      <img className="trusted-logo" src={vekariaHealthcare} alt="Vekaria Healthcare" />
      <img className="trusted-logo" src={jodo} alt="JODO" />
      <img className="trusted-logo" src={springRole} alt="SpringRole" />
    </div>

    {/* <!-- MOBILE: Marquee with seamless looping (logos duplicated) --> */}
    <div className="trusted-logos-marquee-container">
      <div className="trusted-logos-marquee">
        {/* <!-- One full set --> */}
        <img className="trusted-logo" src={ola} alt="OLA" />
        <img className="trusted-logo" src={zoomcar} alt="Zoomcar" />
        <img className="trusted-logo" src={rivigo} alt="RIVIGO" />
        <img className="trusted-logo" src={shadowfax} alt="Shadowfax" />
        <img className="trusted-logo" src={basic} alt="BASIC" />
        <img className="trusted-logo" src={moduleInnovations} alt="Module Innovations" />
        <img className="trusted-logo" src={vekariaHealthcare} alt="Vekaria Healthcare" />
        <img className="trusted-logo" src={jodo} alt="JODO" />
        <img className="trusted-logo" src={springRole} alt="SpringRole" />
        {/* <!-- Repeat set for seamless loop --> */}
        <img className="trusted-logo" src={ola} alt="OLA repeat" />
        <img className="trusted-logo" src={zoomcar} alt="Zoomcar repeat" />
        <img className="trusted-logo" src={rivigo} alt="RIVIGO repeat" />
        <img className="trusted-logo" src={shadowfax} alt="Shadowfax repeat" />
        <img className="trusted-logo" src={basic} alt="BASIC repeat" />
        <img className="trusted-logo" src={moduleInnovations} alt="Module Innovations repeat" />
        <img className="trusted-logo" src={vekariaHealthcare} alt="Vekaria Healthcare repeat" />
        <img className="trusted-logo" src={jodo} alt="JODO repeat" />
        <img className="trusted-logo" src={springRole} alt="SpringRole repeat" />
      </div>
    </div>
    <hr className="trusted-divider"/>
  </section>
    </div>
  );
}

export default Tbm;
