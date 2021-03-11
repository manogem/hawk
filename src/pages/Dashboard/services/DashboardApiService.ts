import { AppApi } from "../../../common/services/ApiService";

export const dashboardApiClient = (token: string) => {
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };

    return {
        latestMeasurements: async (): Promise<any> => await AppApi.get('/measurement-subject/measurement/latest', { ...defaultOptions }),
    };
};
