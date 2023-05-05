### Tеsts and linter status:
[![Actions Status](https://github.com/slowyan/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/slowyan/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/41d8e73542c2d0bc71b8/maintainability)](https://codeclimate.com/github/slowyan/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/41d8e73542c2d0bc71b8/test_coverage)](https://codeclimate.com/github/slowyan/frontend-project-46/test_coverage)
[![build](https://github.com/slowyan/frontend-project-46/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/slowyan/frontend-project-46/actions/workflows/check.yml)
## Description
Difference Calculator is a program that determines the difference between two data structures.

**Utility Features:**

- Support for different input formats: yaml, json.
- Generating a report in the form of plain text, stylish and json.
## System requirments
Node.js v18+
## Setup
```
git clone git@github.com:Savelyii/frontend-project-46.git
npm ci
npm link
```
# Displaying reference information about the utility
```
gendiff -h
```
## Usage
**The stylish format is used by default**
```
gendiff <filepath1> <filepath2>
```
**To select a format, use the -f flag and the format name**
```
gendiff -f plain <filepath1>, <filepath2>
```
```
gendiff -f json <filepath1>, <filepath2>
```
## Examples
**Differences between YML files in the default stylish format**
[![asciicast](https://asciinema.org/a/xHcKi0cP80t4cs4odgdckD7Q9.svg)](https://asciinema.org/a/xHcKi0cP80t4cs4odgdckD7Q9)
[![asciicast](https://asciinema.org/a/580259.svg)](https://asciinema.org/a/580259)
**Differences between yml and json files in the plain format.**
[![asciicast](https://asciinema.org/a/CZ89OwLahl1Ct2UJFGy9gkT5d.svg)](https://asciinema.org/a/CZ89OwLahl1Ct2UJFGy9gkT5d)