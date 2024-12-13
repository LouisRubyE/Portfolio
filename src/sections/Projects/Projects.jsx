import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/DataScience.png';
import freshBurger from '../../assets/wads.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/LouisRubyE/Ds_Bstats_FP"
          h3="NFL Touchdown Prediction Model"
          p="Uses the latest NFL data to predict future stats"
          
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.moringazulficuan.me/"
          h3="Full Working Web Application"
          p="Help track moringa leaves supplies and shipments"
        />
      </div>
    </section>
  );
}

export default Projects;
