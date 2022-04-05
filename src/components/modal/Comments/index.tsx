import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addComment } from '../../../redux/reducers/sprintReducer';
import { ITaskInfo } from '../../../types/sprint';
import useForm from '../../../hooks/useForm';
import style from './comments.module.scss';
import Input from '../../Input';
import Form from '../../Form';

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
  const { fields, handleChange, reset } = useForm({ text: '' });
  const data: Inputs = { taskId: task.id, author: task.member, text: fields.text };
  const dispatch = useDispatch();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addComment(data));
    reset();
  }, [data]);

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>{t('modal.commentsTitle')}</h2>
      <div className={style.form}>
        <img className={style.image} src={task.image} alt='avatar' />
        <Form handleSubmit={handleSubmit}>
          <Input
            styleClass={style.commentInput}
            inputName='text'
            placeholder={t('modal.commentLeave')}
            handleChange={handleChange}
            value={fields.text}
          />
          <label>{t('modal.commentsLabel')}</label>
        </Form>
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
