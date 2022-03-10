import { FC } from 'react';
import Modal from 'react-modal';
import style from './taskDetail.module.scss';
import MainSection from './MainSection';
import AdditionSection from './AdditionSection';
import { ITaskInfo } from '../../types/sprint';

Modal.setAppElement('#root');

type TaskDetailProps = {
  task: ITaskInfo,
  isModalOpen: boolean,
  closeModal: () => void
};

const TaskDetail: FC<TaskDetailProps> = ({ task, isModalOpen, closeModal }: TaskDetailProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={style.detail}
      overlayClassName={style.overlay}
    >
      <MainSection task={task} />
      <AdditionSection task={task} />
    </Modal>
  );
};

export default TaskDetail;
