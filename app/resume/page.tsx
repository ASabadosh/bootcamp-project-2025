import styles from "./resume.module.css";

export default function HomePage() {
  return (
<main>
        <h1 className={styles.resume}>
          Resume
        </h1>
        <a href="/Resume (13).pdf" download >Download Resume</a>
        <div className={styles.resume}>
      <section className="education">
        <h2 className="education title">
          Education
        </h2>
        <div className="cal poly">
          <h3 className="cal poly title">
            Bachelor of Science in Computer Science
          </h3>
          <p className="cal poly info">
          - California Polytechnic State Univeristy, San Luis Obispo | Expected Graduation May 2029
          </p>
        </div>
        <div className="bishop o'dowd">
          <h3 className="bishop o'dowd title">
            Bishop O'dowd High School
          </h3>
          <p className="bishop o'dowd info">
          - Oakland California, 4.35 GPA | Graduated June 2025
          </p>
        </div>
      </section>
      <section className="experience">
        <h2 className="experience title">
            Experience
        </h2>
        <div className="digital Eclipse">
          <h3 className="digital eclipse title">
            Digital Eclipse
          </h3>
          <p className="digtial eclipse info">
            Intern, July 2023 - July 2024
          </p>
          <ul className="digital eclipse description">
            <li>
              Evaluated under-construction projects and wrote feedback for developers at Digital Eclipse gaming studio
            </li>
            </ul>
        </div>
        <div className="mission bit">
          <h3 className="mission bit title">
            Mission Bit
          </h3>
          <p className="mission bit info">
            Classroom Volunteer, June 2024 - August 2024
          </p>
          <ul className="mission bit description">
            <li>
              Aided in teaching underserved teenagers the basics of Python programming
            </li>
            </ul>
        </div>
      </section>
      <section className="project">
        <h2 className="projects title">
            Projects
        </h2>
        <div className="personal website">
          <h3 className="personal website title">
           Personal Website
          </h3>
          <ul className="personal website info">
          <li>
            Designed and built persoanl website using HTML and CSS
          </li>
          </ul>
        </div>
      </section>
      <section className="skills">
        <h2 className="skills title">
            Skills
        </h2>
        <ul>
          <li> Java, Python, HTML, CSS</li>
          <li>Lifeguarding (Including Deep Water) with CPR/AED for Professional Rescuers and First Aid Certification</li>
          <li>Surfing: 2 years of water experience</li>
          <li>Ability to play the cello and read sheet music</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="coursework">
            Coursework
        </h2>
        <ul>
          <li>Data Structures</li>
          <li>APCSA</li>
        </ul>
      </section>
      <section className="awards">
        <h2 className="awards title">
            Awards
        </h2>
        <ul>
          <li>201 Club (awarded for 201 hours of community service),  September 2024 </li>
          <li>National Merit Commended Student</li>
          <li>ECCL New Hire Swim Instructor of the Year</li>
        </ul>
      </section>
      </div>
      </main>
    );
}