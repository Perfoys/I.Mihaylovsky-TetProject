import { useState, useEffect, useRef, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dragTypes';
import Timer from '../common/Timer';
import style from './taskCard.module.scss';
import TaskDetail from '../modal/TaskDetail';
import { ITask } from '../../types/sprint';
import { IItem } from '../../types/drag';

type TaskCardProps = {
  task: ITask,
  moveCard: (dragIndex: number, hoverIndex: number, status: string) => void
};

const TaskCard: FC<TaskCardProps> = ({ task, moveCard }) => {
  const ref = useRef(null);
  const [styleCard, setStyleCard] = useState(style.card);
  const [showModal, setShowModal] = useState(false);
  const { id, status, title, priority, description, image, deadline, member, comments } = task;
  const taskInformation = { id, title, status, description, member, comments, image };

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    hover: (item: IItem) => {
      if (item.id !== id) {
        moveCard(item.id, id, item.status);
      }
    }
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: id, status: status },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }));

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    setStyleCard(prevStyle => (
      isDragging ? prevStyle.concat(` ${style.drag}`) : style.card
    ));
  }, [isDragging]);

  drag(drop(ref));

  return (
    <>
      <div className={styleCard} ref={ref} onClick={openModal}>
        <div className={style.info}>
          <h2 className={style.title}>{id}-{title}</h2>
          <div className={style.priority}>{priority}</div>
          <p className={style.description}>{description}</p>
          <Timer text={'Time left (days)'} endDate={deadline} />
        </div>
        <div className={style.img}>
          <img className={style.avatar} src={image} alt='avatar' />
        </div>
      </div>
      <TaskDetail task={taskInformation} isModalOpen={showModal} closeModal={closeModal} />
    </>
  );
};

export default TaskCard;
