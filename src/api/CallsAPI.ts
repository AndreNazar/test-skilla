import request from "./apiClient";

const CallsAPI = {
  get: (signal?: AbortSignal) => request('/getList', {signal}),
  getAudio: (record: string, partnership_id: number, signal?: AbortSignal) => {
    return request(`/getRecord?record=${record}&partnership_id=${partnership_id}`, {signal})
  },
  getByFilter: (
    filter?: {
      start?: string, 
      end?: string, 
      is_out?: number | null, 
      sort_by?: string | null,
    } | null,
    signal?: AbortSignal
  ) => {
    const params = new URLSearchParams();
    if(filter){
      if (filter.start) params.append('date_start', filter.start);
      if (filter.end) params.append('date_end', filter.end);
      if (filter.is_out !== null && filter.is_out !== undefined) params.append('in_out', String(filter.is_out));
      if (filter.sort_by) params.append('sort_by', filter.sort_by);
    }

    return request(`/getList?${params.toString()}`, {signal})
  },
};

export default CallsAPI;