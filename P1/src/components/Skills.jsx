function Skills({ skillList }) {
  return (
    <section className="portfolio-section section-anchor" id="skills" aria-labelledby="skills-heading">
      <h3 id="skills-heading">Skills</h3>
      <ul className="skills-list">
        {skillList.map((s) => (
          <li key={s} className="skill-item">
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
