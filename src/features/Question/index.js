import CreateQuestionScreen from 'features/CreateQuestionScreen';
import Empty from 'general/components/Empty';
import AppResource from 'general/constants/AppResource';
import { Navigate, Route, Routes } from 'react-router-dom';
import ListQuestionScreen from './screens/ListQuestionScreen';

function Question(props) {
  // MARK: --- Params ---

  return (
    <Routes>
      <Route path="" element={<Navigate to="list" />} />
      <Route path="list" element={<ListQuestionScreen />} />
      <Route path="create" element={<CreateQuestionScreen />} />

      <Route
        path="*"
        element={
          <Empty
            text="Page Not Found"
            buttonText="Làm mới"
            visible={false}
            imageEmpty={AppResource.images.errorStates.pageNotFound}
          />
        }
      />
    </Routes>
  );
}

export default Question;
