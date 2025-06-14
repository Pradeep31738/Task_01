// components/JobSection.js
export default function JobSection() {
  const roles = [
    { title: 'Scrum Master', icon: 'bi-alarm' },
    { title: 'Software Developer', icon: 'bi-clipboard' },
    { title: 'UI/UX Designer', icon: 'bi-vector-pen' },
    { title: 'Project Manager', icon: 'bi-credit-card' },
    { title: 'Nursing Assistant', icon: 'bi-capsule' },
    { title: 'Dog Trainer', icon: 'bi-diagram-3' },
    { title: 'Medical Assistant', icon: 'bi-beaker' },
    { title: 'Marketing Coordinator', icon: 'bi-gift' },
  ];

  return (
    <section className="py-5 text-center">
      <h2 className="fw-bold mb-5" style={{ color: '#2d347b' }}> Donec a eros justotial Donec a eros justo </h2>
      <div className="container">
        <div className="row">
          {roles.map((role, index) => (
            <div key={index} className="col-6 col-md-3 mb-5">
              <div className="icon-circle mb-3 mx-auto">
                <i className={`bi ${role.icon} fs-3 text-white`}></i>
              </div>
              <h6 className="fw-semibold text-secondary">{role.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
