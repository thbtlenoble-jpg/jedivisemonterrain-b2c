# jedivisemonterrain.fr — Site B2C

Plateforme de division parcellaire — Gagnez 30% sur la vente de votre bien.

## Stack technique

- **Framework** : Nuxt.js 2.15 + TypeScript
- **CSS** : TailwindCSS 4
- **Carte** : Mapbox GL JS 1.13
- **Icônes** : FontAwesome 5 Free
- **Hébergement** : Vercel

## Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les variables d'environnement
cp .env.example .env
# → Renseigner les valeurs dans .env

# 3. Lancer en développement
npm run dev
# → http://localhost:3000
```

## Variables d'environnement requises

| Variable | Description | Obtenir |
|---|---|---|
| `MAPBOX_ACCESTOKEN` | Token Mapbox GL pour la carte | [account.mapbox.com](https://account.mapbox.com) |
| `API_SERVER` | URL de l'API NestJS (backend) | Votre serveur BACK-NEST-FR |
| `TILE_SERVER` | URL du serveur de tuiles Django | Votre serveur BACK-BR |

## Déploiement Vercel

1. Pusher ce repo sur GitHub
2. Importer sur [vercel.com](https://vercel.com)
3. Ajouter les variables dans **Settings → Environment Variables**
4. Cliquer **Deploy**

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — recherche adresse + carte |
| `/lead` | Formulaire d'estimation (4 étapes) |
| `/how` | Comment ça marche ? |
| `/notre-reseau-d-expert` | Réseau d'experts partenaires |
| `/us` | Qui sommes-nous ? |
| `/legales` | Mentions légales |

## Corrections appliquées

- Champ adresse réactivé (AddressInput.vue)
- Store lead.js — soumission vers `POST /api/lead`
- Store companies.js — récupération agences
- pages/lead.vue — saveLead() fonctionnel
- Footer.vue — liens corrigés + copyright dynamique
- Cookies.vue — persistance localStorage
- Icônes FontAwesome Pro → Free (compatibilité Vercel)
- TILE_SERVER externalisé en variable d'environnement
