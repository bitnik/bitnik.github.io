Based on [sneas/cv-template](https://github.com/sneas/cv-template) :purple_heart:

## Local development notes

```
# use Node Version Manager
# https://github.com/nvm-sh/nvm#installing-and-updating
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# verify
command -v nvm

# if you want to completely uninstall nvm, npm and node:
# https://stackoverflow.com/a/33947181/4361882

-------
sudo apt-get install chromium

# https://github.com/nvm-sh/nvm#usage
nvm install node # "node" is an alias for the latest version
# in any new shell just use the installed version:
nvm use node
# or install specific version
# to list available versions
nvm ls-remote
# install v12.20.0
nvm install 12.20.0
# use v12.20.0
nvm use 12.20.0

nvm version
node -v
npm -v

npm install
npm run build

npm start

```

-------

Resources:

- https://sneas.github.io/cv/
- https://github.com/sneas/cv
