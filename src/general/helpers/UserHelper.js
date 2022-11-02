import { removeAxiosAccessToken } from "api/axiosClient";
import PreferenceKeys from "general/constants/PreferenceKeys";
import _ from "lodash";
import moment from 'moment';

const UserHelper = {
    // Get random avatar url
    getRandomAvatarUrl: () => {
        return 'https://blenderartists.org/uploads/default/original/4X/6/a/d/6adcaac6f7378fbf998f5ea0490724cea82eb01f.jpeg';
    },

    // Check access token valid
    checkAccessTokenValid: () => {
        const accessToken = localStorage.getItem(PreferenceKeys.accessToken);
        const accessTokenExpired = localStorage.getItem(PreferenceKeys.accessTokenExpired);
        if (accessToken && accessTokenExpired) {
            const momentExpired = moment.utc(accessTokenExpired);
            const momentNow = moment.utc();
            return momentExpired.isAfter(momentNow);
        }

        return false;
    },

    // Get display name
    getDisplayName: (account) => {
        if (account) {
            return account.fullname ?? account.email ?? 'Unknown';
        }
        return '';
    },

    // Get avatar
    getAvatar: (account) => {
        if (account) {
            return account.avatar ?? UserHelper.getRandomAvatarUrl();
        }
        return UserHelper.getRandomAvatarUrl();
    },

    // Sign out
    signOut: () => {
        localStorage.removeItem(PreferenceKeys.accessToken);
        localStorage.removeItem(PreferenceKeys.accessTokenExpired);
        removeAxiosAccessToken();
    },

    isHSMAuthen: (account) => {
        const isAuthen = !_.isEmpty(account?.hsmAgreementUUID) && !_.isEmpty(account?.hsmPasscode);
        return isAuthen;
    },

    isHasRemoteSigning: (account) => {
        return account?.hasRemoteSigningP12 ?? false;
    }
};

export default UserHelper;