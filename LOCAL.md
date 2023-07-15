# Local development notes

Requirements:

```bash
# Install chromium
# sudo apt-get install chromium

# use Node Version Manager to install node
# https://github.com/nvm-sh/nvm#installing-and-updating
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# verify
command -v nvm

# if you want to completely uninstall nvm, npm and node:
# https://stackoverflow.com/a/33947181/4361882

# Install node
# https://github.com/nvm-sh/nvm#usage
nvm install node # "node" is an alias for the latest version
# in any new shell just use the installed version:
nvm use node
# or install specific version
# to list available versions
nvm ls-remote
# List installed versions, matching a given <version> if provided
nvm ls [<version>]
# We use v12.20.0
nvm install 18.16.1
nvm use 18.16.1

# Check versions
nvm version
node -v
npm -v
```

Local development:

```bash
# use --production flag to install only dependencies, not devDependencies
npm install
# npm help list
npm list --depth=0
npm list
# List packages in the global install prefix instead of in the current project.
npm list --global
npm list --global --depth=1

# npm help build
# This  runs  an arbitrary command from a package's "scripts" object.  If no "command" is provided (`npm run`), it will list the available scripts.
npm run
npm run build  # same as `node src/build.js` and `npm run prestart`, check package.json

# This runs an arbitrary command specified in the package's "start" property of its "scripts" object (in package.json). If no "start" property is specified on the "scripts" object, it will run node server.js.
# before `npm start`, `npm run prestart` is always executed, so we actually didn't need to run `npm run build`
npm start

# to clean up
rm -rf dist node_modules
```
