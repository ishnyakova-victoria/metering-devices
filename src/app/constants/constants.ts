import { AuthorizationRequestBody, MeteringDevicesRequestBody } from "../types/types";

export const URL_LOGIN: string = 'https://core.nekta.cloud/api/auth/login';
export const URL_METERING_DEVICES: string = 'https://core.nekta.cloud/api/device/metering_devices';

export const ACCESS_TOKEN: string = 'access_token';

export const DEFAULT_AUTHORIZATION_REQUEST_BODY: AuthorizationRequestBody = {
    email: "string",
    password: "string",
    personal_data_access: true
};

export const DEFAULT_METERING_DEVICES_REQUEST_BODY: MeteringDevicesRequestBody = {
    page: 1,
    last_page: 0,
    sort_field: "id",
    sort: "desc",
    search_string: null,
    device_state: "all",
    is_archived: false,
    paginate: true,
    append_fields: ["active_polling", "attributes", "tied_point"],
    per_page: 10
}