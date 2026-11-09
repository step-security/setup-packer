[![StepSecurity Maintained Action](https://raw.githubusercontent.com/step-security/maintained-actions-assets/main/assets/maintained-action-banner.png)](https://docs.stepsecurity.io/actions/stepsecurity-maintained-actions)

# setup-packer

[![Builds, tests & co](https://github.com/step-security/setup-packer/actions/workflows/main.yml/badge.svg)](https://github.com/step-security/setup-packer/actions)

Set up and cache the Packer CLI.

## Roadmap

This action aims to provide an OS-neutral interface. And will not add features
that only work on one operating system or manipulate the Packer CLI itself.

## Usage

Currently, the semantic versioning style does not support to specify the version
of the packer itself. ​If you want to use a version other than the latest one,
be sure to specify the exact version.

### Example workflow

```yml
name: Packer

on:
  - pull_request
  - push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout tree
        uses: actions/checkout@v4

      - name: Use latest Packer
        uses: step-security/setup-packer@v3

      # or

      - name: Use latest Packer
        uses: step-security/setup-packer@v3
        with:
          packer-version: 1.6.5

      - name: Build image from template
        run: packer build TEMPLATE
```

### ​How to specify the version of the action itself

There is a point that is particularly easy to misunderstand. It's where you
specify the version of the action _itself_.

```yml
- name: Use latest Packer
  uses: step-security/setup-packer@v3
  #                                   ^^^
```

## Inputs

- `github-token`: The API token for the action to get the latest release of
  Packer from GitHub API (default `${{ github.token }}`)
- `packer-version`: The version to use (default `latest`)
