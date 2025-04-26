import React from "react";
import image from "../assets/images/bb4dd9ffc1f3e8d3bff496e1710f5617b82bacd8.png";

function Section_1() {
  return (
    <>
      <style>
        {`
            
            body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', 'Inter', 'Segoe UI', Arial, sans-serif;
            background: #fff;
            color: #222;
        }

        .hero_1 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 48px;
            padding: 64px 24px;
            background: #fff;
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero_1-image .circle {
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 32px 0 rgba(60, 60, 60, 0.05);
        }

        .hero_1-image img {
            width: 249px;
            height: 402px;
            /* object-fit: cover; */
            padding-bottom: 70px;
            border-radius: 16px;
            /* box-shadow: 0 4px 32px rgba(30, 30, 30, 0.10); */
        }

        .hero_1-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 300px;
        }

        .hero_1-content h1 {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1.18;
            margin: 0 0 32px 0;
            letter-spacing: -1px;
            color: #18181b;
            max-width: 420px;
        }

        .hero_1-content .highlight {
            /* background: #fde047; */
            color: #ca8a04;
            padding: 0 8px;
            border-radius: 4px;
            font-weight: 900;
            box-decoration-break: clone;
        }

        .consult-btn {
            width: 60%;
            background: #fde047;
            color: #18181b;
            font-size: 1.2rem;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            padding: 16px 5px;
            cursor: pointer;
            box-shadow: 0 3px 12px rgba(252, 211, 77, 0.2);
            transition: background 0.15s, transform 0.12s;
        }

        .consult-btn:hover {
            background: #facc15;
            transform: translateY(-2px) scale(1.03);
        }

        .hero_1-content .h1 {
            font-family: 'Montserrat', Arial, sans-serif;
            font-weight: bold;
            font-size: 48px;
            /* Adjust if you need it even bigger */
            line-height: 1.05;
            /* Tight like your screenshot */
            letter-spacing: 0.4px;
            /* Slight negative tracking for extra bold look */
            color: #111;
            margin: 0;
            text-shadow: 0px 2px 4px rgba(30, 30, 30, 0.09);
            /* subtle bold depth, as in your screenshot */
        }

        .hero_1-content .highlight {
            color: #F8E390;
            /* Soft yellow, sampled from your screenshot */
            font-weight: 900;
            background: none;
            padding: 0;
            letter-spacing: -1px;
            /* visually more compact */
        }

        @media (max-width: 900px) {
            .hero_1 {
                flex-direction: column;
                gap: 32px;
                padding: 40px 12px;
            }

            .hero_1-image .circle {
                width: 240px;
                height: 240px;
            }

            .hero_1-image img {
                width: 140px;
                height: 180px;
            }

            .hero_1-content h1 {
                font-size: 2.1rem;
                max-width: 100%;
            }
        }

        @media (max-width: 600px) {
            .hero_1 {
                padding: 28px 2vw;
                gap: 16px;
            }

            .hero_1-image .circle {
                width: 140px;
                height: 140px;
            }

            .hero_1-image img {
                width: 90px;
                height: 120px;
            }

            .hero_1-content h1 {
                font-size: 1.19rem;
            }

            .consult-btn {
                padding: 10px 24px;
                font-size: 1rem;
            }
        }

        @media (max-width: 600px) {
            h1 {
                font-size: 32px;
                letter-spacing: -0.5px;
            }
        }

            `}
      </style>
      <section className="hero_1">
        <div className="hero_1-image">
          <div className="circle">
            <img src={image} alt="Businessperson" />
          </div>
        </div>
        <div className="hero_1-content">
          <h1>
            Get The Best <br />
            <span className="highlight">Lawyer</span> <br />
            Of All Types <br />
            Of Cases
          </h1>
          <button className="consult-btn">Consult now</button>
        </div>
      </section>
    </>
  );
}

export default Section_1;
