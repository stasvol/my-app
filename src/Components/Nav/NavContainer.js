import { connect } from 'react-redux';

import Nav from './Nav';
import { siteBarActionCreator } from '../../Redux/sitebar_reducer';

const mapStateToProps = ({ siteBar: { siteBarNav } }) => siteBarNav;

const mapDispatchToProps = dispatch => {
  return {
    changeClick: userId => {
      dispatch(siteBarActionCreator(userId));
    },
  };
};
// const mapDispatchToProps = { changeClick: siteBarActionCreator };
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;
