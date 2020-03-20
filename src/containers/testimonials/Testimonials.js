import React, { Component, useState, useEffect } from "react";
import "./Testimonials.css";
import "./Testimonials.css";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import Button from "../../components/button/Button";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Jordan Belfort',
      repo: [{
        name: "Sajjad Rostami",
        subtitle: "AI PhD Student, Human & Robot Interaction Developer",
        text: `Rohan has an extremely strong grasp over the intricacies, complexities, and challenges of working with Deep Learning, Machine Learning, and Software in general. 
        I reached out to Rohan when I needed help with an OpenCV Python issue I was having trouble with. He was surprisingly excited to help me with it, Rohan was able to fix something less than an hour. He even went on to answer my corresponding StackOverflow. So that others could benefit from it as well. 
        Rohan is technically strong, a real people person and someone whom I can see myself collaborating with for several projects to come in the near future. `
      },
      {
        name: "Arelene Andrews",
        subtitle: "Context Tester, Writer",
        text: `To Whom It May Concern:
        
I have had the delight and pleasure to be acquainted with Rohan Sawant over the past few years, and watch his development skills, personality, and abilities grow and become more mature. He has gone from an instinctively curious person into one who can use that skill to explore new ideas, question their practicality, and create experiments and projects to show their value to the world.
He has made valuable contributions to the online community that we are both members of – not only with answering questions, but providing knowledge and a sense of focus to those areas where he is working. The work he is doing is outside the realm of my experience, and he takes the time to choose explanations that are understandable to both experienced and new people.
The projects that I have seen him work on have been communicated in a fashion that provokes interest and further questions, which are answered with discretion to avoid potential sharing of confidential information, but also complete enough that they actually answer the question asked. There is also the willingness to ask for information from other areas, and incorporate important concepts into his projects.
An awareness of security – both for code and for any shared images – makes working with Rohan a pleasure. Information of many sorts are treated as valuable data: and care is taken when collecting, handling, and storing it.

I look forward to the continuing progress for Rohan's work – this is one to watch.

Yours,
Arlene Andrews
        `
      },
      ]
    }
  }
  render() {
    return (
      <div className="main" id="opensource">
        <h1 className="testimonial-title">Recommendations</h1>
        <div className="repo-cards-div-main">
          {this.state.repo.map((v, i) => {
            return <TestimonialCard testimonial={v} key={v.id} />;
          })}
        </div>
        <Button text={"More Projects"} className="project-button" href="https://github.com/saadpasta" newTab={true} />
      </div>
    );
  }


}

export default Testimonials;

