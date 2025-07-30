// Utilitaire pour gérer les chemins d'images
export function getImagePath(path: string): string {
  // En développement, utiliser le chemin tel quel
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  
  // En production avec GitHub Pages, ajouter le basePath
  return `/Afro-event${path}`;
} 