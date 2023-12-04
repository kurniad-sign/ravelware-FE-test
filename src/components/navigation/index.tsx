import { Avatar, Dropdown, Input, type MenuProps } from 'antd';
import { LogOut, Pencil, Settings, User } from 'lucide-react';

import Logo from '@/assets/ravelware-logo.webp';
import { useDate } from '@/hooks/use-date';

import style from './navigation.module.css';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        My Profile
      </a>
    ),
    icon: <User size={14} />,
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Edit Profile
      </a>
    ),
    icon: <Pencil size={14} />,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Settings
      </a>
    ),
    icon: <Settings size={14} />,
  },
  {
    key: '4',
    danger: true,
    label: 'Logout',
    icon: <LogOut size={14} />,
  },
];

export function Navigation() {
  const { date, time } = useDate();

  return (
    <nav className={style.nav__container}>
      <div className={style.nav__logo}>
        <img src={Logo} alt="Ravelware logo" />
        <span>avelware</span>
      </div>
      <div className={style.nav__search}>
        <Input.Search placeholder="Search ..." />
      </div>
      <div className={style.nav__user}>
        <div>
          <span>
            {date} {time}
          </span>
        </div>
        <div className={style.nav__user__avatar}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                size={36}
                icon={<User size={24} />}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              Agung Kurniadi
            </a>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
