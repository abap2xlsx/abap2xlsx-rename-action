# abap2xlsx-mirror-action
Mirror and rename abap2xlsx

Reuseable [GitHub Action](https://github.com/features/actions) for mirroring and renaming the abap2xlsx source to local repository

## Demo

see [abap2xlsx/abap2xlsx-mirror-action-demo](https://github.com/abap2xlsx/abap2xlsx-mirror-action-demo)

## Parameters

```yml
  patterns:
    description: 'Patterns'
    required: true
    default: '[{"type": "CLAS|INTF", "oldName": "z(.*)_excel", "newName": "y$1_ecb"},{"type": "DTEL|DOMA|TABL|TTYP", "oldName": "zexcel_", "newName": "yecb_"},{"type": "MSAG", "oldName": "zabap2xlsx", "newName": "yecb"}]'
  folder:
    description: 'Folder'
    required: true
    default: 'src/abap2xlsx'
```

## Usage

```yml
name: abap2xlsx-mirror

on:
  workflow_dispatch:

permissions:
  contents: write  # for peter-evans/create-pull-request to create branch
  pull-requests: write  # for peter-evans/create-pull-request to create a PR

jobs:
  mirror-mirror:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
    - uses: actions/checkout@v4
    - uses: abap2xlsx/abap2xlsx-rename-action@main
    - run: git status
    - name: Open PR
      uses: peter-evans/create-pull-request@v5
      with:
        title: "ABAP: abap2xlsx, automatic update"
        branch: automatic/abap2xlsx-update
        body: |
          Automatic update of abap2xlsx
```