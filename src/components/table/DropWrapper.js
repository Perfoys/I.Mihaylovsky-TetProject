import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dragTypes';
import style from './dropWrapper.module.scss';

const DropWrapper = ({ onDrop, children, title }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      onDrop(item, monitor, title);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div ref={drop} className={style.dropWrapper}>
      {React.Children.map(children, child => {
        return React.isValidElement(child) ? React.cloneElement(child, { isOver }) : child;
      })}
    </div>
  );
};

DropWrapper.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default DropWrapper;
