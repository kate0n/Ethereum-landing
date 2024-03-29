import React from "react"

import SectionTitle from "../sectionTitle/sectionTitle"
import TextBlock from "../TextBlock/TextBlock"
import FeatureBlock from "./featureBlock"
import "animate.css/animate.min.css"
import data from "../../data.js"

const CommunitySection = () => (
  <section className="wrapper" id="community">
    <SectionTitle
      title="Why <span>Ethereum</span> Classic?"
      subtitle="ETC has some of the largest network activity of any blockchain, consistently higher than Bitcoin Cash, and neck-and-neck with Litecoin. We have multiple developer teams, all of whom are committed to the long term ETC vision. We are in the top-10 in programmer activity (measured by code commits). We have numerous sources of funding, and we continue to grow, day-by-day, commit-by-commit, line-by-line of code to create a bullet-proof network that anyone can use."
      subtitleClass="subtitle_text--wide"
    />

    <div className="flex-row--center">
      {data.community.features.map(feature => (
        <FeatureBlock {...feature} />
      ))}
    </div>

    <div className="flex-row--between">
      {data.community.features.map(feature => (
        <TextBlock {...feature} />
      ))}
    </div>
  </section>
)

export default CommunitySection
