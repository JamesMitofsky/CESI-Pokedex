# CESI-Pokedex

## Technical Organization

### Repo

This is a monorepo where there are dedicated `package.json` files for the front and the back. This allows for shared types and code which is co-dependent in the same location.

### Development flow

The `front` and the `back` are developed on their unique branches, with periodic merges for release. This helps to preserve a clean git commit history.

### Version management

This repo follows a process of `git flow`, and implements this strategy using the `git-flow` CLI tool.
