import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './participants.module.scss';

type ParticipantsProps = {
  members: Array<string>
};

const Participants: FC<ParticipantsProps> = ({ members }) => {
  const { t } = useTranslation();

  return (
    <div className={style.participants}>
      <h2 className={style.title}>{t('participants')}</h2>
      {members.map((member, index) => {
        return <p key={index} className={style.member}>
          {member}
        </p>;
      })}
    </div>
  );
};

export default Participants;
