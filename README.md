# Bevy n(3)-body-problem

## Install

- `wasm32-unknown-unknown` should be already installed by `rust-toolchain.toml`, but if you encounter some problem, run:
```bash
rustup target add wasm32-unknown-unknown
```

- `wasm-bindgen`
```bash
cargo install wasm-bindgen-cli
```

## Build

```bash
cargo build --release --target wasm32-unknown-unknown
wasm-bindgen --out-dir www/src/assets/simulation --target web ./target/wasm32-unknown-unknown/release/simulation.wasm
```