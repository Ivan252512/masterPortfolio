import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const { theme, sections } = this.props;

    return (
      <div className="experience-accord">
        {sections.map((section) => (
          <div key={section.title} className="experience-section">
            <div
              className="experience-content"
              style={{ backgroundColor: `${theme.body}` }}
            >
              {section.experiences.map((experience) => (
                <ExperienceCard
                  key={experience.title}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
