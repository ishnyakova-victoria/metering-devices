export interface AuthorizationRequestBody {
  email: string;
  password: string;
  personal_data_access: boolean;
}

export interface MeteringDevicesRequestBody {
  page: number;
  last_page: number;
  sort_field: string;
  sort: string;
  search_string: string;
  device_state: string;
  is_archived: boolean;
  paginate: boolean;
  append_fields: Array<string>;
  per_page: number;
}
