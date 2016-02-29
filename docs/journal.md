# Environnement

## TypeScript

Pour ajouter les types à javascript

```
npm install -g typescript typings
npm link typescript
```
`npm link` est nécessaire pour webpack

Note: *typings* remplace *tsd* pour récupérer les fichiers de définition 

## Webpack

Pour assembler les fichiers.

```
npm install -g Webpack
npm install ts-loader --save-dev
```

### React

```
typings search react --ambient
typings install react --ambient --save
typings install github:DefinitelyTyped/DefinitelyTyped/react/react-dom.d.ts --ambient --save

npm install --save react react-dom
```

