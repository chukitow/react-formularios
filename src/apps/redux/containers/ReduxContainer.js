import { connect } from 'react-redux';
import * as Actions from '../actions';
import Redux from '../components/Redux';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  ...Actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
