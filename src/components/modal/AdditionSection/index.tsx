import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import StatusSelector from '../StatusSelector';
import style from './additionSection.module.scss';
import { ITaskInfo } from '../../../types/sprint';

type AdditionSectionProps = {
  task: ITaskInfo
};

const AdditionSection: FC<AdditionSectionProps> = ({ task }) => {
  const { t } = useTranslation();

  return (
    <div className={style.additionSection}>
      <StatusSelector task={task} />
      <h2 className={style.title}>{t('modal.assigne')}</h2>
      <div className={style.member}>
        <img className={style.image} src={task.image} alt='avatar' />
        <p>{task.member}</p>
      </div>
    </div>
  );
};

export default AdditionSection;
