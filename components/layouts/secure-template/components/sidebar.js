import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import PublishIcon from '@material-ui/icons/Publish';

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div>
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <Link href="/" as="/">
          <div className="logo">
            {' '}
            <a href="index.html" className="simple-text logo-normal">
              <img
                src="http://blogs.edf.org/energyexchange/files/2017/08/book-clipart.png"
                style={{ height: '50px' }}
              />
              IJCIS<span>.</span>
            </a>
          </div>
        </Link>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <Link href="/admin" as="/admin">
              <li className={`nav-item ${pathname === '/admin' && 'active'}  `}>
                <a className="nav-link" href="./admin">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/user" as="/admin/user">
              <li
                className={`nav-item ${pathname === '/admin/user' &&
                  'active'}  `}
              >
                <a className="nav-link" href="/admin/user">
                  <i className="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/users" as="/admin/users">
              <li
                className={`nav-item ${pathname === '/admin/users' &&
                  'active'}  `}
              >
                <a className="nav-link" href="/admin/users">
                  <i className="material-icons">content_paste</i>
                  <p>Users & Roles</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/icons" as="/admin/icons">
              <li
                className={`nav-item ${pathname === '/admin/icons' &&
                  'active'}  `}
              >
                <a className="nav-link" href="/admin/icons">
                  <i className="material-icons">bubble_chart</i>
                  <p>Statistics</p>
                </a>
              </li>
            </Link>
            <Link href="/admin/submission" as="/admin/submission">
              <li
                className={`nav-item ${pathname ===
                  '/admin/submission/submission' && 'active'}  `}
              >
                <a className="nav-link" href="/admin/submission">
                  <i className="material-icons">
                    <PublishIcon />
                  </i>
                  <p>Submission</p>
                </a>
              </li>
            </Link>
            <li
              className={`nav-item ${pathname === '/admin/journal' &&
                'active'}  `}
            >
              <Link href="/admin/journal" as="/admin/journal">
                <a className="nav-link">
                  <i className="material-icons">Publish</i>
                  <p>Journal</p>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <span
                onClick={() => {
                  localStorage.clear();
                  Router.push('/', '/');
                }}
              >
                <i className="material-icons">Exit</i>
                <p>Logout</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
