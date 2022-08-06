import renderer from 'react-test-renderer';
import Home from '../Components/Home';

test('Home component testing', () => {
  const TREE = renderer.create(<Home />).toJSON();
  expect(TREE).toMatchSnapshot();
});
