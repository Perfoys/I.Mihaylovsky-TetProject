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

const INPUT_NAME = 'text';
const INPUT_TYPE = 'text';

const Comments: FC<CommentsProps> = ({ task }) => {
  const { t } = useTranslation();
  const { values, handleChange, handleSubmit, handleReset, errorMessage } = useForm({ [INPUT_NAME]: { type: INPUT_TYPE, value: '' } });
  const data: Inputs = { taskId: task.id, author: task.member, text: values.text.value };
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addComment(data));
    handleReset();
  };

  return (
    <div className={style.commentSection}>
      <h2 className={style.title}>{t('modal.commentsTitle')}</h2>
      <div className={style.form}>
        <img className={style.image} src={task.image} alt='avatar' />
        <Form handleSubmit={handleSubmit(onSubmit)}>
          <Input
            styleClass={style.commentInput}
            inputType={INPUT_TYPE}
            inputName={INPUT_NAME}
            value={values.text.value}
            handleChange={handleChange}
            placeholder={t('modal.commentPlaceholder')}
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
