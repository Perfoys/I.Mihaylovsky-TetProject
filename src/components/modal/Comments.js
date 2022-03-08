import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addComment } from '../../reducers/sprintReducer';
import style from './comments.module.scss';

const Comments = ({ taskId, author, comments }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: { taskId, author } });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addComment(data));
    reset();
  };

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>Comments</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input className={style.input} {...register('text', { required: true })} />
      </form>
      <div className={style.history}>
        {comments.map(comment => (
          <div className={style.comment} key={comment.id}>
            <div>{comment.text}</div>
            <div>{comment.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  taskId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default Comments;
