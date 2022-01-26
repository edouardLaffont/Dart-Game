export interface CreateGameDTO {
    nbPlayer: number,
  }
  
  export type UpdateGameDTO = Partial<CreateGameDTO>;