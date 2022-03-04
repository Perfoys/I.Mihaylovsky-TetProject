import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import style from './taskDetail.module.scss';
import Comments from './Comments';

Modal.setAppElement('#root');

const TaskDetail = ({ task, isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: task, title: event.target.value }));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={style.detail}
      overlayClassName={style.overlay}
    >
      <div className={style.mainSection}>
        <div className={style.title}>{task.title}</div>
        <h2 className={style.header2}>Description</h2>
        <div className={style.description}>{task.description}</div>
        <Comments taskId={task.id} author={task.member} comments={task.comments} />
      </div>
      <div className={style.additionSection}>
        <select className={style.selection} onChange={handleChange} value={task.status}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>In Review</option>
          <option>Done</option>
        </select>
        <h2 className={style.header2}>Assignee</h2>
        <div className={style.member}>{task.member}</div>
      </div>
    </Modal>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default TaskDetail;
