# Stash Copy Buttons

## Code Changes
Commit code changes with descriptive messages. Do NOT include version bumps or artifacts in code commits.
Start commits with `feat:`, `fix:`, `chore:`, etc. as appropriate.

## Release Workflow
1. Bump version in `manifest.json`, `package.json` and `package.lock` - keep in sync
2. Run `npm run buildAndSign`
3. Search for the new file name in `artifacts/` - it will be like `26ef20738e944938b388-X.Y.Z.xpi`
4. Add a new entry to `updates.json` using the new version and file name:
   ```json
   {
     "version": "X.Y.Z",
     "update_link": "https://raw.githubusercontent.com/DerFrenk/stash-copy-buttons/master/artifacts/[FILENAME].xpi"
   }
   ```
5. Git add the files and Commit: `Release: vX.Y.Z`
6. Ask me to verify and git push