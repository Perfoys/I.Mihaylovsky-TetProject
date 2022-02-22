import PropTypes from 'prop-types';
import update from 'immutability-helper';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import TaskCard from './TaskCard';
import style from './column.module.scss';
import DropWrapper from './DropWrapper';

const Column = ({ title, titleStyle, tasks }) => {
  const [cards, setCards] = useState(tasks);
  const dispatch = useDispatch();

  const moveCard = (dragIndex, hoverIndex) => {
    setCards(prevCards => update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex]]
      ]
    }));
  };

  const onDrop = (item, monitor, title) => {
    if (item.status === title) return;
    dispatch(changeTaskStatus({ item: item, title: title }));
    setCards(prevCards => update(prevCards, {
      $push: [item]
    }));
  };

  useEffect(() => {
    setCards(tasks);
  }, [tasks]);

  return (
    <div className={style.column}>
      <h1 className={classNames(style.title, titleStyle)}>{title}</h1>
      <DropWrapper onDrop={onDrop} title={title}>
        {cards.map((item, index) => (
          item && <TaskCard key={item.id} task={item} index={index} moveCard={moveCard} />
        ))}
      </DropWrapper>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
};

export default Column;
