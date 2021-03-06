export type SourceOptions = { token: string };
export type QueryOptions = {
  resource: string;
  operation: string;
  database_id: string;
  page_id: string;
  filter: any;
  sorts: any;
  limit: any;
  title: any;
  properties: any;
  children: any;
  icon_type: any;
  icon_value: any;
  parent_type: any;
  cover_type: any;
  cover_value: any;
  archived: boolean;
  property_id: string;
  block_id: string;
  user_id: string;
  start_cursor: string;
};
