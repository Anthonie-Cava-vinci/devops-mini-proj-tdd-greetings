#devops-mini-proj-tdd-greetings
#Do npm install --save-dev jasmine
#Do npx jasmine init
#Change package.json ("script":{"test":"jasmine"})
#Don't forget to do npm i before npm run test

# DevOps Mini-Projet 1

point 10/20

# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

-   N° de groupe : 18
-   Membres du groupe : BOUFFIOUX Loic, CAVA Anthonie, TRAN Thuy Duong Océane
-   Lien vers le dépôt du code de la pipeline : https://github.com/Anthonie-Cava-vinci/devops-mini-proj-tdd-greetings/blob/pipeline/.github/workflows/github-actions.yml

## Énoncé

### Pré-requis :

-   Sur base de votre mini-projet 1 (TDD)
-   Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
-   Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

-   Décrivez brièvement ce que fait votre fichier YML.

```bash
<Le fichier YML définit une pipeline d\'intégration continue utilisant GitHub Actions. La pipeline s\'exécute lorsqu\'une Pull Request est ouverte. Elle commence par l\'installation des dépendances, affiche l\'heure de commencement de la pipeline, formate le code, effectue le linting, exécute les tests avec Jest, construit l\'application, affiche l\'heure de fin de la pipeline, et indique le succès de la pipeline sans erreurs. >
```

-   En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
<Le \"on\" spécifie les événements déclencheurs pour la pipeline. \"on push\" déclenche la pipeline lorsqu\'un commit est poussé sur n\'importe quelle branche, tandis que \"on pull_request\" déclenche la pipeline lorsqu\'une pull request est ouverte ou mise à jour. Pour des développeurs juniors, \"on pull_request\" est conseillé, car cela limite les exécutions aux changements proposés, ce qui est plus ciblé et évite une exécution inutile pour chaque push. >
```

-   Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
<La différence entre les 2 est que \"run\" est utilisé pour exécuter des commandes dans une étape spécifique de la pipeline, tandis que \"run_on\" est utilisé pour lancer l\'ensemble de la pipeline, c\'est-à-dire toutes les exécutions>
```

-   Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
<Dans la pipeline, \"use\" est utilisé pour spécifier l\'action que GitHub doit utiliser, en l\'occurence \"actions/checkout@v4\" afin de récupérer le code du référentiel, tandis que \"run\" est utilisé pour exécuter différentes commandes au sein d\'une étape.>
```

-   Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
<Oui, les différentes étapes de la pipeline peuvent être interverties. Cependant, cela dépend du contexte du projet. Dans ce cas, certaines étapes, telles que l\'installation des dépendances, le formattage du code et le linting, sont généralement mieux placées au début, tandis que les tests et la construction de l\'application peuvent suivre.>
```

-   Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
<Pour ajouter un test de sécurité avec le programme secure_app, il faut créer une nouvelle étape dans la pipeline. Les questions à se poser sont les suivantes : 1.Où placer cette étape dans la pipeline? 2.Comment installer et exécuter le programme secure_app? 3.Quels paramètres ou configurations sont nécessaires pour le test de sécurité? 4.Comment afficher les résultats du test de sécurité dans le projet?>
```
