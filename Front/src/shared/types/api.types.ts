export type ApiResponse<T> = {
  data: T;
  message?: string;
  status: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
  };
};

export type ApiError = {
  message: string;
  errors?: Record<string, string[]>;
  code?: string;
};
