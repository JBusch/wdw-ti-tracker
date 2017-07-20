export interface Game {
  gameName: string;
  numberOfPlayers: number;
  protectGameWithPassword: boolean;
  gamePassword: string;
  creatorId?: string;
  creatorDisplayName: string;
  joinedPlayers?: string[];
  $key?: string;

  $exists(): boolean;
}
