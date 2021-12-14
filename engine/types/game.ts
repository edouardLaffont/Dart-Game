export interface Game  {
  id: number | string
  mode: 'around-the-world' | '301' | 'cricket'
  name: string
  currentPlayerId: null | string | number
  status: 'draft' | 'started' | 'ended'
  createdAt: Date
};