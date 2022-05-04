## Scripts

### Install dependencies:

- `npm install`

You will get some peer dependency errors relating to React for libraries that have not yet updated to 17 yet.

This is expected and all current dependencies work fine on 18.

### Build for publishing:

- `npm run build`

### Format code:

- `npm run prettier`

### Check for syntax issues:

- `npm run lint`

### Just unit tests:

- `npm run test`

### Review components in Storybook:

- `npm run storybook`

### Publish

- `npx changeset`
- `npx changeset version`
- `npx changeset publish`

## Based on

https://www.hacketts.dev/blog/how-to-create-a-react-component-library#adding-esbuild
