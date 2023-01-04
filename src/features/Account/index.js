import Empty from "general/components/Empty";
import AppResource from "general/constants/AppResource";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountProfile from "./screens/AccountProfile";

function Account(props) {
    // MARK: --- Params ---

    return (
        <Routes>
            <Route path='' element={<Navigate to='profile' />} />
            <Route path='profile' element={<AccountProfile />} />


            <Route
                path='*'
                element={
                    <Empty
                        text='Page Not Found'
                        buttonText='Làm mới'
                        visible={false}
                        imageEmpty={AppResource.images.errorStates.pageNotFound}
                    />
                }
            />
        </Routes>
    );
}

export default Account;
