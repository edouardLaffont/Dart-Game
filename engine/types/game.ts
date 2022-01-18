export interface Game  {
  id: string
  mode: 'around-the-world' | '301' | 'cricket'
  name: string
  currentPlayerId: null | string 
  status: 'draft' | 'started' | 'ended'
  createdAt: Date
};