export interface WeaponSkinChroma {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    fullRender: string;
    swatch: string | null;
    streamedVideo: string | null;
    assetPath: string;
  }
  
  export interface WeaponSkinLevel {
    uuid: string;
    displayName: string;
    levelItem: string | null;
    displayIcon: string;
    streamedVideo: string | null;
    assetPath: string;
  }
  
  export interface WeaponSkin {
    uuid: string;
    displayName: string;
    themeUuid: string | null;
    contentTierUuid: string | null;
    displayIcon: string;
    wallpaper: string | null;
    assetPath: string;
    chromas: WeaponSkinChroma[];
    levels: WeaponSkinLevel[];
  }
  