import { FC, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ISprint } from '../../types/sprint';
import style from './header.module.scss';
import Timer from '../common/Timer';
import Wrapper from '../common/Wrapper';
import LanguageContext from '../../contexts/LanguageContext';
import ruIcon from '../../assets/icons/ru.png';
import enIcon from '../../assets/icons/en.png';

type HeaderProps = {
  sprint: ISprint,
};

const Header: FC<HeaderProps> = ({ sprint }) => {
  const { t } = useTranslation('translation');
  const { changeLanguage } = useContext(LanguageContext);
  const [icon, setIcon] = useState(ruIcon);

  const handleCLick = () => {
    if (changeLanguage) changeLanguage();
    setIcon(prevIcon => prevIcon === ruIcon ? enIcon : ruIcon);
  };

  return (
    <header className={style.header}>
      <Wrapper>
        <div className={style.headerWrap}>
          <h1 className={style.title}>{t('header.title', { title: sprint.title })}</h1>
          <div>{t('header.startDate')} { sprint.startDate.toDateString() }</div>
          <div>{t('header.endDate')} { sprint.endDate.toDateString() }</div>
          <Timer text={t('header.daysLeft')} endDate={sprint.endDate} />
          <button className={style.langButton} onClick={handleCLick}>
            <img className={style.icon} src={icon} />
          </button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
