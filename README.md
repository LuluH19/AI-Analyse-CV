# 🤖 AI Resume Analyser - Resumind

![Hero](public/readme/hero.webp)

**Smart feedback for your dream job!** 

Resumind est une application web intelligente qui analyse vos CV à l'aide de l'IA pour vous fournir des commentaires détaillés et améliorer vos chances de décrocher l'emploi de vos rêves.

## ✨ Fonctionnalités

- **📊 Score ATS** - Évaluation de la compatibilité avec les systèmes de suivi des candidatures (ATS)
- **🎯 Analyse détaillée** - Feedback IA complet sur le contenu, la structure et l'optimisation
- **📈 Suggestions d'amélioration** - Recommandations personnalisées pour optimiser votre CV
- **💾 Historique des analyses** - Suivez vos soumissions et l'évolution de vos CV
- **🔒 Authentification sécurisée** - Connexion via Puter pour protéger vos données

## 🚀 Technologies utilisées

- **Frontend**: React 19, TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **PDF Processing**: PDF.js
- **File Upload**: React Dropzone
- **Backend/Storage**: Puter Cloud Services
- **Build Tool**: Vite

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/LuluH19/AI-Analyse-CV.git
   cd ai-resume-analyser
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   - Assurez-vous d'avoir accès aux services Puter Cloud
   - Aucune configuration d'API key requise (utilise Puter)

4. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

5. **Construire pour la production**
   ```bash
   npm run build
   npm start
   ```

## 🎯 Utilisation

### 1. Authentification
- Connectez-vous via l'interface Puter intégrée
- Votre session sera sauvegardée automatiquement

### 2. Upload de CV
- Glissez-déposez votre CV (format PDF)
- Ou cliquez pour sélectionner le fichier

### 3. Analyse IA
- L'application traite automatiquement votre CV
- Génère un score ATS et des suggestions
- Affiche une analyse détaillée avec points forts et améliorations

### 4. Suivi des résultats
- Consultez l'historique de vos analyses
- Comparez les versions de votre CV
- Suivez vos améliorations au fil du temps

## 📁 Structure du projet

```
ai-resume-analyser/
├── app/
│   ├── components/          # Composants React réutilisables
│   │   ├── ATS.tsx         # Affichage du score ATS
│   │   ├── FileUploader.tsx # Upload de fichiers
│   │   ├── ScoreGauge.tsx  # Jauge de score visuelle
│   │   └── ...
│   ├── routes/             # Pages de l'application
│   │   ├── home.tsx        # Page d'accueil
│   │   ├── upload.tsx      # Page d'upload
│   │   ├── resume.tsx      # Détails d'analyse
│   │   └── ...
│   ├── lib/                # Utilitaires et services
│   │   ├── puter.ts        # Intégration Puter Cloud
│   │   ├── pdf2img.ts      # Conversion PDF
│   │   └── utils.ts
│   └── root.tsx            # Layout principal
├── public/                 # Ressources statiques
│   ├── images/             # Images et illustrations
│   └── icons/              # Icônes SVG
└── types/                  # Définitions TypeScript
```

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm start` - Lance l'application en production
- `npm run typecheck` - Vérifie les types TypeScript

## 🎨 Interface utilisateur

L'application propose une interface moderne avec :

- **Design minimaliste** inspiré des meilleures pratiques UX
- **Animations fluides** pour une expérience utilisateur agréable
- **Feedback visuel** avec jauges, badges et graphiques
- **Navigation intuitive** entre les différentes sections

## 🔒 Sécurité et confidentialité

- **Authentification sécurisée** via Puter
- **Stockage chiffré** des données utilisateur
- **Traitement local** des fichiers PDF
- **Aucune donnée partagée** avec des tiers



## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add: Amazing Feature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 🙏 Remerciements

- [Puter](https://puter.com) - Pour les services cloud et l'authentification
- [PDF.js](https://mozilla.github.io/pdf.js/) - Pour le traitement des PDF
- [Tailwind CSS](https://tailwindcss.com) - Pour le framework CSS
- [React Router](https://reactrouter.com) - Pour le routage
- [JSM](https://github.com/adrianhajdin) - Pour l'inspiration et les tutoriels
---trigger release
