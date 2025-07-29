# Déploiement sur GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

## Configuration

Le projet utilise Next.js avec l'export statique pour être compatible avec GitHub Pages.

### Configuration Next.js

- `output: 'export'` dans `next.config.ts`
- `basePath: '/Afro-event'` pour le nom du dépôt
- `assetPrefix: '/Afro-event/'` pour les assets

## Déploiement automatique

1. **Workflow GitHub Actions** : Le fichier `.github/workflows/deploy.yml` est configuré pour déployer automatiquement à chaque push sur la branche `main`.

2. **Configuration GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : "GitHub Actions"
   - Le déploiement se fait automatiquement via le workflow

## Déploiement manuel

Si tu veux déployer manuellement :

```bash
# Générer le build statique
npm run gh-pages

# Le dossier `out/` contient les fichiers à déployer
# Tu peux les pousser sur la branche `gh-pages` ou utiliser GitHub Pages
```

## Structure des fichiers

- `out/` : Dossier contenant le site statique exporté
- `.nojekyll` : Fichier créé automatiquement pour éviter que GitHub Pages ignore les fichiers commençant par `_`

## URL du site

Une fois déployé, le site sera accessible à :
`https://[username].github.io/Afro-event/`

## Résolution des problèmes

### Erreurs de compilation
- Vérifier que tous les apostrophes sont échappées (`&apos;`)
- Vérifier que tous les imports inutilisés sont supprimés
- Vérifier que les routes API sont configurées avec `export const dynamic = "force-static"`

### Problèmes de déploiement
- Vérifier que GitHub Pages est activé dans les settings du repo
- Vérifier que le workflow GitHub Actions a les bonnes permissions
- Vérifier que la branche source est correcte (main ou gh-pages) 