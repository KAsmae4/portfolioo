# Portfolio — Asmae

Site statique (HTML/CSS/JS pur, aucune étape de build) inspiré de la mise en
page de brittanychiang.com : sidebar fixe à gauche, contenu défilant à droite.

## 1. Personnalise avant de publier

Ouvre `index.html` et remplace :

- `[Ton Nom]` → ton nom de famille (2 occurrences : `<title>` et `.name`)
- `https://github.com/TON-USERNAME` → ton profil GitHub (2 occurrences)
- `https://linkedin.com/in/TON-PROFIL` → ton profil LinkedIn
- `ton.email@exemple.com` → ton email (2 occurrences)

Optionnel :
- Ajuste les textes des sections Expérience / Projets si tu veux plus de détails
- Change les couleurs dans `styles.css`, tout est piloté par les variables en haut du fichier (`:root`)

## 2. Déployer sur GitHub Pages

### Option A — nouveau dépôt dédié (recommandé)

```bash
# depuis le dossier portfolio/
git init
git add .
git commit -m "Premier commit du portfolio"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/portfolio.git
git push -u origin main
```

Puis sur GitHub :
1. Va dans le dépôt → **Settings** → **Pages**
2. Sous "Build and deployment", choisis **Deploy from a branch**
3. Branche : `main`, dossier : `/ (root)` → **Save**
4. Ton site sera en ligne en 1–2 minutes à :
   `https://TON-USERNAME.github.io/portfolio/`

### Option B — site principal `TON-USERNAME.github.io`

Si tu veux que le site soit directement à la racine
(`https://TON-USERNAME.github.io`, sans `/portfolio`), nomme le dépôt
GitHub exactement `TON-USERNAME.github.io` au lieu de `portfolio` — le reste
est identique, et GitHub Pages s'active automatiquement sans passer par
Settings → Pages.

## 3. Mettre à jour le site plus tard

```bash
git add .
git commit -m "Mise à jour du contenu"
git push
```

Les changements apparaissent en ligne 1–2 minutes après le push.
