import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <div className="testimonial-card-div" key={testimonial.id} onClick={() => openRepoinNewTab(testimonial.url)}>
        <div className="testimonial-name-div">
          <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 12 16" width="12" className="testimonial-svg">
            <path
              fill-rule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
        <p className="testimonial-description">{testimonial.subtitle}</p>
        <div className="testimonial-stats">
          <div className="testimonial-left-stat">
            <span>
              <p>{testimonial.text.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
