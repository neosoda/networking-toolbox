
<h1 align="center">Networking Toolbox</h1>
<p align="center">
  <i>La boîte à outils réseau tout-en-un, offline-first, pour les sysadmins</i><br>
  🌐 <b><a href="https://networking-toolbox.as93.net">networking-toolbox.as93.net</a></b>
</p>
<a href="https://networking-toolbox.as93.net">
<p align="center">
  <img width="128" src="https://github.com/Lissy93/networking-toolbox/blob/main/static/icon.png?raw=true" />
  </p>
</a>

---

### Déploiement

#### Option 1 - Docker
Exécutez `docker run -p 3000:3000 lissy93/networking-toolbox`<br>
Ou utilisez notre exemple [`docker-compose.yml`](https://github.com/Lissy93/networking-toolbox/blob/main/docker-compose.yml)

#### Option 2 - Cloud
Forkez le repo, puis importez-le dans Vercel, Netlify ou tout autre hébergeur statique de votre choix.

#### Option 3 - Source : Node
Suivez les étapes de développement ci-dessous.
Ensuite, lancez `npm run build:node` pour compiler la sortie.<br>
Vous pourrez démarrer le serveur avec `node build`.

<details>
<summary>Plus d'options de déploiement</summary>

#### Option 4 - GitHub Pages
Forkez le repo.<br>
Allez dans l'onglet Actions, trouvez le workflow « Deploy to GitHub Pages », puis déclenchez-le.<br>
Ensuite allez dans Settings > Pages > Source et sélectionnez la branche `gh-pages`.<br>
Visitez `https://<your-username>.github.io/networking-toolbox/` pour voir l'application déployée.

#### Option 5 - Source : Statique
Suivez les étapes de développement ci-dessous.
Ensuite, lancez `npm run build:static` pour compiler la sortie.<br>
Puis chargez le contenu de `./build` sur n'importe quel serveur web, CDN ou hébergeur statique.

#### Option 6 - Source : Docker
Suivez les étapes de développement ci-dessous.
Ensuite, lancez `docker build -t networking-toolbox .` pour créer l'image.<br>
Vous pourrez ensuite démarrer le conteneur avec `docker run -p 3000:3000 networking-toolbox`.

#### Option 7 - Source : Autres plateformes
Vous pouvez builder l'application depuis les sources pour diverses plateformes via les adapters SvelteKit.<br>
Commencez par suivre les étapes de développement ci-dessous.
Ensuite, définissez simplement la variable d'environnement `DEPLOY_ENV` à `vercel`, `node`, `docker`, `netlify`, `static` ou `auto`, puis lancez le build.<br>
Exemple : `DEPLOY_ENV='node' npm run build`
</details>

---

### Développement

#### Prérequis
Vous devez avoir Node.js installé, ainsi que Git et éventuellement Docker.<br>
L'application est construite avec Svelte + SvelteKit en TypeScript.

#### Commandes d'installation

```
git clone git@github.com:Lissy93/networking-toolbox.git
cd networking-toolbox
yarn
yarn dev
```

#### Tests

Avant fusion, le code doit passer les tests unitaires et end-to-end, ainsi que le lint, les checks de type, Svelte check et les vérifications de build.<br>

```
yarn test
```

<details>
  <summary><h4>Commandes du projet</h4></summary>

##### Build
- `npm run dev` - Démarre le serveur de développement avec hot reload / HMR
- `npm run build` - Build l'application pour la production
  - Note : choisissez l'adapter cible via la variable `DEPLOY_ENV` (voir ci-dessus)
- `npm run preview` - Teste le build localement (build requis avant)
- `npm start` - Démarre l'application en production (build requis avant)

##### Tests
- `npm test` — Lance les tests unitaires avec Vitest
- `npm run test:api` — Lance les tests API
- `npm run test:e2e` — Lance les tests end-to-end Playwright
- `npm run test:coverage` — Génère la couverture de tests

##### Vérifications
- `npm run check` — Vérifications SvelteKit (types & diagnostics)
- `npm run types` — Vérifications strictes TypeScript
- `npm run lint` — ESLint sur tous les fichiers TS et Svelte
- `npm run format` — Formate les fichiers avec Prettier
- `npm run build-check` — Vérifie rapidement que le build fonctionne
</details>

---

### Contribution
Les contributions sont les bienvenues (et très appréciées) !<br>
Suivez les instructions de développement ci-dessus pour démarrer, consultez ensuite les [guidelines de contribution](), puis soumettez vos changements via une PR.<br>
Si vous débutez avec GitHub ou l'open source, jetez un œil à [git-in.to](https://git-in.to).

---

### Fonctionnalités

<h3 align="center">Personnalisez-le</h3>
<p align="center"><i>Layouts personnalisés, theming, signets, support multilingue et plus encore</i></p>
<p align="center">
<img width="800" src="https://storage.googleapis.com/as93-screenshots/networking-toolbox/light-dark-mode-single.png" />
</p>

<h3 align="center">Fonctionne partout</h3>
<p align="center"><i>Compatible hors ligne, optimisé mobile, zéro dépendance tierce</i></p>
<p align="center">
<img width="800" src="https://storage.googleapis.com/as93-screenshots/networking-toolbox/mobile-views.png" />
</p>

<h3 align="center">Des centaines d'outils</h3>
<p align="center"><i>Tout ce qu'il faut pour convertir, calculer, diagnostiquer et vérifier des configurations serveur</i></p>
<p align="center">
<img width="800" src="https://github.com/user-attachments/assets/2dfe66b7-2325-4b41-b116-32eab74d3cf6" />
</p>

---

<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2026</i><br>
  <i>Sous licence <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></i><br>
  <a href="https://github.com/lissy93"><img src="https://cdn.as93.net/84m3gc?w=56" /></a><br>
  <sup>Merci pour votre visite :)</sup>
</p>

<!-- Dinosaur -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
