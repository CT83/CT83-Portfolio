import React, { Component, useState, useEffect } from "react";
import "./Testimonials.css";
import "./Testimonials.css";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import Button from "../../components/button/Button";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: [{
        name: "Sajjad Rostami",
        subtitle: "AI PhD Student, Human & Robot Interaction Developer",
        url: "https://www.linkedin.com/in/sajjad-rostami-438515a6/",
        text: `Rohan has an extremely strong grasp over the intricacies, complexities, and challenges of working with Deep Learning, Machine Learning, and Software in general. 
        I reached out to Rohan when I needed help with an OpenCV Python issue I was having trouble with. He was surprisingly excited to help me with it, Rohan was able to fix something in less than an hour. He even went on to answer my corresponding StackOverflow. So that others could benefit from it as well. 
        Rohan is technically strong, a real people person and someone whom I can see myself collaborating with for several projects to come in the near future. `
      },
      {
        name: "Arelene Andrews",
        subtitle: "Context Tester, Writer",
        url: "https://www.linkedin.com/in/arlene-andrews-a02a7a107/",
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
      {
        name: "Chaitanya Lakshmi Indukuri",
        subtitle: "AWS Certified Solutions Architect - Associate | MTech - Cloud Computing",
        url: "https://www.linkedin.com/in/chaitanya-lakshmi-indukuri-385688a4/",
        text: `Not many people can be so efficient and helpful as Rohan was. He is knowledgeable and a pleasure to work with. When I was going through the hardships of my current project, he was somebody that I trusted and looked toward for guidance and advice.His overall presence had a positive impact on my work along with my individual knowledge. He helped me in understanding Azure infrastructure and many more. I'm sure he'll be an asset to any organization he joins.`
      },
      ]
    }
  }
  render() {
    return (
      <div className="main" id="recommendations">
        <h1 className="testimonial-title">Recommendations</h1>
        <div className="repo-cards-div-main">
          {this.state.repo.map((v, i) => {
            return <TestimonialCard testimonial={v} key={v.id} />;
          })}
        </div>
      </div>
    );
  }


}

export default Testimonials;

