import jobs from "../data/jobs.json";

function TimelineItem({ job, index }) {
  return (
    <div
      className="timeline-item reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-item__dot">
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="timeline-item__content">
        <div className="timeline-item__header">
          <h3 className="timeline-item__title">{job.title}</h3>
          <span className="timeline-item__company">{job.company}</span>
        </div>
        <p className="timeline-item__dates">{job.dates}</p>
        <p className="timeline-item__desc">{job.tasks}</p>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="timeline">
          {jobs.map((job, index) => (
            <TimelineItem key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
