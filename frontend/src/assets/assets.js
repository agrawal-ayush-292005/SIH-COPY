// Import and re-export assets from different asset folders
import { assets as frontendAssets, specialityData, doctors } from './assets/assets_frontend/assets.js';
import { assets as adminAssets } from './assets/assets_admin/assets.js';

// Merge assets from both folders, with frontend taking precedence for conflicts
export const assets = {
    ...adminAssets,
    ...frontendAssets
};

// Re-export other data
export { specialityData, doctors };