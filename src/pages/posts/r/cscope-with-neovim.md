---
title: "How to use cscope with Neovim Lua Config"
slug: "cscope-nvim-lua-config"
publishDate: 2023-03-28
description: "It is a basic tutorial about using cscope inside of neovim 0.5.0 and later."
author: "matdexir"
# image:
#   url: "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg"
#   alt: "The Astro logo with the word One."
tags: ["neovim", "lua", "cscope"]
# layout: "../../layouts/BlogLayout.astro"
---

# How to use `cscope` with `Neovim`

> NOTE: This tutorial assumes that you already know how to do basic neovim config with lua.

[cscope](https://cscope.sourceforge.net/) is a tool for browsing source code. It has been made with UNIX philosophy in mind i.e "Do one thing and Do it right". In a nutshell, it allows searching for:

- references to a specific symbol
- global definitions
- calling functions
- callee functions
- string and RegEx
- file

It is a rather mature tool that you can think of it as a `grep` for codebases.

## Why cscope over a more modern tool like LSP(Language Server Protocol)?

I personally use an LSP wherever I can. It is quite a revolutionary tech for programmers. The advanced features that it allows such as:

- Go to definitions
- Find references
- Completion
- Rename
- Format/Refactor

All of the above with a solid semantic analysis tools is everything a mordern programmer would need.

However it is not suitable for more mature codebases since you may experience performance issues as well as the lsp unable to find definitions/declarations. With cscope you run it once in a blue moon and it builds a database of the symbols inside the codebase that you can accesss without major startup overhead.

## Let's get to it!

For this tutorial, I will use the recommanded keymaps of `cscope` team. However feel free to change it to your liking.

```lua
vim.api.nvim_set_keymap("n", "<C-\\>s", ":cs find s <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>g", ":cs find g <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>t", ":cs find t <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>e", ":cs find e <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>f", ":cs find f <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>i", ":cs find i <C-R>=expand('<cword>')<CR><CR>")
vim.api.nvim_set_keymap("n", "<C-\\>d", ":cs find d <C-R>=expand('<cword>')<CR><CR>")
```

There you go!

For more, you can refer the the [cscope documentation](https://cscope.sourceforge.net/).
