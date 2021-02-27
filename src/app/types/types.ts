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

export interface MeteringDevice {
  id: number;
  name: string;
  deviceID: string;
  active: number;
  protocol_id: number;
  gatewayID: string;
  gateway_id: number;
  inside_addr: string;
  port_addr: string;
  properties: any;
  deviceTimezone: number;
  interface_id: number;
  creator_id: number;
  company_creator_id: number;
  model_class_id: number;
  model_id: number;
  device_type_id: number;
  device_group_id: number;
  report_period_update: number;
  impulse_weight: string;
  starting_value: string;
  transformation_ratio: any;
  desc: any;
  last_active: number;
  last_message: any;
  last_message_type: string;
  status: any;
  created_at: number;
  updated_at: number;
  deleted_at: number;
  archived_at: number;
  on_dashboard: false;
  address: any;
  active_polling: boolean;
  attributes: any;
  tied_point: any;
}