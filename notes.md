#### Create a new tsconfig.json file

```bash
tsc --init
```

# tsconfig.json

### Root Directory for TypeScript Files

```js
"rootDir": "./src"
```

### Out Directory for TypeScript Files

```js
"outDir": "./build/js" // here goes all of the compiled files
```

### Start watching all files on root Directory

```bash
tsc -w
```

### Target setting in tsconfig.json

```js
"target": "es2016" // this could also use e5 to be compatible with older browsersw
```

### All files in rootDir will be compiled in the outDir however if you erase one in the rootDir it wont be deleted in the outDir FIles

### Ignore TypeScript files in the root Directory of the project or anything out of the src Directory

```js
,{
 "include": ["src"]
}
```

You just need to add this at the very bottom of the tsconfig.json

### Dont let compiler go through

```js
"noEmitOnError": true
```

```bash
tsc --noEmitOnError // this for optional noEmitOnError
```

# Terminology

## Strongly Typed Languages

Demand specification of types in variables. TypeScript is strongly typed because it makes us type our variables and it also helps us document our code.

## Loosely Typed Languages

Dont require any type specification as an example we have obviously javascript.

### Union TYPE

```js
let album2: string | number;
```
