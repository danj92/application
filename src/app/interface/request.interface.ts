export interface Request {
  requestName: string;
  requestor: number;
  goodEnding: string; // fix to boolean
  description: string;
  needStoryteller: boolean;
  storyteller?: string;
  wantedCharacters: string;
  deadline: Date;
  budget: number;
  status: string;
  id: number;
}
