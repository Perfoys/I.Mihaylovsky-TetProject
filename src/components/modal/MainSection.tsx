import { FC } from 'react';
import { ITaskInfo } from '../../types/sprint';
import Comments from './Comments';
import style from './mainSection.module.scss';

type MainSectionProps = {
  task: ITaskInfo
};

const MainSection: FC<MainSectionProps> = ({ task }) => {
  return (
    <div className={style.mainSection}>
      <div className={style.title}>{task.title}</div>
      <h2 className={style.header2}>Description</h2>
      <div className={style.description}>{task.description}</div>
      <Comments task={task} />
    </div>
  );
};

export default MainSection;
