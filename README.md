<p align="center">
  <a href="https://nettools.techsentinel.fr"><img src="static/banner.png" alt="Networking Toolbox — outils de réseau, calcul CIDR, DNS, diagnostic et références techniques" width="100%"></a>
</p>

<h1 align="center">Networking Toolbox</h1>

<p align="center">
  <strong>Les outils réseau du quotidien, accessibles depuis le navigateur.</strong><br>
  Calcul CIDR, sous-réseaux IPv4, conversions IP, DNS, diagnostics et documentation technique.
</p>

<p align="center">
  <a href="https://nettools.techsentinel.fr"><strong>Essayer la version en ligne</strong></a> ·
  <a href="#démarrage-rapide">Auto-hébergement</a> ·
  <a href="#développement">Développement</a> ·
  <a href="#origine-et-attribution">Crédits</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SvelteKit-5-FF3E00?logo=svelte&logoColor=white" alt="SvelteKit">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Self--hosted-Docker-2496ED?logo=docker&logoColor=white" alt="Self-hosted with Docker">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-64748B" alt="MIT License"></a>
</p>

---

## Ce que vous pouvez faire

| Adressage et sous-réseaux | Services réseau | Diagnostic et références |
| :--- | :--- | :--- |
| Calculer un sous-réseau IPv4, convertir les préfixes CIDR et différentes représentations d'adresses IP. | Explorer les outils DNS et DHCP disponibles, consulter les résultats et les paramètres associés. | Accéder aux outils de diagnostic, aux tables de référence réseau et aux pages de documentation. |

L'interface propose aussi la recherche, les favoris, les réglages d'affichage et des fonctionnalités pensées pour un usage **offline-first**. Certaines fonctions de diagnostic reposent naturellement sur la connectivité ou sur des services réseau.

## Démarrage rapide

### Avec Docker : construire ce dépôt

```bash
git clone https://github.com/neosoda/networking-toolbox.git
cd networking-toolbox
docker build -t neosoda-networking-toolbox .
docker run --rm -p 3000:3000 neosoda-networking-toolbox
```

Ouvrez **http://localhost:3000**.

> **Attention :** le `docker-compose.yml` versionné référence actuellement l'image `lissy93/networking-toolbox:latest` de l'auteur d'origine. Pour exécuter les modifications présentes **dans ce dépôt**, construisez son `Dockerfile` comme ci-dessus.

Pour le déploiement dans Coolify, consultez [COOLIFY.md](COOLIFY.md).

## Développement

```bash
npm ci
npm run dev
```

```bash
npm run check
npm run lint
npm run test
npm run build
```

Le dépôt utilise **SvelteKit, Svelte 5, TypeScript et Vite**. Les parcours E2E peuvent être testés avec `npm run test:e2e` lorsque Playwright est configuré. Les routes API sont documentées dans [swagger.yaml](swagger.yaml).

## Origine et attribution

Ce dépôt est une **version hébergée / dérivée** de [Networking Toolbox](https://github.com/lissy93/networking-toolbox), projet open source créé par **Alicia Sykes (lissy93)**. Il ne s'agit pas d'une création originale de neosoda. La licence MIT et la notice de copyright de l'autrice sont conservées dans [LICENSE](LICENSE).

Le site de référence du projet d'origine est [networkingtoolbox.net](https://networkingtoolbox.net). Le déploiement [nettools.techsentinel.fr](https://nettools.techsentinel.fr) est une instance distincte.

## Participer

Les retours sur ce dépôt peuvent être publiés dans les [issues](https://github.com/neosoda/networking-toolbox/issues). Pour les fonctionnalités propres au projet d'origine, consultez également son [dépôt upstream](https://github.com/lissy93/networking-toolbox).

Si cette instance vous est utile, pensez à soutenir également [le projet original](https://github.com/lissy93/networking-toolbox).
