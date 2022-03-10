import Modal from 'react-modal';
import PropTypes from 'prop-types';
import style from './taskDetail.module.scss';
import MainSection from './MainSection';
import AdditionSection from './AdditionSection';

Modal.setAppElement('#root');

const TaskDetail = ({ task, isModalOpen, closeModal }) => {
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

TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default TaskDetail;
