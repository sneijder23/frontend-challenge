import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

interface HeaderItem {
  text: string;
  link: string;
}

const headerItems: HeaderItem[] = [
  {
    text: 'Все котики',
    link: AppRoute.Root,
  },
  {
    text: 'Любимые котики',
    link: AppRoute.Favorites,
  }
];

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <div className="header">
      <ul className="header__list">
        {headerItems.map((item, index) => (
          <li key={index} className={`header__item ${location.pathname === item.link ? 'header__item--active' : ''}`}>
            <Link to={item.link} className="header__item-link">
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}