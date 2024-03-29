# SolVows

This project is for the blockchain application SolVows. It contains code for the Smart Contract, web-based dapp and NodeJS server. 

# Contributors
1. Rishita Shaw
2. Moinak Banerjee
3. Shaily Shekhar

# Preview

![Screenshot (28)](https://user-images.githubusercontent.com/75828535/131639258-53347e6c-59f4-4ac5-9051-f42e623a77da.png)
![Screenshot (29)](https://user-images.githubusercontent.com/75828535/131639270-3d042001-e0b8-4033-98cc-77f09667d45a.png)
![Screenshot (30)](https://user-images.githubusercontent.com/75828535/131639275-cf165097-e71f-4dfc-8b16-3fc32617f336.png)
![Screenshot (31)](https://user-images.githubusercontent.com/75828535/131639279-c2e6b57f-5fcd-423c-8043-9cd4720b5fcc.png)
![Screenshot (32)](https://user-images.githubusercontent.com/75828535/131639294-29584b26-145a-472f-9949-64a06c54fc43.png)
![Screenshot (33)](https://user-images.githubusercontent.com/75828535/131639306-89d1ec54-a654-47f2-bcdd-362f98931b3d.png)
![Screenshot (34)](https://user-images.githubusercontent.com/75828535/131639314-85b133d4-dea1-4fd3-93ba-26c3ecc96645.png)
![Screenshot (35)](https://user-images.githubusercontent.com/75828535/131639327-78e32ab1-d77b-41b3-80cf-c0c95e850e25.png)


# Pre-requisites

In order to develop and build "My Dapp," the following pre-requisites must be installed:

* [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing Javascript)
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))
* [Solana CLI Tools](https://docs.solana.com/cli/install-solana-cli-tools)
* Rust (see "Dependency Guides" at the end for help installing) 
### Dependency Checklist 
```bash
$ node --version
$ npm --version
$ rustup --version
$ rustc --version
$ cargo --version
$ solana --version
```

### Windows Users

Before you proceed with installation, it's important to note that many blockchain libraries either don't work or generate errors on Windows. If you try installation and can't get the startup scripts to completion, this may be the problem. In that case, it's best to install and run DappStarter using Windows Subsystem for Linux (WSL). Here's a [guide to help you install WSL](https://docs.decentology.com/guides/windows-subsystem-for-linux-wsl).

Blockchains known to require WSL: Solana
# Installation

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn` This will fetch all required dependencies. The process will take 1-3 minutes and while it is in progress you can move on to the next step.

# Yarn Errors

You might see failures related to the `node-gyp` package when Yarn installs dependencies.
These failures occur because the node-gyp package requires certain additional build tools
to be installed on your computer. Follow the [instructions](https://www.npmjs.com/package/node-gyp) for adding build tools and then try running `yarn` again.

# Build, Deploy and Test
Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn start` This will run all the dev scripts in each project package.json.

The first time you run `yarn start` there are a fair number of Rust libraries that are
downloaded and pre-compiled. As a result, it may be take from 5-10 mins. before the
dapp is compiled and launched the first time. On subsequent compilations, the build
time will only be a few seconds.

## File Locations
Here are the locations of some important files:
* Program Code: [packages/dapplib/programs/src/lib.rs](packages/dapplib/programs/src/lib.rs)
* Dapp Library: [packages/dapplib/src/dapp-lib.js](packages/dapplib/src/dapp-lib.js)
* Solana Wrapper: [packages/dapplib/src/solana.js](packages/dapplib/src/solana.js) 
* Blockchain Interactions: [packages/dapplib/src/blockchain.js](packages/dapplib/src/blockchain.js)
* Data Layouts: [packages/dapplib/src/scripts/layouts.js](packages/dapplib/src/scripts/layouts.js)
* Deploy Script: [packages/dapplib/src/scripts/deploy.js](packages/dapplib/src/scripts/deploy.js)


To view your dapp, open your browser to http://localhost:5000 for the DappStarter Workspace.


## Dependency Guides

This section contains installation guides for common dev environments. 

### Rust

(Source: Solana)
We suggest that you install Rust using the 'rustup' tool. Rustup will install
the latest version of Rust, Cargo, and the other binaries.

Follow the instructions at [Installing Rust](https://www.rust-lang.org/tools/install).

For Mac users, Homebrew is also an option.  The Mac Homebrew command is `brew install rustup` and then
`rustup-init`. See [Mac Setup](https://sourabhbajaj.com/mac-setup/Rust/) &
[Installing Rust](https://www.rust-lang.org/tools/install) for more details.

After installation, you should have `rustc`, `cargo`, & `rustup`. You should
also have `~/.cargo/bin` in your PATH environment variable.

