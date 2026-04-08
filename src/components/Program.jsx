import "./Program.css";

export default function Programs() {
  const programData = {
    schoolDivision: "College of Liberal Arts & Sciences",
    campusLocations: "Main Campus - Alfred, NY",
    major: "Computer Science (BA)",
    doubleMajor: "Double Major option(s) offered",
    minor: "Computer Science",
    contact: {
      name: "Amanda Lipnicki",
      email: "lipnicki@alfred.edu",
      phone: "(607) 871-2818",
    },
    imageUrl:
      "https://www.alfred.edu/_images/program-detail/snapshot-default.jpg",
  };

  return (
    <section className="programsPage">
      <div className="programsHero">
        <div className="programsHeroOverlay"></div>
        <img
          className="programsHeroImage"
          src={programData.imageUrl}
          alt="Computer Science Program"
        />

        <div className="programsHeroContent">
          <p className="programsEyebrow">Program Overview</p>
          <h1 className="programsTitle">Computer Science Program</h1>
          <p className="programsSubtitle">
            Explore the Computer Science program at Alfred University and learn
            about the major, minor, double major options, and program contact
            information.
          </p>
        </div>
      </div>

      <div className="programsContent">
        <div className="snapshotCard">
          <div className="snapshotHeader">
            <p className="snapshotEyebrow">Alfred CS Snapshot</p>
            <h2>Program Snapshot</h2>
          </div>

          <div className="snapshotGrid">
            <div className="snapshotColumn">
              <div className="snapshotItem">
                <span className="snapshotLabel">School/Division</span>
                <span className="snapshotValue">{programData.schoolDivision}</span>
              </div>

              <div className="snapshotItem">
                <span className="snapshotLabel">Campus Locations</span>
                <span className="snapshotValue">{programData.campusLocations}</span>
              </div>
            </div>

            <div className="snapshotColumn">
              <div className="snapshotItem">
                <span className="snapshotLabel">Major</span>
                <span className="snapshotValue">{programData.major}</span>
              </div>

              <div className="snapshotItem">
                <span className="snapshotLabel">Double Major</span>
                <span className="snapshotValue">{programData.doubleMajor}</span>
              </div>

              <div className="snapshotItem">
                <span className="snapshotLabel">Minor</span>
                <span className="snapshotValue">{programData.minor}</span>
              </div>
            </div>

            <div className="snapshotColumn">
              <div className="snapshotItem">
                <span className="snapshotLabel">Program Contact</span>
                <span className="snapshotValue">{programData.contact.name}</span>
              </div>

              <div className="contactLinks">
                <a href={`mailto:${programData.contact.email}`}>
                  {programData.contact.email}
                </a>
                <a href={`tel:${programData.contact.phone}`}>
                  {programData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="programInfoGrid">
          <div className="programInfoCard">
            <h3>What You’ll Study</h3>
            <p>
              The Computer Science program builds strong foundations in
              programming, algorithms, systems, software design, and
              computational thinking.
            </p>
          </div>

          <div className="programInfoCard">
            <h3>Academic Options</h3>
            <p>
              Students can complete the Computer Science major, add it as a
              double major, or pursue it as a minor depending on their academic
              goals.
            </p>
          </div>

          <div className="programInfoCard">
            <h3>Career Preparation</h3>
            <p>
              The program helps students develop technical and problem-solving
              skills for careers in software development, data, cybersecurity,
              and related fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}