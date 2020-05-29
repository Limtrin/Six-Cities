import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

interface Props {
  isLogin: Boolean,
}

const Header: React.FunctionComponent<Props> = (props: Props) => {

  const { isLogin }  = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <NavLink to={isLogin ? `/favorites` : `/login`} className="header__nav-link header__nav-link--profile">

                  {
                    isLogin ?
                    <>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </> :
                    <span className="header__login">Sign in</span>
                  }

                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

export default connect(mapStateToProps)(Header);
