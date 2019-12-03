export type MessageType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  type: string;
  message: string;
}
