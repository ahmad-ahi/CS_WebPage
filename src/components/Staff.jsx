import "./Staff.css";

export default function Staff() {
  const faculty = [
    {
      name: "Amanda Lipnicki",
      title: "Professor of Mathematics",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/lipnicki-amanda.jpg?lastupd=05-21-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/index.cfm",
    },
    {
      name: "Garegin Grigoryan",
      title: "Assistant Professor of Mathematics & Computer Science",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/grigoryan-garegin.jpg?lastupd=05-21-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/profiles/grigoryan-garegin.cfm",
    },
    {
      name: "Alan Beadle",
      title: "Assistant Professor of Computer Science",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/beadle-alan.jpg?lastupd=05-21-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/profiles/beadle-alan.cfm",
    },
    {
      name: "Harpreet Bedi",
      title: "Associate Professor of Mathematics & Computer Science",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/bedi-harpreet.jpg?lastupd=05-21-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/profiles/bedi-harpreet-s.cfm",
    },
    {
      name: "Chandan Kumar",
      title: "Assistant Professor of Computer Science",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/kumar-chandan.jpg?lastupd=09-03-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/profiles/kumar-chandan.cfm",
    },
    {
      name: "Elizabeth Matson",
      title: "Associate Professor of Mathematics",
      imageUrl: "https://www.alfred.edu/_images/faculty-profiles/matson-elizabeth.jpg?lastupd=05-21-25",
      profileUrl: "https://www.alfred.edu/academics/faculty-staff/profiles/matson-elizabeth.cfm",
    },
  ];

  return (
    <section className="staffPage">
      <div className="staffHeader">
        <p className="staffEyebrow">Department Directory</p>
        <h2 className="staffTitle">Faculty & Staff</h2>
        <p className="staffSubtitle">
          Meet the faculty and staff of Alfred University Computer Science.
        </p>
      </div>

      <div className="staffGrid">
        {faculty.map((person) => (
          <a
            key={person.name}
            className="staffCard"
            href={person.profileUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="staffImageWrap">
              <img
                className="staffImage"
                src={person.imageUrl}
                alt={person.name}
              />
            </div>

            <div className="staffCardBody">
              <h3 className="staffName">{person.name}</h3>
              <p className="staffRole">{person.title}</p>
              <span className="staffLink">View Profile</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}