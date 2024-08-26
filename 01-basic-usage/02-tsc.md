# tsc compiler

## install tsc module

```sh
npm install -g typescript
```

## version
```sh
tsc -v
# or 
tsc --version
```

## help info

```sh
tsc -h
# or
tsc --help

# all help info
tsc --all
```

## compile single file

```sh
tsc app.ts
# ==> app.js
```

## compile multiple files

```sh
tsc app1.ts app2.ts app3.ts
# or
tsc *.ts

# ==> app1.js app2.js app3.js
```

## --outFile, compile multiple files to one file
```sh
tsc app1.ts app2.ts app3.ts --outFile app.js
```

## --outDir, compile multiple files to one directory
```sh
tsc app1.ts app2.ts app3.ts --outDir dist
```

## --rootDir, set root directory
```sh
tsc app1.ts app2.ts app3.ts --outDir dist --rootDir src
```

## --sourceMap, generate source map
```sh
tsc app1.ts app2.ts app3.ts --outDir dist --rootDir src --sourceMap
```

## --watch, watch file changes
```sh
tsc app1.ts app2.ts app3.ts --outDir dist --rootDir src --sourceMap --watch
```

## --target, set target js version
```sh
tsc app1.ts app2.ts app3.ts --target es5
```

## --noEmitOnError, not emit js file when error, no compilation products are generated
```sh
tsc app1.ts app2.ts app3.ts --noEmitOnError
```

## --noEmit, not emit js file, only check ts file type
```sh
tsc app1.ts app2.ts app3.ts --noEmit
```

## compile with tsconfig.json

```sh
tsc --project tsconfig.json
```

## tsconfig.json

```json
{
  "files": ["app1.ts", "app2.ts", "app3.ts]
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs", 
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## install ts-node module (Note: unofficial npm module)

```sh
npm install -g ts-node
```

## run ts file with ts-node

```sh
ts-node app.ts
```

## npx ts-node

```sh
npx ts-node app.ts
```

