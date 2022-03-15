import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addComment } from '../../redux/reducers/sprintReducer';
import { ITaskInfo } from '../../types/sprint';
import style from './comments.module.scss';

type CommentsProps = {
  task: ITaskInfo
};

type Inputs = {
  taskId: number,
  author: string,
  text: string
};

const Comments: FC<CommentsProps> = ({ task }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<Inputs>({ defaultValues: { taskId: task.id, author: task.member } });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addComment(data));
    reset();
  };

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>{t('modal.commentsTitle')}</h2>
      <div className={style.form}>
        <img className={style.image} src={task.image} alt='avatar' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className={style.input} {...register('text', { required: true })} placeholder='Leave a comment...' />
          <label>Press Enter to add a comment</label>
        </form>
      </div>
      <div className={style.history}>
        {task.comments.map(comment => (
          <div className={style.comment} key={comment.id}>
            <div className={style.author}>{comment.author}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
