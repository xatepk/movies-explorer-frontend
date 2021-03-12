import './AboutProject.css';

function AboutProject() {
  return(
    <section className="project">
      <p className="project__heading">О проекте</p>
      <div className="project__tasks">
        <div className="project__task">
          <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
          <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__task">
          <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__graphs">
        <h3 className="project__graph-title project__graph-title_green">1 неделя</h3>
        <h3 className="project__graph-title project__graph-title_gray">4 недели</h3>
        <p className="project__graph-desc">Back-end</p>
        <p className="project__graph-desc">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
