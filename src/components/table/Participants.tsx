import { FC } from 'react';
import style from './participants.module.scss';

type ParticipantsProps = {
  members: Array<string>
};

const Participants: FC<ParticipantsProps> = ({ members }: ParticipantsProps) => {
  return (
    <div className={style.participants}>
      <h2 className={style.title}>Participants:</h2>
      {members.map((member, index) => {
        return <p key={index} className={style.member}>
          {member}
        </p>;
      })}
    </div>
  );
};

export default Participants;
