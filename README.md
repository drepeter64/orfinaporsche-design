# Next.js Galaxy IT template

In the template uses:

- [Featured design](https://feature-sliced.design/docs/guides/tech/with-nextjs) - as design pattern
- [Next intl](https://next-intl-docs.vercel.app/) - as localization controller

## Set up

Install dependencies

```bash
npm istall
```

To run development mode

```bash
npm run dev
```

To build project

```bash
npm run build
```

To run production mode. To run production server project has to be built.

```bash
npm start
```

To stop process on this port

```bash
npm run stop
```

## Linting

To run **JS/TS** code style lint & fix

```bash
npm run eslint
```

To run **CSS/SCSS** code style lint & fix

```bash
npm run stylelint
```

To run **JS/TS/CSS/SCSS** code style fix

```bash
npm run prettier
```

### Bash scripts

Set up the project easier

```bash
gt-create-next-app()
{
  GREEN='\033[0;32m'
  ORANGE='\033[0;33m'
  PURPLE='\033[0;35m'
  CYAN='\033[0;36m'
  NO_COLOR='\033[0m'

  printf "${PURPLE}Hey Bro, thanks for using this :D${NO_COLOR}\n"
  printf "${PURPLE}Enter project name:${NO_COLOR}\n"
  read project_name
  printf "${CYAN}Start cloning into ./$project_name${NO_COLOR}\n"

  git clone git@github.com:Galaxy-IT/galaxy_react.git "$project_name"
  clone_status=$?

  if [ $clone_status -eq 0 ]; then
    printf "${GREEN}Cloned successfully ${NO_COLOR}\n\n"
    printf "${CYAN}Installing dependencies ${NO_COLOR}\n"
    (cd "$project_name" && npm install)
    printf "${GREEN}Dependencies installed successfully ${NO_COLOR}\n"
    printf "\n${GREEN}Project set up is ready ${NO_COLOR}\n\n"
    printf "${CYAN}Run project: ${NO_COLOR}\n"
    printf "cd $project_name\n"
    printf "npm run dev\n\n"
  else
    printf "${ORANGE}Cloning failed. Please check your internet connection and try again.${NO_COLOR}\n"
  fi
}
```
