import React from "react";
import "./Demo.css";
import { Helmet } from "react-helmet";
import coding from "../assets/images/coding.gif";
import maths from "../assets/images/maths.gif";

const Demo = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GenieGradz | Beta</title>
        <link rel="canonical" href="https://geniegradz.com/beta" />
      </Helmet>
      <div className="demo ">
        <div class="demo-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="demo-contents lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center">
            <div class="flex flex-wrap w-full mb-3 flex-col items-center text-center">
              <h1 class="text-3xl font-normal title-font ">
                Beta Testing Phase 2
              </h1>
              <div class="h-1 w-20 bg-cyan rounded m-4"></div>
            </div>
            <p class=" leading-relaxed w-4/5 pt-2">
              We are back with our exclusive beta testing 2 along with some
              exciting offers Moreover, we have added one more option with -{" "}
            </p>
            <div className="fields">
              <ul className="field-list">
                <li>
                  <div class="field">
                    <div className="field-img">
                      <img src={coding} alt="" />
                    </div>
                    <h3>Coding</h3>
                  </div>
                </li>
                <li>
                  <div class="field">
                    <div className="field-img">
                      <img src={maths} alt="" />
                    </div>
                    <h3> Mathematics Tips & Tricks</h3>
                  </div>
                </li>
              </ul>
              <div className="py-12">
                <h1 className="text-2xl font-bold cyan">Course Contents</h1>
                <ul className="course-feat">
                  <li>1:1 Live classes</li>
                  <li>Recorded Sessions</li>
                  <li>Conceptual Test</li>
                  <li>Doubt & difficulty</li>
                  <li>Mentorship</li>
                  <li>4+ types of notes</li>
                  <li>Meme based Learning</li>
                  <li>Boundless Library</li>
                  <li>Projects & certifications</li>
                  <li>Alumni Network</li>
                  <li>India's First Gamified Virtual Campus</li>
                  <li>Seminars / Webinars / Fests / Events</li>
                  <li>& many more...</li>
                </ul>
              </div>
              <div className="w-full py-10">
                <h1 className="text-2xl pb-3 cyan font-bold">What’s more?</h1>
                <p>
                  All the proceedings[Subscription Fees] will be donated for a
                  social cause which will either be for flood relief or
                  Orphanage or both
                </p>
              </div>
              <hr />
              <h1 className="text-2xl font-bold cyan py-12 pb-0">
                Subscription Fees
              </h1>
              <div className="py-5">
                <ul className="price-list-1">
                  <li className="subs pb-4">
                    <div>
                      Java: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1">₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/java249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                      For Python: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1">₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/python249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                      For Mathematics: <br /> <b>Zero to Hero</b>
                    </div>
                    <div className="subs-price-1">₹249/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/mathematics249"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                  <li className="subs pb-4">
                    <div>
                    A la Carte: <br /> <b>Choose any two</b>
                    </div>
                    <div className="subs-price-1">₹399/-</div>
                    <div className="subs-price text-red-400">
                      <a
                        href="https://rzp.io/l/alacarte399"
                        target="_blank"
                        class="btn-link"
                      >
                        Register Now
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
