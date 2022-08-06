/*eslint-disable*/
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/Store';
import Popular from '../components/Popular';

test('Popular component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Popular />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
