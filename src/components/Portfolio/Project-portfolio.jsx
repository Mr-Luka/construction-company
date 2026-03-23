export default function ProjectPortfolio({ project, img, openModal }) {
  return (
    <div className="our-work" onClick={openModal}>
      <div className="project">
        <img src={img} alt={`${project} project`} />
        <div className="project-overlay" />
        <h2>{project}</h2>
      </div>
    </div>
  );
}