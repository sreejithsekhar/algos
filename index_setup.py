#!/usr/bin/env python3
"""Set up an existing algo-solutions folder for Obsidian pattern-indexing.

Non-destructive. For every code file it finds, it creates a sidecar
<name>.md next to it (only if one doesn't already exist), then ensures a
Patterns/ folder and an index note exist.

Usage:
    python index_setup.py /path/to/your/algo/folder
"""
import re
import sys
from pathlib import Path

CODE_EXTS = {".py", ".java", ".js", ".ts", ".cpp", ".cc", ".c", ".go", ".rs", ".kt"}

SIDECAR_TEMPLATE = """---
tags:
  - problem
pattern: 
difficulty: 
status: todo
source: "{code_file}"
---

# {title}

> [!info] Solution code
> [[{code_file}]]

## Problem
_paste or summarise the prompt_

## Intuition
_the reframe that makes it click_

## Trigger
_what feature in the prompt should ping this pattern next time you see it_
"""

MOC_NAME = "_Algo Index.md"
MOC_BODY = """---
tags:
  - moc
---

# Algo Index

Pattern-first index over the solution files in this folder. Each problem note
carries a `pattern` property linking it to its technique under `Patterns/`.
The tables below rebuild themselves (Dataview plugin required).

## All problems by pattern
```dataview
table pattern as Pattern, difficulty as Difficulty, status as Status
from #problem
sort pattern asc
```

## Not yet indexed (no pattern set)
```dataview
list
from #problem
where !pattern
```

> [!note] Workflow
> 1. Open a problem note, fill in `pattern:` (e.g. `"[[Two Pointers]]"`), the intuition, and the trigger.
> 2. The first time you use a pattern, create `Patterns/<name>.md` holding its invariant + trigger phrase.
> 3. Don't reorganise files — links and the `pattern` property do the indexing, not folders.
"""


def title_from(name: str) -> str:
    stem = Path(name).stem
    stem = re.sub(r"[_\-]+", " ", stem)              # snake / kebab -> spaces
    stem = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", " ", stem)  # camelCase -> spaces
    return stem.strip().title()


def main() -> None:
    if len(sys.argv) < 2:
        print("usage: python index_setup.py /path/to/algo/folder")
        sys.exit(1)

    root = Path(sys.argv[1]).expanduser().resolve()
    if not root.is_dir():
        print(f"not a directory: {root}")
        sys.exit(1)

    created, skipped, code_count = [], 0, 0
    for path in sorted(root.rglob("*")):
        if path.is_file() and path.suffix.lower() in CODE_EXTS:
            code_count += 1
            sidecar = path.with_suffix(".md")
            if sidecar.exists():
                skipped += 1
                continue
            sidecar.write_text(
                SIDECAR_TEMPLATE.format(
                    title=title_from(path.name), code_file=path.name
                )
            )
            created.append(sidecar.relative_to(root).as_posix())

    (root / "Patterns").mkdir(exist_ok=True)
    moc = root / MOC_NAME
    if not moc.exists():
        moc.write_text(MOC_BODY)

    print(f"scanned {code_count} code files under {root}")
    print(f"created {len(created)} sidecar notes, skipped {skipped} existing")
    for c in created:
        print("  +", c)
    print("ensured Patterns/ and", MOC_NAME)


if __name__ == "__main__":
    main()
