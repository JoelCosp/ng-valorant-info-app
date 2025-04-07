export interface AgentResponse {
    status: number;
    data: Agent[];
  }
  
  export interface Agent {
    displayName: string;
    description: string;
    developerName: string;
    releaseDate: string;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role | null;
    abilities: Ability[];
  }
  
  export interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  }
  
  export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }
  