# README

https://github.com/klemiwary/Riakuto-StartingReact-ja4.1

## development environment settings

```bash
# asdf: package management
# official getting started: https://asdf-vm.com/guide/getting-started.html
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc

echo "typescript
ts-node
typesync
npm-check-updates" > ~/.default-npm-packages

asdf plugin add nodejs
asdf install nodejs latest
asdf list nodejs
asdf global nodejs 21.6.2
node --version

# pnpm: performant npm
asdf plugin add pnpm
asdf install pnpm latest
asdf list pnpm
asdf global pnpm 8.15.3
```

## create project

```bash
pnpm create vite@latest hello-pnpm -- --template=react-ts
cd hello-pnpm
pnpm i
pnpm dev -- --port=3000
```