![Publish Status](https://github.com/ether/ep_offline_edit/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_offline_edit/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_offline_edit/actions/workflows/test-and-release.yml)

# Allows you to see your document if you get disconnected from the Internet.

Also should speed up pad load times.

# Note: HTTPS required.

# Todo
  * Offline editing
  * i18n
  * Test Coverage

# License
Apache 2

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_offline_edit` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_offline_edit
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
