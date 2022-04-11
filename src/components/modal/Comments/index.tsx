import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addComment } from '../../../redux/reducers/sprintReducer';
import { ITaskInfo } from '../../../types/sprint';
import useForm from '../../../hooks/useForm';
import style from './comments.module.scss';
import Input from '../../custom/Input';
import Form from '../../custom/Form';

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
  const { values, handleChange, handleSubmit, reset, errorMessage } = useForm({ text: '', name: 'named' });
  const data: Inputs = { taskId: task.id, author: task.member, text: values.text };
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addComment(data));
    reset();
  };

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>{t('modal.commentsTitle')}</h2>
      <div className={style.form}>
        <img className={style.image} src={task.image} alt='avatar' />
        <Form handleSubmit={handleSubmit(onSubmit)}>
          <Input
            styleClass={style.commentInput}
            inputType='text'
            inputName='text'
            placeholder={t('modal.commentLeave')}
            handleChange={handleChange}
            value={values.text}
            label={t('modal.commentsLabel')}
            error={errorMessage.text}
          />
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
