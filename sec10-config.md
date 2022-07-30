# Config file


## Create the Config File
tsc --init
^makes the tsconfig.json



## Compile a File to .js
__tsc filename.ts__

or

__tsc__ (all files)



## Watch Mode
__tsc -w__

or

__tsc --watch (with the filename?)__

this will auto recomplie when the changes and saves a made to the .ts files


## Compile Certain Files at Once

- in the tsconfig.json
- at the bottom __outside__ the "compilerOptions"
- add __"files": ['file1.ts', 'file2.ts', 'etc.ts']__ 

## Include/ Exclude
(similar to the complie centain files)

### Exclude:
- adds everything execpt the files/ folders stated
- in the tsconfig.json
- at the bottom __outside__ the "compilerOptions"
- add __"exclude": ["folder"]__ or  __"exclude": ["folder/**/*"]__ 
## IMPORTANT:
if using exclude, add node_modules to the list so the dependancies arent done too 

### Include 
- in the tsconfig.json
- at the bottom __outside__ the "compilerOptions"
- add __"include": ["folder"]__ or  __"include": ["folder/**/*"]__ 

## Outdir
- select an output directory for the complied files.
- the is done in the "compilerOptions"
- you'll need to turn it on (uncomment out) and type a folder name for the outputs

## Taget
- select the version of .js to complie to.
- the is done in the "compilerOptions"
- you'll need to turn it on (uncomment out) and type a folder name for the outputs
- Es5 default(?)/ Es6 might be better

## Strict
- always have it on!
- you can turn off the main one  and select certain features indivdually to be turn on... but don't

## 
