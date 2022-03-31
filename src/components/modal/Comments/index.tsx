import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addComment } from '../../../redux/reducers/sprintReducer';
import { ITaskInfo } from '../../../types/sprint';
import useForm from '../../../hooks/useForm';
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
  const { state, bind, reset } = useForm({
    taskId: task.id,
    author: task.member,
    text: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addComment(state));
    reset();
  };

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>{t('modal.commentsTitle')}</h2>
      <div className={style.form}>
        <img className={style.image} src={task.image} alt='avatar' />
        <form onSubmit={handleSubmit}>
          <input className={style.input} name='text' {...bind} value={state.text} placeholder={t('modal.commentLeave')} />
          <label>{t('modal.commentsLabel')}</label>
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
