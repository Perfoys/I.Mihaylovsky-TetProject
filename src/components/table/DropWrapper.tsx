import React, { FC } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dragTypes';
import { IItem } from '../../types/drag';
import style from './dropWrapper.module.scss';

type DropWrapperProps = {
  onDrop: (item: IItem, title: string) => void,
  children: React.ReactNode,
  title: string
};

const DropWrapper: FC<DropWrapperProps> = ({ onDrop, children, title }: DropWrapperProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item: IItem) => {
      onDrop(item, title);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div ref={drop} className={style.dropWrapper}>
      {React.Children.map(children, child => {
        return React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { isOver }) : child;
      })}
    </div>
  );
};

export default DropWrapper;
